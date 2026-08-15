import type { Project, Experience, Education, TechItem, StatItem } from './types';

export const PERSONAL_INFO = {
  name: "Rishi Hotwani",
  role: "Software Engineer",
  tagline: "Building digital experiences that solve real problems.",
  bioShort: "I’m Rishi Hotwani, a Software Engineer focused on building scalable full-stack applications with React, Java, Spring Boot and AI.",
  bioLong: [
    "I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like React.js and Spring Boot. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.",
    "With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Currently, I am diving deeper into backend development with Spring Boot to expand my skill set and deliver powerful, server-side solutions.",
    "Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives."
  ],
  availability: "Open to Software Engineering Opportunities",
  socials: {
    github: "https://github.com/rishihotwani",
    linkedin: "https://www.linkedin.com/in/rishi-h-a04738265",
    email: "rishiii787@gmail.com",
    resume: "#resume",
  }
};

export const HIGHLIGHT_STATS: StatItem[] = [
  { label: "Academics", value: "8.38 CGPA", subtext: "BE in Information Technology" },
  { label: "Graduation", value: "2022–2026", subtext: "Gujarat Technological University" },
  { label: "Featured Work", value: "4+ Major Projects", subtext: "Shipped & Live Deployments" },
  { label: "Core Focus", value: "Full-Stack + AI", subtext: "React, Spring Boot, ML Models" }
];

export const EDUCATION_DATA: Education = {
  institution: "Gujarat Technological University",
  degree: "BE in Information Technology",
  grade: "8.38 CGPA",
  period: "2022 – 2026",
  details: [
    "Comprehensive coursework in Data Structures, Algorithms, Distributed Systems, Database Management, and Object-Oriented Design.",
    "Consistent high academic standing (8.38 CGPA) while actively shipping full-stack production projects."
  ]
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "asite-ui-intern",
    company: "Asite",
    role: "UI Intern",
    period: "July 2025 – October 2025",
    summary: "Contributed to Adrive, Asite’s cloud-based file management platform within a Common Data Environment (CDE), enhancing frontend functionality, usability, and application reliability.",
    responsibilities: [
      "Worked on JavaScript-based feature enhancements and debugging, improving the robustness of file management and revision workflows.",
      "Refactored legacy JavaScript components to reduce cognitive complexity and improve code readability, maintainability, and development efficiency.",
      "Implemented UI and asynchronous workflow improvements using Promises, async/await, and event propagation."
    ],
    techStack: ["JavaScript (ES6+)", "UI Architecture", "Asynchronous JavaScript", "CDE Workflows", "Git"],
    location: "Ahmedabad, India"
  }
];

export const TECH_STACK: TechItem[] = [
  {
    name: "React.js",
    category: "Frontend",
    description: "Component architecture, state management, hooks & high-performance UI rendering",
    proficiency: "Core Frontend Library",
    iconName: "Atom",
    color: "#61DAFB"
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "ES6+, asynchronous event loops, DOM manipulation & modern browser APIs",
    proficiency: "Core Language",
    iconName: "FileCode",
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Strict static typing, interfaces, generic types & scalable frontend systems",
    proficiency: "Type-Safe Architecture",
    iconName: "FileCode2",
    color: "#3178C6"
  },
  {
    name: "Java",
    category: "Backend",
    description: "Object-oriented design, multi-threading, JVM internals & enterprise backend patterns",
    proficiency: "Core Enterprise Language",
    iconName: "Coffee",
    color: "#EA2D2E"
  },
  {
    name: "Spring Boot",
    category: "Backend",
    description: "Enterprise microservices, Spring Security, dependency injection, JPA/Hibernate & REST APIs",
    proficiency: "Backend Framework",
    iconName: "Server",
    color: "#6DB33F"
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "API contract design, status codes, JWT authentication, rate limiting & error handling",
    proficiency: "API Architecture",
    iconName: "Network",
    color: "#009688"
  },
  {
    name: "AI Integrations",
    category: "AI / Data",
    description: "LLM integration, Retrieval-Augmented Generation (RAG), embeddings & AI workflow pipelines",
    proficiency: "Generative AI & RAG",
    iconName: "Sparkles",
    color: "#A855F7"
  },
  {
    name: "Python",
    category: "AI / Data",
    description: "Data analysis, machine learning pipelines, predictive modeling & script automation",
    proficiency: "Data & ML Language",
    iconName: "Binary",
    color: "#3776AB"
  },
  {
    name: "Scikit-learn",
    category: "AI / Data",
    description: "Classification, regression, SVD matrix factorization, TF-IDF vectorization & evaluation",
    proficiency: "ML Library",
    iconName: "Cpu",
    color: "#F7931E"
  },
  {
    name: "MySQL",
    category: "Database / Tools",
    description: "Relational schema design, normalization, indexing, ACID transactions & complex query optimization",
    proficiency: "Relational Database",
    iconName: "Database",
    color: "#4479A1"
  },
  {
    name: "Git",
    category: "Database / Tools",
    description: "Version control, branching strategies, rebase workflows & merge resolution",
    proficiency: "Version Control",
    iconName: "GitBranch",
    color: "#F05032"
  },
  {
    name: "GitHub",
    category: "Database / Tools",
    description: "Collaborative workflows, CI/CD automation, pull request reviews & releases",
    proficiency: "DevOps & Collaboration",
    iconName: "Github",
    color: "#FFFFFF"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "Spring Security", "JPA / Hibernate", "Maven"]
  },
  {
    title: "AI / Data",
    skills: ["AI Integrations", "Python", "Scikit-learn", "Pandas", "NumPy", "RAG Pipelines", "TF-IDF / SVD"]
  },
  {
    title: "Database / Tools",
    skills: ["MySQL", "Git", "GitHub", "Chrome APIs", "Streamlit", "Postman", "Vercel"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "clinch-crm",
    title: "Clinch CRM",
    tagline: "AI-Powered Full-Stack Enterprise Customer Relationship Management",
    description: "A full-stack AI-powered CRM built with React, TypeScript, Java Spring Boot, and MySQL to streamline lead, contact, deal, and sales pipeline management.",
    longDescription: "Clinch CRM redefines modern relationship management by pairing robust enterprise architecture with an intelligent AI copilot. Designed as a multi-tenant SaaS application, it handles the end-to-end sales lifecycle—from initial lead ingestion and real-time deal stage transitions to RAG-grounded conversational insights for account executives.",
    category: "Full-Stack",
    layoutType: "featured",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "MySQL", "AI RAG", "Spring Security", "JWT"],
    metrics: [
      { label: "Architecture", value: "Multi-Tenant SaaS" },
      { label: "Intelligence", value: "RAG Knowledge Base" },
      { label: "Security", value: "JWT + RBAC" },
      { label: "Analytics", value: "Real-time BI" }
    ],
    highlights: [
      "JWT authentication & fine-grained role-based access control (RBAC)",
      "Interactive analytics dashboards for sales forecasting & conversion tracking",
      "AI-driven sales insights with contextual lead score forecasting",
      "RAG-powered conversational knowledge base for instant deal retrieval",
      "Multi-tenant SaaS architecture with clean MySQL schema isolation",
      "Real-time business intelligence pipeline"
    ],
    problem: "Traditional CRMs are notoriously bloated, difficult to navigate, and separate day-to-day data entry from actionable predictive insights.",
    solution: "Clinch CRM unites an ultra-responsive React & TypeScript interface with a battle-tested Spring Boot backend and an embedded RAG AI engine that delivers instant answers about accounts and pipeline health.",
    architecture: [
      "Frontend: React 18 SPA with TypeScript, Tailwind CSS, and optimized cached state",
      "Backend: Java Spring Boot REST microservices with Spring Data JPA & Spring Security",
      "AI Pipeline: RAG engine with vector embeddings and prompt orchestration for deal analytics",
      "Database: MySQL relational persistence with indexing on high-frequency query paths"
    ],
    challenges: [
      "Designing a performant multi-tenant database structure that maintains strict role isolation",
      "Minimizing latency when streaming AI responses alongside live transactional CRM updates",
      "Building responsive sales pipeline drag-and-drop boards without layout thrashing"
    ],
    outcome: "Delivered a complete, deployed full-stack SaaS platform featuring lightning-fast data loads, automated lead prioritization, and seamless end-to-end authentication.",
    liveUrl: "https://ai-crm-iota-lovat.vercel.app/",
    githubUrl: "https://github.com/rishihotwani/clinch-crm",
    accentColor: "#2997FF",
    accentGradient: "from-blue-600/20 via-blue-500/10 to-transparent"
  },
  {
    id: "movie-recommendation",
    title: "Hybrid Movie Recommendation System",
    tagline: "Content-Based + Collaborative Filtering Recommendation Engine",
    description: "A hybrid movie recommendation system combining content-based and collaborative filtering to generate personalized movie recommendations.",
    longDescription: "Engineered a high-performance recommendation engine using machine learning algorithms. By synthesizing TF-IDF text representations with Singular Value Decomposition (SVD) matrix factorization, the system achieves sub-200ms recommendation latency across thousands of titles while solving common cold-start dilemmas.",
    category: "AI / Machine Learning",
    layoutType: "split",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "SVD", "TF-IDF", "Cosine Similarity", "Streamlit"],
    metrics: [
      { label: "Catalog Size", value: "5,000+ Movies" },
      { label: "Dataset Scale", value: "100K+ Ratings" },
      { label: "Query Latency", value: "< 200ms" },
      { label: "Output", value: "Top-10 Personalized" }
    ],
    highlights: [
      "TF-IDF Vectorization + Cosine Similarity for metadata-driven content discovery",
      "SVD (Singular Value Decomposition) Matrix Factorization for collaborative user rating predictions",
      "Processes 5,000+ movies and over 100K+ user interaction records",
      "Sub-200ms recommendation retrieval through pre-computed similarity matrix caching",
      "Intelligent cold-start mitigation for newly introduced titles and fresh user profiles",
      "Interactive Streamlit web interface with rich poster and metadata rendering"
    ],
    problem: "Pure content-based recommenders create echo chambers, while pure collaborative filters break completely on new items or sparse user rating matrices.",
    solution: "Built a weighted hybrid ensemble architecture that computes similarities simultaneously across metadata vectors and latent user preference matrices.",
    architecture: [
      "Data Pipeline: Pandas and NumPy preprocessing for clean rating normalization and genre tokenization",
      "Model Layer: Scikit-learn TF-IDF vectorizer + TruncatedSVD matrix decomposition",
      "Serving Layer: Python Streamlit application with in-memory matrix caching for sub-200ms queries"
    ],
    challenges: [
      "Optimizing memory consumption when computing the full cosine similarity matrix across large dimensional feature vectors",
      "Balancing the algorithmic weighting between metadata relevance and collaborative community ratings"
    ],
    outcome: "Achieved crisp top-10 personalized movie lists with sub-200ms query response times and resilient performance across diverse test user profiles.",
    liveUrl: "https://recommendmemovies5.streamlit.app/",
    githubUrl: "https://github.com/rishihotwani/hybrid-movie-recommender",
    accentColor: "#FF9F0A",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent"
  },
  {
    id: "instagram-reels-counter",
    title: "Instagram Reels Counter",
    tagline: "Manifest V3 Digital Wellbeing Chrome Extension",
    description: "A Manifest V3 Chrome Extension that tracks Instagram Reels watched across daily, weekly, monthly, and lifetime periods.",
    longDescription: "A focused digital wellbeing tool crafted to give users complete transparency over their short-form video consumption habits. Engineered strictly under Chrome's modern Manifest V3 security requirements with asynchronous storage hooks, automated periodic rollover alarms, and an intuitive dashboard visual.",
    category: "Browser Extension",
    layoutType: "browser",
    technologies: ["JavaScript (ES6+)", "Chrome Extension", "Manifest V3", "Chrome Storage API", "Chrome Alarms API", "HTML5/CSS3"],
    metrics: [
      { label: "Spec", value: "Manifest V3" },
      { label: "Privacy", value: "100% On-Device" },
      { label: "Tracking Periods", value: "4 Timeframes" },
      { label: "Overhead", value: "< 1% CPU" }
    ],
    highlights: [
      "Real-time DOM mutation monitoring to detect distinct Reel transitions without false positives",
      "Interactive extension popup dashboard with aggregate stats across Daily, Weekly, Monthly, and Lifetime",
      "Percentage-change comparisons to monitor weekly habit improvements",
      "Chrome Alarms API for background schedule resets and periodic analytics aggregation",
      "Zero server dependencies: 100% privacy-friendly on-device Chrome Storage API",
      "Lightweight footprint designed to operate seamlessly without impacting browser smoothness"
    ],
    problem: "Infinite-scroll short-form video algorithms induce unintentional doom-scrolling without clear user feedback or consumption metrics.",
    solution: "Created an invisible, privacy-respecting client-side extension that quietly tallies unique Reel plays and displays meaningful time-series habits.",
    architecture: [
      "Content Script: Lightweight DOM observer for Instagram video containers with debounced state triggers",
      "Service Worker: Manifest V3 background service worker handling periodic maintenance and alarm events",
      "UI Layer: Clean glassmorphic popup dashboard rendering real-time consumption telemetry"
    ],
    challenges: [
      "Ensuring accurate Reel count detection across frequent single-page app DOM mutations on Instagram web",
      "Operating within strict Manifest V3 ephemeral background worker lifecycles"
    ],
    outcome: "Built and verified a resilient, privacy-first browser extension that accurately records metrics across all periods without sending data off-device.",
    liveUrl: "https://github.com/rishihotwani/instagram-reels-counter",
    githubUrl: "https://github.com/rishihotwani/instagram-reels-counter",
    accentColor: "#E040FB",
    accentGradient: "from-pink-500/20 via-purple-500/10 to-transparent"
  },
  {
    id: "medipredict-ai",
    title: "MediPredictAI",
    tagline: "Clinical-Grade Multi-Condition Diagnostic Intelligence",
    description: "An AI-powered healthcare application for predicting Diabetes, Heart Disease, and Kidney Stones using machine-learning classification models.",
    longDescription: "A clinical prediction system applying supervised machine learning models to assess patient health risks across three critical medical conditions: Diabetes, Cardiovascular Disease, and Kidney Stones. Combines rigorous data preprocessing, feature importance ranking, and an intuitive diagnosis interface.",
    category: "AI / Machine Learning",
    layoutType: "medical",
    technologies: ["Python", "Scikit-learn", "Flask", "Streamlit", "Pandas", "NumPy", "Classification ML"],
    metrics: [
      { label: "Diagnostic Accuracy", value: "85%+" },
      { label: "Conditions Covered", value: "3 Major Diseases" },
      { label: "Inference Time", value: "Instantaneous" },
      { label: "Interface", value: "Interactive Diagnostics" }
    ],
    highlights: [
      "85%+ prediction accuracy across benchmark medical test validation datasets",
      "Multi-condition diagnostic coverage: Diabetes, Heart Disease, and Kidney Stones",
      "Interactive biomarker inputs (Blood Pressure, Glucose, Cholesterol, BMI, Age, etc.)",
      "Automated instant prediction results with risk-level categorization",
      "Thorough feature selection, outlier imputation, and cross-validated training pipelines",
      "Dual interface support with modular REST API endpoints and responsive Streamlit UI"
    ],
    problem: "Early warning signs of chronic cardiovascular and metabolic conditions often go unnoticed without accessible preliminary diagnostic tooling.",
    solution: "Engineered trained classification pipelines into a streamlined interactive web application that accepts standard clinical biomarkers and calculates probabilistic risk scores.",
    architecture: [
      "ML Pipeline: Scikit-learn Random Forests and Logistic Regression models trained on normalized clinical datasets",
      "Backend: Python Flask REST endpoints for modular prediction inference",
      "Client: Intuitive health diagnostic portal with input range validation and risk visualizations"
    ],
    challenges: [
      "Handling imbalanced medical datasets and preventing false negatives through threshold tuning",
      "Validating input ranges against realistic clinical physiological bounds"
    ],
    outcome: "Delivered an accessible diagnostic prototype providing 85%+ accuracy with transparent risk factors for each screened condition.",
    liveUrl: "https://medipredictai.streamlit.app/",
    githubUrl: "https://github.com/rishihotwani/medipredict-ai",
    accentColor: "#30D158",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
  }
];
