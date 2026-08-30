import { useLexicon } from 'src/Custom/Lexicon'
import { Page } from 'src/components/pages/_App/interfaces'
import { JsonLd } from 'src/components/seo/JsonLd'
import { createWebSite } from 'src/components/seo/JsonLd/helpers'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { MainPageLovable } from 'src/Custom/lovable/v1/src/pages/MainPage'
import { mainpageLexicon } from './lexicon'

export const MainPageCustom: Page = ({ siteOrigin }) => {
  const { t } = useLexicon(mainpageLexicon)

  const siteTitle = t('seo.title')
  const description = t('seo.description')

  return (
    <>
      {siteTitle && (
        <SeoHeaders
          title={siteTitle}
          description={description}
          canonical={'/'}
          siteOrigin={siteOrigin}
        />
      )}
      {siteOrigin && (
        <JsonLd
          data={createWebSite({
            name: siteTitle || '',
            description,
            url: siteOrigin,
          })}
        />
      )}

      <MainPageLovable />
    </>
  )
}
