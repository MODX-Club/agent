import React, { useMemo } from 'react'
import {
  LovableContextValue,
  LovableProvider,
} from '../lovable/v1/src/lovable-context/LovableContext'
import { LovableGlobalStyles } from '../lovable/v1/src/lovable-ui/GlobalStyles'
import { LovableLayout } from '../lovable/v1/src/lovable-ui/LovableLayout'
import { ChatWidget } from 'src/components/Chat/ChatWidget'
import { useRouter } from 'next/router'
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'
import { LovableMockData } from '../lovable/v1/src/lovable-context/mocks'
import { useLocale } from '../Lexicon'
import { LayoutCustomMainStyled } from './styles'
import { lovableMockDataTranslations } from './lexicon'

export const LayoutCustom: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter()

  const locale = useLocale()

  const onClickCallback = useOpenChatWithMessage()

  const lovableMockData = useMemo<LovableMockData>(() => {
    return lovableMockDataTranslations[locale]
  }, [locale])

  const context = useMemo<LovableContextValue>(() => {
    return {
      onNavigate: (url: string) => router.push(url),
      onPrimaryCta: onClickCallback,
      // TODO Fix
      onSecondaryCta: () => console.error('onSecondaryCta'),
      data: lovableMockData,
    }
  }, [router, onClickCallback, lovableMockData])

  return (
    <LayoutCustomMainStyled>
      <LovableGlobalStyles />

      <LovableProvider value={context}>
        <LovableLayout>{children}</LovableLayout>
      </LovableProvider>

      <ChatWidget />
    </LayoutCustomMainStyled>
  )
}
