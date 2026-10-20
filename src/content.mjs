// All site copy lives here. One object per language; the build script renders
// the same template for each. Keep keys in sync across languages.

export const shared = {
  name: 'Grigory Zhadko',
  domain: 'https://zhadko.com',
  email: 'gregzhadko@gmail.com',
  phone: '+34 625 996 180',
  phoneHref: 'tel:+34625996180',
  // Aviso legal (LSSI-CE art. 10).
  nie: 'Z1252766F',
  postal: '46026 Valencia, España',
  iae: '763',
  whatsapp: 'https://wa.me/34625996180',
  telegram: 'https://t.me/gregzhadko',
  telegramHandle: '@gregzhadko',
  profiles: [
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/grigoryzhadko/' },
    { id: 'upwork', label: 'Upwork', url: 'https://www.upwork.com/freelancers/~017f77bf2d1e14ac38' },
    { id: 'toptal', label: 'Toptal', url: 'https://www.toptal.com/developers/resume/grigory-zhadko' },
    { id: 'github', label: 'GitHub', url: 'https://github.com/gregzhadko' },
  ],
  stack: [
    ['C# / .NET 8–10', 'ASP.NET Core', 'EF Core', 'MediatR', 'Hangfire', 'gRPC / REST'],
    ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'],
    ['Kafka', 'RabbitMQ', 'AWS MSK', 'AWS SES'],
    ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GitHub Actions', 'nginx'],
  ],
  // Order and urls are shared; text is per language.
  experience: [
    { id: 'raritex', period: '2026 —', company: 'Raritex Trade · Sumsub', place: 'CY' },
    { id: 'deltatre', period: '2026', company: 'Ovyo · Deltatre', place: 'UK' },
    { id: 'altery', period: '2025 — 2026', company: 'Altery', place: 'UK' },
    { id: 'w7g', period: '2020 — 2025', company: 'W7G (SUITSME, FABU)', place: 'CY' },
    { id: 'tawasal', period: '2020', company: 'Tawasal SuperApp', place: 'AE' },
    { id: 'logican', period: '2018 — 2020', company: 'Logican Solutions', place: 'UK' },
    { id: 'epam', period: '2017 — 2018', company: 'EPAM Systems · Barclays', place: 'CZ' },
    { id: 'sateva', period: '2016 — 2017', company: 'SATEVA', place: 'AU' },
    { id: 'ten', period: '2015 — 2016', company: 'Top End Nurses', place: 'AU' },
    { id: 'slb', period: '2012 — 2015', company: 'Schlumberger', place: 'RU' },
    { id: 'dataeast', period: '2009 — 2012', company: 'Data East', place: 'RU' },
  ],
  projects: [
    {
      id: 'suitsme',
      title: 'SUITSME',
      tags: ['.NET', 'AWS', 'MongoDB', 'Redis', 'real-time'],
      links: [{ label: 'App Store', url: 'https://apps.apple.com/app/id1536929374' }],
    },
    {
      id: 'fabu',
      title: 'FABU',
      tags: ['.NET', 'AWS', 'mobile backend'],
      links: [{ label: 'fabu.care', url: 'https://fabu.care/' }],
    },
    {
      id: 'knoll',
      title: 'Knoll',
      tags: ['.NET 10', 'EF Core', 'PostgreSQL', 'Redis', 'OpenAI', 'Docker'],
      links: [],
    },
  ],
};

export const langs = {
  en: {
    htmlLang: 'en',
    path: '/',
    label: 'EN',
    ogLocale: 'en_GB',
    title: 'Grigory Zhadko — Senior .NET Backend Engineer in Valencia',
    description:
      'Freelance senior .NET backend engineer based in Valencia, Spain. Backend development, integrations, cloud infrastructure, MVPs and support for startups and businesses.',
    nav: { about: 'about', services: 'services', experience: 'experience', projects: 'projects', contact: 'contact' },
    hero: {
      kicker: 'Freelance backend engineer · Valencia, Spain',
      title: 'I build reliable backends for products that need to work.',
      lead:
        'Senior / Lead .NET engineer with 17 years of experience. I design, build and run server-side systems: APIs, integrations, data processing and cloud infrastructure, from the first prototype to production with 100,000 daily users.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See services',
      cmdWhoami: 'whoami',
      outWhoami: 'Grigory Zhadko — Senior / Lead .NET backend engineer',
      cmdServices: 'cat services.txt',
      outServices: 'backend · integrations · infrastructure · mvp · support',
      cmdStatus: 'status --availability',
      outStatus: 'open for new projects in Spain and the EU',
    },
    stats: [
      ['17', 'years building software'],
      ['100K', 'daily active users served'],
      ['99.99%', 'uptime of systems I led'],
      ['3', 'continents, teams I worked with'],
    ],
    about: {
      title: 'About',
      paragraphs: [
        'I am a backend engineer from Russia, living in Valencia since 2023 and working as a registered autónomo in Spain. Before that I worked in Novosibirsk, Australia and Prague, for companies from small startups to EPAM and Barclays.',
        'My core is C# and .NET: clean, testable services, well-designed databases and messaging, and the infrastructure around them. I have led backend teams, hired and mentored developers, and been responsible for systems in production.',
        'I work directly with founders and small teams: I can take an idea, turn it into a working first version, and then keep it fast, secure and cheap to run.',
      ],
      facts: [
        ['Based in', 'Valencia, Spain (CET)'],
        ['Status', 'Autónomo · invoices with IVA'],
        ['Languages', 'English, Russian, Spanish'],
        ['Education', 'MSc, Computer Science — Novosibirsk State University'],
      ],
    },
    services: {
      title: 'Services',
      intro: 'What I can do for your company or project.',
      items: [
        {
          id: 'backend',
          title: 'Backend development',
          text: 'Server-side part of web and mobile applications: APIs, business logic, data processing and background jobs, built with C#/.NET and PostgreSQL, MongoDB or Redis.',
        },
        {
          id: 'integrations',
          title: 'Integrations',
          text: 'Connecting your product to the systems you already use: CRM/SFA, accounting, banking and payment providers, email services, message queues (Kafka, RabbitMQ).',
        },
        {
          id: 'infra',
          title: 'Infrastructure & DevOps',
          text: 'Containers (Docker, Kubernetes), AWS and Azure, CI/CD pipelines, monitoring and alerts. Reducing cloud costs without losing reliability.',
        },
        {
          id: 'mvp',
          title: 'Prototypes & MVPs',
          text: 'A working first version of your product in weeks, not months, so you can show it to users and investors and decide what to build next.',
        },
        {
          id: 'support',
          title: 'Maintenance & support',
          text: 'Taking care of a system after launch: fixes, new features, performance tuning, dependency and security updates, on a monthly basis.',
        },
        {
          id: 'consulting',
          title: 'Technical consulting',
          text: 'Architecture and code review, help with technology choices, and an outside look at an existing backend before it grows or gets handed over.',
        },
      ],
      processTitle: 'How we work together',
      process: [
        ['Intro call', 'A short call or chat about your goals, deadlines and current state. Free of charge.'],
        ['Scope & estimate', 'I propose a plan, phases and an estimate in hours or a fixed price.'],
        ['Delivery', 'Short iterations with regular demos. You always see progress and the code.'],
        ['Support', 'After launch I can stay on a monthly support plan or hand over everything to your team.'],
      ],
    },
    stack: { title: 'Stack' },
    experience: {
      title: 'Experience',
      items: {
        raritex: ['Backend developer (contractor)', 'Backend services for an identity-verification and compliance (KYC/AML) platform.'],
        deltatre: ['.NET developer (contractor)', 'Entitlement and content services for sports streaming platforms.'],
        altery: ['Backend lead (contractor)', 'Backend of a payment and e-money platform; led backend development.'],
        w7g: ['Backend team lead', 'Built the backend of SUITSME and FABU mobile apps from scratch: up to 100,000 daily active users, 99.99% uptime, under 300 ms average response. Cut AWS costs and led a remote backend team.'],
        tawasal: ['Senior software engineer', 'Payment distribution, giveaways and admin tools for a super-app, delivered for the beta launch; Hangfire-based background processing.'],
        logican: ['Senior software engineer', 'CRM in Azure with SQL Server and a WPF desktop client; a contract-management portal for lawyers with document generation (.NET Core, Vue.js).'],
        epam: ['Senior engineer / Unit manager', 'Rebalancing platform for more than 10,000 investment portfolios for Barclays.'],
        sateva: ['Senior C# developer', 'Desktop application for mining engineers, built from scratch.'],
        ten: ['Software developer', 'Client-server compliance system for aged-care facilities.'],
        slb: ['Software developer', 'Automated processing of oilfield data; coordinated a group of contractors.'],
        dataeast: ['C# developer', 'GIS tools for forest resource management.'],
      },
    },
    projects: {
      title: 'Selected projects',
      items: {
        suitsme: 'Fashion dress-up game with community voting and real-time challenges. I designed and led its backend: 25K+ ratings on the App Store, up to 100K daily players.',
        fabu: 'Self-care and wellness mobile app by the same studio: daily routines, mood check-ins, courses. Backend built on the same platform.',
        knoll: 'My own multiplayer word game in Telegram: game sessions, hints with an LLM, PostgreSQL and Redis, deployed with Docker and GitHub Actions.',
      },
    },
    profiles: { title: 'Profiles' },
    contact: {
      title: 'Contact',
      text: 'Tell me about your project. I usually reply within one working day.',
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      location: 'Valencia, Spain · Remote across the EU',
    },
    footer: 'Grigory Zhadko · Autónomo · Valencia, Spain',
    legal: {
      path: '/legal/',
      link: 'Legal notice & privacy',
      title: 'Legal notice and privacy',
      back: '← Back to home',
      updated: 'Last updated:',
      idTitle: 'Website owner',
      id: [
        ['Owner', '{name}, self-employed professional (autónomo)'],
        ['NIE', '{nie}'],
        ['Address', '{postal}'],
        ['Email', '{email}'],
        ['Phone', '{phone}'],
        ['Activity', 'Software development and IT consulting (IAE {iae})'],
      ],
      sections: [
        ['Purpose', [
          'This website presents the professional services of {name}. Its content is for information only and is not a binding offer; the terms of each project are agreed individually in writing.',
          'This notice is published in accordance with Spanish Law 34/2002 on information society services (LSSI-CE). The Spanish version is the reference text.',
        ]],
        ['Intellectual property', [
          'Texts, design and source code of this website belong to {name} unless stated otherwise. Names and trademarks of companies and products mentioned on the site belong to their owners and are used only to describe past work.',
        ]],
        ['Personal data', [
          'The site has no forms, no user accounts and no analytics. If you contact me by email, phone or messenger, I use your data only to reply and, if we agree, to prepare and carry out a contract (GDPR art. 6.1.b and 6.1.f). I do not share it with third parties except where the law requires it, and I keep it for as long as needed for that purpose and for my tax obligations.',
          'You can request access, rectification, erasure, restriction, portability or object to processing by writing to {email}. You can also file a complaint with the Spanish Data Protection Agency (www.aepd.es).',
        ]],
        ['Cookies and hosting', [
          'This website does not use cookies and does not load resources from third parties: fonts and images are served from the site itself. The server is provided by Hetzner Online GmbH (Germany) and keeps standard access logs (IP address, date, requested page) for security, which are deleted automatically.',
        ]],
      ],
    },
  },

  es: {
    htmlLang: 'es',
    path: '/es/',
    label: 'ES',
    ogLocale: 'es_ES',
    title: 'Grigory Zhadko — Desarrollador backend .NET senior en Valencia',
    description:
      'Desarrollador backend .NET senior autónomo en Valencia. Desarrollo backend, integraciones, infraestructura cloud, prototipos y MVP, y mantenimiento para empresas y startups.',
    nav: { about: 'sobre mí', services: 'servicios', experience: 'experiencia', projects: 'proyectos', contact: 'contacto' },
    hero: {
      kicker: 'Desarrollador backend autónomo · Valencia, España',
      title: 'Construyo backends fiables para productos que tienen que funcionar.',
      lead:
        'Ingeniero .NET senior / lead con 17 años de experiencia. Diseño, desarrollo y mantengo sistemas del lado del servidor: APIs, integraciones, procesamiento de datos e infraestructura cloud, desde el primer prototipo hasta producción con 100.000 usuarios diarios.',
      ctaPrimary: 'Contactar',
      ctaSecondary: 'Ver servicios',
      cmdWhoami: 'whoami',
      outWhoami: 'Grigory Zhadko — desarrollador backend .NET senior / lead',
      cmdServices: 'cat servicios.txt',
      outServices: 'backend · integraciones · infraestructura · mvp · mantenimiento',
      cmdStatus: 'status --disponibilidad',
      outStatus: 'disponible para nuevos proyectos en España y la UE',
    },
    stats: [
      ['17', 'años desarrollando software'],
      ['100K', 'usuarios activos diarios'],
      ['99,99 %', 'disponibilidad de los sistemas que dirigí'],
      ['3', 'continentes con equipos con los que he trabajado'],
    ],
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy ingeniero backend, vivo en Valencia desde 2023 y trabajo como autónomo dado de alta en España. Antes trabajé en Novosibirsk, Australia y Praga, para empresas desde pequeñas startups hasta EPAM y Barclays.',
        'Mi especialidad es C# y .NET: servicios limpios y testeables, bases de datos y mensajería bien diseñadas, y la infraestructura que los rodea. He dirigido equipos backend, he contratado y formado a desarrolladores y he sido responsable de sistemas en producción.',
        'Trabajo directamente con fundadores y equipos pequeños: puedo convertir una idea en una primera versión que funciona y después mantenerla rápida, segura y barata de operar.',
      ],
      facts: [
        ['Ubicación', 'Valencia, España (CET)'],
        ['Forma jurídica', 'Autónomo · facturas con IVA'],
        ['Idiomas', 'Inglés, ruso, español'],
        ['Formación', 'Máster en Informática — Universidad Estatal de Novosibirsk'],
      ],
    },
    services: {
      title: 'Servicios',
      intro: 'Lo que puedo hacer por su empresa o proyecto.',
      items: [
        {
          id: 'backend',
          title: 'Desarrollo backend',
          text: 'La parte de servidor de aplicaciones web y móviles: APIs, lógica de negocio, procesamiento de datos y tareas en segundo plano, con C#/.NET y PostgreSQL, MongoDB o Redis.',
        },
        {
          id: 'integrations',
          title: 'Integraciones',
          text: 'Conectar su producto con los sistemas que ya utiliza: CRM/SFA, contabilidad, bancos y pasarelas de pago, servicios de correo, colas de mensajes (Kafka, RabbitMQ).',
        },
        {
          id: 'infra',
          title: 'Infraestructura y DevOps',
          text: 'Contenedores (Docker, Kubernetes), AWS y Azure, CI/CD, monitorización y alertas. Reducción de costes cloud sin perder fiabilidad.',
        },
        {
          id: 'mvp',
          title: 'Prototipos y MVP',
          text: 'Una primera versión funcional de su producto en semanas, no en meses, para enseñarla a usuarios e inversores y decidir los siguientes pasos.',
        },
        {
          id: 'support',
          title: 'Mantenimiento y soporte',
          text: 'Cuidado del sistema después del lanzamiento: correcciones, nuevas funcionalidades, rendimiento, actualizaciones de dependencias y seguridad, con una cuota mensual.',
        },
        {
          id: 'consulting',
          title: 'Consultoría técnica',
          text: 'Revisión de arquitectura y de código, ayuda para elegir tecnologías y una mirada externa a un backend existente antes de que crezca o cambie de manos.',
        },
      ],
      processTitle: 'Cómo trabajamos',
      process: [
        ['Primera conversación', 'Una llamada o chat breve sobre sus objetivos, plazos y situación actual. Sin coste.'],
        ['Alcance y presupuesto', 'Propongo un plan por fases y un presupuesto por horas o a precio cerrado.'],
        ['Desarrollo', 'Iteraciones cortas con demos periódicas. Siempre ve el avance y el código.'],
        ['Soporte', 'Tras el lanzamiento puedo seguir con un plan de soporte mensual o traspasar todo a su equipo.'],
      ],
    },
    stack: { title: 'Tecnologías' },
    experience: {
      title: 'Experiencia',
      items: {
        raritex: ['Desarrollador backend (contratista)', 'Servicios backend para una plataforma de verificación de identidad y cumplimiento normativo (KYC/AML).'],
        deltatre: ['Desarrollador .NET (contratista)', 'Servicios de derechos de acceso y contenidos para plataformas de streaming deportivo.'],
        altery: ['Backend lead (contratista)', 'Backend de una plataforma de pagos y dinero electrónico; dirección del desarrollo backend.'],
        w7g: ['Jefe de equipo backend', 'Construí desde cero el backend de las apps móviles SUITSME y FABU: hasta 100.000 usuarios activos diarios, 99,99 % de disponibilidad y menos de 300 ms de respuesta media. Reduje costes de AWS y dirigí un equipo backend en remoto.'],
        tawasal: ['Ingeniero de software senior', 'Distribución de pagos, sorteos y herramientas de administración para una superapp, entregados para el lanzamiento beta; procesamiento en segundo plano con Hangfire.'],
        logican: ['Ingeniero de software senior', 'CRM en Azure con SQL Server y cliente de escritorio WPF; portal de gestión de contratos para abogados con generación de documentos (.NET Core, Vue.js).'],
        epam: ['Ingeniero senior / Unit manager', 'Plataforma de rebalanceo de más de 10.000 carteras de inversión para Barclays.'],
        sateva: ['Desarrollador C# senior', 'Aplicación de escritorio para ingenieros de minas, desarrollada desde cero.'],
        ten: ['Desarrollador de software', 'Sistema cliente-servidor de control de cumplimiento para residencias de mayores.'],
        slb: ['Desarrollador de software', 'Automatización del procesamiento de datos de yacimientos; coordinación de un grupo de contratistas.'],
        dataeast: ['Desarrollador C#', 'Herramientas GIS para la gestión de recursos forestales.'],
      },
    },
    projects: {
      title: 'Proyectos destacados',
      items: {
        suitsme: 'Juego de moda con votaciones de la comunidad y retos en tiempo real. Diseñé y dirigí su backend: más de 25.000 valoraciones en la App Store y hasta 100.000 jugadores diarios.',
        fabu: 'App móvil de autocuidado y bienestar del mismo estudio: rutinas diarias, registro del estado de ánimo, cursos. Backend sobre la misma plataforma.',
        knoll: 'Mi propio juego de palabras multijugador en Telegram: partidas, pistas con un LLM, PostgreSQL y Redis, desplegado con Docker y GitHub Actions.',
      },
    },
    profiles: { title: 'Perfiles' },
    contact: {
      title: 'Contacto',
      text: 'Cuénteme su proyecto. Normalmente respondo en un día laborable.',
      email: 'Correo',
      phone: 'Teléfono',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      location: 'Valencia, España · En remoto en toda la UE',
    },
    footer: 'Grigory Zhadko · Autónomo · Valencia, España',
    legal: {
      path: '/es/aviso-legal/',
      link: 'Aviso legal y privacidad',
      title: 'Aviso legal y política de privacidad',
      back: '← Volver al inicio',
      updated: 'Última actualización:',
      idTitle: 'Datos identificativos',
      id: [
        ['Titular', '{name}, trabajador autónomo'],
        ['NIE', '{nie}'],
        ['Domicilio', '{postal}'],
        ['Correo electrónico', '{email}'],
        ['Teléfono', '{phone}'],
        ['Actividad', 'Desarrollo de software y consultoría informática (IAE {iae})'],
      ],
      sections: [
        ['Objeto', [
          'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se facilitan los datos del titular de este sitio web.',
          'Este sitio presenta los servicios profesionales de {name}. Su contenido es meramente informativo y no constituye una oferta vinculante; las condiciones de cada proyecto se acuerdan por escrito de forma individual.',
        ]],
        ['Propiedad intelectual', [
          'Los textos, el diseño y el código fuente de este sitio pertenecen a {name}, salvo indicación en contrario. Los nombres y marcas de empresas y productos que se mencionan pertenecen a sus titulares y se citan solo para describir trabajos realizados.',
        ]],
        ['Protección de datos', [
          'Responsable del tratamiento: {name}, {email}. El sitio no tiene formularios, cuentas de usuario ni herramientas de analítica. Si usted me contacta por correo, teléfono o mensajería, utilizo sus datos únicamente para responder y, en su caso, para preparar y ejecutar un contrato (art. 6.1.b y 6.1.f del RGPD). No los cedo a terceros salvo obligación legal y los conservo durante el tiempo necesario para esa finalidad y para cumplir mis obligaciones fiscales.',
          'Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a {email}. También puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
        ]],
        ['Cookies y alojamiento', [
          'Este sitio no utiliza cookies ni carga recursos de terceros: las fuentes y las imágenes se sirven desde el propio sitio. El servidor lo proporciona Hetzner Online GmbH (Alemania) y guarda registros de acceso estándar (dirección IP, fecha, página solicitada) por motivos de seguridad, que se eliminan automáticamente.',
        ]],
      ],
    },
  },

  ru: {
    htmlLang: 'ru',
    path: '/ru/',
    label: 'RU',
    ogLocale: 'ru_RU',
    title: 'Григорий Жадько — senior .NET backend-разработчик в Валенсии',
    description:
      'Senior .NET backend-разработчик на фрилансе (autónomo) в Валенсии. Разработка backend, интеграции, облачная инфраструктура, прототипы и MVP, сопровождение.',
    nav: { about: 'обо мне', services: 'услуги', experience: 'опыт', projects: 'проекты', contact: 'контакты' },
    hero: {
      kicker: 'Backend-разработчик на фрилансе · Валенсия, Испания',
      title: 'Делаю надёжный backend для продуктов, которые должны работать.',
      lead:
        'Senior / Lead .NET-инженер с опытом 17 лет. Проектирую, разрабатываю и сопровождаю серверные системы: API, интеграции, обработку данных и облачную инфраструктуру — от первого прототипа до продакшена со 100 000 пользователей в день.',
      ctaPrimary: 'Связаться',
      ctaSecondary: 'Услуги',
      cmdWhoami: 'whoami',
      outWhoami: 'Григорий Жадько — senior / lead .NET backend-разработчик',
      cmdServices: 'cat services.txt',
      outServices: 'backend · интеграции · инфраструктура · mvp · поддержка',
      cmdStatus: 'status --availability',
      outStatus: 'беру новые проекты в Испании и ЕС',
    },
    stats: [
      ['17', 'лет в разработке'],
      ['100K', 'активных пользователей в день'],
      ['99,99 %', 'доступность систем под моим руководством'],
      ['3', 'континента — команды, с которыми я работал'],
    ],
    about: {
      title: 'Обо мне',
      paragraphs: [
        'Я backend-разработчик, с 2023 года живу в Валенсии и работаю как зарегистрированный autónomo в Испании. До этого работал в Новосибирске, Австралии и Праге — от небольших стартапов до EPAM и Barclays.',
        'Моя основа — C# и .NET: чистые и тестируемые сервисы, продуманные базы данных и очереди сообщений, инфраструктура вокруг них. Руководил backend-командами, нанимал и обучал разработчиков, отвечал за системы в продакшене.',
        'Работаю напрямую с основателями и небольшими командами: могу превратить идею в работающую первую версию, а потом поддерживать её быстрой, безопасной и недорогой в эксплуатации.',
      ],
      facts: [
        ['Где', 'Валенсия, Испания (CET)'],
        ['Статус', 'Autónomo · счета с IVA'],
        ['Языки', 'Английский, русский, испанский'],
        ['Образование', 'Магистр, информатика и вычислительная техника — НГУ'],
      ],
    },
    services: {
      title: 'Услуги',
      intro: 'Чем я могу помочь вашей компании или проекту.',
      items: [
        {
          id: 'backend',
          title: 'Разработка backend',
          text: 'Серверная часть веб- и мобильных приложений: API, бизнес-логика, обработка данных и фоновые задачи на C#/.NET с PostgreSQL, MongoDB или Redis.',
        },
        {
          id: 'integrations',
          title: 'Интеграции',
          text: 'Подключение вашего продукта к системам, которыми вы уже пользуетесь: CRM/SFA, бухгалтерия, банки и платёжные провайдеры, почтовые сервисы, очереди сообщений (Kafka, RabbitMQ).',
        },
        {
          id: 'infra',
          title: 'Инфраструктура и DevOps',
          text: 'Контейнеры (Docker, Kubernetes), AWS и Azure, CI/CD, мониторинг и алерты. Снижение затрат на облако без потери надёжности.',
        },
        {
          id: 'mvp',
          title: 'Прототипы и MVP',
          text: 'Работающая первая версия продукта за недели, а не месяцы, чтобы показать её пользователям и инвесторам и решить, что делать дальше.',
        },
        {
          id: 'support',
          title: 'Сопровождение',
          text: 'Поддержка системы после запуска: исправления, новые функции, производительность, обновления зависимостей и безопасности — с ежемесячной оплатой.',
        },
        {
          id: 'consulting',
          title: 'Технический консалтинг',
          text: 'Ревью архитектуры и кода, помощь с выбором технологий, взгляд со стороны на существующий backend перед ростом или передачей другой команде.',
        },
      ],
      processTitle: 'Как мы работаем',
      process: [
        ['Знакомство', 'Короткий звонок или переписка о целях, сроках и текущем состоянии. Бесплатно.'],
        ['Объём и оценка', 'Предлагаю план по этапам и оценку в часах или фиксированную цену.'],
        ['Разработка', 'Короткие итерации с регулярными демо. Вы всегда видите прогресс и код.'],
        ['Поддержка', 'После запуска могу остаться на ежемесячной поддержке или передать всё вашей команде.'],
      ],
    },
    stack: { title: 'Технологии' },
    experience: {
      title: 'Опыт',
      items: {
        raritex: ['Backend-разработчик (контракт)', 'Backend-сервисы платформы верификации личности и комплаенса (KYC/AML).'],
        deltatre: ['.NET-разработчик (контракт)', 'Сервисы прав доступа и контента для спортивных стриминговых платформ.'],
        altery: ['Backend lead (контракт)', 'Backend платёжной платформы и электронных денег; руководство backend-разработкой.'],
        w7g: ['Тимлид backend', 'С нуля построил backend мобильных приложений SUITSME и FABU: до 100 000 активных пользователей в день, доступность 99,99 %, средний ответ быстрее 300 мс. Снизил затраты на AWS, руководил удалённой backend-командой.'],
        tawasal: ['Senior-разработчик', 'Распределение платежей, розыгрыши и админ-инструменты супер-приложения к бета-запуску; фоновая обработка на Hangfire.'],
        logican: ['Senior-разработчик', 'CRM в Azure на SQL Server с десктоп-клиентом на WPF; портал управления договорами для юристов с генерацией документов (.NET Core, Vue.js).'],
        epam: ['Senior / Unit manager', 'Платформа ребалансировки более 10 000 инвестиционных портфелей для Barclays.'],
        sateva: ['Senior C#-разработчик', 'Десктоп-приложение для горных инженеров с нуля.'],
        ten: ['Разработчик', 'Клиент-серверная система контроля соответствия для домов престарелых.'],
        slb: ['Разработчик', 'Автоматизация обработки промысловых данных; координация группы подрядчиков.'],
        dataeast: ['C#-разработчик', 'ГИС-инструменты для управления лесными ресурсами.'],
      },
    },
    projects: {
      title: 'Проекты',
      items: {
        suitsme: 'Игра про моду с голосованием сообщества и челленджами в реальном времени. Проектировал и вёл её backend: 25 000+ оценок в App Store, до 100 000 игроков в день.',
        fabu: 'Мобильное приложение для заботы о себе от той же студии: ежедневные практики, трекер настроения, курсы. Backend на той же платформе.',
        knoll: 'Моя собственная многопользовательская игра в слова в Telegram: игровые сессии, подсказки через LLM, PostgreSQL и Redis, деплой через Docker и GitHub Actions.',
      },
    },
    profiles: { title: 'Профили' },
    contact: {
      title: 'Контакты',
      text: 'Расскажите о вашем проекте. Обычно отвечаю в течение рабочего дня.',
      email: 'Email',
      phone: 'Телефон',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      location: 'Валенсия, Испания · удалённо по всему ЕС',
    },
    footer: 'Григорий Жадько · Autónomo · Валенсия, Испания',
    legal: {
      path: '/ru/legal/',
      link: 'Правовая информация',
      title: 'Правовая информация и конфиденциальность',
      back: '← На главную',
      updated: 'Обновлено:',
      idTitle: 'Владелец сайта',
      id: [
        ['Владелец', '{name}, autónomo (самозанятый)'],
        ['NIE', '{nie}'],
        ['Адрес', '{postal}'],
        ['Email', '{email}'],
        ['Телефон', '{phone}'],
        ['Деятельность', 'Разработка программного обеспечения и IT-консалтинг (IAE {iae})'],
      ],
      sections: [
        ['Назначение', [
          'Сайт рассказывает о профессиональных услугах {name}. Информация носит ознакомительный характер и не является публичной офертой; условия каждого проекта согласуются письменно.',
          'Сведения опубликованы в соответствии с испанским законом 34/2002 об услугах информационного общества (LSSI-CE). Основной текст — испанская версия.',
        ]],
        ['Интеллектуальная собственность', [
          'Тексты, дизайн и исходный код сайта принадлежат {name}, если не указано иное. Названия и товарные знаки компаний и продуктов принадлежат их владельцам и упоминаются только для описания выполненных работ.',
        ]],
        ['Персональные данные', [
          'На сайте нет форм, аккаунтов и аналитики. Если вы пишете или звоните мне, я использую ваши данные только для ответа и, при договорённости, для подготовки и исполнения договора (ст. 6.1.b и 6.1.f GDPR). Данные не передаются третьим лицам, кроме случаев, предусмотренных законом, и хранятся столько, сколько нужно для этой цели и налоговых обязательств.',
          'Запросить доступ, исправление, удаление, ограничение обработки, перенос данных или возразить против обработки можно по адресу {email}. Также можно подать жалобу в Испанское агентство по защите данных (www.aepd.es).',
        ]],
        ['Cookies и хостинг', [
          'Сайт не использует cookies и не загружает ресурсы сторонних сервисов: шрифты и изображения отдаются с самого сайта. Сервер предоставляет Hetzner Online GmbH (Германия); на нём ведутся стандартные журналы доступа (IP-адрес, дата, запрошенная страница) в целях безопасности; журналы удаляются автоматически.',
        ]],
      ],
    },
  },
};
