import styled, { css } from 'styled-components'

/**
 * Общие стили для главной страницы.
 * Индивидуальные стили блоков лежат рядом с их компонентами.
 * Mobile-first: базовые правила — для мобилки, десктоп через @media (min-width).
 */

const sectionPadding = css`
  padding: ${({ theme }) =>
    `${theme.lovableSpace.xxl} 0 ${theme.lovableSpace.xxl}`};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) =>
      `${theme.lovableSpace.xxxl} 0 ${theme.lovableSpace.xxxl}`};
  }
`

export const PageSection = styled.section`
  ${sectionPadding};
  background: ${({ theme }) => theme.lovableColor.paper};
`

export const PageSectionAlt = styled.section`
  ${sectionPadding};
  background: ${({ theme }) => theme.lovableColor.surface};
`

export const PageSectionDark = styled.section`
  ${sectionPadding};
  background: ${({ theme }) => theme.lovableColor.dark};
  color: ${({ theme }) => theme.lovableColor.onDark};
`

export const SectionHeader = styled.header<{ $center?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.md};
  max-width: 760px;
  margin-bottom: ${({ theme }) => theme.lovableSpace.xl};
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
  ${({ $center }) =>
    $center &&
    css`
      margin-left: auto;
      margin-right: auto;
      align-items: center;
    `}

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    margin-bottom: ${({ theme }) => theme.lovableSpace.xxl};
  }
`

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.lovableSpace.xs};
  padding: ${({ theme }) =>
    `${theme.lovableSpace.xs} ${theme.lovableSpace.md}`};
  border-radius: ${({ theme }) => theme.lovableRadius.pill};
  background: ${({ theme }) => theme.lovableColor.primarySoft};
  color: ${({ theme }) => theme.lovableColor.primary};
  font-size: ${({ theme }) => theme.lovableFont.sizeXs};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  letter-spacing: 0.02em;
  text-transform: uppercase;
`

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeXl};
  font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.size2xl};
  }
`

export const SectionLead = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.6;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  }
`

/**
 * Базовая «карточка» для использования внутри блоков
 * (точечный тюнинг — в локальных стилях блоков).
 */
export const CardBase = styled.article`
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};
  padding: ${({ theme }) => theme.lovableSpace.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.sm};
  transition: ${({ theme }) => theme.lovableTransition.base};

  &:hover {
    border-color: ${({ theme }) => theme.lovableColor.borderStrong};
    box-shadow: ${({ theme }) => theme.lovableShadow.md};
  }

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  line-height: 1.3;
`

export const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.55;
`

export const GridAuto = styled.div`
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
