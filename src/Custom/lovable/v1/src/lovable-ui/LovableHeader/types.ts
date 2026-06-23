import type { LovableNavItem } from '../../lovable-context/mocks'

export interface LovableHeaderProps {
  brandName: string
  nav: LovableNavItem[]
  ctaLabel: string
  docsLabel?: string
  onNavigate?: (href: string) => void
  onCtaClick?: React.MouseEventHandler<HTMLButtonElement>
  onDocsClick?: () => void
  onLogoClick?: () => void
}
