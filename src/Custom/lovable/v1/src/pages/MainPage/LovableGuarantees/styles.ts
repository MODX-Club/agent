import styled from 'styled-components'

export const GuaranteesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.md};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.lovableSpace.lg};
  }

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const GuaranteeCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.sm};
  padding: ${({ theme }) => theme.lovableSpace.lg};
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};
  transition: ${({ theme }) => theme.lovableTransition.base};

  &:hover {
    border-color: ${({ theme }) => theme.lovableColor.primary};
    box-shadow: ${({ theme }) => theme.lovableShadow.md};
    transform: translateY(-2px);
  }

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const GuaranteeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.lovableRadius.md};
  background: ${({ theme }) => theme.lovableColor.primarySoft};
  color: ${({ theme }) => theme.lovableColor.primary};
  font-size: 22px;
  line-height: 1;
`

export const GuaranteeTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  line-height: 1.3;
`

export const GuaranteeText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.55;
`
