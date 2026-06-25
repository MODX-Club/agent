import React from 'react'
import { LovableContainer } from '../../lovable-ui/LovableContainer'
import {
  PostPageWrapStyled,
  PostHeaderStyled,
  PostTitleStyled,
  PostCoverStyled,
  PostContentStyled,
} from './styles'
import { PostFragment } from 'src/gql/generated'
import { Markdown } from 'src/components/Markdown'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'

export type LovablePostPageProps = {
  post: PostFragment
}

export const PostPage: React.FC<LovablePostPageProps> = ({ post }) => {
  const { title, image, content } = post

  return (
    <PostPageWrapStyled>
      <LovableContainer>
        <PostHeaderStyled>
          <PostTitleStyled>{title}</PostTitleStyled>
        </PostHeaderStyled>

        {image && (
          <PostCoverStyled>
            <img
              src={getResizedImagePath({
                path: image,
                size: 'middle',
              })}
              alt={title ?? undefined}
            />
          </PostCoverStyled>
        )}

        {content && (
          <PostContentStyled>
            <Markdown>{content}</Markdown>
          </PostContentStyled>
        )}
      </LovableContainer>
    </PostPageWrapStyled>
  )
}
