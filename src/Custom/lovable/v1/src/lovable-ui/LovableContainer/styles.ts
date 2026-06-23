import styled from 'styled-components'

export const LovableContainerStyled = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.lovableLayout.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.lovableLayout.contentPaddingX};
  padding-right: ${({ theme }) => theme.lovableLayout.contentPaddingX};

  @media (max-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding-left: ${({ theme }) => theme.lovableLayout.contentPaddingXMobile};
    padding-right: ${({ theme }) => theme.lovableLayout.contentPaddingXMobile};
  }
`
