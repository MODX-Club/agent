import Link from 'next/link'
import styled, { css } from 'styled-components'

export const LovableHeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.lovableColor.border};
`

export const LovableHeaderInnerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  grid-template-areas:
    'logo locale cta burger'
    'nav nav nav nav';
  align-items: center;
  gap: ${({ theme }) => theme.lovableSpace.sm};
  padding: 10px 0;

  [data-area='logo'] {
    grid-area: logo;
  }
  [data-area='burger'] {
    grid-area: burger;
  }
  [data-area='nav'] {
    grid-area: nav;
  }
  [data-area='locale'] {
    grid-area: locale;
  }
  [data-area='cta'] {
    grid-area: cta;
  }

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    grid-template-columns: auto 1fr auto auto;
    grid-template-areas: 'logo nav locale cta';
  }
`

export const LovableHeaderNavStyled = styled.nav<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.xxs};
  padding: ${({ theme }) => theme.lovableSpace.sm} 0;
  border-top: 1px solid ${({ theme }) => theme.lovableColor.border};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.lovableSpace.xs};
    padding: 0;
    border-top: none;
  }
`

export const LovableHeaderNavItemStyled = styled(Link)`
  background: none;
  border: none;
  text-align: left;
  padding: ${({ theme }) =>
    `${theme.lovableSpace.sm} ${theme.lovableSpace.sm}`};
  border-radius: ${({ theme }) => theme.lovableRadius.sm};
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  font-weight: ${({ theme }) => theme.lovableFont.weightMedium};
  cursor: pointer;
  font-family: inherit;
  transition:
    color ${({ theme }) => theme.lovableTransition.fast},
    background ${({ theme }) => theme.lovableTransition.fast};

  &:hover {
    color: ${({ theme }) => theme.lovableColor.text};
    background: ${({ theme }) => theme.lovableColor.surfaceAlt};
  }

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.sizeSm};
    padding: ${({ theme }) =>
      `${theme.lovableSpace.xs} ${theme.lovableSpace.sm}`};
  }
`

const hiddenOnMobile = css`
  display: none;
  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    display: inline-flex;
  }
`

export const LovableHeaderDocsStyled = styled.button`
  ${hiddenOnMobile};
  background: none;
  border: none;
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeSm};
  font-weight: ${({ theme }) => theme.lovableFont.weightMedium};
  cursor: pointer;
  font-family: inherit;
  padding: ${({ theme }) =>
    `${theme.lovableSpace.xs} ${theme.lovableSpace.sm}`};
  border-radius: ${({ theme }) => theme.lovableRadius.sm};
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.lovableColor.text};
    background: ${({ theme }) => theme.lovableColor.surfaceAlt};
  }
`

export const LovableHeaderBurgerStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  background: ${({ theme }) => theme.lovableColor.surface};
  border-radius: ${({ theme }) => theme.lovableRadius.sm};
  color: ${({ theme }) => theme.lovableColor.text};
  cursor: pointer;
  font-size: 20px;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    display: none;
  }
`
