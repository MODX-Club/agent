import styled from 'styled-components'

export const PostPageWrapStyled = styled.article`
  padding: ${({ theme }) => theme.lovableSpace.xl} 0
    ${({ theme }) => theme.lovableSpace.xxl};
  background: ${({ theme }) => theme.lovableColor.paper};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xxl} 0
      ${({ theme }) => theme.lovableSpace.xxxl};
  }
`

export const PostHeaderStyled = styled.header`
  max-width: 760px;
  margin: 0 auto ${({ theme }) => theme.lovableSpace.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.md};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    margin-bottom: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const PostTitleStyled = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeXl};
  font-weight: ${({ theme }) => theme.lovableFont.weightBold};
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.size2xl};
  }

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.desktop}) {
    font-size: ${({ theme }) => theme.lovableFont.size3xl};
  }
`

export const PostCoverStyled = styled.div`
  max-width: 960px;
  margin: 0 auto ${({ theme }) => theme.lovableSpace.xl};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.lovableColor.surfaceAlt};
  aspect-ratio: 16 / 9;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

/**
 * Контейнер для контента статьи, отрендеренного из маркдауна.
 * Стилизуем базовые HTML-элементы, которые отдаёт markdown-рендерер,
 * чтобы конечный компонент не знал ничего о стилях.
 */
export const PostContentStyled = styled.div`
  max-width: 760px;
  margin: 0 auto;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.7;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  }

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0 0 ${({ theme }) => theme.lovableSpace.md};
    color: ${({ theme }) => theme.lovableColor.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: ${({ theme }) => theme.lovableSpace.xl} 0
      ${({ theme }) => theme.lovableSpace.sm};
    color: ${({ theme }) => theme.lovableColor.text};
    font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: ${({ theme }) => theme.lovableFont.sizeXl};
    @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
      font-size: ${({ theme }) => theme.lovableFont.size2xl};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.lovableFont.sizeLg};
    @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
      font-size: ${({ theme }) => theme.lovableFont.sizeXl};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.lovableFont.sizeMd};
    @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
      font-size: ${({ theme }) => theme.lovableFont.sizeLg};
    }
  }

  h4,
  h5,
  h6 {
    font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  }

  a {
    color: ${({ theme }) => theme.lovableColor.primary};
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: ${({ theme }) => theme.lovableTransition.fast};

    &:hover {
      color: ${({ theme }) => theme.lovableColor.primaryHover};
    }
  }

  strong {
    font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  }

  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 ${({ theme }) => theme.lovableSpace.md};
    padding-left: ${({ theme }) => theme.lovableSpace.lg};

    li {
      margin-bottom: ${({ theme }) => theme.lovableSpace.xs};
    }

    li::marker {
      color: ${({ theme }) => theme.lovableColor.textSubtle};
    }
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin: ${({ theme }) => theme.lovableSpace.xs} 0 0;
  }

  blockquote {
    margin: ${({ theme }) => theme.lovableSpace.lg} 0;
    padding: ${({ theme }) =>
      `${theme.lovableSpace.md} ${theme.lovableSpace.lg}`};
    border-left: 3px solid ${({ theme }) => theme.lovableColor.primary};
    background: ${({ theme }) => theme.lovableColor.primarySoft};
    border-radius: ${({ theme }) => theme.lovableRadius.md};
    color: ${({ theme }) => theme.lovableColor.text};
    font-style: italic;

    p:last-child {
      margin-bottom: 0;
    }
  }

  code {
    font-family: ${({ theme }) => theme.lovableFont.mono};
    font-size: 0.9em;
    padding: 2px 6px;
    border-radius: ${({ theme }) => theme.lovableRadius.xs};
    background: ${({ theme }) => theme.lovableColor.surfaceAlt};
    color: ${({ theme }) => theme.lovableColor.text};
  }

  pre {
    margin: ${({ theme }) => theme.lovableSpace.lg} 0;
    padding: ${({ theme }) => theme.lovableSpace.lg};
    border-radius: ${({ theme }) => theme.lovableRadius.md};
    background: ${({ theme }) => theme.lovableColor.dark};
    color: ${({ theme }) => theme.lovableColor.onDark};
    overflow-x: auto;
    font-family: ${({ theme }) => theme.lovableFont.mono};
    font-size: ${({ theme }) => theme.lovableFont.sizeSm};
    line-height: 1.5;

    code {
      padding: 0;
      background: transparent;
      color: inherit;
      font-size: inherit;
    }
  }

  hr {
    margin: ${({ theme }) => theme.lovableSpace.xl} 0;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.lovableColor.border};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: ${({ theme }) => theme.lovableSpace.lg} auto;
    border-radius: ${({ theme }) => theme.lovableRadius.md};
  }

  table {
    width: 100%;
    margin: ${({ theme }) => theme.lovableSpace.lg} 0;
    border-collapse: collapse;
    font-size: ${({ theme }) => theme.lovableFont.sizeSm};

    th,
    td {
      padding: ${({ theme }) =>
        `${theme.lovableSpace.sm} ${theme.lovableSpace.md}`};
      border-bottom: 1px solid ${({ theme }) => theme.lovableColor.border};
      text-align: left;
    }

    th {
      font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
      color: ${({ theme }) => theme.lovableColor.text};
      background: ${({ theme }) => theme.lovableColor.surfaceAlt};
    }
  }
`
