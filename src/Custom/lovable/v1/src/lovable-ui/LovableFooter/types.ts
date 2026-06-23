import type {
  LovableFooterColumn,
  LovableNavItem,
} from '../../lovable-context/mocks'

export interface LovableFooterProps {
  brandName: string
  description: string
  columns: LovableFooterColumn[]
  copyright: string
  onNavigate?: (href: string) => void
}

export type { LovableFooterColumn, LovableNavItem }
