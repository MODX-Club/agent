import { PostFragment } from 'src/gql/generated'
import { PostPage } from 'src/Custom/lovable/v1/src/pages/PostPage'

type PostPageViewProps = {
  post: PostFragment
}

export const PostPageView: React.FC<PostPageViewProps> = ({ post }) => {
  return <PostPage post={post} />
}
