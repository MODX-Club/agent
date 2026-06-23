import styled from 'styled-components'

export const LovableFooterStyled = styled.footer`
  background: ${({ theme }) => theme.lovableColor.dark};
  color: ${({ theme }) => theme.lovableColor.onDark};
  padding-top: ${({ theme }) => theme.lovableSpace.xxxl};
  padding-bottom: ${({ theme }) => theme.lovableSpace.xl};
`

export const LovableFooterGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: ${({ theme }) => theme.lovableSpace.xxl};

  @media (max-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.lovableSpace.xl};
  }

  @media (max-width: ${({ theme }) => theme.lovableBreakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const LovableFooterBrandStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.md};
`

export const LovableFooterBrandNameStyled = styled.div`
  font-size: ${({ theme }) => theme.lovableFont.sizeXl};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  color: #fff;
`

export const LovableFooterDescriptionStyled = styled.p`
  color: ${({ theme }) => theme.lovableColor.onDarkMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  max-width: 320px;
`

export const LovableFooterColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.md};
`

export const LovableFooterColumnTitleStyled = styled.div`
  color: #fff;
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

export const LovableFooterLinkStyled = styled.button`
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.lovableColor.onDarkMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  cursor: pointer;
  font-family: inherit;
  transition: color ${({ theme }) => theme.lovableTransition.fast};

  &:hover {
    color: #fff;
  }
`

export const LovableFooterColumnListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.xs};
`

export const LovableFooterBottomStyled = styled.div`
  margin-top: ${({ theme }) => theme.lovableSpace.xxl};
  padding-top: ${({ theme }) => theme.lovableSpace.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.lovableSpace.md};
  color: ${({ theme }) => theme.lovableColor.onDarkMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeXs};

  @media (max-width: ${({ theme }) => theme.lovableBreakpoint.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
