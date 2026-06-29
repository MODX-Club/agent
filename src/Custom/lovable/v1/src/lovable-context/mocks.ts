export interface LovableNavItem {
  id: string
  label: string
  href: string
}

export interface LovableFooterColumn {
  id: string
  title: string
  items: LovableNavItem[]
}

export interface LovableHeroBadge {
  id: string
  label: string
}

export interface LovableHeroMetric {
  id: string
  value: string
  label: string
}

export interface LovableHeroData {
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  primaryCta: string
  secondaryCta: string
  badges: LovableHeroBadge[]
  metrics: LovableHeroMetric[]
  imageAlt: string
}

export interface LovableProblemPoint {
  id: string
  title: string
  description: string
}

export interface LovableProblemData {
  eyebrow: string
  title: string
  lead: string
  points: LovableProblemPoint[]
}

export interface LovableProcessStep {
  id: string
  num: string
  title: string
  description: string
  marker: string
}

export interface LovableProcessData {
  eyebrow: string
  title: string
  lead: string
  steps: LovableProcessStep[]
  imageAlt: string
}

export interface LovableGuaranteeItem {
  id: string
  icon: string
  title: string
  description: string
}

export interface LovableGuaranteesData {
  eyebrow: string
  title: string
  lead: string
  items: LovableGuaranteeItem[]
}

export interface LovableTechGroup {
  id: string
  title: string
  description: string
  items: string[]
}

export interface LovableTechData {
  eyebrow: string
  title: string
  lead: string
  groups: LovableTechGroup[]
}

export interface LovableCtaData {
  eyebrow: string
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  note: string
  bullets: string[]
}

export interface LovableMockData {
  brand: {
    name: string
    tagline: string
  }
  nav: LovableNavItem[]
  ctaLabel: string
  docsLabel?: string
  hero: LovableHeroData
  problem: LovableProblemData
  process: LovableProcessData
  guarantees: LovableGuaranteesData
  tech: LovableTechData
  cta: LovableCtaData
  footer: {
    description: string
    columns: LovableFooterColumn[]
    copyright: string
  }
}

export const lovableMockData: LovableMockData = {
  brand: {
    name: 'modx.club',
    tagline:
      'Постепенный перенос и модернизация MODX-сайтов без остановки бизнеса.',
  },
  nav: [
    { id: 'how', label: 'Как это работает', href: '/#how' },
    { id: 'guarantees', label: 'Преимущества', href: '/#guarantees' },
    { id: 'stages', label: 'Этапы', href: '/#how' },
    { id: 'tech', label: 'Технологии', href: '/#tech' },
    { id: 'blog', label: 'Блог', href: '/posts' },
    // { id: 'cases', label: 'Кейсы', href: '/#cases' },
    { id: 'about', label: 'О Клубе', href: '/about' },
  ],
  ctaLabel: 'Связаться',
  // docsLabel: 'Документация',
  hero: {
    eyebrow: 'MODX → современная архитектура',
    title: 'Обновите MODX-сайт',
    titleAccent: 'без остановки бизнеса',
    description:
      'Постепенный и управляемый перенос вашего сайта на современный стек. Сохраняем SEO, контент и привычную админку — заменяем платформу по частям, с возможностью отката на каждом этапе.',
    primaryCta: 'Обсудить перенос',
    secondaryCta: 'Как это работает',
    badges: [
      { id: 'seo', label: 'Без потери SEO' },
      { id: 'rollback', label: 'Откат на любом этапе' },
      { id: 'uptime', label: 'Без простоев' },
    ],
    metrics: [
      { id: 'sites', value: '100+', label: 'MODX-проектов за плечами' },
      { id: 'uptime', value: '99.9%', label: 'аптайм при миграции' },
      { id: 'seo', value: '24/7', label: 'мониторинг и поддержка' },
    ],
    imageAlt:
      'Схема постепенного переноса сайта с MODX на современную архитектуру',
  },
  problem: {
    eyebrow: 'Боль текущего MODX',
    title: 'Сайт работает, но дальше развивать его сложно',
    lead: 'Знакомая картина: проект на MODX живёт годами, в нём накоплены данные, SEO и интеграции. Но любая правка превращается в риск, а полный переезд — в страх потерять трафик и продажи.',
    points: [
      {
        id: 'legacy',
        title: 'Устаревшие версии MODX и PHP',
        description:
          'Старый Evolution или ранний Revolution, неактуальный PHP, плагины, которые давно никто не обновляет.',
      },
      {
        id: 'fragile',
        title: 'Хрупкая вёрстка и сборка',
        description:
          'Шаблоны на чанках и сниппетах, ручная сборка ассетов, нет нормального dev-окружения и CI.',
      },
      {
        id: 'seo',
        title: 'Страх потерять SEO и трафик',
        description:
          'Переезд «с нуля» рушит URL, мета-теги и индексацию — бизнес теряет лиды на месяцы.',
      },
      {
        id: 'downtime',
        title: 'Нельзя останавливать продажи',
        description:
          'Сайт приносит выручку каждый день. Полная остановка ради переноса — не вариант.',
      },
    ],
  },
  process: {
    eyebrow: 'Как мы переносим',
    title: 'Пять управляемых шагов вместо одного большого «прыжка»',
    lead: 'Каждый этап — это отдельный, обратимый шаг. На любом из них можно остановиться, откатиться или пользоваться сайтом дальше — без потери результата уже сделанной работы.',
    steps: [
      {
        id: 'audit',
        num: '01',
        marker: 'Аудит',
        title: 'Аудит и карта переноса',
        description:
          'Изучаем текущий MODX-проект: версии, шаблоны, плагины, интеграции, структуру URL и SEO. Готовим карту рисков и пошаговый план.',
      },
      {
        id: 'containerize',
        num: '02',
        marker: 'Контейнеризация',
        title: 'Заворачиваем текущий сайт в Docker',
        description:
          'Поднимаем существующий MODX в контейнерах с фиксированными версиями PHP и БД. Добавляем dev-окружение, бэкапы и CI — без изменения функциональности.',
      },
      {
        id: 'frontend',
        num: '03',
        marker: 'Фронтенд',
        title: 'Параллельный современный фронтенд',
        description:
          'Поверх MODX подключаем новый фронтенд на современном стеке. MODX остаётся источником данных — фронт постепенно обновляется страница за страницей.',
      },
      {
        id: 'route',
        num: '04',
        marker: 'Маршрутизация',
        title: 'Постраничный переезд через edge-роутер',
        description:
          'Edge-роутер по URL решает: страницу отдаёт старый MODX или новая платформа. Переключаем разделы по одному, с контролем метрик и SEO.',
      },
      {
        id: 'replace',
        num: '05',
        marker: 'Замена ядра',
        title: 'Постепенная замена платформы',
        description:
          'Когда все ключевые разделы переведены, MODX выводится из-под нагрузки. Контент и админка переезжают в современный headless-стек.',
      },
    ],
    imageAlt: 'Схема пятиэтапного переноса MODX-сайта',
  },
  guarantees: {
    eyebrow: 'Гарантии',
    title: 'Безопасность бизнеса встроена в процесс',
    lead: 'Мы не «переделываем сайт». Мы выстраиваем процесс, в котором ошибка одного шага не ломает всё остальное.',
    items: [
      {
        id: 'uptime',
        icon: '⚡',
        title: 'Работа без простоев',
        description:
          'Сайт остаётся в онлайне на каждом шаге. Все изменения выкатываются через стенды и постепенный переключатель трафика.',
      },
      {
        id: 'seo',
        icon: '🔍',
        title: 'Сохранение SEO и URL',
        description:
          'Структура URL, мета-теги, sitemap и микроразметка переносятся 1:1. Редиректы и канонические ссылки — под контролем.',
      },
      {
        id: 'rollback',
        icon: '↩︎',
        title: 'Откат на любом этапе',
        description:
          'Каждый шаг изолирован: версии в git, инфраструктура в коде, переключение трафика обратимо за минуты.',
      },
      {
        id: 'transparency',
        icon: '◎',
        title: 'Прозрачный процесс',
        description:
          'План, задачи и метрики переноса открыты. Вы видите, что и зачем меняется на каждом шаге.',
      },
      {
        id: 'content',
        icon: '✎',
        title: 'Знакомая работа с контентом',
        description:
          'Редакторы продолжают работать в привычной админке, пока мы переводим её на современный headless-инструмент.',
      },
      {
        id: 'data',
        icon: '⛁',
        title: 'Сохранность данных',
        description:
          'Регулярные бэкапы БД и файлов, миграции под контролем версий, никаких разовых ручных «правок прямо в проде».',
      },
    ],
  },
  tech: {
    eyebrow: 'Технологии',
    title: 'Современный стек, но без религии вокруг него',
    lead: 'Мы подбираем инструменты под задачи переноса, а не наоборот. Стек ниже — типовой набор, который мы используем чаще всего.',
    groups: [
      {
        id: 'infra',
        title: 'Инфраструктура',
        description:
          'Изолированные окружения и предсказуемые выкаты для текущего MODX и новой платформы.',
        items: ['Docker', 'Docker Compose', 'Nginx / Traefik'],
      },
      {
        id: 'frontend',
        title: 'Фронтенд',
        description:
          'Новый слой поверх MODX: быстрый, SEO-дружелюбный, с постраничным контролем.',
        items: ['React', 'Next.js', 'Apollo-Client', 'TypeScript'],
      },
      {
        id: 'backend',
        title: 'Бэкенд и контент',
        description:
          'Постепенный уход от монолита MODX к headless-источнику данных.',
        items: ['Node.js', 'REST / GraphQL API', 'Headless CMS', 'PostgreSQL'],
      },
      {
        id: 'ops',
        title: 'Наблюдаемость',
        description: 'Контролируем переезд по метрикам, а не «на глаз».',
        items: [
          'Метрики аптайма',
          'Логи запросов',
          'Мониторинг SEO',
          'A/B по URL',
        ],
      },
    ],
  },
  cta: {
    eyebrow: 'Следующий шаг',
    title: 'Начните с аудита — без обязательств перенести всё сразу',
    description:
      'Покажем карту переноса именно вашего MODX-проекта: что менять в первую очередь, что можно оставить, где основные риски и сколько займёт каждый шаг.',
    primaryCta: 'Запросить аудит',
    secondaryCta: 'Скачать план переноса',
    note: 'Ответим в течение одного рабочего дня. NDA — по запросу.',
    bullets: [
      'Карта рисков по текущему MODX',
      'Пошаговый план переноса под ваш бизнес',
      'Оценка сроков и стоимости каждого этапа',
    ],
  },
  footer: {
    description:
      'Управляемая модернизация сайтов на MODX: контейнеризация, параллельный фронтенд, постепенная замена платформы без простоев и потери SEO.',
    columns: [
      {
        id: 'product',
        title: 'Продукт',
        items: [
          { id: 'how', label: 'Как это работает', href: '/#how' },
          { id: 'stages', label: 'Этапы переноса', href: '/#how' },
          { id: 'tech', label: 'Технологии', href: '/#tech' },
          { id: 'guarantees', label: 'Гарантии', href: '/#guarantees' },
        ],
      },
      // {
      //   id: 'company',
      //   title: 'Компания',
      //   items: [
      //     // { id: 'about', label: 'О нас', href: '/#about' },
      //     { id: 'cases', label: 'Кейсы', href: '/#cases' },
      //     { id: 'contacts', label: 'Контакты', href: '/#contacts' },
      //   ],
      // },
      {
        id: 'resources',
        title: 'Ресурсы',
        items: [
          // { id: 'docs', label: 'Документация', href: '/#docs' },
          // { id: 'plan', label: 'План переноса', href: '/#plan' },
          // { id: 'faq', label: 'FAQ', href: '/#faq' },
          { id: 'blog', label: 'Блог', href: '/posts' },
          { id: 'about', label: 'О Клубе', href: '/about' },
        ],
      },
    ],
    copyright: '© 2013–2026 modx.club — Безопасная модернизация MODX-сайтов',
  },
}
