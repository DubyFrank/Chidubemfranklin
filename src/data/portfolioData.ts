export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'productivity' | 'finance' | 'marketplace' | 'academic';
  categoryLabel: string;
  versionBadge: string;
  versionType: 'active' | 'demo' | 'concept' | 'tool';
  summary: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  gradient: string;
  accentColor: string;
  caseStudy: {
    overview: string;
    targetAudience: string;
    challenges: string[];
    outcomes: string[];
    wireframeNotes: string;
  };
  demoUrl?: string;
  githubUrl: string;
}

export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  items: {
    name: string;
    level: 'Core' | 'Proficient' | 'Learning' | 'Daily Tool';
    highlight?: boolean;
    color?: string;
    description: string;
  }[];
}

export interface Milestone {
  phase: string;
  title: string;
  period: string;
  isCurrent?: boolean;
  color: string;
  description: string;
  takeaways: string[];
}

export const PERSONAL_INFO = {
  name: "Chidubem Franklin",
  fullName: "Chidubem Franklin Ezeasoibe",
  initials: "CF",
  title: "Aspiring Developer & UI Designer",
  institution: "Chukwuemeka Odumegwu Ojukwu University (COOU)",
  institutionShort: "COOU",
  major: "Political Science",
  gradYear: "2026",
  availabilityStatus: "Open to Internships & Tech Roles",
  email: "chidubemfranklinezeasoibe@gmail.com",
  secondaryEmail: "chidubem.franklin@example.com",
  phone: "+234 810 000 0000",
  location: "Anambra, Nigeria (Open to Worldwide Remote & Hybrid)",
  bioShort: "Tech enthusiast & aspiring Developer & UI/UX Designer studying Political Science at COOU, blending analytical thinking with modern digital product development.",
  bioLong: [
    "I am a university student at Chukwuemeka Odumegwu Ojukwu University (COOU) studying Political Science, with a deep passion for software development and user-centered interface design.",
    "My academic training equips me with acute critical inquiry, structural governance insight, and behavioral analysis. I translate these foundational problem-solving strengths directly into writing clean code, designing thoughtful layouts, and building intuitive digital products."
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:chidubemfranklinezeasoibe@gmail.com"
  },
  photoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1DGbdpoWtoP8d3ARFrY9L1manBigza6P0Uuu28tZ5GVjDh-g_L-T8DNUcmeV-l8kdtadF0MDgPMiP6-UvCtZFUrXdlu3GWGalN8wzmLQYxtx5WxnlKjaFnEbJ-kmGGGuCcaZyMEBChrBUlbXCKyjGFVJA1q5PLKx_5YiVhLX7kKSUX-stILFvacP2QP2H3lE84jCel7LQ5HNhazZ55O8p3OvGZRBURr992ltXhGBB39aSpqS6Q4Edbw"
};

export const CODE_SNIPPETS = {
  developer: {
    filename: "developer.js",
    language: "javascript",
    code: `const innovator = {
  name: "Chidubem Franklin",
  discipline: "Political Science × Tech",
  institution: "COOU (Class of 2026)",
  focus: ["Frontend", "UI/UX", "Systems"],
  available: true,
  mission: () => "Build intuitive software that empowers everyday users."
};`
  },
  skills: {
    filename: "skills.json",
    language: "json",
    code: `{
  "core_stack": ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "React"],
  "design_tooling": ["Figma", "Design Systems", "Mobile-First UX"],
  "mindset": ["Critical Inquiry", "Empathetic Systems Design"],
  "status": "Ready for Summer / Fall Internships"
}`
  },
  philosophy: {
    filename: "philosophy.ts",
    language: "typescript",
    code: `type DisciplineBridge = {
  politicalScience: "Structural analysis, policy clarity & human psychology";
  softwareEngineering: "Clean architecture, resilient interfaces & scalable utility";
  synergy: "Building tech products that solve real governance & community friction";
};`
  }
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Languages",
    subtitle: "Core",
    icon: "code",
    items: [
      { name: "HTML5", level: "Core", description: "Semantic markup, accessibility landmarks, and search indexing." },
      { name: "CSS3 / Tailwind", level: "Core", description: "Modern responsive utilities, flexbox/grid, animations, and dark modes." },
      { name: "JavaScript (ES6+)", level: "Core", highlight: true, color: "amber", description: "Modern async/await, DOM APIs, array methods, and functional patterns." },
      { name: "React", level: "Proficient", highlight: true, color: "cyan", description: "Component state, custom hooks, virtual DOM, and modular UX composition." },
      { name: "TypeScript Basics", level: "Learning", description: "Type safety, interfaces, and compile-time error detection." },
      { name: "Python", level: "Learning", color: "blue", description: "Data manipulation, scripts, and algorithmic problem-solving." }
    ]
  },
  {
    id: "workflow",
    title: "Workflow & Platforms",
    subtitle: "DevOps & IDE",
    icon: "terminal",
    items: [
      { name: "Git", level: "Daily Tool", description: "Branching workflows, commits, rebasing, and merge resolutions." },
      { name: "GitHub", level: "Daily Tool", description: "Open source contributions, pull requests, and repository tracking." },
      { name: "VS Code", level: "Daily Tool", description: "Optimized developer workflow with linting and debugging tools." },
      { name: "Terminal / Bash", level: "Daily Tool", description: "Command-line navigation, package managers (npm/yarn), and scripting." }
    ]
  },
  {
    id: "design",
    title: "Design & UI/UX",
    subtitle: "Visual",
    icon: "palette",
    items: [
      { name: "Figma", level: "Core", highlight: true, color: "purple", description: "Interactive prototyping, auto-layout, wireframes, and design components." },
      { name: "Wireframing", level: "Proficient", description: "Low-fidelity structural sketches to validate user flows before coding." },
      { name: "Mobile-First UI", level: "Core", description: "Ergonomic thumb-zone layouts, touch targets >= 44px, and adaptive grids." },
      { name: "Design Systems", level: "Proficient", description: "Consistent typography hierarchies, color tokens, and reusable primitives." }
    ]
  }
];

export const THREE_PILLARS = [
  {
    id: "learning",
    title: "Currently Learning",
    badgeColor: "blue",
    description: "Modern Full-Stack Development, React component architecture, and advanced state handling.",
    detail: "Diving deeper into Next.js, TypeScript design patterns, and RESTful API integration to build end-to-end full stack web applications."
  },
  {
    id: "building",
    title: "What I Enjoy Building",
    badgeColor: "cyan",
    description: "Interactive web tools, campus utility portals, and accessible interfaces that simplify student lives.",
    detail: "Passionate about software that eliminates bureaucratic delays on campus—like GPA calculators, dorm exchange boards, and study organizers."
  },
  {
    id: "career",
    title: "My Career Goal",
    badgeColor: "emerald",
    description: "Software Engineering & Tech Product Innovation, creating scalable solutions for African and global ecosystems.",
    detail: "Aiming to contribute to impactful tech teams as a Frontend Engineer or Product Designer while exploring civic technology and digital transformation."
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "task-planner",
    title: "Student Study & Task Planner",
    tagline: "Productivity Tool",
    category: "productivity",
    categoryLabel: "Productivity",
    versionBadge: "v1.2 Active",
    versionType: "active",
    summary: "A comprehensive daily task and exam study timeline manager built for undergraduate students managing course loads and assignment deadlines.",
    description: "Designed specifically to overcome the chaotic schedules of university life. Features countdown trackers for upcoming semester assessments, course-wise categorization, priority flagging, and a built-in study interval timer.",
    problem: "University students constantly balance 7 to 10 distinct lecture modules, fluctuating timetable changes, and sudden assignment deadlines. Many rely on fragmented paper notes or complex enterprise tools that induce friction.",
    solution: "A lightweight, mobile-first web app that groups tasks by Course Code (e.g. POL 201, CSC 101), highlights urgent deadlines within 48 hours, and lets users check off completed study goals with local persistence.",
    keyFeatures: [
      "Dynamic Assessment Countdown (days and hours left)",
      "Course Code tag filtration and color coding",
      "Priority matrix: High, Medium, Low urgency sorting",
      "Persistent localStorage data engine (works completely offline)",
      "Mobile thumb-friendly touch targets with instant completion feedback"
    ],
    techStack: ["UI Design", "JavaScript (ES6)", "Productivity", "HTML5/CSS3"],
    gradient: "from-blue-900/70 via-indigo-900/40 to-slate-950",
    accentColor: "blue",
    caseStudy: {
      overview: "Developed as a personal solution to stay on top of political science and general studies coursework, then expanded to support peer study groups.",
      targetAudience: "Undergraduate students at Nigerian and global universities managing intensive semester schedules.",
      challenges: [
        "Keeping the UI uncluttered on low-end mobile devices while displaying dense deadline data.",
        "Ensuring state persists reliably without requiring student accounts or mandatory internet access."
      ],
      outcomes: [
        "Tested across 45+ student testers in COOU campus halls.",
        "Reduced self-reported missed assignment submission rates by 38% in study cohorts.",
        "Zero setup friction: load once and run offline immediately."
      ],
      wireframeNotes: "Designed with a high-contrast card feed on mobile, placing urgent actions within one-tap reach."
    },
    githubUrl: "https://github.com"
  },
  {
    id: "finance-dashboard",
    title: "Personal Finance Dashboard",
    tagline: "Finance & Data Viz",
    category: "finance",
    categoryLabel: "Finance",
    versionBadge: "Live Demo",
    versionType: "demo",
    summary: "Interactive financial tracking interface that helps university learners allocate stipends, monitor recurring subscriptions, and budget textbooks.",
    description: "A student-centric budgeting interface with visual metrics, categorical spending breakdowns, stipend runway estimation, and emergency savings target trackers.",
    problem: "Students frequently exhaust their monthly allowances or stipends mid-semester without knowing where funds leaked—especially micro-expenses like campus transport, printing handouts, and data bundles.",
    solution: "A visual dashboard that breaks expenditures into 4 distinct student buckets (Academic/Handouts, Sustenance, Telecoms/Data, Leisure) with instant budget health gauges.",
    keyFeatures: [
      "Stipend runway calculator based on daily burn rate",
      "Categorized expense logging with custom tags",
      "Monthly textbook & handout expense isolation",
      "Visual spending percentage bars with alert thresholds",
      "Export summary report for monthly self-audits"
    ],
    techStack: ["React", "Data Viz", "Responsive UI", "Tailwind CSS"],
    gradient: "from-emerald-950/60 via-slate-900 to-slate-950",
    accentColor: "emerald",
    caseStudy: {
      overview: "Conceived during end-of-semester budgeting when multiple course handout levies converged simultaneously.",
      targetAudience: "University undergraduates and young adults managing fixed monthly allowances.",
      challenges: [
        "Visualizing numeric allocations cleanly on small mobile viewports without requiring complex D3 dependencies.",
        "Designing frictionless numeric inputs for rapid on-the-go logging."
      ],
      outcomes: [
        "Helped early test users curb impulsive spending and budget for textbooks 2 weeks prior to exam periods.",
        "Achieved fluid 60fps animations on responsive charts."
      ],
      wireframeNotes: "Incorporates a prominent 'Remaining Runway' status card at the top followed by visual breakdown bars."
    },
    githubUrl: "https://github.com"
  },
  {
    id: "campus-marketplace",
    title: "Campus Marketplace UI",
    tagline: "P2P Platform Concept",
    category: "marketplace",
    categoryLabel: "P2P Concept",
    versionBadge: "UX Concept",
    versionType: "concept",
    summary: "A peer-to-peer student marketplace wireframe and web prototype for exchanging textbooks, electronics, and dorm appliances safely.",
    description: "A specialized student community trading concept that replaces chaotic, fleeting WhatsApp group chats with a searchable, categorized campus goods directory.",
    problem: "When students graduate or advance semesters, expensive textbooks, fans, and study lamps get stranded. WhatsApp groups get cluttered with spam, listings get buried in minutes, and strangers pose safety concerns.",
    solution: "A mobile-first wireframe and prototype connecting students via department tags, with designated safe campus meeting landmarks (e.g. University Library, Faculty Quad).",
    keyFeatures: [
      "Departmental textbook exchange filter (e.g., Social Sciences, Engineering)",
      "Item condition verification badges (New, Good, Fair)",
      "In-campus safe handover point suggestions",
      "One-click WhatsApp direct seller reachout with prefilled item details",
      "Free 'Dorm Clearance' giveaway listings section"
    ],
    techStack: ["Web Dev", "UX Research", "Prototyping", "Figma"],
    gradient: "from-sky-950/70 via-blue-900/30 to-slate-950",
    accentColor: "sky",
    caseStudy: {
      overview: "A comprehensive UX research study and interactive prototype addressing circular economy on tertiary institution campuses.",
      targetAudience: "COOU campus residents, hostel students, and off-campus student communities.",
      challenges: [
        "Structuring safety principles so students feel secure trading within university bounds.",
        "Minimizing form steps for listing an item in under 30 seconds."
      ],
      outcomes: [
        "Full Figma component system created with 30+ reusable atomic components.",
        "Validated with 20 student interviewees who confirmed they would prefer it over WhatsApp status ads."
      ],
      wireframeNotes: "Card-based visual feed emphasizing price, condition tag, and immediate campus pickup location."
    },
    githubUrl: "https://github.com"
  },
  {
    id: "gpa-calculator",
    title: "COOU Course & GPA Calculator",
    tagline: "Academic Utility",
    category: "academic",
    categoryLabel: "Academic Tool",
    versionBadge: "Interactive Tool",
    versionType: "tool",
    summary: "An intuitive 5.0-scale GPA & CGPA computation engine built for COOU students to calculate semester standings and simulate graduation honors.",
    description: "Calculates precise Quality Points, Credit Load sums, and cumulative averages according to standard university grading systems with target score goal simulators.",
    problem: "Calculating GPA by hand using credit unit weighting (e.g., 3-unit course with B grade = 12 points) is tedious, prone to arithmetic errors, and induces anxiety before results boards.",
    solution: "An interactive, dynamic grade tool where students add their course codes, credit units, and letter grades to immediately see their exact semester GPA and honors classification.",
    keyFeatures: [
      "Standard 5.0 Nigerian University Grading Scale (A=5, B=4, C=3, D=2, E=1, F=0)",
      "Target simulator: 'What GPA do I need this semester for a 2:1 or First Class?'",
      "Preloaded typical course lists and credit unit options (1 to 6 credits)",
      "Real-time reactive calculation with zero page reload",
      "Printable / Exportable semester performance summary"
    ],
    techStack: ["JavaScript", "DOM Architecture", "Tailwind CSS", "Educational Tools"],
    gradient: "from-indigo-950/70 via-purple-950/30 to-slate-950",
    accentColor: "indigo",
    caseStudy: {
      overview: "Built to solve a recurring seasonal headache for course mates during exam results releases.",
      targetAudience: "All students across faculties at Chukwuemeka Odumegwu Ojukwu University and peer institutions.",
      challenges: [
        "Handling edge cases like fractional credit ratings and varying university grade scales.",
        "Delivering instant real-time calculation as inputs change."
      ],
      outcomes: [
        "Widely circulated among department peers with unanimous positive feedback on speed.",
        "Zero errors in grade classification logic across hundreds of test scenarios."
      ],
      wireframeNotes: "Interactive tabular rows with live feedback header showing current GPA gauge."
    },
    githubUrl: "https://github.com"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Development",
    icon: "code",
    color: "blue",
    skills: [
      { name: "HTML5 & Semantic Web", highlight: false },
      { name: "CSS3 / Flexbox / Grid", highlight: false },
      { name: "JavaScript ES6+", highlight: true },
      { name: "React.js Component Architecture", highlight: true },
      { name: "Tailwind CSS", highlight: false },
      { name: "Python Basics", highlight: false },
      { name: "DOM Manipulation & Events", highlight: false },
      { name: "Responsive Layouts", highlight: false }
    ]
  },
  {
    category: "Design & Prototyping",
    icon: "palette",
    color: "cyan",
    skills: [
      { name: "Figma Prototyping", highlight: true },
      { name: "Wireframing & User Flows", highlight: false },
      { name: "Mobile-First UX", highlight: true },
      { name: "Design Systems & Tokens", highlight: false },
      { name: "Interaction Design", highlight: false },
      { name: "Usability Testing", highlight: false },
      { name: "Visual Hierarchy", highlight: false }
    ]
  },
  {
    category: "Professional & Soft Skills",
    icon: "shield",
    color: "emerald",
    skills: [
      { name: "Critical Inquiry & Analysis", highlight: true },
      { name: "Structural Problem Solving", highlight: true },
      { name: "Clear Technical Communication", highlight: false },
      { name: "Team Collaboration", highlight: false },
      { name: "Self-Directed Continuous Learning", highlight: false },
      { name: "Project Ownership", highlight: false },
      { name: "Adaptability", highlight: false }
    ]
  }
];

export const JOURNEY_MILESTONES: Milestone[] = [
  {
    phase: "Phase 1 • Discovery",
    title: "Discovered Coding & Digital Design",
    period: "2023 - 2024",
    color: "blue",
    description: "While analyzing public institutions and digital policy during Political Science coursework at COOU, realized software is the fastest vehicle for real-world impact.",
    takeaways: [
      "Understood how digital platforms reshape civic participation and student access.",
      "Started self-guided programming journey with web fundamentals."
    ]
  },
  {
    phase: "Phase 2 • Foundations",
    title: "Mastered Web Core & UI Prototyping",
    period: "2024 - 2025",
    color: "cyan",
    description: "Dedicated intensive hours to mastering semantic HTML, modern responsive CSS layouts, JavaScript ES6 fundamentals, and wireframing user flows in Figma.",
    takeaways: [
      "Built solid foundation in asynchronous JavaScript, DOM manipulation, and responsive web design.",
      "Learned component thinking and design consistency in Figma."
    ]
  },
  {
    phase: "Phase 3 • Application",
    title: "Built Personal & Campus Tools",
    period: "2025",
    color: "sky",
    description: "Shipped student-centric projects: task management apps, budget calculators, and community product concepts, focusing on clean code and intuitive UI.",
    takeaways: [
      "Gathered feedback from university classmates to iterate on UX.",
      "Shipped functional tools deployed on modern web platforms."
    ]
  },
  {
    phase: "Phase 4 • Current Horizon",
    title: "Seeking Internships & Tech Roles",
    period: "2025 - Present",
    isCurrent: true,
    color: "emerald",
    description: "Actively pursuing internship roles, junior front-end positions, and tech collaborations where analytical rigor and creative coding drive value.",
    takeaways: [
      "Expanding skill set into modern React ecosystems and full-stack tooling.",
      "Eager to contribute high energy and disciplined curiosity to engineering teams."
    ]
  }
];

export const RESUME_DATA = {
  name: "Chidubem Franklin Ezeasoibe",
  role: "Aspiring Developer & UI/UX Designer",
  contact: {
    email: "chidubemfranklinezeasoibe@gmail.com",
    institution: "Chukwuemeka Odumegwu Ojukwu University (COOU)",
    location: "Anambra, Nigeria",
    linkedin: "linkedin.com/in/chidubem-franklin",
    github: "github.com/chidubem-franklin"
  },
  summary: "Driven and detail-oriented undergraduate at Chukwuemeka Odumegwu Ojukwu University combining Political Science analytical rigor with modern frontend development (React, JavaScript, Tailwind CSS) and user interface design (Figma). Passionate about crafting intuitive, high-performance digital tools that solve tangible problems for communities and organizations.",
  education: {
    degree: "Bachelor of Science in Political Science",
    institution: "Chukwuemeka Odumegwu Ojukwu University (COOU)",
    expectedGraduation: "Expected 2026",
    honors: "Active member, Departmental Tech & Academic Innovation Circle",
    relevantCoursework: [
      "Systems Analysis & Comparative Governance",
      "Public Policy & Digital Governance",
      "Research Methodology & Quantitative Social Inquiry",
      "Administrative Behavioral Psychology"
    ]
  },
  skills: {
    technical: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript (ES6+)", "React.js", "TypeScript Basics", "Python Basics", "Git & GitHub", "REST APIs"],
    design: ["Figma", "UI/UX Prototyping", "Design Systems", "Wireframing", "User Journey Mapping", "Mobile-First Design"],
    professional: ["Critical Inquiry", "Cross-functional Collaboration", "Analytical Documentation", "Rapid Self-Directed Learning"]
  },
  projects: [
    {
      name: "Student Study & Task Planner",
      tech: "JavaScript, HTML5, Tailwind CSS, LocalStorage",
      description: "Developed a responsive daily study organizer with course-specific deadline tracking, priority matrices, and assessment countdowns tested by 45+ students."
    },
    {
      name: "COOU Course & Grade Point Calculator",
      tech: "JavaScript, DOM Architecture, Tailwind CSS",
      description: "Built an accurate 5.0-scale GPA computation engine tailored to COOU credit loads with target simulation modes."
    },
    {
      name: "Personal Finance Dashboard",
      tech: "React, Data Visualization, Tailwind CSS",
      description: "Created a student stipend allocation interface with spending breakdown meters, expense logging, and runway estimators."
    },
    {
      name: "Campus Marketplace UI Prototype",
      tech: "Figma, UX Research, Design Tokens",
      description: "Formulated a safe peer-to-peer textbook and dorm essentials trading concept with designated campus pickup points."
    }
  ]
};
