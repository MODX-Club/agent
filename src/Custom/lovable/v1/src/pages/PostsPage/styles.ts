import styled from 'styled-components'

export const PostsPageWrapStyled = styled.section`
  padding: ${({ theme }) => theme.lovableSpace.xxl} 0;
  background: ${({ theme }) => theme.lovableColor.paper};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xxxl} 0;
  }
`

export const PostsHeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.md};
  max-width: 760px;
  margin-bottom: ${({ theme }) => theme.lovableSpace.xl};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    margin-bottom: ${({ theme }) => theme.lovableSpace.xxl};
  }
`

export const PostsTitleStyled = styled.h1`
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

export const PostsLeadStyled = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.6;

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  }
`

export const PostsListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  /* display: grid;
  grid-template-columns: 1fr; */
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.lg};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const PostCardStyled = styled.li`
  background: ${({ theme }) => theme.lovableColor.surface};
  border: 1px solid ${({ theme }) => theme.lovableColor.border};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.lovableTransition.base};

  &:hover {
    border-color: ${({ theme }) => theme.lovableColor.borderStrong};
    box-shadow: ${({ theme }) => theme.lovableShadow.md};
    transform: translateY(-2px);
  }

  .lovable-post-card-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }
`

export const postCardLinkClassName = 'lovable-post-card-link'

export const PostCardImageStyled = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.lovableColor.surfaceAlt};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const PostCardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.lovableSpace.sm};
  padding: ${({ theme }) => theme.lovableSpace.lg};

  @media (min-width: ${({ theme }) => theme.lovableBreakpoint.tablet}) {
    padding: ${({ theme }) => theme.lovableSpace.xl};
  }
`

export const PostCardTitleStyled = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.lovableColor.text};
  font-size: ${({ theme }) => theme.lovableFont.sizeLg};
  font-weight: ${({ theme }) => theme.lovableFont.weightSemibold};
  line-height: 1.3;
`

export const PostCardIntroStyled = styled.div`
  color: ${({ theme }) => theme.lovableColor.textMuted};
  font-size: ${({ theme }) => theme.lovableFont.sizeMd};
  line-height: 1.55;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  p {
    margin: 0 0 ${({ theme }) => theme.lovableSpace.xs};
  }
`

export const PostsEmptyStyled = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.lovableSpace.xl};
  border: 1px dashed ${({ theme }) => theme.lovableColor.border};
  border-radius: ${({ theme }) => theme.lovableRadius.lg};
  background: ${({ theme }) => theme.lovableColor.surface};
  color: ${({ theme }) => theme.lovableColor.textMuted};
  text-align: center;
`
