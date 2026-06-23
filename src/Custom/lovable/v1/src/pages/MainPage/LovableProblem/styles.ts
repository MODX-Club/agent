import styled from 'styled-components'

export const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.md};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.lovableSpace.lg};
  }
`

export const ProblemCard = styled.article`
  position: relative;
  padding: ${({ theme }) => theme.lovableSpace.lg};
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.sm};

  &::before {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.lovableSpace.lg};
    left: ${({ theme }) => theme.lovableSpace.lg};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lovableColor.danger};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.lovableColor.surfaceAlt};
  }

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const ProblemTitle = styled.h3`
  margin: 0;
  padding-left: ${({ theme }) => theme.lovableSpace.lg};
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  line-height: 1.3;
`

export const ProblemText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.55;
`
