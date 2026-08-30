import { useLexicon } from 'src/Custom/Lexicon'
import { Page } from 'src/components/pages/_App/interfaces'
import { JsonLd } from 'src/components/seo/JsonLd'
import {
  createWebPage,
  createPerson,
  createBreadcrumbList,
} from 'src/components/seo/JsonLd/helpers'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import {
  AboutPageCustomStyled,
  AboutSection,
  AboutContainer,
  AboutHeroGrid,
  AboutContent,
  AboutTitle,
  AboutImageWrap,
  AboutTextBlock,
  AboutSubtitle,
  AboutSubtitle3,
  AboutFullWidthSection,
  AboutCaseSection,
  AboutCaseGrid,
  AboutCaseItem,
  AboutCaseImage,
  AboutCaseLabel,
} from './styles'

import iAm from './img/i-am.jpg'
import happybaby2000Old from './img/happybaby2000-old.png'
import happybaby2000New from './img/happybaby2000-new.png'

import Image from 'next/image'
import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'
import { Button } from 'src/ui-kit/Button'
import { aboutLexicon } from './lexicon'

export const AboutPageCustom: Page = ({ siteOrigin }) => {
  const { t } = useLexicon(aboutLexicon)

  const siteTitle = t('about.seo.title')
  const description = t('about.seo.description')

  const pageUrl = `${siteOrigin}/about`

  const onClickHandler = useOpenChatWithMessage()

  return (
    <>
      <SeoHeaders
        title={siteTitle}
        description={description}
        canonical={'/about'}
        siteOrigin={siteOrigin}
      />

      {siteOrigin && (
        <JsonLd
          data={createWebPage({
            name: siteTitle,
            url: pageUrl,
            description,
            image: `${siteOrigin}${iAm.src}`,
            isPartOf: {
              '@type': 'WebSite',
              name: 'MODX.Club',
              url: siteOrigin,
            },
          })}
        />
      )}

      {siteOrigin && (
        <JsonLd
          data={createPerson({
            name: 'Николай Ланец',
            url: pageUrl,
            image: `${siteOrigin}${iAm.src}`,
          })}
        />
      )}

      {siteOrigin && (
        <JsonLd
          data={createBreadcrumbList({
            siteOrigin,
            items: [
              { name: t('about.breadcrumb.home'), url: '/' },
              { name: t('about.breadcrumb.about') },
            ],
          })}
        />
      )}

      <AboutPageCustomStyled>
        <AboutSection>
          <AboutContainer>
            <AboutHeroGrid>
              <AboutContent>
                <AboutTitle>{t('about.title')}</AboutTitle>
                <AboutTextBlock>
                  {t('about.history.text1')}
                  <a
                    href="https://freecode.academy/blog/club/3.html"
                    target="_blank"
                  >
                    {t('about.history.link1')}
                  </a>
                  {') ' + t('about.history.text1Part2')}
                  <a
                    href="https://freecode.academy/topics/vse,-net-bolshe-vashego-modx-kluba.html"
                    target="_blank"
                  >
                    {t('about.history.link2')}
                  </a>
                  {' ' + t('about.history.text1Part3')}
                </AboutTextBlock>
                <AboutTextBlock>
                  {t('about.history.text2')}
                  <a href="https://freecode.academy" target="_blank">
                    freecode.academy
                  </a>
                  {', ' + t('about.history.text2Part2')}
                </AboutTextBlock>
              </AboutContent>
              <AboutImageWrap>
                <Image
                  src={iAm.src}
                  alt="Nikolai Lanets aka Fi1osof"
                  width={iAm.width}
                  height={iAm.height}
                />
              </AboutImageWrap>
            </AboutHeroGrid>
          </AboutContainer>
        </AboutSection>

        <AboutFullWidthSection>
          <AboutContainer>
            <AboutSubtitle>{t('about.restart.subtitle')}</AboutSubtitle>
            <AboutTextBlock>
              {t('about.restart.text')}
              <a href="https://github.com/haih-net/agent" target="_blank">
                {t('about.restart.link')}
              </a>
              {t('about.restart.text2')}
            </AboutTextBlock>

            <AboutSubtitle3>{t('about.goals.subtitle')}</AboutSubtitle3>
            <AboutTextBlock>{t('about.goals.text1')}</AboutTextBlock>
            <AboutTextBlock>{t('about.goals.text2')}</AboutTextBlock>
            <AboutTextBlock>
              {t('about.goals.text3')}
              <AboutCaseSection>
                <AboutSubtitle3>{t('about.example.subtitle')}</AboutSubtitle3>
                <AboutTextBlock>{t('about.example.text')}</AboutTextBlock>
                <AboutCaseGrid>
                  <AboutCaseItem
                    href="https://old.happybaby2000-ru.portfolio.fi1osof.ru/"
                    target="_blank"
                  >
                    <AboutCaseImage>
                      <Image
                        src={happybaby2000Old.src}
                        alt="Старая версия сайта happybaby2000.ru"
                        width={800}
                        height={450}
                      />
                    </AboutCaseImage>
                    <AboutCaseLabel>
                      {t('about.example.was')}{' '}
                      <b>https://old.happybaby2000-ru.portfolio.fi1osof.ru</b>
                    </AboutCaseLabel>
                  </AboutCaseItem>
                  <AboutCaseItem
                    href="https://happybaby2000.ru/"
                    target="_blank"
                  >
                    <AboutCaseImage>
                      <Image
                        src={happybaby2000New.src}
                        alt="Новая версия сайта happybaby2000.ru"
                        width={800}
                        height={450}
                      />
                    </AboutCaseImage>
                    <AboutCaseLabel>
                      {t('about.example.became')}{' '}
                      <b>https://happybaby2000.ru</b>
                    </AboutCaseLabel>
                  </AboutCaseItem>
                </AboutCaseGrid>
              </AboutCaseSection>
              {t('about.example.cta')}{' '}
              <Button
                onClick={onClickHandler}
                value={t('about.example.buttonValue')}
              >
                {t('about.example.buttonText')}
              </Button>{' '}
              {t('about.example.how')}
            </AboutTextBlock>
          </AboutContainer>
        </AboutFullWidthSection>
      </AboutPageCustomStyled>
    </>
  )
}
