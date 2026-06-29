import styled from 'styled-components'

export const AboutPageCustomStyled = styled.div``

export const AboutSection = styled.section`
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

export const AboutContainer = styled.div`
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

export const AboutHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.xl};
  align-items: start;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    grid-template-columns: 2fr 1fr;
    gap: ${({ theme }) => theme.lovableSpace.xxl};
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.lg};
  order: 2;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    order: 1;
  }
`

export const AboutTitle = styled.h1`
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

export const AboutImageWrap = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.lovableRadius.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  box-shadow: ${({ theme }) => theme.lovableShadow.lg};
  order: 1;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    order: 2;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export const AboutTextBlock = styled.div`
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.7;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  }

  a {
    color: ${({ theme }) => theme.lovableColor.primary};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.lovableFont.weightMedium};
    transition: color ${({ theme }) => theme.lovableTransition.fast};

    &:hover {
      color: ${({ theme }) => theme.lovableColor.primaryHover};
      text-decoration: underline;
    }
  }
`

export const AboutSubtitle = styled.h2`
  margin: ${({ theme }) =>
    `${theme.lovableSpace.xl} 0 ${theme.lovableSpace.md}`};
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeXl};
  font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.size2xl};
  }
`

export const AboutSubtitle3 = styled.h3`
  margin: ${({ theme }) =>
    `${theme.lovableSpace.lg} 0 ${theme.lovableSpace.sm}`};
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  line-height: 1.3;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.sizeXl};
  }
`

export const AboutFullWidthSection = styled.section`
  padding: ${({ theme }) => `${theme.lovableSpace.xxl} 0`};
  background: ${({ theme }) => theme.lovableColor.surface};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => `${theme.lovableSpace.xxxl} 0`};
  }
`

export const AboutCaseSection = styled.div`
  margin: ${({ theme }) => `${theme.lovableSpace.xl} 0`};
  padding: ${({ theme }) => theme.lovableSpace.lg};
  background: ${({ theme }) => theme.lovableColor.paper};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    margin: ${({ theme }) => `${theme.lovableSpace.xxl} 0`};
    padding: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const AboutCaseGrid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.lg};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const AboutCaseItem = styled.a`
  display: block;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.lovableRadius.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  box-shadow: ${({ theme }) => theme.lovableShadow.md};
  transition: all ${({ theme }) => theme.lovableTransition.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.lovableShadow.lg};
    transform: translateY(-4px);
  }
`

export const AboutCaseImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AboutCaseLabel = styled.div`
  padding: ${({ theme }) => theme.lovableSpace.md};
  text-align: center;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  font-weight: ${({ theme }) => theme.lovableFont.weightMedium};
`
