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
import { useBoolean } from 'src/hooks/useBoolean'
import { useAppContext } from 'src/components/AppContext'
import { PostEditForm } from 'src/components/pages/Posts/Post/Form'
import { Button } from 'src/ui-kit/Button'

export type LovablePostPageProps = {
  post: PostFragment
}

export const PostPage: React.FC<LovablePostPageProps> = ({ post }) => {
  const { title, image, content } = post

  const { user: currentUser } = useAppContext()

  const [inEditMode, startEditing, stopEditing] = useBoolean()

  const canEdit = currentUser && post.createdById === currentUser.id

  return inEditMode ? (
    <PostEditForm
      post={post}
      cancelHandler={stopEditing}
      parentId={undefined}
    />
  ) : (
    <PostPageWrapStyled>
      <LovableContainer>
        <PostHeaderStyled>
          <PostTitleStyled>{title}</PostTitleStyled>
          {canEdit && <Button onClick={startEditing}>Редактировать</Button>}
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
