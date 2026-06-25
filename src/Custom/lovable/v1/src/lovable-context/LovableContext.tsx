import { createContext, useContext, type ReactNode } from 'react'
import type { LovableMockData } from './mocks'

export interface LovableContextValue {
  data: LovableMockData
  /**
   * @deprecated
   */
  onNavigate: (href: string) => void
  onPrimaryCta?: React.MouseEventHandler<HTMLButtonElement>
  onSecondaryCta: () => void
}

const LovableCtx = createContext<LovableContextValue | null>(null)

export interface LovableProviderProps {
  value: LovableContextValue
  children: ReactNode
}

export const LovableProvider: React.FC<LovableProviderProps> = ({
  value,
  children,
}) => {
  return <LovableCtx.Provider value={value}>{children}</LovableCtx.Provider>
}

export const useLovableContext = (): LovableContextValue => {
  const ctx = useContext(LovableCtx)
  if (!ctx) {
    throw new Error('useLovableContext must be used inside <LovableProvider>')
  }
  return ctx
}
