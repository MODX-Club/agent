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

export const AboutPageCustom: Page = (props) => {
  const siteTitle = 'О Клубе — MODX.Club'

  const description =
    'Николай Ланец (Fi1osof) — основатель MODX-Клуба. Помогаю перевести MODX-сайты на современные технологии без потери SEO и данных.'

  const siteUrl = props.origin
  const pageUrl = `${siteUrl}/about`

  const onClickHandler = useOpenChatWithMessage()

  return (
    <>
      <SeoHeaders title={siteTitle} description={description} />

      {siteUrl && (
        <JsonLd
          data={createWebPage({
            name: siteTitle,
            url: pageUrl,
            description,
            image: `${siteUrl}${iAm.src}`,
            isPartOf: {
              '@type': 'WebSite',
              name: 'MODX.Club',
              url: siteUrl,
            },
          })}
        />
      )}

      {siteUrl && (
        <JsonLd
          data={createPerson({
            name: 'Николай Ланец',
            url: pageUrl,
            image: `${siteUrl}${iAm.src}`,
          })}
        />
      )}

      {siteUrl && (
        <JsonLd
          data={createBreadcrumbList({
            origin: siteUrl,
            items: [{ name: 'Главная', url: '/' }, { name: 'О Клубе' }],
          })}
        />
      )}

      <AboutPageCustomStyled>
        <AboutSection>
          <AboutContainer>
            <AboutHeroGrid>
              <AboutContent>
                <AboutTitle>О Клубе</AboutTitle>
                <AboutTextBlock>
                  MODX-Клуб появился 17 марта 2013 года (во всяком случае этой
                  датой датируется первое{' '}
                  <a
                    href="https://freecode.academy/blog/club/3.html"
                    target="_blank"
                  >
                    вступительное слово
                  </a>
                  ) и изначально имел цель быть полезным и специалистам, и
                  конечным клиентам. И в первые годы вполне успешно с этим
                  справлялся. Но позже MODX-рынок стал сильно проседать, а сам
                  MODX как движок для сайтов почти перестал развиваться. Лично
                  мне стало очень очень скучно и я ушел на более широкий рынок
                  разработки - javascript. Вот здесь{' '}
                  <a
                    href="https://freecode.academy/topics/vse,-net-bolshe-vashego-modx-kluba.html"
                    target="_blank"
                  >
                    короткая заметка
                  </a>{' '}
                  по этому поводу. В 2019 году MODX-официально был закрыт.
                </AboutTextBlock>
                <AboutTextBlock>
                  Тогда сайт переехал на prisma-cms.com (домен уже потерян), а
                  позже уже на{' '}
                  <a href="https://freecode.academy" target="_blank">
                    freecode.academy
                  </a>
                  , где до сих пор весь старый контент и находится. То есть все
                  публикации, все комментарии со времен запуска MODX-Клуба
                  никуда не потерялись и там и находятся. Freecode.Academy
                  предполагался как площадка, где начинающие специалисты могут
                  изучать не только MODX, но и в целом веб-технологии, включая
                  HTML, CSS, javascript. Но на сегодня активности практически
                  нету. Связываю это со сменой современных подходов к разработке
                  в целом - stackoverflow заменил многих. А сейчас еще и LLM
                  набирает обороты и он в корне переписал все правила игры. По
                  этой причине freecode.academy останется просто как архив
                  старых заметок. В остальном же на нем можно поставить крест.
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
            <AboutSubtitle>Перезапуск MODX-Клуба</AboutSubtitle>
            <AboutTextBlock>
              В настоящий момент Клуб перезапущен в новом качестве и в составе
              только одного человека - меня. Меня зовут Николай Ланец, ранее на
              MODX-рынке хорошо известен под никнеймом Fi1osof, и хотя в 2019
              году я официально завязал с MODX, все же я не завязывал ни на день
              с программировал, и продолжал развиваться во многих направлениях,
              включая JavaScript, TypeScript, React, GraphQL. А с начала 2025
              года я очень плотно занимаюсь ИИ-технологиями, в том числе написал
              и развиваю свой движок{' '}
              <a href="https://github.com/haih-net/agent" target="_blank">
                haih-agent
              </a>
              . По сути это основа для создания индивидуальных сайтов на самых
              современных технологиях, с уникальным ИИ-агентом на борту.
              Собственно, на нем я сейчас делаю и свои личные сайты, и сайты
              клиентов.
            </AboutTextBlock>

            <AboutSubtitle3>Цели Клуба</AboutSubtitle3>
            <AboutTextBlock>
              Обновленный Клуб не ставит своей целью кого-либо научить.
              Единственная целесообразная на сегодня цель - обеспечить
              безболезненный переезд старых сайтов с MODX на более современные
              технологии. Не смотря на то, что MODX-сообщество еще как-то
              существует, держится оно на том, что конечные клиенты пока еще не
              все понимают, что под обновляемой красивой оберткой MODX-а
              находится все та же старая начинка. Технически MODX практически не
              развивается. Чтобы убедиться в этом, достаточно зайти в
              официальный репозиторий MODX Revolution{' '}
              <a
                href="https://github.com/modxcms/revolution/pulse?period=monthly"
                target="_blank"
              >
                https://github.com/modxcms/revolution/pulse?period=monthly
              </a>{' '}
              и посмотреть статистику. Усредненная картина примерно такая: штук
              5 мерж-реквестов и парочка закрытых тикетов за месяц.
            </AboutTextBlock>
            <AboutTextBlock>
              Какие-то дополнения конечно пишутся немного для MODX, но они все
              всё равно создаются поверх старых рельс, так что ничего особо
              современного и эффективного там все равно не может получиться.
              Нельзя на старую телегу поставить новый двигатель и сразу выехать
              успешно на гоночную трассу. При этом многие опытные
              MODX-специалисты уже покинули этот рынок, а новые специалисты если
              и появляются, многим не хватает опыта создавать что-то новое. В
              лучшем случае они умеют прикрутить готовые компоненты. Я считаю,
              что это все губительно. То есть вместо того, чтобы освоить новые
              технологии и предложить клиентам новый уровень услуг, они
              продолжают вводить клиентов в заблуждение, что кроме MODX им
              больше ничего не нужно и на нем получится все сделать.
            </AboutTextBlock>
            <AboutTextBlock>
              Скорее всего я не смогу убедить в этом тех, кто думает еще только
              сделать себе сайт на MODX, но я могу помочь тем, кто уже сделал и
              разочаровался.
              <AboutCaseSection>
                <AboutSubtitle3>Пример работы</AboutSubtitle3>
                <AboutTextBlock>
                  Сравните сами: сайт до и после переезда с MODX.
                </AboutTextBlock>
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
                      Было{' '}
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
                      Стало <b>https://happybaby2000.ru</b>
                    </AboutCaseLabel>
                  </AboutCaseItem>
                </AboutCaseGrid>
              </AboutCaseSection>
              Если у вас есть работающий MODX-сайт и вы хотите получить его
              более современную версию,{' '}
              <Button
                onClick={onClickHandler}
                value={
                  'Расскажи подробней про ваши услуги по обновлению MODX-сайтов'
                }
              >
                спросите у моего агента
              </Button>{' '}
              как это можно сделать.
            </AboutTextBlock>
          </AboutContainer>
        </AboutFullWidthSection>
      </AboutPageCustomStyled>
    </>
  )
}
