/* ============================================================
   DATA
   ============================================================ */
const projects = [
  {
    title: "Scalable Brain",
    subtitle: "Live Data Platform: Fact Tables, Point-in-Time Data & Audit Ledgers",
    category: "Quantitative Finance",
    slug: "scalable-brain",
    skills: [
      "Data Modeling",
      "Python",
      "XGBoost",
      "Walk-Forward Validation",
      "PostgreSQL + TimescaleDB",
      "GCS & Pub/Sub",
      "Regime Modelling",
    ],
    githubUrl: "https://github.com/emmanuelebube13/scalable-brain",
    liveUrl: "https://emmanuelebube13.github.io/scalablebrain-live/",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  },
  {
    title: "NS Property & Parcel Sales Intelligence",
    subtitle: "Socrata API Pipeline, Star Schema & Geospatial Power BI Suite (355K+ Rows)",
    category: "Data Analytics",
    slug: "ns-property-sales-bi",
    skills: ["Power BI", "DAX", "Power Query (M)", "Star Schema"],
    liveUrl: "pbi-property-sales.html",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Multi-Institution Research Study",
    subtitle: "Reproducible Pipeline, Verified Figures & Geospatial Apps",
    category: "Research & Policy",
    slug: "tmu-research-study",
    skills: ["Python", "Pandas", "Leaflet & Folium", "ArcGIS"],
    caseUrl: "case-tmu.html",
    imageUrl: "https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?w=600&h=400&fit=crop",
  },
  {
    title: "Housing & Property Research",
    subtitle: "Integrating Interview Evidence with Quantitative Analysis",
    category: "Research & Policy",
    slug: "newroots-housing-research",
    skills: ["Mixed Methods", "Python", "Power BI", "Thematic Coding"],
    caseUrl: "case-newroots.html",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Grid Power Energy",
    subtitle: "Distributed vs. Centralized Electricity Analysis",
    category: "Research & Policy",
    slug: "grid-power-energy",
    skills: ["Techno-Economic Analysis", "SQL", "Regulatory Data", "Python"],
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  },
  {
    title: "System 2 Executor",
    subtitle: "Autonomous FX Trade Execution Engine",
    category: "Quantitative Finance",
    slug: "system2-executor",
    skills: ["Python", "OANDA API", "Risk Management", "Event-Driven Design"],
    githubUrl: "https://github.com/emmanuelebube13/system2Executor",
    imageUrl: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
  },
  {
    title: "BettorsOracle",
    subtitle: "ML-Driven Football Match Prediction",
    category: "Machine Learning",
    slug: "bettors-oracle",
    skills: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
    githubUrl: "https://github.com/emmanuelebube13/BettorsOracle",
    liveUrl: "https://emmanuelebube13.github.io/BettorsOracle/",
    // Clicking anywhere on the card opens the live app.
    cardUrl: "https://emmanuelebube13.github.io/BettorsOracle/",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
  },
  {
    title: "Stock Screener",
    subtitle: "Financial Screener with Streamlit",
    category: "Data Science",
    slug: "stock-screener",
    skills: ["Python", "Streamlit", "yFinance", "Data Visualization"],
    githubUrl: "https://github.com/emmanuelebube13/stockScreener",
    liveUrl: "https://stockman.streamlit.app/",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    title: "Honey Price Predictor",
    subtitle: "Lasso Regression & K-Fold Validation",
    category: "Machine Learning",
    slug: "honey-price-predictor",
    skills: ["R", "Caret", "glmnet", "Cross-Validation"],
    githubUrl: "https://github.com/emmanuelebube13/Honey_Price_Predictor",
    imageUrl: "https://images.unsplash.com/photo-1599599810694-b5ac1ea7ac61?w=600&h=400&fit=crop",
  },
  {
    title: "Canny Clean",
    subtitle: "Business Website Template",
    category: "Web Development",
    slug: "canny-clean",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/emmanuelebube13/canny-clean",
    liveUrl: "https://emmanuelebube13.github.io/canny-clean/",
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
  },
  {
    title: "Data Science Ecosystem",
    subtitle: "Languages, Libraries & Tools Overview",
    category: "Data Science",
    slug: "data-science-ecosystem",
    skills: ["Python", "Jupyter", "Pandas", "NumPy", "R"],
    githubUrl: "https://github.com/emmanuelebube13/DataScienceEcosystem",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Ethical Algorithm - Loan Analysis",
    subtitle: "Algorithmic Bias & Fairness Case Study",
    category: "Data Analytics",
    slug: "ethical-algorithm-loan-analysis",
    skills: ["Python", "Bias Analysis", "Data Ethics", "Case Study"],
    githubUrl: "https://github.com/emmanuelebube13/ethical-algorithm-loan-analysis",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Biobin Cleaning Quote System",
    subtitle: "Interactive Web App for Service Pricing",
    category: "Web Development",
    slug: "biobinquotes",
    skills: ["Python", "Web Application", "Pricing Engine"],
    githubUrl: "https://github.com/emmanuelebube13/BIOBINQUOTES",
    imageUrl: "https://images.unsplash.com/photo-1553531088-f59c1a3fd546?w=600&h=400&fit=crop",
  },
  {
    title: "Smart Dashboard",
    subtitle: "Interactive Analytics Dashboard",
    category: "Data Analytics",
    slug: "smart-dashboard",
    skills: ["JavaScript", "Data Visualization", "Dashboard Design"],
    githubUrl: "https://github.com/emmanuelebube13/smart-dashboard",
    imageUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop",
  },
  {
    title: "EV Charging Station System",
    subtitle: "Electric Vehicle Infrastructure Management",
    category: "Data Analytics",
    slug: "ev-charging-station",
    skills: ["Python", "System Design", "Data Management"],
    githubUrl: "https://github.com/emmanuelebube13/EvChargingStation",
    imageUrl: "https://images.unsplash.com/photo-1615886287437-f121b6d8a850?w=600&h=400&fit=crop",
  },
  {
    title: "NSCC Wellness Platform",
    subtitle: "Student Wellness & Engagement Tool",
    category: "Web Development",
    slug: "nscc-wellness",
    skills: ["HTML", "CSS", "JavaScript", "Community Impact"],
    githubUrl: "https://github.com/emmanuelebube13/nsccwellness",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    title: "Wealth Signal Simulator",
    subtitle: "Modelling Data Collection & Economic Outcomes",
    category: "Data Science",
    slug: "wealth-signal-simulator",
    skills: ["TypeScript", "Simulation", "Economic Modelling", "Data Viz"],
    githubUrl: "https://github.com/emmanuelebube13/Wealth-Signal-Simulator",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
  },
  {
    title: "Adica Editor",
    subtitle: "Browser-Based Editing Tool",
    category: "Web Development",
    slug: "adica-editor",
    skills: ["TypeScript", "Web App", "UI Engineering"],
    githubUrl: "https://github.com/emmanuelebube13/adicaeditor",
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
  },
  {
    title: "Forex Timezone",
    subtitle: "Global Market Session Tracker",
    category: "Quantitative Finance",
    slug: "forex-timezone",
    skills: ["JavaScript", "HTML", "Market Sessions"],
    githubUrl: "https://github.com/emmanuelebube13/Forex-Timezone",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
  },
  {
    title: "Python Workshop",
    subtitle: "Teaching Materials for Applied Python",
    category: "Data Science",
    slug: "python-workshop",
    skills: ["Python", "Teaching", "Jupyter", "Fundamentals"],
    githubUrl: "https://github.com/emmanuelebube13/pythonworkshop",
    liveUrl: "https://emmanuelebube13.github.io/pythonworkshop/",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
  },
];

const categories = [
  "All Categories",
  "Machine Learning",
  "Data Science",
  "Data Analytics",
  "Research & Policy",
  "Web Development",
  "Quantitative Finance",
];

const experiences = [
  {
    title: "Data Analyst",
    company: "Together Design Lab, Toronto Metropolitan University",
    location: "Remote",
    dates: "Dec 2025 - Present",
    caseUrl: "case-tmu.html",
    responsibilities: [
      "Led analysis for a multi-institution research study, coordinating with academic supervisors and partner institutions across four analysis rounds and translating research questions into a delivered analytical plan.",
      "Presented findings to stakeholders in recurring review meetings, iterating deliverables based on feedback and producing outputs at two access tiers to meet differing institutional data-sharing needs.",
      "Built an automated verification harness that independently re-derives every published figure from source data, ensuring no unverified number reached the final report.",
      "Engineered a reproducible cleaning and analysis pipeline over a 274-column survey instrument, resolving data-quality issues into an auditable record and deriving new measures for housing cost, commute, and geography.",
      "Developed interactive geospatial applications (Leaflet, Folium, Plotly, ArcGIS) mapping institutional and respondent geography, built to be maintained by non-technical staff without developer support.",
    ],
  },
  {
    title: "Utility Data Analyst Intern",
    company: "Detect Technologies Inc.",
    location: "Dartmouth, NS",
    dates: "May 2026 - Aug 2026",
    responsibilities: [
      "Analyzed utility infrastructure and operational data to identify trends, optimize resource allocation, and support preventative maintenance initiatives.",
      "Facilitated the development of internal AI and computer vision models by performing high-level data curation and feature identification, directly improving the accuracy of automated infrastructure analysis.",
      "Collaborated extensively with cross-functional teams to conduct joint analyses, ensuring accurate interpretation of structural data and cohesive, data-driven decision-making.",
    ],
  },
  {
    title: "Data Analyst",
    company: "NewRoots",
    location: "Halifax, NS",
    dates: "Sep 2025 - May 2026",
    caseUrl: "case-newroots.html",
    responsibilities: [
      "Conducted data collection, analysis, and visualization to support housing and property management research initiatives.",
      "Analyzed qualitative data from research interviews and field observations, integrating insights with quantitative analysis to support evidence-based planning and decision-making.",
      "Developed clear visual outputs and summaries to communicate findings to research and non-technical stakeholders.",
    ],
  },
  {
    title: "Makerspace Assistant",
    company: "Nova Scotia Community College",
    location: "Halifax, NS",
    dates: "May 2025 - Feb 2026",
    responsibilities: [
      "Supported daily operations in a multidisciplinary makerspace focused on innovation, prototyping, and applied technical learning.",
      "Operated and supported laser cutting and engraving workflows using the xTool P2, including material preparation, safety procedures, and production guidance.",
      "Facilitated and supported a micro:bit workshop, introducing students to embedded systems, sensors, and basic programming concepts.",
      "Gained hands-on experience in 3D modeling and additive manufacturing using Fusion 360 and Blender.",
    ],
  },
  {
    title: "Product Supervisor / Retail Specialist",
    company: "The Northwest Company",
    location: "Halifax, NS",
    dates: "Summer 2023 - 2024",
    responsibilities: [
      "Supervised inventory operations and ensured accuracy in a fast-paced retail environment.",
      "Used Excel and internal reporting tools to track product movement and support inventory optimization.",
      "Developed leadership, operational analytics, and data-handling skills applicable to business analytics roles.",
      "Collaborated across teams to improve process efficiency and customer experience.",
    ],
  },
];

const education = [
  {
    institution: "Nova Scotia Community College (NSCC)",
    credential: "Diploma, IT Data Analytics",
    location: "Halifax, NS",
    dates: "May 2026",
  },
  {
    institution: "University of Nigeria (UNN)",
    credential: "Bachelor of Electrical Engineering",
    location: "Nigeria",
    dates: "Sep 2020 - Aug 2023",
  },
  {
    institution: "Google (Coursera)",
    credential: "Google Data Analytics & Advanced Data Analytics Certificates",
  },
  {
    institution: "IBM (Coursera)",
    credential: "IBM Data Science Certificate",
  },
];

const awards = [
  {
    title: "Profine",
    organization: "Arthur L. Irving Entrepreneurship Centre",
    year: "2026",
    description: [
      "Awarded for innovation in building a user-focused tool for navigating and personalizing application submissions.",
    ],
  },
  {
    title: "EYED - Accessibility Innovation Project",
    organization: "NSCC-Funded",
    year: "2025",
    description: [
      "Awarded funding to design the initial system architecture for EYED, an assistive technology concept providing suggestive feedback for visually impaired individuals.",
      "Focused on accessibility-driven design, early system modeling, and applied technology concepts.",
      "Project emphasizes human-centered design, innovation, and social impact.",
    ],
  },
];

const volunteer = [
  {
    role: "Wellness Strategy Committee Member",
    organization: "NSCC",
    dates: "2025 - May 2026",
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
      "Engineered a reproducible cleaning and analysis pipeline over a 274-column survey instrument at Together Design Lab.",
      "Built an automated verification harness that re-derives every published figure from source data.",
      "Built Scalable Brain, a three-service quantitative FX platform separating research, execution and risk — regime detection, walk-forward validation, and fail-closed safety controls that stop trading on stale or mismatched inputs rather than degrade quietly.",
      "Created Stock Screener web app with Streamlit and yFinance for financial data analysis.",
    ],
    relatedProjectSlugs: ["scalable-brain", "system2-executor", "bettors-oracle", "stock-screener", "data-science-ecosystem"],
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
      "Designing a relational database integrating utility tariff schedules, regulatory decisions, and reliability data for Grid Power Energy.",
      "Modeled market, research and point-in-time data in PostgreSQL for Scalable Brain, including an append-only forward-test ledger.",
      "Worked with SQL Server, PostgreSQL, and MySQL across multiple projects.",
    ],
    relatedProjectSlugs: ["grid-power-energy", "scalable-brain"],
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
      "Engineered a 355K+ row Nova Scotia Parcel Sales Star Schema model connected via Socrata API with custom DAX time intelligence, report page tooltips, and Google Street View integration.",
    ],
    relatedProjectSlugs: ["ns-property-sales-bi", "newroots-housing-research"],
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
    name: "Geospatial Analysis",
    category: "Visualization",
    overview:
      "Experienced in geospatial data analysis and interactive mapping with ArcGIS, Leaflet, Folium, and Plotly. Skilled at turning location data into maps that non-technical teams can read and maintain themselves.",
    relatedExperience: [
      "Developed interactive geospatial applications mapping institutional and respondent geography at Together Design Lab.",
      "Built mapping tools designed to be maintained by non-technical staff without developer support.",
      "Derived geography-based measures for housing cost and commute analysis.",
    ],
    relatedProjectSlugs: [],
  },
  {
    name: "Apache Spark",
    category: "Data & Analytics",
    overview:
      "Working knowledge of Apache Spark for distributed processing of large datasets, including DataFrame operations and performance-aware analytics on data too large for single-machine workflows.",
    relatedExperience: [
      "Applied Spark concepts to large-dataset handling and performance-aware analytics.",
      "Used distributed processing patterns for big data analytics coursework and applied research.",
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
    name: "AWS & Azure",
    category: "Tools & Platforms",
    overview:
      "Exposure to cloud platforms including AWS and Microsoft Azure for data solutions and applied AI models. Familiar with cloud-based data storage, processing, and deployment.",
    relatedExperience: [
      "Explored AWS and Azure services for cloud-based data analytics.",
      "Gained exposure to cloud AI and machine learning capabilities.",
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
  arrowup: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>`,
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
   ORCA BADGE
   The ME monogram sits on a rotating orca photo — a stand-in for an
   avatar, and a nod to the pod that shows up all over this site.
   Photos cross-fade every 20 seconds.
   ============================================================ */
const orcaPhotos = [
  {
    src: "photos/orcastogether.jpeg",
    badge: "photos/badge/orcastogether-96.jpg",
    alt: "A pod of orcas moving together below the surface",
    caption: "A pod moves as one, and still thinks for itself",
  },
  {
    src: "photos/lovelyorcas.jpg",
    badge: "photos/badge/lovelyorcas-96.jpg",
    alt: "An orca beneath a dense ball of herring it has helped corral",
    caption: "Carousel feeding — a technique the pod learns, then teaches",
  },
  {
    src: "photos/oneforallorcas.avif",
    badge: "photos/badge/oneforallorcas-96.jpg",
    alt: "A single orca approaching a large bait ball of fish",
    caption: "One works the ball the whole pod built",
  },
];

function initOrcaBadges() {
  const badges = document.querySelectorAll("[data-orca-badge]");
  if (!badges.length) return;

  badges.forEach((badge) => {
    // Monogram stays as the accessible name; photos are decorative.
    const label = badge.textContent.trim() || "ME";
    badge.textContent = "";
    badge.classList.add("orca-badge");

    const layers = orcaPhotos.map((photo, i) => {
      const img = document.createElement("img");
      // 96px crop — the badge renders at ~40px; originals are up to 3072px
      img.src = photo.badge || photo.src;
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.loading = "lazy";
      img.decoding = "async";
      img.className = "orca-badge-img" + (i === 0 ? " active" : "");
      // A format the browser cannot decode must not blank the badge.
      img.addEventListener("error", () => img.remove());
      badge.appendChild(img);
      return img;
    });

    const mono = document.createElement("span");
    mono.className = "orca-badge-mono";
    mono.textContent = label;
    badge.appendChild(mono);

    badge._orcaLayers = layers;
    badge._orcaIndex = 0;
  });

  setInterval(() => {
    badges.forEach((badge) => {
      const layers = (badge._orcaLayers || []).filter((l) => l.isConnected);
      if (layers.length < 2) return;
      layers[badge._orcaIndex % layers.length].classList.remove("active");
      badge._orcaIndex = (badge._orcaIndex + 1) % layers.length;
      layers[badge._orcaIndex].classList.add("active");
    });
  }, 20000);
}

/* ============================================================
   ORCA CAROUSEL
   The framed photo in the hero. Manual controls are the point —
   auto-advance is a slow secondary, paused whenever the visitor is
   interacting, and off entirely under reduced-motion.
   ============================================================ */
function initOrcaCarousel() {
  const slides = document.getElementById("orca-slides");
  if (!slides) return;
  const dotsHost = document.getElementById("orca-dots");
  const caption = document.getElementById("orca-caption");
  const prev = document.getElementById("orca-prev");
  const next = document.getElementById("orca-next");

  // Build the real slides, replacing the no-JS single image.
  slides.innerHTML = "";
  const imgs = orcaPhotos.map((photo, i) => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.width = 738;
    img.height = 414;
    img.className = "orca-slide" + (i === 0 ? " is-active" : "");
    img.addEventListener("error", () => {
      img.dataset.broken = "true";
      img.remove();
    });
    slides.appendChild(img);
    return img;
  });

  const usable = () => imgs.filter((im) => im.isConnected);
  if (usable().length < 2) return; // nothing to navigate between

  [prev, next].forEach((b) => b && b.removeAttribute("hidden"));

  let index = 0;
  let timer = null;

  if (dotsHost) {
    dotsHost.innerHTML = orcaPhotos
      .map(
        (p, i) =>
          `<button class="orca-dot${i === 0 ? " is-active" : ""}" type="button" role="tab"
                   aria-selected="${i === 0}" aria-label="Photo ${i + 1}: ${p.caption}"
                   data-slide="${i}"></button>`
      )
      .join("");
  }

  function show(i) {
    const list = usable();
    if (!list.length) return;
    index = (i + imgs.length) % imgs.length;
    // Skip past any image the browser could not decode.
    let guard = 0;
    while (!imgs[index].isConnected && guard++ < imgs.length) {
      index = (index + 1) % imgs.length;
    }
    imgs.forEach((im, n) => im.classList.toggle("is-active", n === index));
    if (caption) caption.textContent = orcaPhotos[index].caption;
    if (dotsHost) {
      dotsHost.querySelectorAll(".orca-dot").forEach((d, n) => {
        d.classList.toggle("is-active", n === index);
        d.setAttribute("aria-selected", String(n === index));
      });
    }
  }

  const noHover = window.matchMedia && window.matchMedia("(hover: none)").matches;

  function start() {
    // On touch there is no hover to pause on, so a photo that changes
    // under the reader's thumb is just noise.
    if (prefersReducedMotionSite() || noHover) return;
    stop();
    timer = setInterval(() => show(index + 1), 7000);
  }
  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  // Any manual input restarts the clock rather than fighting it.
  function step(delta) {
    show(index + delta);
    start();
  }

  if (prev) prev.addEventListener("click", () => step(-1));
  if (next) next.addEventListener("click", () => step(1));
  if (dotsHost) {
    dotsHost.querySelectorAll(".orca-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        show(parseInt(dot.getAttribute("data-slide"), 10));
        start();
      });
    });
  }

  const frame = slides.closest(".orca-frame");
  if (frame) {
    frame.addEventListener("mouseenter", stop);
    frame.addEventListener("mouseleave", start);
    frame.addEventListener("focusin", stop);
    frame.addEventListener("focusout", start);
    frame.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    });
  }

  show(0);
  start();
}

const prefersReducedMotionSite = () =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   SITE DIRECTORY
   A file-tree view of the site: folders expand, files navigate.
   ============================================================ */
const siteTree = [
  {
    name: "work",
    open: true,
    children: [
      { name: "projects", href: "index.html#projects", note: "19 builds" },
      { name: "power-bi-suite", href: "index.html#powerbi-services", note: "live report" },
      { name: "experience", href: "index.html#experience", note: "5 roles" },
      {
        name: "case-studies",
        children: [
          { name: "tmu-research", href: "case-tmu.html", note: "interactive" },
          { name: "newroots-housing", href: "case-newroots.html", note: "interactive" },
        ],
      },
    ],
  },
  {
    name: "skills",
    children: [
      { name: "skill-matrix", href: "index.html#skills" },
      { name: "career-flow", href: "index.html#career-flow", note: "sankey" },
      { name: "skill-topology", href: "index.html#topology", note: "force graph" },
    ],
  },
  {
    name: "about",
    children: [
      { name: "profile", href: "about.html" },
      { name: "spirit-animal", href: "index.html#orca", note: "orcas" },
    ],
  },
  {
    name: "contact",
    children: [
      { name: "get-in-touch", href: "index.html#contact" },
      { name: "resume.pdf", href: "resume.pdf", note: "download", external: true },
      { name: "github", href: "https://github.com/emmanuelebube13", external: true },
      { name: "linkedin", href: "https://linkedin.com/in/emmanuelmbachu/", external: true },
    ],
  },
];

const treeIcons = {
  folder: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  file: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  ext: `<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
};

/* Nested disclosure lists rather than an ARIA tree widget: a folder is a
   button that expands the group it controls, and a file is a plain link.
   The collapsing wrapper holds exactly one child so the grid-rows
   height animation works. */
let treeGroupSeq = 0;

function buildTreeNodes(items, depth) {
  return items
    .map((item) => {
      if (item.children) {
        const open = !!item.open;
        const id = `tree-group-${++treeGroupSeq}`;
        return `
        <li class="tree-item">
          <button class="tree-folder" aria-expanded="${open}" aria-controls="${id}"
                  style="--depth:${depth}">
            <span class="tree-chevron">${treeIcons.chevron}</span>
            <span class="tree-icon folder">${treeIcons.folder}</span>
            <span class="tree-name">${item.name}/</span>
          </button>
          <div class="tree-group${open ? " open" : ""}" id="${id}">
            <ul class="tree-sublist">
              ${buildTreeNodes(item.children, depth + 1)}
            </ul>
          </div>
        </li>`;
      }
      const target = item.external ? ` target="_blank" rel="noopener noreferrer"` : "";
      return `
      <li class="tree-item">
        <a class="tree-file" href="${item.href}"${target} style="--depth:${depth}">
          <span class="tree-icon file">${treeIcons.file}</span>
          <span class="tree-name">${item.name}</span>
          ${item.note ? `<span class="tree-note">${item.note}</span>` : ""}
          ${item.external ? `<span class="tree-ext">${treeIcons.ext}</span>` : ""}
        </a>
      </li>`;
    })
    .join("");
}

function initSiteTree() {
  const host = document.getElementById("site-tree");
  if (!host) return;

  host.innerHTML = `<nav class="tree-root" aria-label="Site directory">
    <ul class="tree-sublist">${buildTreeNodes(siteTree, 0)}</ul>
  </nav>`;

  host.querySelectorAll(".tree-folder").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = document.getElementById(btn.getAttribute("aria-controls"));
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      if (group) group.classList.toggle("open", !open);
    });
  });

  // Roving arrow-key navigation across every visible row.
  host.addEventListener("keydown", (e) => {
    if (!["ArrowDown", "ArrowUp"].includes(e.key)) return;
    const rows = [...host.querySelectorAll(".tree-folder, .tree-file")].filter(
      (el) => el.offsetParent !== null
    );
    const i = rows.indexOf(document.activeElement);
    if (i === -1) return;
    e.preventDefault();
    rows[e.key === "ArrowDown" ? Math.min(i + 1, rows.length - 1) : Math.max(i - 1, 0)].focus();
  });
}

/* ============================================================
   BACK TO TOP
   Appears once you are a screen or so down the page. Built here so
   every page picks it up without duplicating markup.
   ============================================================ */
function initBackToTop() {
  if (document.getElementById("back-to-top")) return;

  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.className = "back-to-top";
  btn.type = "button";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = icons.arrowup;
  document.body.appendChild(btn);

  const threshold = () => Math.max(500, window.innerHeight * 0.85);

  function sync() {
    btn.classList.toggle("show", window.scrollY > threshold());
  }

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotionSite() ? "auto" : "smooth",
    });
    // Send focus somewhere sensible instead of leaving it on a button
    // that is about to disappear.
    const target = document.querySelector(".logo");
    if (target) target.focus({ preventScroll: true });
  });

  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  sync();
}

function initPbiModal() {
  const triggers = document.querySelectorAll("[data-pbi-trigger]");
  const overlay = document.getElementById("pbi-modal-overlay");
  const closeBtn = document.getElementById("pbi-modal-close");
  if (!triggers.length || !overlay || !closeBtn) return;

  let lastTrigger = null;

  function openModal(event) {
    event.preventDefault();
    lastTrigger = event.currentTarget;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setPageInert(true, overlay);
    closeBtn.focus();
  }

  function closeModal() {
    if (!overlay.classList.contains("open")) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    setPageInert(false, overlay);
    if (lastTrigger) lastTrigger.focus();
  }

  triggers.forEach((trigger) => trigger.addEventListener("click", openModal));
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

/* ============================================================
   GRAPH SECTIONS ON PHONES
   Below 700px both diagrams are already written summaries rather than
   canvases. Left expanded they were ~1,700px of prose in the middle of
   the page, so they fold behind their own headings instead.
   ============================================================ */
function initGraphSectionFolding() {
  if (!window.matchMedia("(max-width: 699px)").matches) return;

  [
    ["career-flow", "How roles fed into domains, and domains into tools"],
    ["topology", "The same skills, grouped by what they connect to"],
  ].forEach(([id, hint]) => {
    const section = document.getElementById(id);
    if (!section) return;
    const card = section.querySelector(".graph-card");
    const header = section.querySelector(".section-header");
    if (!card || !header) return;

    card.classList.add("graph-card-foldable");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "graph-fold-toggle";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", id + "-card");
    card.id = id + "-card";
    btn.textContent = "Show details";
    btn.addEventListener("click", () => {
      const open = card.classList.toggle("is-expanded");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Hide details" : "Show details";
    });
    header.insertAdjacentElement("afterend", btn);
  });
}

/* ============================================================
   DIRECTORY DOCK
   With the top nav removed, the directory is the navigation — so it has
   to stay reachable past the hero. Once the in-page card scrolls away, a
   compact launcher docks to the edge and expands into the same tree.
   ============================================================ */
function initDirectoryDock() {
  if (document.getElementById("dir-dock")) return;

  const dock = document.createElement("div");
  dock.id = "dir-dock";
  dock.className = "dir-dock";
  dock.innerHTML = `
    <button class="dir-dock-toggle" type="button" aria-label="Site directory" aria-expanded="false" aria-controls="dir-dock-panel">
      ${treeIcons.folder}
      <span class="dir-dock-label">Directory</span>
    </button>
    <div class="dir-dock-panel" id="dir-dock-panel" hidden>
      <div class="dir-dock-head">
        <span class="dir-path">~/mbachu-emmanuel</span>
        <button class="dir-dock-close" type="button" aria-label="Close directory">${icons.x}</button>
      </div>
      <div class="dir-tree" id="dir-dock-tree"></div>
    </div>`;
  document.body.appendChild(dock);

  // Second, independent render of the same tree (ids stay unique).
  const treeHost = dock.querySelector("#dir-dock-tree");
  treeHost.innerHTML = `<nav class="tree-root" aria-label="Site directory">
    <ul class="tree-sublist">${buildTreeNodes(siteTree, 0)}</ul>
  </nav>`;
  treeHost.querySelectorAll(".tree-folder").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = document.getElementById(btn.getAttribute("aria-controls"));
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      if (group) group.classList.toggle("open", !open);
    });
  });

  const toggle = dock.querySelector(".dir-dock-toggle");
  const panel = dock.querySelector(".dir-dock-panel");
  const closeBtn = dock.querySelector(".dir-dock-close");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    panel.toggleAttribute("hidden", !open);
    dock.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", () => setOpen(panel.hasAttribute("hidden")));
  if (closeBtn) closeBtn.addEventListener("click", () => { setOpen(false); toggle.focus(); });

  // Navigating should not leave the panel hanging open over the content.
  treeHost.addEventListener("click", (e) => {
    if (e.target.closest(".tree-file")) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hasAttribute("hidden")) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (!dock.contains(e.target) && !panel.hasAttribute("hidden")) setOpen(false);
  });

  // The dock only earns its place once the in-page card is gone. On pages
  // without one (about, case studies) it is available immediately.
  const heroCard = document.querySelector(".hero-grid .dir-card");

  function sync() {
    let show = true;
    if (heroCard) {
      const r = heroCard.getBoundingClientRect();
      show = r.bottom < 72;
    }
    dock.classList.toggle("show", show);
    if (!show && !panel.hasAttribute("hidden")) setOpen(false);
  }

  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  sync();
}

/* ============================================================
   GRAPH TEXT EQUIVALENTS
   Each diagram keeps a written summary. It collapses once the graph
   renders, but stays reachable rather than being removed.
   ============================================================ */
function initGraphFallbackToggles() {
  document.querySelectorAll(".graph-fallback-toggle").forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute("data-fallback"));
    if (!panel) return;
    // Below the graph breakpoints the summary is shown outright, so a
    // disclosure button for it would toggle nothing.
    if (!panel.classList.contains("is-collapsed")) {
      btn.hidden = true;
      return;
    }
    btn.addEventListener("click", () => {
      const open = panel.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Hide text version" : "Read as text";
    });
  });
}

/* ============================================================
   HEADER
   ============================================================ */
function initHeader() {
  const hamburger = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  if (hamburger && mobileNav) {
    function setMenu(open) {
      mobileMenuOpen = open;
      mobileNav.classList.toggle("open", open);
      hamburgerIcon.innerHTML = open ? icons.x : icons.menu;
      hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      hamburger.setAttribute("aria-expanded", String(open));
    }

    hamburger.setAttribute("aria-expanded", "false");
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      setMenu(!mobileMenuOpen);
    });

    // Close when a link is chosen
    mobileNav.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => setMenu(false));
    });

    // The menu covers a third of a phone screen, so every ordinary
    // dismissal gesture has to work: tap away, scroll, or Escape.
    document.addEventListener("click", (e) => {
      if (mobileMenuOpen && !mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMenu(false);
        hamburger.focus();
      }
    });

    window.addEventListener("scroll", () => {
      if (mobileMenuOpen) setMenu(false);
    }, { passive: true });
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

/* Everything outside an open dialog must leave the tab order, or keyboard
   and screen-reader users wander into content hidden behind the overlay. */
function setPageInert(on, except) {
  [...document.body.children].forEach((el) => {
    if (el === except || el.id === "back-to-top" || el.id === "dir-dock") return;
    if (on) {
      el.setAttribute("inert", "");
      el.setAttribute("aria-hidden", "true");
    } else {
      el.removeAttribute("inert");
      el.removeAttribute("aria-hidden");
    }
  });
}

/* ============================================================
   RESUME MODAL
   ============================================================ */
function initResumeModal() {
  const overlay = document.getElementById("resume-modal-overlay");
  const triggers = document.querySelectorAll("[data-resume-trigger]");
  const closeBtn = document.getElementById("resume-modal-close");

  let lastTrigger = null;

  function openModal(e) {
    lastTrigger = e && e.currentTarget ? e.currentTarget : null;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setPageInert(true, overlay);
    // Without this the dialog opens with focus still on the page behind it.
    const first = overlay.querySelector(".modal-close-btn");
    if (first) first.focus();
  }
  function closeModal() {
    if (!overlay.classList.contains("open")) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    setPageInert(false, overlay);
    if (lastTrigger) lastTrigger.focus();
  }

  const smallScreen = () => window.matchMedia("(max-width: 767px)").matches;

  triggers.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      if (smallScreen()) {
        // iOS Safari will not render a PDF in an iframe, and Android
        // Chrome usually shows a download shim instead.
        window.open("resume.pdf", "_blank", "noopener");
        return;
      }
      openModal(e);
    })
  );
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
    applyProjectLimit(filtered.length);
  }
}

/* On a phone the full grid is ~9.6 screens of near-identical cards, so it
   starts trimmed. Nothing is removed — the rest is one tap away, and the
   limit lifts entirely once there is room for a multi-column grid. */
const PROJECT_LIMIT_MOBILE = 6;
let projectsExpanded = false;

function applyProjectLimit(total) {
  const grid = document.getElementById("projects-grid");
  const moreWrap = document.getElementById("projects-more");
  if (!grid || !moreWrap) return;

  const narrow = window.matchMedia("(max-width: 639px)").matches;
  const cards = [...grid.children];
  const limited = narrow && !projectsExpanded && total > PROJECT_LIMIT_MOBILE;

  cards.forEach((c, i) => {
    c.hidden = limited && i >= PROJECT_LIMIT_MOBILE;
  });

  if (!narrow || total <= PROJECT_LIMIT_MOBILE) {
    moreWrap.hidden = true;
    return;
  }

  moreWrap.hidden = false;
  const btn = moreWrap.querySelector("button");
  const remaining = total - PROJECT_LIMIT_MOBILE;
  btn.textContent = projectsExpanded
    ? "Show fewer projects"
    : `Show all ${total} projects (${remaining} more)`;
  btn.setAttribute("aria-expanded", String(projectsExpanded));
}

function initProjectsMore() {
  const moreWrap = document.getElementById("projects-more");
  if (!moreWrap) return;
  const btn = moreWrap.querySelector("button");
  btn.addEventListener("click", () => {
    projectsExpanded = !projectsExpanded;
    renderProjects();
    if (!projectsExpanded) {
      document.getElementById("projects").scrollIntoView({ block: "start" });
    }
  });
  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(renderProjects, 180);
  });
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const linksHTML = (project.githubUrl || project.liveUrl || project.caseUrl) ? `
    <div class="project-links">
      ${project.caseUrl ? `
        <a href="${project.caseUrl}" class="project-link case" onclick="event.stopPropagation()">
          ${icons.filetext} Case Study
        </a>` : ""}
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

  // Thumbnails are decorative stock, so alt is empty (the title is right
  // below it). auto=format lets Unsplash negotiate AVIF/WebP, ~22% smaller.
  const thumbSrc = project.imageUrl && project.imageUrl.includes("images.unsplash.com")
    ? project.imageUrl + "&auto=format&q=60"
    : project.imageUrl;

  const imageHTML = project.imageUrl ? `
    <img src="${thumbSrc}" alt="" loading="lazy" decoding="async" class="project-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
    <div class="project-placeholder" style="display:none;">
      ${icons.image}
    </div>` : `
    <div class="project-placeholder">
      ${icons.image}
    </div>`;

  article.innerHTML = `
    <div class="project-thumb">
      ${imageHTML}
      <div class="project-thumb-gradient"></div>
    </div>
    <div class="project-body">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-subtitle">${project.subtitle}</p>
      ${skillsHTML}
      ${linksHTML}
    </div>
  `;

  // Optional whole-card link. The Code / Live Demo buttons stop propagation,
  // so they still go to their own targets.
  if (project.cardUrl) {
    const open = () => window.open(project.cardUrl, "_blank", "noopener,noreferrer");
    article.classList.add("is-link");
    article.tabIndex = 0;
    article.setAttribute("role", "link");
    article.setAttribute("aria-label", `${project.title}: open live app`);
    article.addEventListener("click", open);
    article.addEventListener("keydown", (e) => {
      if (e.target === article && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        open();
      }
    });
  }

  return article;
}

function initCategoryFilter() {
  const filterContainer = document.getElementById("category-filter");
  if (!filterContainer) return;

  filterContainer.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
    // The count tells a phone visitor that a tap collapses 19 cards to a few
    const n = cat === "All Categories"
      ? projects.length
      : projects.filter((p) => p.category === cat).length;
    btn.innerHTML = `${cat}<span class="filter-count">${n}</span>`;
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

  timeline.innerHTML = experiences.map((exp, idx) => `
    <div class="timeline-item${idx > 1 ? " exp-role-extra" : ""}">
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
          ${exp.responsibilities.map((r, i) => `
            <li class="exp-card-list-item${i > 1 ? " exp-bullet-extra" : ""}">
              <span class="exp-bullet"></span>
              ${r}
            </li>`).join("")}
        </ul>
        ${exp.responsibilities.length > 2 ? `
        <button type="button" class="exp-more-bullets" aria-expanded="false">
          +${exp.responsibilities.length - 2} more
        </button>` : ""}
        ${exp.caseUrl ? `
        <a href="${exp.caseUrl}" class="exp-case-link">
          ${icons.filetext}
          Read the case study
          <span class="exp-case-arrow">&rarr;</span>
        </a>` : ""}
      </div>
    </div>
  `).join("");
}

/* ============================================================
   EXPERIENCE DISCLOSURE (phones)
   Five roles with every bullet ran 4,897px — 30% of the page. Two roles
   with two bullets each is enough to judge; the rest is one tap away.
   ============================================================ */
function initExperienceDisclosure() {
  const timeline = document.getElementById("experience-timeline");
  if (!timeline) return;

  timeline.querySelectorAll(".exp-more-bullets").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".exp-card");
      const open = card.classList.toggle("bullets-open");
      btn.setAttribute("aria-expanded", String(open));
      const extra = card.querySelectorAll(".exp-bullet-extra").length;
      btn.textContent = open ? "Show less" : `+${extra} more`;
    });
  });

  const hidden = timeline.querySelectorAll(".exp-role-extra").length;
  if (!hidden) return;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "exp-more-roles";
  btn.setAttribute("aria-controls", "experience-timeline");
  btn.setAttribute("aria-expanded", "false");
  btn.textContent = `Show ${hidden} earlier roles`;
  btn.addEventListener("click", () => {
    const open = timeline.classList.toggle("roles-open");
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Show fewer roles" : `Show ${hidden} earlier roles`;
    if (!open) timeline.scrollIntoView({ block: "start" });
  });
  timeline.insertAdjacentElement("afterend", btn);
}

/* Education / awards / volunteer are eight cards of supporting detail —
   folded on phones behind a labelled count. */
function initInfoDisclosures() {
  [
    ["education-cards", "Education & certifications"],
    ["awards-cards", "Awards & innovation"],
    ["volunteer-cards", "Leadership & volunteer"],
  ].forEach(([id, label]) => {
    const host = document.getElementById(id);
    if (!host) return;
    const count = host.children.length;
    if (!count) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "info-disclosure";
    btn.setAttribute("aria-controls", id);
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = `<span>${label}</span><span class="info-disclosure-count">${count}</span>`;
    btn.addEventListener("click", () => {
      const open = host.classList.toggle("cards-open");
      btn.setAttribute("aria-expanded", String(open));
    });
    host.insertAdjacentElement("beforebegin", btn);
  });
}

function renderEducation() {
  const container = document.getElementById("education-cards");
  if (!container) return;
  container.innerHTML = education.map((edu) => `
    <div class="info-card">
      <h4 class="info-card-title">${edu.credential}</h4>
      <p class="info-card-sub">${edu.institution}</p>
      ${edu.location || edu.dates ? `<p class="info-card-loc">${[edu.location, edu.dates].filter(Boolean).join(" • ")}</p>` : ""}
    </div>
  `).join("");
}

function renderAwards() {
  const container = document.getElementById("awards-cards");
  if (!container) return;
  container.innerHTML = awards.map((award) => `
    <div class="info-card">
      <h4 class="info-card-title">${award.title}</h4>
      <p class="info-card-sub" style="font-size:0.75rem;">${award.organization}${award.year ? ` • ${award.year}` : ""}</p>
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
      if (skill) openSkillModal(skill, btn);
    });
  });
}

/* ============================================================
   SKILL MODAL
   ============================================================ */
let skillModalTrigger = null;

function openSkillModal(skill, trigger) {
  selectedSkill = skill;
  skillModalTrigger = trigger || null;
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
  setPageInert(true, overlay);
  const close = document.getElementById("skill-modal-close");
  if (close) close.focus();
}

function closeSkillModal() {
  const overlay = document.getElementById("skill-modal-overlay");
  if (!overlay || !overlay.classList.contains("open")) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  setPageInert(false, overlay);
  if (skillModalTrigger) skillModalTrigger.focus();
  skillModalTrigger = null;
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

    try {
      // Send form using EmailJS
      await emailjs.sendForm(
        'service_ne3ev1n',       // Service ID
        'template_bif3rub',      // Template ID
        form 
      );

      form.reset();
      showToast("Message sent!", "Thanks for reaching out. I'll get back to you soon.");
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast("Oops! Something went wrong", "Please try again later or contact me directly.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = original;
    }
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
  const targets = document.querySelectorAll(".reveal");

  // .reveal starts hidden, so without an observer the content would never
  // appear. Show everything rather than hide it.
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }

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

  targets.forEach((el) => observer.observe(el));
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
  initOrcaBadges();
  initOrcaCarousel();
  initBackToTop();
  initPbiModal();
  initProjectsMore();
  initGraphFallbackToggles();
  initDirectoryDock();
  initGraphSectionFolding();
  initSiteTree();
  initHeader();
  initResumeModal();
  initCategoryFilter();
  renderExperience();
  initExperienceDisclosure();
  renderEducation();
  renderAwards();
  renderVolunteer();
  initInfoDisclosures();
  renderSkills();
  initSkillModal();
  initContactForm();
  initScrollAnimations();
  updateCopyright();
});
