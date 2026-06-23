import type { LovableCtaData } from '../../../lovable-context/mocks'

export interface LovableCtaProps {
  data: LovableCtaData
  onPrimaryCta?: () => void
  onSecondaryCta?: () => void
}
