import {
  LovableLogoMarkStyled,
  LovableLogoStyled,
  LovableLogoTextStyled,
} from './styles'
import type { LovableLogoProps } from './types'

export const LovableLogo: React.FC<LovableLogoProps> = ({ name, onClick }) => {
  const [head, ...rest] = name.split('.')
  const tail = rest.join('.')
  return (
    <LovableLogoStyled onClick={onClick} type="button" aria-label={name}>
      <LovableLogoMarkStyled>M</LovableLogoMarkStyled>
      <LovableLogoTextStyled>
        {head}
        {tail ? (
          <>
            .<em>{tail}</em>
          </>
        ) : null}
      </LovableLogoTextStyled>
    </LovableLogoStyled>
  )
}
