/* =========================================================
   PORTFOLIO MƏLUMATLARI / PORTFOLIO CONTENT
   Saytdakı bütün mətnlər buradadır. Yeni layihə, iş yeri və ya
   sertifikat əlavə etmək üçün sadəcə uyğun siyahıya yeni obyekt əlavə edin.
   Tarix formatı: "YYYY-MM" və ya "YYYY". Davam edirsə: "present".
   ========================================================= */
window.PORTFOLIO = {
  profile: {
    name: "Allahverdi İbrahimov",
    role: { az: "IT Layihə Meneceri | Junior RPA Developer", en: "IT Project Manager | Junior RPA Developer" },
    location: { az: "Bakı, Azərbaycan", en: "Baku, Azerbaijan" },
    photo: "assets/profile.jpg",
    cv: "assets/Allahverdi_Ibrahimov_CV.pdf",
    vcard: "assets/contact.vcf",
    email: "allahverdi.ibrahimov04@gmail.com",
    phone: "+994 70 563 98 90",
    whatsapp: "994705639890",
    linkedin: "https://www.linkedin.com/in/allahverdi-ibrahimov042/",
    github: "https://github.com/brhmv",
    intro: {
      az: "IT layihələrini ideyadan təhvilə qədər idarə edirəm — komandaları, qrafikləri və riskləri bir yerdə tutaraq biznes tələblərini işləyən məhsula çevirirəm.",
      en: "I lead IT projects from idea to delivery — keeping teams, timelines and risks aligned so business requirements become working products."
    },
    summary: {
      az: "Layihə idarəetməsi, biznes proseslərinin optimallaşdırılması və komanda liderliyi üzrə təcrübəli mütəxəssisəm. Özüm üçün yüksək standartlar qoyur, həm texniki, həm də idarəetmə bacarıqlarımı davamlı inkişaf etdirirəm. IT layihələrinin planlaşdırılması, icrası və monitorinqi ilə yanaşı, biznes proseslərinin təhlili və optimallaşdırılması üzrə ixtisaslaşmışam.",
      en: "I am an experienced professional in project management, business process optimization and team leadership. I set high standards for myself and continuously develop both my technical and managerial skills. Alongside planning, executing and monitoring IT projects, I specialize in analyzing and optimizing business processes."
    },
    stats: [
      { value: "4+", label: { az: "il təcrübə", en: "years of experience" } },
      { value: "10", label: { az: "seçilmiş layihə", en: "featured projects" } },
      { value: "23", label: { az: "sertifikat", en: "certifications" } }
    ],
    languages: [
      { name: { az: "Azərbaycan dili", en: "Azerbaijani" }, level: { az: "Ana dili", en: "Native" }, pct: 100 },
      { name: { az: "İngilis dili", en: "English" }, level: { az: "Yüksək", en: "Advanced" }, pct: 80 },
      { name: { az: "Rus dili", en: "Russian" }, level: { az: "Başlanğıc", en: "Elementary" }, pct: 30 }
    ]
  },

  experience: [
    {
      role: { az: "IT Layihə Meneceri", en: "IT Project Manager" },
      company: "TexnoCode MMC",
      start: "2026-06", end: "present",
      points: {
        az: [
          "Rəqəmsal məhsulların və veb platformaların hazırlanmasını tələblərin toplanması və planlamadan inkişaf, testləşdirmə və yekun təhvilə qədər idarə etdim.",
          "Kross-funksional komandaları koordinasiya etdim, layihə qrafiklərinə nəzarət etdim, risk və asılılıqları idarə edərək biznes tələbləri ilə texniki icra arasında uyğunluğu təmin etdim."
        ],
        en: [
          "Managed and coordinated the development of digital products and web platforms — from requirements gathering and planning to development, testing and final delivery.",
          "Coordinated cross-functional teams, monitored timelines, managed risks and dependencies, and kept business requirements aligned with technical implementation."
        ]
      },
      projects: ["Shakonn", "Sannfresh", "Adezula", "Nintel"]
    },
    {
      role: { az: "IT Layihə Meneceri", en: "IT Project Manager" },
      company: "Roarads",
      start: "2025-08", end: "2025-11",
      points: {
        az: [
          "Monday.com platformasında layihələri idarə etdim, tapşırıqları planlaşdırdım və komanda işini koordinasiya etdim.",
          "Google Ads, Meta Ads, SEO və sosial media reklamları kimi rəqəmsal marketinq xidmətlərinin icrasına nəzarət edib nəticələri optimallaşdırdım."
        ],
        en: [
          "Managed projects, planned tasks and coordinated teamwork on the Monday.com platform.",
          "Supervised delivery of digital marketing services — Google Ads, Meta Ads, SEO and social media ads — and optimized results."
        ]
      },
      projects: ["CanRoof Construction", "Pergomatic", "Shower Door WA", "Mercedes-Benz Azerbaijan", "Sea Breeze"]
    },
    {
      role: { az: "IT Layihə Meneceri", en: "IT Project Manager" },
      company: "SHI Studio",
      start: "2024-11", end: "2025-03",
      points: {
        az: ["İstifadə rahatlığı, ardıcıllıq və cəlbedici təcrübəyə fokuslanaraq istifadəçi yönümlü rəqəmsal məhsullar yaratdım."],
        en: ["Created user-centered digital products with a focus on usability, consistency and engaging experiences."]
      }
    },
    {
      role: { az: "IT Layihə Meneceri", en: "IT Project Manager" },
      company: "Project Management Systems",
      start: "2024-01", end: "2024-04",
      points: {
        az: [
          "IT layihələrinin planlaşdırılması, icrası və monitorinqində iştirak etdim.",
          "Jira və Trello kimi layihə idarəetmə alətləri ilə tapşırıqları izlədim."
        ],
        en: [
          "Took part in planning, executing and monitoring IT projects.",
          "Tracked tasks with project management tools such as Jira and Trello."
        ]
      },
      projects: ["Melhem Hospital"]
    },
    {
      role: { az: "IT Layihə Meneceri", en: "IT Project Manager" },
      company: "Eazii Startup Acceleration Center",
      start: "2022-04", end: "2024-07",
      points: {
        az: [
          "Bir neçə startap layihəsini ideyanın formalaşmasından bazara çıxışa qədər idarə edərək vaxtında və uğurlu nəticələr təmin etdim.",
          "Agile metodologiyalarından istifadə edərək planlama, risklərin idarə olunması və icra mərhələlərində komandalara rəhbərlik etdim."
        ],
        en: [
          "Managed multiple startup projects from idea formation to market launch, ensuring timely and successful outcomes.",
          "Led teams through planning, risk management and execution using agile methodologies to hit goals and deadlines."
        ]
      }
    },
    {
      role: { az: "Frontend Təlimçisi", en: "Frontend Instructor" },
      company: "Baku American Center",
      start: "2023", end: "2024",
      points: {
        az: [
          "HTML, CSS, JavaScript və React.js kimi müasir frontend texnologiyaları ilə istifadəçi dostu veb interfeyslər hazırladım.",
          "Komanda üzvləri ilə birlikdə tam funksional və adaptiv veb saytlar təhvil verdim."
        ],
        en: [
          "Developed user-friendly web interfaces with modern frontend technologies — HTML, CSS, JavaScript and React.js.",
          "Collaborated with team members to deliver fully functional, responsive websites."
        ]
      }
    }
  ],

  /* category: "web" | "marketing" | "it" */
  projects: [
    { name: "Shakonn", url: "https://www.shakonn.com", company: "TexnoCode MMC", category: "web" },
    { name: "Sannfresh", url: "https://sannfresh.com", company: "TexnoCode MMC", category: "web" },
    { name: "Adezula", url: "https://adezula.com", company: "TexnoCode MMC", category: "web" },
    { name: "Nintel", url: "https://nintel.net", company: "TexnoCode MMC", category: "web" },
    { name: "Melhem Hospital", url: "https://www.melhemhospital.com", company: "Project Management Systems", category: "web" },
    { name: "Mercedes-Benz Azerbaijan", url: "https://www.mercedes-benz.com.az", company: "Roarads", category: "marketing" },
    { name: "CanRoof Construction", url: "https://canroofconstruction.com", company: "Roarads", category: "marketing" },
    { name: "Pergomatic", url: "https://pergomatic.com/louver-products/", company: "Roarads", category: "marketing" },
    { name: "Shower Door WA", url: "https://showerdoorwa.com", company: "Roarads", category: "marketing" },
    { name: "Sea Breeze", url: "https://seabreeze.az", company: "Roarads", category: "marketing" }
  ],
  projectCategories: {
    web: {
      label: { az: "Veb platforma", en: "Web platform" },
      desc: {
        az: "Platformanın tələblərdən təhvilə qədər planlaşdırılması, inkişafı və təhvilinin idarə olunması.",
        en: "Managed planning, development and delivery of the platform from requirements to launch."
      }
    },
    marketing: {
      label: { az: "Rəqəmsal marketinq", en: "Digital marketing" },
      desc: {
        az: "Google Ads, Meta Ads, SEO və sosial media kampaniyalarının idarə olunması və optimallaşdırılması.",
        en: "Managed and optimized Google Ads, Meta Ads, SEO and social media campaigns."
      }
    },
    it: {
      label: { az: "IT layihəsi", en: "IT project" },
      desc: {
        az: "Layihənin planlaşdırılması, icrası və monitorinqi; Jira və Trello ilə tapşırıqların izlənməsi.",
        en: "Planning, execution and monitoring; task tracking with Jira and Trello."
      }
    }
  },

  skills: [
    {
      title: { az: "Layihə idarəetməsi", en: "Project management" },
      items: ["Agile Project Management", "Stakeholder Management", "Risk Management", "Business Analysis", "Process Optimization", "Six Sigma Yellow Belt"]
    },
    {
      title: { az: "Alətlər", en: "Tools" },
      items: ["Jira", "Trello", "Asana", "Smartsheet", "Monday.com", "Microsoft Office"]
    },
    {
      title: { az: "Avtomatlaşdırma", en: "Automation" },
      items: ["RPA", "UiPath (Junior)"]
    },
    {
      title: { az: "Proqramlaşdırma", en: "Development" },
      items: ["Python", "C#", ".NET", "EF Core", "C++", "JavaScript", "React.js", "Node.js", "React Native", "HTML5", "CSS3", "jQuery"]
    },
    {
      title: { az: "Verilənlər bazası və infrastruktur", en: "Data & infrastructure" },
      items: ["MS SQL", "PostgreSQL", "MySQL", "Cloud", "DevOps", "System & Network Programming"]
    },
    {
      title: { az: "Şəxsi keyfiyyətlər", en: "Soft skills" },
      items: {
        az: ["Liderlik", "Effektiv ünsiyyət", "Komanda işi", "Vaxtın idarə olunması", "Problem həlli", "Qərar qəbulu", "Tənqidi düşüncə", "Uyğunlaşma"],
        en: ["Leadership", "Effective communication", "Teamwork", "Time management", "Problem solving", "Decision making", "Critical thinking", "Adaptability"]
      }
    }
  ],

  education: [
    /* featured: true olan təhsil ali təhsil kimi ayrıca, fərqlənən kartda göstərilir */
    {
      featured: true,
      level: { az: "Magistratura", en: "Master's degree" },
      degree: { az: "Süni İntellekt üzrə magistr (SABAH qrupları)", en: "Master of Artificial Intelligence (SABAH Groups)" },
      school: { az: "Azərbaycan Dövlət Neft və Sənaye Universiteti", en: "Azerbaijan State Oil and Industry University" },
      start: "2025", end: "present"
    },
    {
      featured: true,
      level: { az: "Bakalavriat", en: "Bachelor's degree" },
      degree: { az: "İnformasiya Texnologiyaları üzrə bakalavr", en: "Bachelor of Information Technology" },
      school: { az: "Azərbaycan Dövlət Neft və Sənaye Universiteti", en: "Azerbaijan State Oil and Industry University" },
      start: "2021", end: "2025"
    },
    {
      degree: { az: "Proqram Təminatının Hazırlanması", en: "Software Development" },
      school: { az: "Step IT Academy", en: "Step IT Academy" },
      start: "2021", end: "2024"
    },
    {
      degree: { az: "IT Layihələrin İdarə Olunması", en: "IT Project Management" },
      school: { az: "Turing Academy", en: "Turing Academy" },
      start: "2024-11", end: "2025-03"
    },
    {
      degree: { az: "IT Layihələrin İdarə Olunması", en: "IT Project Management" },
      school: { az: "Tab Academy", en: "Tab Academy" },
      start: "2024-06", end: "2024-10"
    },
    {
      degree: { az: "Startap Layihələrin İdarə Olunması", en: "Startup Project Management" },
      school: { az: "İnnovasiya və Rəqəmsal İnkişaf Agentliyi (Startup Bootcamp)", en: "Digital Innovation and Development Agency (Startup Bootcamp)" },
      start: "2023", end: "2023"
    }
  ],

  certifications: [
    { issuer: "Google", items: [
      "Foundations of Project Management",
      "Agile Project Management",
      "Project Initiation: Starting a Successful Project",
      "Project Planning: Putting It All Together"
    ]},
    { issuer: "Coursera", items: [
      "Business Analysis & Process Management",
      "Project Scheduling: Estimate Activity Durations",
      "Investment Risk Management",
      "Jira"
    ]},
    { issuer: "Great Learning", items: [
      "Project Management",
      "Jira Project Management",
      "Human Capital Management"
    ]},
    { issuer: "HackerRank", items: [
      "C# (Basic)",
      "Python (Basic)",
      "SQL (Basic)",
      "CSS"
    ]},
    { issuer: { az: "Digər", en: "Other" }, items: [
      "Six Sigma Yellow Belt",
      "CompTIA Data+ (DA0-002) Cert Prep",
      "Complete Guide to UiPath RPA Development",
      "Teknofest Azerbaijan",
      "Digital Development and Innovation Center — Startup Management Bootcamp",
      "Youth Support and Development Center — Project Management",
      "Youth Support and Development Center — Project Planning and Preparing",
      "Migration Volunteer — Leadership Academy"
    ]}
  ]
};
