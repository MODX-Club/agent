import type { LovableHeroData } from '../../../lovable-context/mocks'

export interface LovableHeroProps {
  data: LovableHeroData
  imageSrc: string
  onPrimaryCta?: () => void
  onSecondaryCta?: () => void
}
