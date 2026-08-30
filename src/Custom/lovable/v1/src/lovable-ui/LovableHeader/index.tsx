import { useCallback, useState } from 'react'
import { FiMenu, FiSend, FiX } from 'react-icons/fi'
import { useLexicon } from 'src/Custom/Lexicon'
import { LovableButton } from '../LovableButton'
import { LovableContainer } from '../LovableContainer'
import { LovableLogo } from '../LovableLogo'
import {
  LovableHeaderBurgerStyled,
  LovableHeaderInnerStyled,
  LovableHeaderNavItemStyled,
  LovableHeaderNavStyled,
  LovableHeaderStyled,
} from './styles'
import { LovableNavItem } from '../LovableFooter/types'
import { lovableHeaderLexicon } from './lexicon'
import { LocaleSwitcher } from 'src/Custom/components/LocaleSwitcher'

interface LovableHeaderProps {
  brandName: string
  nav: LovableNavItem[]
  ctaLabel: string
  onCtaClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const LovableHeader: React.FC<LovableHeaderProps> = ({
  brandName,
  nav,
  ctaLabel,
  onCtaClick,
}) => {
  const [open, setOpen] = useState(false)
  const { t } = useLexicon(lovableHeaderLexicon)

  return (
    <LovableHeaderStyled>
      <LovableContainer>
        <LovableHeaderInnerStyled>
          <LovableLogo name={brandName} data-area="logo" />

          <LovableHeaderBurgerStyled
            onClick={useCallback(() => setOpen((v) => !v), [])}
            aria-label={
              open ? t('lovableHeader.closeMenu') : t('lovableHeader.openMenu')
            }
            aria-expanded={open}
            data-area="burger"
          >
            {open ? <FiX /> : <FiMenu />}
          </LovableHeaderBurgerStyled>

          <LovableHeaderNavStyled $open={open} data-area="nav">
            {nav.map((item) => (
              <LovableHeaderNavItemStyled key={item.id} href={item.href}>
                {item.label}
              </LovableHeaderNavItemStyled>
            ))}
          </LovableHeaderNavStyled>

          <LocaleSwitcher data-area="locale" />

          <div data-area="cta">
            <LovableButton
              variant="dark"
              size="sm"
              iconLeft={<FiSend />}
              onClick={onCtaClick}
              value={t('lovableHeader.contactQuestion')}
            >
              {ctaLabel}
            </LovableButton>
          </div>
        </LovableHeaderInnerStyled>
      </LovableContainer>
    </LovableHeaderStyled>
  )
}
