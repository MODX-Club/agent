import styled from 'styled-components'

export const LovableLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.lovableColor.paper};
`

export const LovableLayoutMainStyled = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`
