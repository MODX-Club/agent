import styled from 'styled-components'

export const HeroSection = styled.section`
  background:
    radial-gradient(
      circle at 0% 0%,
      ${({ theme }) => theme.lovableColor.primarySoft} 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at 100% 100%,
      ${({ theme }) => theme.lovableColor.accentSoft} 0%,
      transparent 50%
    ),
    ${({ theme }) => theme.lovableColor.paper};
  padding: ${({ theme }) =>
    `${theme.lovableSpace.xxl} 0 ${theme.lovableSpace.xxl}`};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) =>
      `${theme.lovableSpace.xxxl} 0 ${theme.lovableSpace.xxxl}`};
  }
`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.xl};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: ${({ theme }) => theme.lovableSpace.xxl};
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.lg};
`

export const HeroEyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.lovableSpace.xs};
  padding: ${({ theme }) =>
    `${theme.lovableSpace.xs} ${theme.lovableSpace.md}`};
  border-radius: ${({ theme }) => theme.lovableRadius.pill};
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  color: ${({ theme }) => theme.lovableColor.primary};
  font-size: ${({ theme }) => theme.lovableFont.sizeXs};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lovableColor.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.lovableColor.accentSoft};
  }
`

export const HeroTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.size2xl};
  font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.size3xl};
  }
`

export const HeroTitleAccent = styled.span`
  display: block;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.lovableColor.primary} 0%,
    ${({ theme }) => theme.lovableColor.accent} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export const HeroDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.6;
  max-width: 560px;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  }
`

export const HeroBadges = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.lovableSpace.xs};
`

export const HeroBadge = styled.li`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.lovableSpace.xs};
  padding: ${({ theme }) =>
    `${theme.lovableSpace.xs} ${theme.lovableSpace.md}`};
  border-radius: ${({ theme }) => theme.lovableRadius.pill};
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  font-weight: ${({ theme }) => theme.lovableFont.weightMedium};

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.lovableColor.accent};
    font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  }
`

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.sm};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.lovableSpace.md};
  }
`

export const HeroMetrics = styled.dl`
  margin: 0;
  padding: ${({ theme }) => `${theme.lovableSpace.lg} 0 0`};
  border-top: 1px solid ${({ theme }) => theme.lovableColor.border};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.md};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.mobile}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({ theme }) => theme.lovableSpace.lg};
  }
`

export const HeroMetricItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.xxs};
`

export const HeroMetricValue = styled.dt`
  font-size: ${({ theme }) => theme.lovableFont.sizeXl};
  font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  color: ${({ theme }) => theme.lovableColor.text};
  letter-spacing: -0.01em;
`

export const HeroMetricLabel = styled.dd`
  margin: 0;
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  color: ${({ theme }) => theme.lovableColor.textMuted};
  line-height: 1.4;
`

export const HeroMediaWrap = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.lovableRadius.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  box-shadow: ${({ theme }) => theme.lovableShadow.lg};
  aspect-ratio: 4 / 3;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    aspect-ratio: 5 / 4;
  }
`

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
