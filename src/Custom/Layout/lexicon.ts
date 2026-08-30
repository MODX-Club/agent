import { Locale } from '../components/LocaleSwitcher/interfaces'
import { LovableMockData } from '../lovable/v1/src/lovable-context/mocks'

export const lovableMockDataTranslations: Record<Locale, LovableMockData> = {
  ru: {
    brand: {
      name: 'modx.club',
      tagline:
        'Постепенный перенос и модернизация MODX-сайтов без остановки бизнеса.',
    },
    nav: [
      // { id: 'how', label: 'Как это работает', href: '/#how' },
      // { id: 'guarantees', label: 'Преимущества', href: '/#guarantees' },
      // { id: 'stages', label: 'Этапы', href: '/#how' },
      // { id: 'tech', label: 'Технологии', href: '/#tech' },
      // { id: 'blog', label: 'Блог', href: '/posts' },
      // { id: 'cases', label: 'Кейсы', href: '/#cases' },
      { id: 'services', label: 'Услуги', href: '/services' },
      { id: 'concepts', label: 'База знаний', href: '/concepts' },
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
          items: [
            'Node.js',
            'REST / GraphQL API',
            'Headless CMS',
            'PostgreSQL',
          ],
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
      note: 'Ответим в течение одного рабочего дня.',
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
        {
          id: 'resources',
          title: 'Ресурсы',
          items: [
            { id: 'blog', label: 'Блог', href: '/posts' },
            { id: 'about', label: 'О Клубе', href: '/about' },
          ],
        },
      ],
      copyright: '© 2013–2026 modx.club — Безопасная модернизация MODX-сайтов',
    },
  },
  en: {
    brand: {
      name: 'modx.club',
      tagline:
        'Gradual migration and modernization of MODX sites without business interruption.',
    },
    nav: [
      // { id: 'how', label: 'How it works', href: '/#how' },
      // { id: 'guarantees', label: 'Advantages', href: '/#guarantees' },
      // { id: 'stages', label: 'Stages', href: '/#how' },
      // { id: 'tech', label: 'Technologies', href: '/#tech' },
      // { id: 'blog', label: 'Blog', href: '/posts' },
      // { id: 'cases', label: 'Cases', href: '/#cases' },
      { id: 'services', label: 'Services', href: '/services' },
      { id: 'concepts', label: 'Knowledge Base', href: '/concepts' },
      { id: 'about', label: 'About the Club', href: '/about' },
    ],
    ctaLabel: 'Contact',
    // docsLabel: 'Documentation',
    hero: {
      eyebrow: 'MODX → modern architecture',
      title: 'Update your MODX site',
      titleAccent: 'without business interruption',
      description:
        'Gradual and controlled migration of your site to a modern stack. We preserve SEO, content, and the familiar admin panel — we replace the platform in parts, with the ability to rollback at each stage.',
      primaryCta: 'Discuss migration',
      secondaryCta: 'How it works',
      badges: [
        { id: 'seo', label: 'Without SEO loss' },
        { id: 'rollback', label: 'Rollback at any stage' },
        { id: 'uptime', label: 'No downtime' },
      ],
      metrics: [
        {
          id: 'sites',
          value: '100+',
          label: 'MODX projects under our belt',
        },
        { id: 'uptime', value: '99.9%', label: 'uptime during migration' },
        { id: 'seo', value: '24/7', label: 'monitoring and support' },
      ],
      imageAlt:
        'Diagram of gradual site migration from MODX to modern architecture',
    },
    problem: {
      eyebrow: 'Current MODX pain',
      title: 'The site works, but further development is difficult',
      lead: 'A familiar picture: a MODX project has been running for years, with accumulated data, SEO, and integrations. But any edit becomes a risk, and a full migration becomes a fear of losing traffic and sales.',
      points: [
        {
          id: 'legacy',
          title: 'Outdated MODX and PHP versions',
          description:
            'Old Evolution or early Revolution, outdated PHP, plugins that no one has updated for a long time.',
        },
        {
          id: 'fragile',
          title: 'Fragile layout and build',
          description:
            'Templates on chunks and snippets, manual asset assembly, no normal dev environment and CI.',
        },
        {
          id: 'seo',
          title: 'Fear of losing SEO and traffic',
          description:
            'Migration "from scratch" destroys URLs, meta tags, and indexing — business loses leads for months.',
        },
        {
          id: 'downtime',
          title: 'Cannot stop sales',
          description:
            'The site brings revenue every day. Full stop for migration is not an option.',
        },
      ],
    },
    process: {
      eyebrow: 'How we migrate',
      title: 'Five controlled steps instead of one big "jump"',
      lead: 'Each stage is a separate, reversible step. At any of them, you can stop, rollback, or continue using the site — without losing the result of the work already done.',
      steps: [
        {
          id: 'audit',
          num: '01',
          marker: 'Audit',
          title: 'Audit and migration map',
          description:
            'We study the current MODX project: versions, templates, plugins, integrations, URL structure, and SEO. We prepare a risk map and a step-by-step plan.',
        },
        {
          id: 'containerize',
          num: '02',
          marker: 'Containerization',
          title: 'Wrap the current site in Docker',
          description:
            'We raise the existing MODX in containers with fixed PHP and DB versions. We add dev environment, backups, and CI — without changing functionality.',
        },
        {
          id: 'frontend',
          num: '03',
          marker: 'Frontend',
          title: 'Parallel modern frontend',
          description:
            'On top of MODX, we connect a new frontend on a modern stack. MODX remains the data source — the frontend is gradually updated page by page.',
        },
        {
          id: 'route',
          num: '04',
          marker: 'Routing',
          title: 'Page-by-page migration via edge router',
          description:
            'Edge router by URL decides: the page is served by the old MODX or the new platform. We switch sections one by one, with control of metrics and SEO.',
        },
        {
          id: 'replace',
          num: '05',
          marker: 'Core replacement',
          title: 'Gradual platform replacement',
          description:
            'When all key sections are migrated, MODX is taken out from under load. Content and admin panel move to a modern headless stack.',
        },
      ],
      imageAlt: 'Diagram of five-stage MODX site migration',
    },
    guarantees: {
      eyebrow: 'Guarantees',
      title: 'Business safety is built into the process',
      lead: 'We don\'t "redesign the site". We build a process where an error in one step doesn\'t break everything else.',
      items: [
        {
          id: 'uptime',
          icon: '⚡',
          title: 'Work without downtime',
          description:
            'The site remains online at every step. All changes are rolled out through stages and gradual traffic switcher.',
        },
        {
          id: 'seo',
          icon: '🔍',
          title: 'Preservation of SEO and URLs',
          description:
            'URL structure, meta tags, sitemap, and microdata are transferred 1:1. Redirects and canonical links are under control.',
        },
        {
          id: 'rollback',
          icon: '↩︎',
          title: 'Rollback at any stage',
          description:
            'Each step is isolated: versions in git, infrastructure in code, traffic switching is reversible in minutes.',
        },
        {
          id: 'transparency',
          icon: '◎',
          title: 'Transparent process',
          description:
            'The plan, tasks, and migration metrics are open. You see what and why changes at each step.',
        },
        {
          id: 'content',
          icon: '✎',
          title: 'Familiar content work',
          description:
            'Editors continue to work in the familiar admin panel while we migrate it to a modern headless tool.',
        },
        {
          id: 'data',
          icon: '⛁',
          title: 'Data safety',
          description:
            'Regular DB and file backups, version-controlled migrations, no one-time manual "fixes directly in prod".',
        },
      ],
    },
    tech: {
      eyebrow: 'Technologies',
      title: 'Modern stack, but without religion around it',
      lead: 'We select tools for migration tasks, not vice versa. The stack below is a typical set that we use most often.',
      groups: [
        {
          id: 'infra',
          title: 'Infrastructure',
          description:
            'Isolated environments and predictable deployments for the current MODX and the new platform.',
          items: ['Docker', 'Docker Compose', 'Nginx / Traefik'],
        },
        {
          id: 'frontend',
          title: 'Frontend',
          description:
            'New layer on top of MODX: fast, SEO-friendly, with page-by-page control.',
          items: ['React', 'Next.js', 'Apollo-Client', 'TypeScript'],
        },
        {
          id: 'backend',
          title: 'Backend and content',
          description:
            'Gradual departure from the MODX monolith to a headless data source.',
          items: [
            'Node.js',
            'REST / GraphQL API',
            'Headless CMS',
            'PostgreSQL',
          ],
        },
        {
          id: 'ops',
          title: 'Observability',
          description: 'We control migration by metrics, not "by eye".',
          items: [
            'Uptime metrics',
            'Request logs',
            'SEO monitoring',
            'A/B by URL',
          ],
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title:
        'Start with an audit — without obligation to migrate everything at once',
      description:
        'We will show the migration map of your specific MODX project: what to change first, what can be left, where the main risks are, and how long each step will take.',
      primaryCta: 'Request audit',
      secondaryCta: 'Download migration plan',
      note: 'We will respond within one business day.',
      bullets: [
        'Risk map for the current MODX',
        'Step-by-step migration plan for your business',
        'Estimation of timelines and costs for each stage',
      ],
    },
    footer: {
      description:
        'Managed modernization of MODX sites: containerization, parallel frontend, gradual platform replacement without downtime and SEO loss.',
      columns: [
        {
          id: 'product',
          title: 'Product',
          items: [
            { id: 'how', label: 'How it works', href: '/#how' },
            { id: 'stages', label: 'Migration stages', href: '/#how' },
            { id: 'tech', label: 'Technologies', href: '/#tech' },
            { id: 'guarantees', label: 'Guarantees', href: '/#guarantees' },
          ],
        },
        {
          id: 'resources',
          title: 'Resources',
          items: [
            { id: 'blog', label: 'Blog', href: '/posts' },
            { id: 'about', label: 'About the Club', href: '/about' },
          ],
        },
      ],
      copyright: '© 2013–2026 modx.club — Safe modernization of MODX sites',
    },
  },
}
