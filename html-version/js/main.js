/* ============================================================
   DATA
   ============================================================ */
const projects = [
  {
    title: "Scalable Brain",
    subtitle: "Institutional Quantitative Trading Pipeline",
    category: "Quantitative Finance",
    slug: "scalable-brain",
    skills: ["Python", "XGBoost", "Pandas", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/emmanuelebube13/scalable-brain",
    liveUrl: "https://scalable-brain.vercel.app",
  },
  {
    title: "BettorsOracle",
    subtitle: "ML-Driven Football Match Prediction",
    category: "Machine Learning",
    slug: "bettors-oracle",
    skills: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
    githubUrl: "https://github.com/emmanuelebube13/BettorsOracle",
  },
  {
    title: "Stock Screener",
    subtitle: "Financial Screener with Streamlit",
    category: "Data Science",
    slug: "stock-screener",
    skills: ["Python", "Streamlit", "yFinance", "Data Visualization"],
    githubUrl: "https://github.com/emmanuelebube13/stockScreener",
    liveUrl: "https://stockman.streamlit.app/",
  },
  {
    title: "Honey Price Predictor",
    subtitle: "Lasso Regression & K-Fold Validation",
    category: "Machine Learning",
    slug: "honey-price-predictor",
    skills: ["R", "Caret", "glmnet", "Cross-Validation"],
    githubUrl: "https://github.com/emmanuelebube13/Honey_Price_Predictor",
  },
  {
    title: "Canny Clean",
    subtitle: "Business Website Template",
    category: "Web Development",
    slug: "canny-clean",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/emmanuelebube13/canny-clean",
    liveUrl: "https://emmanuelebube13.github.io/canny-clean/",
  },
  {
    title: "Data Science Ecosystem",
    subtitle: "Languages, Libraries & Tools Overview",
    category: "Data Science",
    slug: "data-science-ecosystem",
    skills: ["Python", "Jupyter", "Pandas", "NumPy", "R"],
    githubUrl: "https://github.com/emmanuelebube13/DataScienceEcosystem",
  },
];

const categories = [
  "All Categories",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Quantitative Finance",
];

const experiences = [
  {
    title: "Data Analyst",
    company: "NewRoots (Applied Research)",
    location: "Halifax, NS",
    dates: "2025 - Present",
    responsibilities: [
      "Conduct data collection, analysis, and visualization to support housing and property management research initiatives.",
      "Analyze qualitative data from research interviews and field observations, integrating insights with quantitative analysis to support evidence-based planning and decision-making.",
      "Develop clear visual outputs and summaries to communicate findings to research and non-technical stakeholders.",
    ],
  },
  {
    title: "Makerspace Assistant",
    company: "NSCC",
    location: "Halifax, NS",
    dates: "2025 - Present",
    responsibilities: [
      "Support daily operations in a multidisciplinary makerspace focused on innovation, prototyping, and applied technical learning.",
      "Operate and support laser cutting and engraving workflows using the xTool P2, including material preparation, safety procedures, and production guidance.",
      "Facilitate and support micro:bit workshops, introducing students to embedded systems, sensors, and basic programming concepts.",
      "Gain hands-on experience in 3D modeling and additive manufacturing using Fusion 360 and Blender.",
    ],
  },
];

const education = [
  {
    institution: "Nova Scotia Community College (NSCC)",
    credential: "Diploma, IT Data Analytics",
    location: "Halifax, NS",
  },
  {
    institution: "Google (Coursera)",
    credential: "Google Data Analytics Certificate",
  },
  {
    institution: "IBM (Coursera)",
    credential: "IBM Data Science Certificate",
  },
];

const awards = [
  {
    title: "EYED - Accessibility Innovation Project",
    organization: "NSCC-Funded",
    description: [
      "Awarded funding to design the initial system architecture for EYED, an assistive technology concept providing suggestive feedback for visually impaired individuals.",
      "Focused on accessibility-driven design, early system modeling, and applied technology concepts.",
      "Project emphasizes human-centered design, innovation, and social impact.",
    ],
  },
];

const volunteer = [
  {
    role: "Student Wellness Strategy Committee Member",
    organization: "NSCC",
    dates: "2025 - Present",
    description:
      "Contributed to student wellness initiatives through planning, feedback collection, and accessibility-focused discussions.",
  },
  {
    role: "Volunteer",
    organization: "Mission Mart",
    dates: "2025 - Present",
    description:
      "Supported daily operations and community outreach initiatives in an inclusive environment.",
  },
];

const skillCategories = [
  "Data & Analytics",
  "Programming",
  "Visualization",
  "Machine Learning",
  "Tools & Platforms",
];

const skills = [
  {
    name: "Python",
    category: "Programming",
    overview:
      "Proficient in Python for data analysis, machine learning, and backend development. Extensive experience with Pandas, NumPy, Matplotlib, and Scikit-learn for building scalable data pipelines and predictive models.",
    relatedExperience: [
      "Built the Scalable Brain quantitative trading pipeline with regime detection and ML meta-labeling.",
      "Developed BettorsOracle for football match outcome predictions using classification models.",
      "Created Stock Screener web app with Streamlit and yFinance for financial data analysis.",
    ],
    relatedProjectSlugs: ["scalable-brain", "bettors-oracle", "stock-screener", "data-science-ecosystem"],
  },
  {
    name: "R",
    category: "Programming",
    overview:
      "Experienced in R for statistical modeling, data transformation, and predictive analytics. Skilled with caret, glmnet, tidyverse, and ggplot2 for reproducible research workflows.",
    relatedExperience: [
      "Built Honey Price Predictor using one-hot encoding and Lasso regression.",
      "Applied repeated K-Fold cross-validation for robust model evaluation.",
      "Created reproducible R notebooks for data transformation pipelines.",
    ],
    relatedProjectSlugs: ["honey-price-predictor", "data-science-ecosystem"],
  },
  {
    name: "SQL",
    category: "Data & Analytics",
    overview:
      "Deep knowledge of SQL Server, PostgreSQL, and MySQL for relational data modeling, query optimization, and database administration. Experienced with complex joins, indexing strategies, and performance tuning.",
    relatedExperience: [
      "Designed database architecture for Scalable Brain trading system.",
      "Implemented efficient queries for financial data retrieval and analysis.",
      "Worked with SQL Server, PostgreSQL, and MySQL across multiple projects.",
    ],
    relatedProjectSlugs: ["scalable-brain"],
  },
  {
    name: "Excel",
    category: "Data & Analytics",
    overview:
      "Advanced Excel skills including Power Query, PivotTables, statistical functions, and complex data modeling. Expert in transforming raw data into actionable business insights.",
    relatedExperience: [
      "Used Power Query for data transformation and cleaning workflows.",
      "Built PivotTables and dashboards for business intelligence reporting.",
      "Applied statistical functions for exploratory data analysis.",
    ],
    relatedProjectSlugs: [],
  },
  {
    name: "Power BI",
    category: "Visualization",
    overview:
      "Proficient in Power BI for interactive dashboards, KPI tracking, and DAX fundamentals. Skilled in creating compelling data visualizations for stakeholder presentations.",
    relatedExperience: [
      "Developed interactive dashboards tracking KPIs across business units.",
      "Applied DAX for calculated measures and complex aggregations.",
      "Created executive-level reports for data-driven decision-making.",
    ],
    relatedProjectSlugs: [],
  },
  {
    name: "Tableau",
    category: "Visualization",
    overview:
      "Experienced with Tableau for data visualization and business intelligence. Skilled in creating interactive dashboards and telling compelling data stories.",
    relatedExperience: [
      "Built executive dashboards for business intelligence reporting.",
      "Created interactive visualizations for stakeholder presentations.",
      "Designed data stories that communicate complex insights clearly.",
    ],
    relatedProjectSlugs: [],
  },
  {
    name: "Machine Learning",
    category: "Machine Learning",
    overview:
      "Strong foundation in supervised and unsupervised learning, including classification, regression, clustering, and ensemble methods. Experienced with model evaluation, feature engineering, and hyperparameter tuning.",
    relatedExperience: [
      "Implemented XGBoost meta-labeler for trade signal approval in Scalable Brain.",
      "Trained classification models for football match prediction with cross-validation.",
      "Applied Lasso regression with K-Fold validation for price prediction modeling.",
    ],
    relatedProjectSlugs: ["scalable-brain", "bettors-oracle", "honey-price-predictor"],
  },
  {
    name: "ETL & SSIS/SSRS",
    category: "Data & Analytics",
    overview:
      "Experience with ETL workflows, SSIS, and SSRS for data integration, transformation, and reporting. Skilled in building automated data pipelines.",
    relatedExperience: [
      "Built ETL pipelines for data collection and transformation.",
      "Worked with SSIS for SQL Server integration services.",
      "Created SSRS reports for business intelligence delivery.",
    ],
    relatedProjectSlugs: [],
  },
  {
    name: "Streamlit",
    category: "Tools & Platforms",
    overview:
      "Proficient in Streamlit for building interactive data applications and dashboards. Skilled in creating user-friendly interfaces for data exploration and model visualization.",
    relatedExperience: [
      "Built Stock Screener app with real-time financial data from yFinance.",
      "Created interactive dashboards for strategy performance visualization.",
      "Deployed Streamlit applications to cloud hosting platforms.",
    ],
    relatedProjectSlugs: ["stock-screener", "scalable-brain"],
  },
  {
    name: "Docker",
    category: "Tools & Platforms",
    overview:
      "Hands-on experience with Docker and Docker Compose for containerized deployments. Skilled in building reproducible development environments and production infrastructure.",
    relatedExperience: [
      "Containerized Scalable Brain pipeline with Docker Compose.",
      "Managed multi-service architectures with database and application containers.",
      "Created consistent development environments across systems.",
    ],
    relatedProjectSlugs: ["scalable-brain"],
  },
  {
    name: "Microsoft Azure",
    category: "Tools & Platforms",
    overview:
      "Growing exposure to cloud platforms including Microsoft Azure for data solutions and AI models. Familiar with cloud-based data storage and processing.",
    relatedExperience: [
      "Explored Azure services for cloud-based data analytics.",
      "Gained exposure to Azure AI and machine learning capabilities.",
      "Understanding of cloud infrastructure for scalable solutions.",
    ],
    relatedProjectSlugs: [],
  },
  {
    name: "HTML/CSS/JavaScript",
    category: "Programming",
    overview:
      "Proficient in front-end web development with HTML5, CSS3, and JavaScript. Experienced in building responsive, accessible websites and interactive user interfaces.",
    relatedExperience: [
      "Built Canny Clean business website template with responsive design.",
      "Implemented interactive features and smooth animations with vanilla JS.",
      "Created mobile-first layouts optimized for all device sizes.",
    ],
    relatedProjectSlugs: ["canny-clean"],
  },
];

/* ============================================================
   ICON SVGs (Lucide-style)
   ============================================================ */
const icons = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.05 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z"/></svg>`,
  mappin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  arrowdown: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  filetext: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  externallink: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  graduationcap: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  code2: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  linechart: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>`,
  wrench: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`,
  image: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
};

const categoryIcons = {
  "Data & Analytics": icons.database,
  "Programming": icons.code2,
  "Visualization": icons.linechart,
  "Machine Learning": icons.brain,
  "Tools & Platforms": icons.wrench,
};

/* ============================================================
   STATE
   ============================================================ */
let activeCategory = "All Categories";
let mobileMenuOpen = false;
let resumeModalOpen = false;
let selectedSkill = null;

/* ============================================================
   HEADER
   ============================================================ */
function initHeader() {
  const hamburger = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileMenuOpen = !mobileMenuOpen;
      mobileNav.classList.toggle("open", mobileMenuOpen);
      hamburgerIcon.innerHTML = mobileMenuOpen ? icons.x : icons.menu;
      hamburger.setAttribute("aria-label", mobileMenuOpen ? "Close menu" : "Open menu");
    });

    // Close mobile menu when a link is clicked
    mobileNav.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => {
        mobileMenuOpen = false;
        mobileNav.classList.remove("open");
        hamburgerIcon.innerHTML = icons.menu;
      });
    });
  }

  // Highlight active nav link based on scroll
  const sections = ["projects", "experience", "skills", "contact"];
  const navLinks = document.querySelectorAll(".nav-link[data-section], .mobile-nav-link[data-section]");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    navLinks.forEach((link) => {
      const section = link.getAttribute("data-section");
      link.classList.toggle("active", section === current);
    });
  }, { passive: true });
}

/* ============================================================
   RESUME MODAL
   ============================================================ */
function initResumeModal() {
  const overlay = document.getElementById("resume-modal-overlay");
  const triggers = document.querySelectorAll("[data-resume-trigger]");
  const closeBtn = document.getElementById("resume-modal-close");

  function openModal() {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  triggers.forEach((btn) => btn.addEventListener("click", openModal));
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeSkillModal();
    }
  });
}

/* ============================================================
   PROJECT FILTERING
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const noProjects = document.getElementById("no-projects");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = activeCategory === "All Categories"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  if (filtered.length === 0) {
    if (noProjects) noProjects.style.display = "flex";
  } else {
    if (noProjects) noProjects.style.display = "none";
    filtered.forEach((project) => {
      const card = createProjectCard(project);
      grid.appendChild(card);
    });
  }
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const linksHTML = (project.githubUrl || project.liveUrl) ? `
    <div class="project-links">
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" onclick="event.stopPropagation()">
          ${icons.github.replace('width="16"', 'width="16"')} Code
        </a>` : ""}
      ${project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link live" onclick="event.stopPropagation()">
          ${icons.externallink} Live Demo
        </a>` : ""}
    </div>` : "";

  const skillsHTML = project.skills && project.skills.length > 0
    ? `<div class="project-skills">${project.skills.slice(0, 4).map(s => `<span class="skill-badge">${s}</span>`).join("")}</div>`
    : "";

  article.innerHTML = `
    <div class="project-thumb">
      <div class="project-thumb-gradient"></div>
      ${icons.image}
    </div>
    <div class="project-body">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-subtitle">${project.subtitle}</p>
      ${skillsHTML}
      ${linksHTML}
    </div>
  `;

  return article;
}

function initCategoryFilter() {
  const filterContainer = document.getElementById("category-filter");
  if (!filterContainer) return;

  filterContainer.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      filterContainer.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects();
    });
    filterContainer.appendChild(btn);
  });

  renderProjects();
}

/* ============================================================
   EXPERIENCE SECTION
   ============================================================ */
function renderExperience() {
  const timeline = document.getElementById("experience-timeline");
  if (!timeline) return;

  timeline.innerHTML = experiences.map((exp) => `
    <div class="timeline-item">
      <div class="timeline-dot">
        <div class="timeline-dot-inner"></div>
      </div>
      <div class="exp-card">
        <h4 class="exp-card-title">${exp.title}</h4>
        <div class="exp-card-meta">
          <span class="exp-card-company">${exp.company}</span>
          <span class="exp-card-sep">•</span>
          <span class="exp-card-location">${exp.location}</span>
        </div>
        <p class="exp-card-dates">${exp.dates}</p>
        <ul class="exp-card-list">
          ${exp.responsibilities.map((r) => `
            <li class="exp-card-list-item">
              <span class="exp-bullet"></span>
              ${r}
            </li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

function renderEducation() {
  const container = document.getElementById("education-cards");
  if (!container) return;
  container.innerHTML = education.map((edu) => `
    <div class="info-card">
      <h4 class="info-card-title">${edu.credential}</h4>
      <p class="info-card-sub">${edu.institution}</p>
      ${edu.location ? `<p class="info-card-loc">${edu.location}</p>` : ""}
    </div>
  `).join("");
}

function renderAwards() {
  const container = document.getElementById("awards-cards");
  if (!container) return;
  container.innerHTML = awards.map((award) => `
    <div class="info-card">
      <h4 class="info-card-title">${award.title}</h4>
      <p class="info-card-sub" style="font-size:0.75rem;">${award.organization}</p>
      <ul class="exp-card-list" style="margin-top:0.75rem;">
        ${award.description.map((d) => `
          <li class="exp-card-list-item" style="font-size:0.75rem;">
            <span class="exp-bullet"></span>
            ${d}
          </li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderVolunteer() {
  const container = document.getElementById("volunteer-cards");
  if (!container) return;
  container.innerHTML = volunteer.map((vol) => `
    <div class="info-card">
      <h4 class="info-card-title">${vol.role}</h4>
      <div class="info-card-org-meta">
        <span style="color: var(--orange); font-size:0.75rem;">${vol.organization}</span>
        <span style="color: var(--muted-foreground); font-size:0.75rem;">•</span>
        <span style="color: var(--muted-foreground); font-size:0.75rem;">${vol.dates}</span>
      </div>
      <p class="info-card-desc">${vol.description}</p>
    </div>
  `).join("");
}

/* ============================================================
   SKILLS SECTION
   ============================================================ */
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = "";

  skillCategories.forEach((category) => {
    const categorySkills = skills.filter((s) => s.category === category);
    if (categorySkills.length === 0) return;

    const card = document.createElement("div");
    card.className = "skill-category-card";
    card.innerHTML = `
      <div class="skill-cat-header">
        <div class="skill-cat-icon">${categoryIcons[category] || ""}</div>
        <h3 class="skill-cat-name">${category}</h3>
      </div>
      <div class="skill-tags">
        ${categorySkills.map((skill) => `
          <button class="skill-tag" data-skill="${skill.name}" aria-label="Learn more about ${skill.name}">
            ${skill.name}
          </button>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });

  // Attach click events
  grid.querySelectorAll(".skill-tag").forEach((btn) => {
    btn.addEventListener("click", () => {
      const skillName = btn.getAttribute("data-skill");
      const skill = skills.find((s) => s.name === skillName);
      if (skill) openSkillModal(skill);
    });
  });
}

/* ============================================================
   SKILL MODAL
   ============================================================ */
function openSkillModal(skill) {
  selectedSkill = skill;
  const overlay = document.getElementById("skill-modal-overlay");
  const title = document.getElementById("skill-modal-title");
  const body = document.getElementById("skill-modal-body");

  if (!overlay || !title || !body) return;

  title.textContent = skill.name;

  const relatedProjects = projects.filter((p) =>
    skill.relatedProjectSlugs.includes(p.slug)
  );

  body.innerHTML = `
    <div>
      <p class="skill-modal-section-title">Overview</p>
      <p class="skill-modal-overview">${skill.overview}</p>
    </div>
    <div>
      <p class="skill-modal-section-title">Related Experience</p>
      <ul class="skill-modal-exp-list">
        ${skill.relatedExperience.map((exp) => `
          <li class="skill-modal-exp-item">
            <span class="skill-modal-bullet"></span>
            ${exp}
          </li>`).join("")}
      </ul>
    </div>
    ${relatedProjects.length > 0 ? `
    <div>
      <p class="skill-modal-section-title">Related Projects</p>
      <div class="skill-projects-grid">
        ${relatedProjects.map((p) => `
          <div class="skill-project-item">
            <p class="skill-project-title">${p.title}</p>
            <p class="skill-project-cat">${p.category}</p>
          </div>`).join("")}
      </div>
    </div>` : ""}
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSkillModal() {
  const overlay = document.getElementById("skill-modal-overlay");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
  selectedSkill = null;
}

function initSkillModal() {
  const overlay = document.getElementById("skill-modal-overlay");
  const closeBtn = document.getElementById("skill-modal-close");

  if (closeBtn) closeBtn.addEventListener("click", closeSkillModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeSkillModal();
    });
  }
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector(".form-submit");
    const spinner = `<span class="spinner"></span> Sending...`;
    const original = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = spinner;

    // Simulate submission (replace with real API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = original;

    showToast("Message sent!", "Thanks for reaching out. I'll get back to you soon.");
  });
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(title, message) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    ${message ? `<div class="toast-msg">${message}</div>` : ""}
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add("show"));
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ============================================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ============================================================
   COPYRIGHT YEAR
   ============================================================ */
function updateCopyright() {
  const el = document.getElementById("copyright-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initResumeModal();
  initCategoryFilter();
  renderExperience();
  renderEducation();
  renderAwards();
  renderVolunteer();
  renderSkills();
  initSkillModal();
  initContactForm();
  initScrollAnimations();
  updateCopyright();
});
