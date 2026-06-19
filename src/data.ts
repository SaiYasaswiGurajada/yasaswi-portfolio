
export const profile = {
  name: "Sai Yasaswi Gurajada",
  title: "Software Engineer — Backend · APIs · Angular",
  summary: "Software Engineer with 4+ years building scalable enterprise apps across backend, frontend, and APIs. Known for workflow orchestration systems, modernizing microservices, and measurable performance gains.",
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
  "JavaScript", "Node.js", "SQL", "MySQL", "Postgres", "Redis", "Elasticsearch", 
  "Docker", "Kubernetes", "Azure DevOps", "GCP", "GitHub", "Jenkins", "ArgoCD", 
  "Gradle", "Maven", "LangChain", "CrewAI", "Azure AI Search", "LLM Integration", 
  "RAG", "AI Workflow Automation", "IntelliJ IDE", "Postman", "Swagger", "Figma", 
  "CheckMarx", "JFrog"
];

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
      "At Ascendion, I developed robust backend services for the AAVA platform, enabling the orchestration of 20+ workflow artifacts and supporting end-to-end multi-tenant software development, deployment, and governance workflows. By architecting RESTful APIs and Spring Boot microservices, I successfully reduced workflow execution latency by 30%, which significantly improved responsiveness across multi-tenant processing. A major highlight of my time there was integrating Python-based AI services, LLM-powered workflows, and intelligent agent frameworks into our core orchestration pipelines, cutting manual intervention by 40% and accelerating AI-assisted business processes. Additionally, I designed and implemented efficient Java-to-Python workflow execution APIs to streamline integration complexity across runners and enable seamless cross-language execution across multiple runtime environments. Driven by a focus on platform scalability and security, I built reusable Controller, Service, DTO, validation, and exception-handling frameworks across 5+ platform modules, reducing new-feature onboarding effort by 30%. I also established comprehensive artifact lifecycle workflows covering CRUD, approval, versioning, and auditing to improve traceability by 40%. To modernize our infrastructure, I transitioned legacy services into cloud-native containerized microservices, which cut deployment issues by 25%. Beyond delivering 15+ major platform enhancements, I heavily fortified platform security by eliminating critical upload vulnerabilities and remediating over 100 application and container vulnerabilities through automated DevSecOps and secure build practices. Finally, I automated Azure DevOps and Kubernetes-based deployment workflows, cutting deployment effort by 50% and ensuring strict release reliability across Dev, QE, and UAT environments.At Ascendion, I architected and shipped core backend services for AAVA, an agentic AI platform for software development and workflow orchestration. I designed Spring Boot REST APIs with clean DTO/Controller/Service layers, input validation, consistent error contracts, integrated Python microservices for workflow execution, added multi-tenant routing, artifact versioning, and robust approval flows. I standardized pagination/sorting and created Postman collections to unblock QA and partner teams. On the platform side, I introduced a resilient job-execution pattern, like timeouts, retries, and async event hooks for auditability. I also set up pragmatic CI/CD that stabilized releases and reduced hand-offs. I have also developed the artifact-lifecycle, approvals work, and cut user onboarding time by 40%. Day-to-day, I partnered with Product Manager and the UI/UX team to translate requirements into sequenced deliverables. I also assisted with migration scripts for Postgres, added diagnostics and structured logging for faster RCA, and mentored teammates on API consistency and test strategy."
    ]
  },
  {
    company: "Encora Innovation Labs",
    role: "Software Engineer",
    period: "Apr 2024 – Aug 2024",
    bullets: [
      "At Encora, I ensured uninterrupted customer delivery during the TIBCO-to-Encora engineering transition, successfully supporting continuous product releases and production issue resolution for enterprise customers. To streamline external connectivity, I architected and delivered an API-first integration solution using OpenAPI and Swagger specifications, which reduced customer dependency on UI-driven workflows and significantly accelerated overall integration adoption. Additionally, I defined reusable RESTful service contracts that minimized client integration effort and expedited the onboarding process for external partner systems. I also took full ownership of the end-to-end implementation of the CMI Protocol for the 1.5.0 release, delivering critical compliance and interoperability functionality seamlessly within tight release timelines. Beyond core backend and protocol development, I contributed to full-stack and operational improvements, including Angular UI enhancements, CI/CD pipeline automation, and targeted testing initiatives. These efforts allowed us to reduce regression testing effort by 30% and measurably improved overall release quality and deployment reliability."
    ]
  },
  {
    company: "TIBCO · Cloud Software Group",
    role: "Software Engineer",
    period: "Sep 2021 – Mar 2024",
    bullets: [
      "At TIBCO, I delivered enterprise B2B integration capabilities for TIBCO BusinessConnect Container Edition, supporting secure data exchange across global partner ecosystems. I successfully expanded interoperability across multiple enterprise customer environments by implementing robust ebXML and ebMS3 protocol integrations. Driven by a focus on performance and quality, I conducted thorough bottleneck analysis and protocol-level optimizations during testing and validation, which improved application performance by up to 50%. Through rigorous root-cause analysis, I successfully resolved complex, high-priority customer escalations, effectively reducing overall issue resolution timelines by 35%. I contributed to multiple successful product releases by implementing customer-driven features, developing stable API integrations, and enhancing long-term platform reliability, scalability, and maintainability. I also demonstrated strong agility and cross-functional capability by assuming full ownership of Angular-based UI enhancements and frontend-backend integrations when dedicated UI resources were unavailable, ensuring uninterrupted release continuity and an improved user experience. Additionally, I championed team growth and operational efficiency by providing structured mentoring, technical guidance, and knowledge-transfer initiatives, which successfully reduced onboarding ramp-up time for new team members by approximately 60%."
    ]
  }
]
