export type Lang = 'en' | 'ar';

export const navLinks = {
  en: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ],
  ar: [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'عنّا' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#projects', label: 'مشاريعنا' },
    { href: '#contact', label: 'تواصل معنا' },
  ],
};

export const stats = {
  en: [
    { value: '40+', label: 'Premium interfaces shipped' },
    { value: '12+', label: 'Industries served' },
    { value: '98%', label: 'Client satisfaction focus' },
  ],
  ar: [
    { value: '40+', label: 'واجهة مميزة تم تسليمها' },
    { value: '12+', label: 'قطاع تم خدمته' },
    { value: '98%', label: 'تركيز على رضا العملاء' },
  ],
};

export const heroContent = {
  en: {
    badge: 'Crafted for startups, cafés, educators, and ambitious businesses',
    h1: 'We build websites that make new businesses look established from day one.',
    p: '2youdev creates premium websites with strategic structure, polished design, and clean development standards so your brand feels credible, modern, and ready to grow.',
    cta1: 'Start your project',
    cta2: 'Explore our work',
    previewLabel: 'Live concept preview',
    previewTitle: 'Agency-grade website system',
    previewBadge: 'High-conversion UI',
    previewHeroLabel: 'Hero architecture',
    previewHeroTitle: 'Strong messaging. Premium visuals. Clear action.',
    previewDesignLabel: 'Design system',
    previewDesignTitle: 'Refined spacing, hierarchy, and motion',
    previewDevLabel: 'Development quality',
    previewDevTitle: 'Responsive, scalable, and production-ready',
    previewScoreLabel: 'Client impression score',
    previewScoreValue: 'Premium',
  },
  ar: {
    badge: 'صُمِّم للشركات الناشئة والمقاهي والمعلمين والأعمال الطموحة',
    h1: 'نبني مواقع تجعل الأعمال الجديدة تبدو راسخة من اليوم الأول.',
    p: 'تُنشئ 2youdev مواقع ويب متميزة ببنية استراتيجية وتصميم مصقول ومعايير تطوير نظيفة، لتبدو علامتك التجارية موثوقة وعصرية وجاهزة للنمو.',
    cta1: 'ابدأ مشروعك',
    cta2: 'استعرض أعمالنا',
    previewLabel: 'معاينة مباشرة للفكرة',
    previewTitle: 'نظام موقع بمستوى الوكالات',
    previewBadge: 'واجهة عالية التحويل',
    previewHeroLabel: 'بنية القسم الرئيسي',
    previewHeroTitle: 'رسائل قوية. مرئيات متميزة. دعوة واضحة للتصرف.',
    previewDesignLabel: 'نظام التصميم',
    previewDesignTitle: 'مسافات دقيقة وتسلسل هرمي وحركة سلسة',
    previewDevLabel: 'جودة التطوير',
    previewDevTitle: 'متجاوب وقابل للتوسع وجاهز للإنتاج',
    previewScoreLabel: 'مستوى الانطباع لدى العميل',
    previewScoreValue: 'متميز',
  },
};

export const aboutContent = {
  en: {
    eyebrow: 'About 2youdev',
    title: 'A web development studio focused on making new businesses look ready for bigger opportunities.',
    p1: '2youdev creates premium websites for brands that need more than a generic online presence. We help cafés, restaurants, startups, teachers, educational platforms, and companies present themselves with confidence through modern design and high-quality development.',
    p2: 'Our goal is simple: build websites that feel polished, intentional, and trustworthy from the first interaction. We care about how a business is perceived online, because that perception affects trust, conversion, and growth.',
    pillarsLabel: 'What defines our work',
    points: [
      'Premium aesthetic with clear business intent',
      'Responsive design that works beautifully across devices',
      'Clean code structure using the modern Node.js ecosystem',
    ],
  },
  ar: {
    eyebrow: 'عن 2youdev',
    title: 'استوديو تطوير ويب يُركّز على جعل الأعمال الجديدة جاهزة لفرص أكبر.',
    p1: 'تُنشئ 2youdev مواقع ويب متميزة للعلامات التجارية التي تحتاج أكثر من مجرد حضور رقمي عادي. نساعد المقاهي والمطاعم والشركات الناشئة والمعلمين والمنصات التعليمية والشركات على تقديم أنفسهم بثقة من خلال تصميم عصري وتطوير عالي الجودة.',
    p2: 'هدفنا بسيط: بناء مواقع تبدو مصقولة ومقصودة وجديرة بالثقة من أول تفاعل. نهتم بكيفية إدراك الأعمال عبر الإنترنت، لأن ذلك الإدراك يؤثر على الثقة والتحويل والنمو.',
    pillarsLabel: 'ما يُميّز أعمالنا',
    points: [
      'جماليات متميزة مع هدف تجاري واضح',
      'تصميم متجاوب يعمل بشكل رائع عبر جميع الأجهزة',
      'بنية كود نظيفة باستخدام نظام Node.js الحديث',
    ],
  },
};

export const aboutPillars = {
  en: [
    {
      title: 'Serious first impressions',
      description: 'We focus on the details that make a business feel credible at a glance: hierarchy, structure, spacing, and sharp presentation.',
    },
    {
      title: 'Strategy behind the design',
      description: 'Our websites are shaped to communicate value clearly, reduce friction, and guide visitors toward action.',
    },
    {
      title: 'Modern frontend standards',
      description: 'We use a clean component-based approach that supports responsive layouts, maintainability, and future growth.',
    },
  ],
  ar: [
    {
      title: 'انطباعات أولى جادة',
      description: 'نُركّز على التفاصيل التي تجعل العمل يبدو موثوقاً للوهلة الأولى: التسلسل الهرمي والبنية والمسافات والعرض الاحترافي.',
    },
    {
      title: 'استراتيجية خلف التصميم',
      description: 'مواقعنا مُصمَّمة لإيصال القيمة بوضوح وتقليل الاحتكاك وتوجيه الزوار نحو اتخاذ الإجراء.',
    },
    {
      title: 'معايير الواجهة الأمامية الحديثة',
      description: 'نستخدم نهجاً نظيفاً قائماً على المكونات يدعم التخطيطات المتجاوبة وقابلية الصيانة والنمو المستقبلي.',
    },
  ],
};

export const services = {
  en: [
    {
      title: 'Business Website Design & Development',
      description: 'High-converting marketing websites for cafés, restaurants, startups, teachers, and modern service brands.',
      bullets: ['Responsive UX', 'Premium visual design', 'Conversion-focused structure'],
    },
    {
      title: 'Landing Pages for Launches',
      description: 'Fast, polished launch pages designed to present your offer clearly, build trust quickly, and drive action.',
      bullets: ['Offer positioning', 'Lead capture', 'Campaign-ready sections'],
    },
    {
      title: 'Educational Platform Interfaces',
      description: 'Professional websites and dashboard experiences for teachers, academies, and educational products.',
      bullets: ['Course presentation', 'Teacher branding', 'Student-friendly navigation'],
    },
    {
      title: 'Custom UI Systems',
      description: 'Clean component-driven frontend systems that scale as your business grows and your needs evolve.',
      bullets: ['Reusable components', 'Consistent design language', 'Scalable architecture'],
    },
    {
      title: 'Performance & SEO Foundations',
      description: 'Modern technical setup built to support speed, discoverability, and a smoother user experience.',
      bullets: ['Technical SEO basics', 'Accessibility awareness', 'Core performance hygiene'],
    },
    {
      title: 'Ongoing Website Support',
      description: 'Reliable design and development support after launch for updates, improvements, and growth.',
      bullets: ['Feature updates', 'Content support', 'Continuous refinement'],
    },
  ],
  ar: [
    {
      title: 'تصميم وتطوير مواقع الأعمال',
      description: 'مواقع تسويقية عالية التحويل للمقاهي والمطاعم والشركات الناشئة والمعلمين والعلامات التجارية الحديثة.',
      bullets: ['تجربة مستخدم متجاوبة', 'تصميم بصري متميز', 'بنية موجهة للتحويل'],
    },
    {
      title: 'صفحات هبوط للإطلاق',
      description: 'صفحات إطلاق سريعة ومصقولة مصممة لعرض عرضك بوضوح وبناء الثقة سريعاً وتحفيز التصرف.',
      bullets: ['تحديد موضع العرض', 'التقاط العملاء المحتملين', 'أقسام جاهزة للحملات'],
    },
    {
      title: 'واجهات المنصات التعليمية',
      description: 'مواقع احترافية وتجارب لوحة تحكم للمعلمين والأكاديميات والمنتجات التعليمية.',
      bullets: ['عرض الدورات', 'علامة تجارية للمعلمين', 'تنقل ملائم للطلاب'],
    },
    {
      title: 'أنظمة واجهة مستخدم مخصصة',
      description: 'أنظمة واجهة أمامية نظيفة مدفوعة بالمكونات تتوسع مع نمو أعمالك وتطور احتياجاتك.',
      bullets: ['مكونات قابلة لإعادة الاستخدام', 'لغة تصميم متسقة', 'بنية قابلة للتوسع'],
    },
    {
      title: 'أسس الأداء وتحسين محركات البحث',
      description: 'إعداد تقني حديث مبني لدعم السرعة وقابلية الاكتشاف وتجربة مستخدم أكثر سلاسة.',
      bullets: ['أساسيات تحسين محركات البحث', 'الوعي بإمكانية الوصول', 'نظافة الأداء الأساسي'],
    },
    {
      title: 'دعم مستمر للموقع',
      description: 'دعم موثوق في التصميم والتطوير بعد الإطلاق للتحديثات والتحسينات والنمو.',
      bullets: ['تحديثات الميزات', 'دعم المحتوى', 'التحسين المستمر'],
    },
  ],
};

export const servicesContent = {
  en: {
    eyebrow: 'Services',
    title: 'Web solutions designed to help ambitious brands look credible, polished, and ready to scale.',
    p: 'Every service is shaped around clarity, trust, and presentation quality so your website supports real business growth instead of simply filling space online.',
    badge: '2youdev service',
  },
  ar: {
    eyebrow: 'الخدمات',
    title: 'حلول ويب مصممة لمساعدة العلامات التجارية الطموحة على التميز والاحترافية.',
    p: 'كل خدمة مُشكَّلة حول الوضوح والثقة وجودة العرض، لذا يدعم موقعك نمو الأعمال الحقيقي بدلاً من مجرد ملء مساحة عبر الإنترنت.',
    badge: 'خدمة 2youdev',
  },
};

export const featuredProjects = {
  en: [
    {
      name: 'Roastline Café',
      category: 'Café Website',
      summary: 'A premium one-page website for a newly opened specialty café with menu highlights, reservations, and local credibility sections.',
      outcome: 'Positioned the café as a modern destination with a polished first impression.',
    },
    {
      name: 'Nexa Launch Studio',
      category: 'Startup Landing Page',
      summary: 'A sleek landing page for a startup validating a new service, focused on clarity, trust, and strong call-to-action blocks.',
      outcome: 'Helped communicate the product fast and made outreach campaigns more convincing.',
    },
    {
      name: 'Eloquence Academy',
      category: 'Educational Platform',
      summary: 'A modern digital presence for an online education brand with course showcases, social proof, and guided user flows.',
      outcome: 'Created a more credible brand experience for both students and instructors.',
    },
    {
      name: 'Northlane Systems',
      category: 'Corporate Service Website',
      summary: 'A sharp B2B presence for a service company that needed more authority, clearer messaging, and a stronger enterprise impression.',
      outcome: 'Improved perceived credibility and made the company feel more established online.',
    },
  ],
  ar: [
    {
      name: 'Roastline Café',
      category: 'موقع مقهى',
      summary: 'موقع ويب متميز من صفحة واحدة لمقهى متخصص حديث الافتتاح مع أبرز القائمة والحجوزات وأقسام المصداقية المحلية.',
      outcome: 'وضع المقهى كوجهة عصرية بانطباع أول مصقول.',
    },
    {
      name: 'Nexa Launch Studio',
      category: 'صفحة هبوط شركة ناشئة',
      summary: 'صفحة هبوط أنيقة لشركة ناشئة تتحقق من خدمة جديدة، مع التركيز على الوضوح والثقة وكتل الدعوة القوية للتصرف.',
      outcome: 'ساعدت في إيصال المنتج بسرعة وجعلت حملات التواصل أكثر إقناعاً.',
    },
    {
      name: 'Eloquence Academy',
      category: 'منصة تعليمية',
      summary: 'حضور رقمي حديث لعلامة تجارية للتعليم الإلكتروني مع عروض الدورات والإثبات الاجتماعي وتدفقات المستخدمين الموجهة.',
      outcome: 'خلق تجربة علامة تجارية أكثر مصداقية للطلاب والمدربين على حد سواء.',
    },
    {
      name: 'Northlane Systems',
      category: 'موقع شركة خدمات',
      summary: 'حضور B2B حاد لشركة خدمات تحتاج إلى سلطة أكبر ورسائل أوضح وانطباع مؤسسي أقوى.',
      outcome: 'حسّن المصداقية المتصوَّرة وجعل الشركة تبدو أكثر رسوخاً عبر الإنترنت.',
    },
  ],
};

export const projectsContent = {
  en: {
    eyebrow: 'Selected work',
    title: 'Examples of the kind of digital presence we build for modern businesses.',
    p: 'These examples reflect the level of positioning, polish, and structure serious clients expect from a premium studio website.',
    impactLabel: 'Business impact',
  },
  ar: {
    eyebrow: 'أعمال مختارة',
    title: 'أمثلة على نوع الحضور الرقمي الذي نبنيه للأعمال الحديثة.',
    p: 'تعكس هذه الأمثلة مستوى التموضع والصقل والبنية الذي يتوقعه العملاء الجادون من موقع استوديو متميز.',
    impactLabel: 'الأثر التجاري',
  },
};

export const processSteps = {
  en: [
    {
      step: '01',
      title: 'Discovery & Positioning',
      description: 'We understand your business, audience, and goals so the website reflects your real value from the first screen.',
    },
    {
      step: '02',
      title: 'Design Direction',
      description: 'We build a premium visual direction with strong hierarchy, clean layouts, and sections designed to increase trust.',
    },
    {
      step: '03',
      title: 'Development & Polish',
      description: 'We turn the design into a responsive, high-performance website with smooth interactions and maintainable code.',
    },
    {
      step: '04',
      title: 'Launch & Growth Support',
      description: 'After launch, we help refine, improve, and support the website so it continues to perform as your business grows.',
    },
  ],
  ar: [
    {
      step: '01',
      title: 'الاكتشاف والتموضع',
      description: 'نفهم عملك وجمهورك وأهدافك حتى يعكس الموقع قيمتك الحقيقية من الشاشة الأولى.',
    },
    {
      step: '02',
      title: 'التوجه التصميمي',
      description: 'نبني توجهاً بصرياً متميزاً بتسلسل هرمي قوي وتخطيطات نظيفة وأقسام مصممة لزيادة الثقة.',
    },
    {
      step: '03',
      title: 'التطوير والصقل',
      description: 'نحوّل التصميم إلى موقع ويب متجاوب وعالي الأداء مع تفاعلات سلسة وكود قابل للصيانة.',
    },
    {
      step: '04',
      title: 'الإطلاق ودعم النمو',
      description: 'بعد الإطلاق، نساعد في تحسين الموقع ودعمه حتى يستمر في الأداء مع نمو أعمالك.',
    },
  ],
};

export const processContent = {
  en: {
    eyebrow: 'Our process',
    title: 'A simple, strategic workflow that keeps quality high and decisions intentional.',
    p: 'We combine business thinking, design clarity, and modern frontend execution so the final result feels sharp, aligned, and production-ready.',
  },
  ar: {
    eyebrow: 'طريقة عملنا',
    title: 'سير عمل بسيط واستراتيجي يحافظ على جودة عالية وقرارات مدروسة.',
    p: 'نجمع التفكير التجاري ووضوح التصميم وتنفيذ الواجهة الأمامية الحديثة حتى تكون النتيجة النهائية حادة ومتسقة وجاهزة للإنتاج.',
  },
};

export const testimonials = {
  en: [
    {
      quote: '2youdev gave our brand a website that actually looks like an established business, not a startup trying to look serious.',
      name: 'Mariam Hassan',
      role: 'Founder, Local Food Brand',
    },
    {
      quote: 'The final website felt premium from the first section. The structure, copy, and design made it much easier to present our business confidently.',
      name: 'Omar Adel',
      role: 'Co-Founder, Service Startup',
    },
    {
      quote: 'They understood exactly how to present our educational offer in a clean and trustworthy way. The result felt professional from top to bottom.',
      name: 'Sara Khaled',
      role: 'Instructor & Course Creator',
    },
  ],
  ar: [
    {
      quote: 'أعطت 2youdev علامتنا التجارية موقعاً يبدو فعلاً كأنه عمل راسخ، وليس شركة ناشئة تحاول أن تبدو جادة.',
      name: 'مريم حسن',
      role: 'مؤسسة، علامة تجارية غذائية محلية',
    },
    {
      quote: 'بدا الموقع النهائي متميزاً من القسم الأول. البنية والنص والتصميم جعلت تقديم أعمالنا بثقة أسهل بكثير.',
      name: 'عمر عادل',
      role: 'شريك مؤسس، شركة ناشئة للخدمات',
    },
    {
      quote: 'فهموا بالضبط كيفية تقديم عرضنا التعليمي بطريقة نظيفة وجديرة بالثقة. النتيجة بدت احترافية من الأعلى للأسفل.',
      name: 'سارة خالد',
      role: 'مدربة ومنشئة دورات',
    },
  ],
};

export const testimonialsContent = {
  en: {
    eyebrow: 'Client confidence',
    title: 'Built to leave the right impression on serious clients and growing brands.',
    p: 'The strongest websites do more than look good. They create confidence, remove hesitation, and help businesses present themselves at a higher level.',
  },
  ar: {
    eyebrow: 'ثقة العملاء',
    title: 'مبني لترك الانطباع الصحيح لدى العملاء الجادين والعلامات التجارية النامية.',
    p: 'أقوى المواقع تفعل أكثر من مجرد الظهور بمظهر جيد. تخلق الثقة وتُزيل التردد وتساعد الأعمال على تقديم نفسها بمستوى أعلى.',
  },
};

export const trustPoints = {
  en: [
    'Strategy-led structure, not just visual decoration',
    'Professional copywriting tailored for conversion',
    'Responsive development built with scalable standards',
    'Design choices aligned with serious business positioning',
  ],
  ar: [
    'بنية مدفوعة بالاستراتيجية، وليس مجرد زخرفة بصرية',
    'كتابة إبداعية احترافية مصممة للتحويل',
    'تطوير متجاوب مبني بمعايير قابلة للتوسع',
    'خيارات تصميم متوافقة مع التموضع التجاري الجاد',
  ],
};

export const ctaContent = {
  en: {
    eyebrow: "Let's build something strong",
    title: 'Give your business a website that looks premium, feels intentional, and earns trust quickly.',
    p: 'Whether you are launching a café, building a startup presence, or presenting an educational product, 2youdev can craft a website that supports your goals from the first impression.',
    cta1: 'Book a project call',
    cta2: 'Explore our services',
    whyLabel: 'Why businesses choose us',
  },
  ar: {
    eyebrow: 'لنبني شيئاً قوياً معاً',
    title: 'امنح عملك موقعاً يبدو متميزاً ومقصوداً ويكسب الثقة بسرعة.',
    p: 'سواء كنت تطلق مقهى أو تبني حضوراً لشركة ناشئة أو تقدم منتجاً تعليمياً، يمكن لـ 2youdev صياغة موقع يدعم أهدافك من الانطباع الأول.',
    cta1: 'احجز مكالمة مشروع',
    cta2: 'استعرض خدماتنا',
    whyLabel: 'لماذا تختارنا الأعمال',
  },
};

export const contactContent = {
  en: {
    eyebrow: 'Contact',
    title: "Let's talk about the website your business actually deserves.",
    p: 'If you want a premium website that helps your business look more established, trustworthy, and ready for growth, 2youdev is ready to help.',
    formLabel: 'Project request',
    nameLabel: 'Your name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email',
    businessLabel: 'Business type',
    businessPlaceholder: 'Café, startup, teacher, company...',
    detailsLabel: 'Project details',
    detailsPlaceholder: 'Tell us what you need, what kind of website you want, and your goals.',
    submitBtn: 'Send inquiry',
  },
  ar: {
    eyebrow: 'تواصل معنا',
    title: 'لنتحدث عن الموقع الذي يستحقه عملك فعلاً.',
    p: 'إذا كنت تريد موقعاً متميزاً يساعد عملك على الظهور بمظهر أكثر رسوخاً وجدارة بالثقة واستعداداً للنمو، فـ 2youdev مستعدة للمساعدة.',
    formLabel: 'طلب مشروع',
    nameLabel: 'اسمك',
    namePlaceholder: 'أدخل اسمك الكامل',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    businessLabel: 'نوع العمل',
    businessPlaceholder: 'مقهى، شركة ناشئة، معلم، شركة...',
    detailsLabel: 'تفاصيل المشروع',
    detailsPlaceholder: 'أخبرنا بما تحتاجه، ونوع الموقع الذي تريده، وأهدافك.',
    submitBtn: 'إرسال الاستفسار',
  },
};

export const footerContent = {
  en: {
    tagline: 'Premium websites for modern businesses',
    p: 'Building modern websites for startups, cafés, restaurants, educators, and brands that want a stronger digital presence.',
  },
  ar: {
    tagline: 'مواقع متميزة للأعمال الحديثة',
    p: 'نبني مواقع حديثة للشركات الناشئة والمقاهي والمطاعم والمعلمين والعلامات التجارية التي تريد حضوراً رقمياً أقوى.',
  },
};

export const contactMethods = [
  {
    label: { en: 'Email', ar: 'البريد الإلكتروني' },
    value: '2youdev@gmail.com',
    href: 'mailto:2youdev@gmail.com',
  },
  {
    label: { en: 'Instagram', ar: 'إنستغرام' },
    value: '@2you.dev',
    href: 'https://www.instagram.com/2you.dev?igsh=MThpMnRjOTFtbzZoeg%3D%3D&utm_source=qr',
  },
  {
    label: { en: 'LinkedIn', ar: 'لينكد إن' },
    value: '2you-dev',
    href: 'https://www.linkedin.com/in/2you-dev-a41418401?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
];
