import type { LovableCtaData } from '../../../lovable-context/mocks'

export interface LovableCtaProps {
  data: LovableCtaData
  onPrimaryCta?: React.MouseEventHandler<HTMLButtonElement>
  onSecondaryCta?: () => void
}
