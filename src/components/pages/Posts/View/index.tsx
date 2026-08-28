import { PostsPageViewProps } from './interfaces'

import { Pagination } from 'src/components/Pagination'
import { LovablePostsPage } from 'src/Custom/lovable/v1/src/pages/PostsPage'

export const PostsPageView: React.FC<PostsPageViewProps> = ({
  posts,
  count,
  page,
}) => {
  const totalPages = count ? Math.ceil(count / 10) : 0

  return (
    <LovablePostsPage items={posts}>
      <Pagination currentPage={page} totalPages={totalPages} />
    </LovablePostsPage>
  )
}
