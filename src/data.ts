
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
      "At Ascendion, I developed and maintained core backend services for AVA+, an agentic AI-powered software development and workflow orchestration platform, using Spring Boot and RESTful APIs. I designed and implemented APIs supporting both JSON-based and file-based executions, integrating seamlessly with a Python microservice layer. My work included architecting modular DTO, Controller, and Service layers with robust exception handling, validation, and dynamic AI model resolution. I also redesigned and deployed a version-controlled workflow system featuring audit trails, draft approval workflows, and agent mapping, while optimizing pipeline execution flow to reduce latency and enable multi-tenant scalability."
    ]
  },
  {
    company: "Encora Innovation Labs",
    role: "Software Engineer",
    period: "Apr 2024 – Aug 2024",
    bullets: [
      "At Encora, I continued my work with TIBCO’s Cloud Software Group after the engineering team transition, delivering critical features under tight deadlines without compromising quality. I implemented a new service enabling API calls via Swagger instead of the UI, meeting specific customer requirements, and took full ownership of integrating the CMI Protocol into the 1.5.0 release. I led end-to-end API contract design using OpenAPI specifications, streamlining QA automation and enabling third-party API client generation. By collaborating closely with the QA team, I built mock APIs and automated test suites, reducing regression testing time by 30%. I also enhanced documentation and internal wikis to ensure smooth onboarding and handovers for new developers."
    ]
  },
  {
    company: "TIBCO · Cloud Software Group",
    role: "Software Engineer",
    period: "Sep 2021 – Mar 2024",
    bullets: [
      "At TIBCO, I contributed to developing and enhancing Business Connect’s Container Edition, taking ownership from debugging and feature enhancements in the 1.2.0 release to integrating new protocols in subsequent versions. I proactively assumed UI/UX responsibilities when the dedicated UI team was reassigned, ensuring seamless design continuity. Key achievements include integrating ebXML and ebMS3 protocols in the 1.3.0 release based on customer requirements, optimizing task performance for faster execution, and introducing workarounds that improved performance testing results by 50%. As the point of contact for ebXML, ebMS3, X12, and HIPAA protocols, I streamlined QA testing, and I ensured a smooth knowledge transfer for three new joiners, enabling them to set up environments and become productive within the first month."
    ]
  }
]
