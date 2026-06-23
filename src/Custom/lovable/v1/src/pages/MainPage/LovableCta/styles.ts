import styled from 'styled-components'

export const CtaCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.lovableSpace.xl};
  border-radius: ${({ theme }) => theme.lovableRadius.xl};
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(46, 107, 255, 0.35) 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(22, 163, 74, 0.25) 0%,
      transparent 50%
    ),
    ${({ theme }) => theme.lovableColor.dark};
  color: ${({ theme }) => theme.lovableColor.onDark};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.lg};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xxl};
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: ${({ theme }) => theme.lovableSpace.xxl};
    align-items: center;
  }
`

export const CtaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.md};
`

export const CtaEyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: ${({ theme }) =>
    `${theme.lovableSpace.xs} ${theme.lovableSpace.md}`};
  border-radius: ${({ theme }) => theme.lovableRadius.pill};
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.lovableColor.onDark};
  font-size: ${({ theme }) => theme.lovableFont.sizeXs};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

export const CtaTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.onDark};
  font-size: ${({ theme }) => theme.lovableFont.sizeXl};
  font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.size2xl};
  }
`

export const CtaDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.onDarkMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.6;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  }
`

export const CtaAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.lg};
  padding: ${({ theme }) => theme.lovableSpace.lg};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.lovableRadius.lg};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const CtaBullets = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.sm};
`

export const CtaBullet = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.lovableSpace.sm};
  color: ${({ theme }) => theme.lovableColor.onDark};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.5;

  &::before {
    content: '→';
    color: ${({ theme }) => theme.lovableColor.accent};
    font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  }
`

export const CtaActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.sm};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.lovableSpace.md};
  }
`

export const CtaNote = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.onDarkMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  line-height: 1.5;
`
