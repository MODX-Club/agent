import styled, { css } from 'styled-components'
import type { LovableButtonSize, LovableButtonVariant } from './types'

const sizeStyles = {
  sm: css`
    height: 34px;
    padding: 0 ${({ theme }) => theme.lovableSpace.md};
    font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  `,
  md: css`
    height: 42px;
    padding: 0 ${({ theme }) => theme.lovableSpace.lg};
    font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  `,
  lg: css`
    height: 52px;
    padding: 0 ${({ theme }) => theme.lovableSpace.xl};
    font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  `,
}

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.lovableColor.primary};
    color: #fff;
    box-shadow: ${({ theme }) => theme.lovableShadow.sm};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.lovableColor.primaryHover};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.lovableColor.surface};
    color: ${({ theme }) => theme.lovableColor.text};
    border-color: ${({ theme }) => theme.lovableColor.border};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.lovableColor.surfaceAlt};
      border-color: ${({ theme }) => theme.lovableColor.borderStrong};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.lovableColor.text};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.lovableColor.surfaceAlt};
    }
  `,
  dark: css`
    background: ${({ theme }) => theme.lovableColor.dark};
    color: ${({ theme }) => theme.lovableColor.onDark};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.lovableColor.darkAlt};
    }
  `,
}

export const LovableButtonStyled = styled.button<{
  $variant: LovableButtonVariant
  $size: LovableButtonSize
  $fullWidth: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.lovableSpace.xs};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.lovableRadius.md};
  font-weight: ${({ theme }) => theme.lovableFont.weightMedium};
  cursor: pointer;
  white-space: nowrap;
  transition:
    background ${({ theme }) => theme.lovableTransition.fast},
    border-color ${({ theme }) => theme.lovableTransition.fast},
    color ${({ theme }) => theme.lovableTransition.fast};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`

export const LovableButtonIconStyled = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.1em;
`
