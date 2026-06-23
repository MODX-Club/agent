import { Page } from 'src/components/pages/_App/interfaces'
import { JsonLd } from 'src/components/seo/JsonLd'
import { createWebSite } from 'src/components/seo/JsonLd/helpers'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { MainPageLovable } from 'src/Custom/lovable/v1/src/pages/MainPage'

export const MainPageCustom: Page = (props) => {
  const siteTitle =
    'Перенос и модернизация сайтов на MODX без остановки бизнеса | modx.club'

  const description =
    'Обновление и перенос сайтов на MODX без остановки работы. Контейнеризация в Docker, новый фронтенд поверх MODX, сохранение SEO, поэтапная миграция и полный переход на современную архитектуру с возможностью отката на каждом этапе.'

  const siteUrl = props.origin

  return (
    <>
      {siteTitle && <SeoHeaders title={siteTitle} />}
      {siteUrl && (
        <JsonLd
          data={createWebSite({
            name: siteTitle || '',
            description,
            url: siteUrl,
          })}
        />
      )}

      <MainPageLovable />
    </>
  )
}
