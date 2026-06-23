/* eslint-disable no-console */
import React, { useMemo } from 'react'
import {
  LovableContextValue,
  LovableProvider,
} from '../lovable/v1/src/lovable-context/LovableContext'
import { LovableGlobalStyles } from '../lovable/v1/src/lovable-ui/GlobalStyles'
import { LovableLayout } from '../lovable/v1/src/lovable-ui/LovableLayout'
import { ChatWidget } from 'src/components/Chat/ChatWidget'
import { useRouter } from 'next/router'
import { lovableMockData } from '../lovable/v1/src/lovable-context/mocks'
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'

export const LayoutCustom: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter()

  const onClickCallback = useOpenChatWithMessage()

  const context = useMemo<LovableContextValue>(() => {
    return {
      onNavigate: (url: string) => router.push(url),
      onPrimaryCta: onClickCallback,
      onSecondaryCta: () => console.log('onSecondaryCta'),
      data: lovableMockData,
    }
  }, [router, onClickCallback])

  return (
    <>
      <LovableGlobalStyles />

      <LovableProvider value={context}>
        <LovableLayout>{children}</LovableLayout>
      </LovableProvider>

      <ChatWidget />
    </>
  )
}
