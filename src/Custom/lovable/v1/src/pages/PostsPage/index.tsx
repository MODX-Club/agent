import Link from 'next/link'
import {
  PostsPageWrapStyled,
  PostsHeaderStyled,
  PostsTitleStyled,
  PostsLeadStyled,
  PostsListStyled,
  PostCardStyled,
  postCardLinkClassName,
  PostCardImageStyled,
  PostCardBodyStyled,
  PostCardTitleStyled,
  PostCardIntroStyled,
  PostsEmptyStyled,
} from './styles'

import { LovableContainer } from '../../lovable-ui/LovableContainer'
import { PostFragment } from 'src/gql/generated'
import React from 'react'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'

export type LovablePostsPageProps = React.PropsWithChildren & {
  items: PostFragment[]
  title?: string
  lead?: string
}

export const LovablePostsPage: React.FC<LovablePostsPageProps> = ({
  items,
  title = 'Статьи',
  lead,
  children,
}) => {
  return (
    <PostsPageWrapStyled>
      <LovableContainer>
        <PostsHeaderStyled>
          <PostsTitleStyled>{title}</PostsTitleStyled>
          {lead && <PostsLeadStyled>{lead}</PostsLeadStyled>}
        </PostsHeaderStyled>

        {items.length === 0 ? (
          <PostsEmptyStyled>Статей пока нет.</PostsEmptyStyled>
        ) : (
          <PostsListStyled>
            {items.map((item) => (
              <PostCardStyled key={item.id}>
                <Link
                  href={`/posts/${item.id}`}
                  title={item.title ?? undefined}
                  className={postCardLinkClassName}
                >
                  {item.image && (
                    <PostCardImageStyled>
                      <img
                        src={getResizedImagePath({
                          path: item.image,
                          size: 'middle',
                        })}
                        alt={item.title ?? undefined}
                        loading="lazy"
                      />
                    </PostCardImageStyled>
                  )}
                  <PostCardBodyStyled>
                    <PostCardTitleStyled>{item.title}</PostCardTitleStyled>
                    <PostCardIntroStyled>
                      <p>{item.intro}</p>
                    </PostCardIntroStyled>
                  </PostCardBodyStyled>
                </Link>
              </PostCardStyled>
            ))}
          </PostsListStyled>
        )}

        {children}
      </LovableContainer>
    </PostsPageWrapStyled>
  )
}
