import { LovableContainerStyled } from './styles'
import type { LovableContainerProps } from './types'

export const LovableContainer: React.FC<LovableContainerProps> = ({
  children,
  ...other
}) => {
  return <LovableContainerStyled {...other}>{children}</LovableContainerStyled>
}
