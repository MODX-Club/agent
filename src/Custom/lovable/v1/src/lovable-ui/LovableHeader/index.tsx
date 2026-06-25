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
import { LovableNavItem } from '../LovableFooter/types'

interface LovableHeaderProps {
  brandName: string
  nav: LovableNavItem[]
  ctaLabel: string
  docsLabel?: string
  onCtaClick?: React.MouseEventHandler<HTMLButtonElement>
  onDocsClick?: () => void
}

export const LovableHeader: React.FC<LovableHeaderProps> = ({
  brandName,
  nav,
  ctaLabel,
  docsLabel,
  onCtaClick,
  onDocsClick,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <LovableHeaderStyled>
      <LovableContainer>
        <LovableHeaderInnerStyled>
          <LovableLogo name={brandName} />
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
              <LovableHeaderNavItemStyled key={item.id} href={item.href}>
                {item.label}
              </LovableHeaderNavItemStyled>
            ))}
          </LovableHeaderNavStyled>
        </LovableHeaderInnerStyled>
      </LovableContainer>
    </LovableHeaderStyled>
  )
}
