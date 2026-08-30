import { Page } from '../_App/interfaces'
import { PostsPageView } from './View'
import { postsPageGetInitialProps } from './postsPageGetInitialProps'
import { usePostsConnectionQuery } from 'src/gql/generated'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { PostsPageProps } from './interfaces'
import { getPostsConnectionQueryVariables } from './helpers'
import { useAppContext } from 'src/components/AppContext'
import { useLexicon } from 'src/Custom/Lexicon'
import { postsLexicon } from './lexicon'

export const PostsPage: Page<PostsPageProps> = ({ page, siteOrigin }) => {
  const { user: currentUser } = useAppContext()
  const { t } = useLexicon(postsLexicon)

  const postsResponse = usePostsConnectionQuery({
    variables: getPostsConnectionQueryVariables({
      page,
      currentUser,
    }),
  })

  const posts = postsResponse.data?.posts
  const count = postsResponse.data?.postsCount ?? 0

  return (
    <>
      <SeoHeaders
        title={t('seo.title')}
        description={t('seo.description')}
        siteOrigin={siteOrigin}
        canonical={`/posts${page > 1 ? `?page=${page}` : ''}`}
      />
      <PostsPageView posts={posts ?? []} count={count} page={page} />
    </>
  )
}

PostsPage.getInitialProps = postsPageGetInitialProps
