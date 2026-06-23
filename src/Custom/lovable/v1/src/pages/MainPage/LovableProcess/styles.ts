import styled from 'styled-components'

export const ProcessLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.lovableSpace.xl};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.desktop}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: ${({ theme }) => theme.lovableSpace.xxl};
    align-items: start;
  }
`

export const StepsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.md};
`

export const StepItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.lovableSpace.md};
  padding: ${({ theme }) => theme.lovableSpace.lg};
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xl};
    gap: ${({ theme }) => theme.lovableSpace.lg};
  }
`

export const StepNum = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 44px;
  padding: 0 ${({ theme }) => theme.lovableSpace.sm};
  border-radius: ${({ theme }) => theme.lovableRadius.md};
  background: ${({ theme }) => theme.lovableColor.primarySoft};
  color: ${({ theme }) => theme.lovableColor.primary};
  font-family: ${({ theme }) => theme.lovableFont.mono};
  font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
`

export const StepBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.xs};
  min-width: 0;
`

export const StepMarker = styled.span`
  font-size: ${({ theme }) => theme.lovableFont.sizeXs};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.lovableColor.accent};
`

export const StepTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  line-height: 1.3;
`

export const StepText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.55;
`

export const ProcessMedia = styled.div`
  position: sticky;
  top: ${({ theme }) => theme.lovableSpace.lg};
  border-radius: ${({ theme }) => theme.lovableRadius.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  background: ${({ theme }) => theme.lovableColor.surface};
  box-shadow: ${({ theme }) => theme.lovableShadow.md};
  aspect-ratio: 4 / 3;
`

export const ProcessImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
