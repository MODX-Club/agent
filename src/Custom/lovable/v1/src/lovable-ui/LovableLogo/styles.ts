import styled from 'styled-components'

export const LovableLogoStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.lovableSpace.xs};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.lovableColor.text};
  font-family: ${({ theme }) => theme.lovableFont.family};
  font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  letter-spacing: -0.01em;
`

export const LovableLogoMarkStyled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.lovableRadius.sm};
  background: ${({ theme }) => theme.lovableColor.dark};
  color: #fff;
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  font-weight: ${({ theme }) => theme.lovableFont.weightBold};
`

export const LovableLogoTextStyled = styled.span`
  & > em {
    font-style: normal;
    color: ${({ theme }) => theme.lovableColor.primary};
  }
`
