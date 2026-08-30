import { useLexicon } from 'src/Custom/Lexicon'
import { LovableContainer } from '../LovableContainer'
import {
  LovableFooterBottomStyled,
  LovableFooterBrandNameStyled,
  LovableFooterBrandStyled,
  LovableFooterColumnListStyled,
  LovableFooterColumnStyled,
  LovableFooterColumnTitleStyled,
  LovableFooterDescriptionStyled,
  LovableFooterGridStyled,
  LovableFooterLinkStyled,
  LovableFooterStyled,
} from './styles'
import { LovableFooterColumn } from './types'
import { lovableFooterLexicon } from './lexicon'
import Link from 'next/link'

export interface LovableFooterProps {
  brandName: string
  description: string
  columns: LovableFooterColumn[]
  copyright: string
}

export const LovableFooter: React.FC<LovableFooterProps> = ({
  brandName,
  description,
  columns,
  copyright,
}) => {
  const { t } = useLexicon(lovableFooterLexicon)

  return (
    <LovableFooterStyled>
      <LovableContainer>
        <LovableFooterGridStyled>
          <LovableFooterBrandStyled>
            <LovableFooterBrandNameStyled>
              {brandName}
            </LovableFooterBrandNameStyled>
            <LovableFooterDescriptionStyled>
              {description}
            </LovableFooterDescriptionStyled>
          </LovableFooterBrandStyled>
          {columns.map((col) => (
            <LovableFooterColumnStyled key={col.id}>
              <LovableFooterColumnTitleStyled>
                {col.title}
              </LovableFooterColumnTitleStyled>
              <LovableFooterColumnListStyled>
                {col.items.map((it) => (
                  <LovableFooterLinkStyled key={it.id} href={it.href}>
                    {it.label}
                  </LovableFooterLinkStyled>
                ))}
              </LovableFooterColumnListStyled>
            </LovableFooterColumnStyled>
          ))}
        </LovableFooterGridStyled>
        <LovableFooterBottomStyled>
          <span>{copyright}</span>
          <div>
            <span>{t('lovableFooter.madeFor')}</span>{' '}
            <Link target="_blank" href="https://fi1osof.ru">
              By 𝕱
            </Link>
          </div>
        </LovableFooterBottomStyled>
      </LovableContainer>
    </LovableFooterStyled>
  )
}
