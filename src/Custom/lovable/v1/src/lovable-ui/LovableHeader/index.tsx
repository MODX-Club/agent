import { useCallback, useState } from 'react'
import { FiMenu, FiSend, FiX } from 'react-icons/fi'
import { LovableButton } from '../LovableButton'
import { LovableContainer } from '../LovableContainer'
import { LovableLogo } from '../LovableLogo'
import {
  LovableHeaderActionsStyled,
  LovableHeaderBurgerStyled,
  LovableHeaderDocsStyled,
  LovableHeaderInnerStyled,
  LovableHeaderNavItemStyled,
  LovableHeaderNavStyled,
  LovableHeaderStyled,
} from './styles'
import type { LovableHeaderProps } from './types'

export const LovableHeader: React.FC<LovableHeaderProps> = ({
  brandName,
  nav,
  ctaLabel,
  docsLabel,
  onNavigate,
  onCtaClick,
  onDocsClick,
  onLogoClick,
}) => {
  const [open, setOpen] = useState(false)

  const handleNavigate = (href: string) => {
    setOpen(false)
    onNavigate?.(href)
  }

  return (
    <LovableHeaderStyled>
      <LovableContainer>
        <LovableHeaderInnerStyled>
          <LovableLogo name={brandName} onClick={onLogoClick} />
          <LovableHeaderActionsStyled>
            {docsLabel && (
              <LovableHeaderDocsStyled onClick={onDocsClick}>
                {docsLabel}
              </LovableHeaderDocsStyled>
            )}
            <LovableButton
              variant="dark"
              size="sm"
              iconLeft={<FiSend />}
              onClick={onCtaClick}
              value={'Как мне связаться с администрацией сайта?'}
            >
              {ctaLabel}
            </LovableButton>
            <LovableHeaderBurgerStyled
              onClick={useCallback(() => setOpen((v) => !v), [])}
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={open}
            >
              {open ? <FiX /> : <FiMenu />}
            </LovableHeaderBurgerStyled>
          </LovableHeaderActionsStyled>
          <LovableHeaderNavStyled $open={open}>
            {nav.map((item) => (
              <LovableHeaderNavItemStyled
                key={item.id}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => handleNavigate(item.href)}
              >
                {item.label}
              </LovableHeaderNavItemStyled>
            ))}
          </LovableHeaderNavStyled>
        </LovableHeaderInnerStyled>
      </LovableContainer>
    </LovableHeaderStyled>
  )
}
