
export const profile = {
  name: "Sai Yasaswi Gurajada",
  title: "Software Engineer — Backend · APIs · Angular",
  summary: "Software Engineer with 3+ years building scalable enterprise apps across backend, frontend, and APIs. Known for workflow orchestration systems, modernizing microservices, and measurable performance gains.",
  location: "Hyderabad, India",
  email: "yashaswigurajada@gmail.com",
  phone: "+91 98858 08593",
  links: {
    github: "https://github.com/SaiYasaswiGurajada",
    linkedin: "https://www.linkedin.com/in/sai-yasaswi-gurajada/"
  }
}

export const skills = [
  "Java", "Spring Boot", "REST APIs", "Microservices", "Python", "Angular", "TypeScript",
  "SQL", "Redis", "Elasticsearch", "Docker", "Kubernetes",
  "Azure DevOps", "GCP", "GitHub", "Gradle", "Maven"
]

export const projects = [
  {
    title: "Face Mask Detection",
    period: "Mar 2021",
    description: "CNN-powered real-time face mask compliance with facial detection & tracking. 98% accuracy on 5k+ images; <100ms latency per frame.",
    stack: ["Keras","OpenCV","CNNs"]
  },
  {
    title: "Mood Therapy",
    period: "Jan 2020",
    description: "Mobile + web app to track mood and recommend activities: e-books, movies, podcasts, music.",
    stack: ["HTML","CSS","JS","Flutter"]
  },
  {
    title: "Cotton Price Prediction",
    period: "Feb 2020",
    description: "AI-powered portal for analyzing & forecasting cotton prices. MAE ~7.2% on historical datasets.",
    stack: ["Django","Scikit-learn","Pandas","Matplotlib"]
  },
  {
    title: "Malaria Detection",
    period: "Sep 2019",
    description: "CNN for classifying infected cells on smear slides. 97% accuracy on 10k+ images.",
    stack: ["PyTorch","scikit-image","NumPy"]
  }
]

export const experience = [
  {
    company: "Ascendion Engineering",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    bullets: [
      "At Ascendion, I architected and shipped core backend services for AAVA, an agentic AI platform for software development and workflow orchestration. I designed Spring Boot REST APIs with clean DTO/Controller/Service layers, input validation, consistent error contracts, integrated Python microservices for workflow execution, added multi-tenant routing, artifact versioning, and robust approval flows. I standardized pagination/sorting and created Postman collections to unblock QA and partner teams. On the platform side, I introduced a resilient job-execution pattern, like timeouts, retries, and async event hooks for auditability. I also set up pragmatic CI/CD that stabilized releases and reduced hand-offs. I have also developed the artifact-lifecycle, approvals work, and cut user onboarding time by 40%. Day-to-day, I partnered with Product Manager and the UI/UX team to translate requirements into sequenced deliverables. I also assisted with migration scripts for Postgres, added diagnostics and structured logging for faster RCA, and mentored teammates on API consistency and test strategy."
    ]
  },
  {
    company: "Encora Innovation Labs",
    role: "Software Engineer",
    period: "Apr 2024 – Aug 2024",
    bullets: [
      "At Encora, I continued my work with TIBCO’s Cloud Software Group after the engineering team transition, delivering critical features under tight deadlines without compromising quality. I led a customer requirement to replace UI calls with a Swagger–first service layer, delivering documented and versioned endpoints that the customer could integrate. I took ownership of the CMI protocol in the 1.5.0 release, driving end-to-end API contract design, implementing adapters, and aligning validation rules and error semantics across services. To keep velocity high, I introduced mock APIs and regression suites that accelerated QA by 30%, instrumented endpoints for latency/error observability, and hardened auth and input handling to production standards. I worked closely with cross-functional teams to stage rollouts behind flags, wrote concise runbooks and how-to wikis for support/QA, and coordinated handovers so downstream teams could ship on schedule."
    ]
  },
  {
    company: "TIBCO · Cloud Software Group",
    role: "Software Engineer",
    period: "Sep 2021 – Mar 2024",
    bullets: [
      "At TIBCO, I contributed across multiple releases of Business Connect Container Edition. I started with debugging and feature enhancements in 1.2.0, then delivering customer-driven protocol work in subsequent versions. When the dedicated UI team was reassigned to another product, I stepped in to preserve UI/UX continuity, aligning front-end behavior with the evolving backend and maintaining a consistent product feel. Highlights include integrating ebXML and ebMS3 in 1.3.0, serving as the point of contact for ebXML, ebMS3, X12, and HIPAA protocols, and optimizing task flows and I/O patterns. These changes improved performance-testing results by 50%. I also streamlined QA by clarifying protocol edge cases, expanded automation coverage, and created reproducible test environments. To scale the team, I onboarded three new engineers with hands-on sessions, setup guides, and “first-week” tickets, shrinking time-to-productivity by 60% and ensuring smooth knowledge transfer across releases."
    ]
  }
]
