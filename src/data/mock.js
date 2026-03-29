export const portfolioData = {
  personal: {
    name: "Md Arbaz",
    title: "Java Full Stack Developer",
    tagline: "Building Scalable Web Applications with Spring Boot & React",
    email: "mdarbaz1712@gmail.com",
    phone: "+91-8102838513",
    github: "https://github.com/mdarbaz1712",
    linkedin: "https://www.linkedin.com/in/md-arbaz-995a54283",
    location: "Patna, Bihar, India",
    resumeUrl: "#"
  },
  
  summary: "Computer Science and Engineering undergraduate at NIT Patna with strong programming, analytical, and problem-solving skills. Passionate about full-stack web development with the Tech Stack of Spring Boot and React and Microservices systems. Experienced in building scalable applications and participating in competitive programming.",
  
  education: [
    {
      institution: "National Institute of Technology, Patna",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2022 - 2026",
      grade: "CGPA: 8.58"
    },
    {
      institution: "Patna Muslim High School, Bihar",
      degree: "Bihar School Education Board",
      duration: "2022",
      grade: "88.4%"
    },
    {
      institution: "Raza High School, Bihar",
      degree: "Central Board of Secondary Education",
      duration: "2020",
      grade: "83.2%"
    }
  ],
  
  experience: [
    {
      company: "Grid Dynamics",
      position: "Java Full Stack Developer Intern",
      duration: "January 2026 - July 2026",
      location: "Bengaluru, India",
      description: [
        "Engineered RAG platform using Java 21, Spring Boot 4, and LangChain4j for secure document intelligence.",
        "Implemented a 6-step RAG pipeline with CRAG scoring, achieving high-precision grounded synthesis with inline citations.",
        "Optimized inference by building a distributed router to load-balance LLM requests across nodes using Ollama and ChromaDB."
      ],
      technologies: ["Java 21", "Spring Boot 4", "LangChain4j", "Ollama", "ChromaDB", "RAG"]
    },
    {
      company: "AICTE Project",
      position: "AI-Powered Water Pollution Prediction",
      duration: "June 2025 - July 2025",
      location: "Remote",
      description: [
        "Developed predictive model to forecast pollutant levels across 22 stations, improving forecasting efficiency by 20%.",
        "Implemented Random Forest with MultiOutputRegressor to predict six pollutants (O₂, NO₃, NO₂, SO₄, PO₄, Cl).",
        "Achieved R² = 0.92 and MSE = 0.013, deploying the prediction pipeline using joblib for model persistence."
      ],
      technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "joblib"]
    }
  ],
  
  projects: [
    {
      title: "LiveConnect: Real-Time Messaging Platform",
      duration: "November 2023 - December 2023",
      description: "Built full-stack real-time chat with secure auth using Socket.io and JWT for 200+ concurrent users. Improved UX by integrating Cloudinary for image uploads and React Hot Toast for real-time feedback. Optimized messaging pipeline by implementing horizontal scaling strategies to handle 2,000+ messages daily.",
      technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
      github: "https://github.com/mdarbaz1712/RealTime-Chatapp",
      highlights: [
        "200+ concurrent users supported",
        "2,000+ messages daily",
        "Real-time messaging with Socket.io",
        "Secure JWT authentication"
      ]
    },
    {
      title: "TaskBoard: Interactive Dashboard",
      duration: "May 2024 - June 2024",
      description: "Full-stack task management system with JWT-based auth and protected routes for 50 concurrent users. Used Redux and RESTful APIs, improving data retrieval performance by 30% through efficient state management. Integrated custom annotations for logging and audit trails to track task state transitions across the platform.",
      technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "Redux", "JWT"],
      github: "https://github.com/mdarbaz1712/Task-Management_using_All_frontend_backend_concept",
      highlights: [
        "50 concurrent users",
        "30% performance improvement",
        "Redux state management",
        "Custom audit trails"
      ]
    },
    {
      title: "Water Quality Prediction System",
      duration: "June 2025 - July 2025",
      description: "Developed predictive model to forecast pollutant levels across 22 stations. Implemented Random Forest with MultiOutputRegressor to predict six pollutants achieving R² = 0.92 and MSE = 0.013.",
      technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib"],
      github: "https://github.com/mdarbaz1712/WaterQualityPrediction_AICTE",
      highlights: [
        "R² score: 0.92",
        "MSE: 0.013",
        "22 stations monitored",
        "6 pollutant predictions"
      ]
    }
  ],
  
  skills: {
    "Languages & Frameworks": ["Java", "C++", "C", "JavaScript", "SQL", "Spring Boot", "ReactJS", "Node.js", "Express"],
    "Security & Tools": ["JWT", "bcrypt", "Docker", "CORS", "Git", "GitHub"],
    "Cloud & Databases": ["MySQL", "MongoDB Atlas", "Cloudinary", "Render"],
    "Software Concepts": ["LLD", "Distributed Systems", "RESTful APIs", "Microservices", "Socket.io", "Load Balancing"],
    "AI/ML": ["Python", "Pandas", "NumPy", "scikit-learn", "Random Forest", "RAG", "LangChain4j"]
  },
  
  achievements: [
    {
      title: "Branch Change to CSE",
      description: "Branch changed from EEE → CSE for academic excellence (CGPA: 9.83)",
      icon: "trophy"
    },
    {
      title: "LeetCode Excellence",
      description: "Max Rating 1855 (Top 13k globally), 1200+ problems solved",
      icon: "code"
    },
    {
      title: "CodeChef 3-Star",
      description: "3-star coder with Max Rating 1649",
      icon: "star"
    },
    {
      title: "Byte Verse Hackathon",
      description: "Designed low-level architecture of Zomato-like food delivery system (2024)",
      icon: "award"
    }
  ],
  
  responsibilities: [
    "Volunteered with NSS Sankalp to provide academic guidance and mentorship to school students (Classes 8-10), contributing to community educational development.",
    "Led 3-member team developing Smart CCTV System for multi-objective crowd analysis."
  ]
};