import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type LovableButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark'
export type LovableButtonSize = 'sm' | 'md' | 'lg'

export interface LovableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: LovableButtonVariant
  size?: LovableButtonSize
  iconLeft?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
}
