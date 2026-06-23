import styled from 'styled-components'

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.md};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.lovableSpace.lg};
  }

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.desktop}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

export const TechCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.md};
  padding: ${({ theme }) => theme.lovableSpace.lg};
  background: ${({ theme }) => theme.lovableColor.dark};
  color: ${({ theme }) => theme.lovableColor.onDark};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const TechTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.onDark};
  font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  line-height: 1.3;
`

export const TechDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.onDarkMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  line-height: 1.55;
`

export const TechList = styled.ul`
  list-style: none;
  margin: ${({ theme }) => `${theme.lovableSpace.xs} 0 0`};
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.lovableSpace.xs};
`

export const TechItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.lovableSpace.xxs} ${theme.lovableSpace.sm}`};
  border-radius: ${({ theme }) => theme.lovableRadius.pill};
  background: rgba(255, 255, 255, 0.06);
  color: ${({ theme }) => theme.lovableColor.onDark};
  font-family: ${({ theme }) => theme.lovableFont.mono};
  font-size: ${({ theme }) => theme.lovableFont.sizeXs};
`
