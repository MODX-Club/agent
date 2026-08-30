import {
  LovableLogoMarkStyled,
  LovableLogoStyled,
  LovableLogoTextStyled,
} from './styles'

interface LovableLogoProps {
  name: string
}

export const LovableLogo: React.FC<LovableLogoProps> = ({ name, ...other }) => {
  const [head, ...rest] = name.split('.')
  const tail = rest.join('.')
  return (
    <LovableLogoStyled type="button" aria-label={name} href={'/'} {...other}>
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
