import { Prisma } from '@prisma/client'
import { PrismaContext } from 'server/context/interfaces'
import {
  LLMChatMessageRole,
  LlmModel,
  LlmProvider,
} from 'server/llm/client/interfaces'
import { llmChatCompletionResolver } from 'server/schema/types/LLM/resolvers/chatCompletion'
import YAML from 'yaml'
import { FieldToTranslate, LangFields, langKey } from '../interfaces'
import { removeInvalidLinks } from 'server/schema/types/KBConcept/helpers/validateInternalLinks'

const MARKDOWN_FIELDS = ['intro', 'content']

async function mergeLangFields(
  existing: LangFields | null,
  parsed: LangFields,
  validUris: Set<string>,
): Promise<LangFields> {
  const result: LangFields = { ...existing }

  for (const [field, value] of Object.entries(parsed)) {
    if (!value) {
      continue
    }

    if (MARKDOWN_FIELDS.includes(field)) {
      const r = await removeInvalidLinks(value.trim(), validUris, true)
      if (r.content) {
        result[field] = r.content
      }
    } else {
      result[field] = value.trim()
    }
  }

  return result
}

export type BaseUpdateLangProps = {
  ctx: PrismaContext
  id: string
  existingLangs: Record<string, unknown>
  fieldsToTranslate: FieldToTranslate[]
  validUris: Set<string>
  targetLangs: langKey[]
  updateEntity: (id: string, data: Prisma.InputJsonValue) => Promise<void>
}

export async function baseUpdateLang({
  ctx,
  id,
  existingLangs,
  fieldsToTranslate,
  validUris,
  targetLangs,
  updateEntity,
}: BaseUpdateLangProps): Promise<true | null> {
  if (fieldsToTranslate.length === 0 || targetLangs.length === 0) {
    return null
  }

  const fieldsYaml = fieldsToTranslate
    .map(
      ({ field, value }) =>
        `${field}: |\n${value
          .split('\n')
          .map((line) => '  ' + line)
          .join('\n')}`,
    )
    .join('\n')

  const fieldNames = fieldsToTranslate.map((f) => f.field)

  const prompt = `# Role: Professional Translator

You are a professional translator specializing in technical documentation and web content.

## Task

Translate the following fields from Russian into the target languages listed below.

**CRITICAL: You must TRANSLATE the text, not transliterate it.**


## Source fields (in Russian):

${fieldsYaml}

## Target languages: ${targetLangs.join(', ')}

## Output format

Respond ONLY with valid YAML (no markdown code blocks, no explanations, just raw YAML):
${targetLangs
  .map(
    (lang) =>
      `${lang}:\n${fieldNames.map((f) => `  ${f}: |\n    translated ${f}`).join('\n')}`,
  )
  .join('\n')}

## Rules

1. **Translate, do not transliterate.** Convert meaning, not just letters.
2. Only include fields that were provided in the source.
3. Preserve all markdown and HTML formatting exactly.
4. Exception: Proper nouns, brand names, company names, and product names should be transliterated to Latin script`

  const chatResponse = await llmChatCompletionResolver(
    null,
    {
      input: {
        provider: LlmProvider.OpenRouter,
        messages: [
          {
            role: LLMChatMessageRole.user,
            content: prompt,
          },
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        model: LlmModel.GEMINI_3_5_FLASH_LITE as any,
      },
    },
    ctx,
  )

  const responseContent = chatResponse.choices?.[0]?.message?.content

  if (!responseContent) {
    throw new Error('Can not get llm response')
  }

  const parsed: Record<string, LangFields> = YAML.parse(responseContent)

  const updates: Record<string, LangFields> = {}

  for (const lang of targetLangs) {
    const parsedLang = parsed[lang]

    if (!parsedLang) {
      continue
    }

    const existing = existingLangs[lang] as LangFields | null

    await mergeLangFields(existing, parsedLang, validUris)
      .then((r) => {
        if (r) {
          updates[lang] = r
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  if (Object.keys(updates).length === 0) {
    return null
  }

  for (const [lang, data] of Object.entries(updates)) {
    await updateEntity(id, { [lang]: data } as Prisma.InputJsonValue)
  }

  return true
}
