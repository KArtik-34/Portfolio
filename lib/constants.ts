export const personalInfo = {
  name: "Kartikay Patni",
  role: "Business Analyst | Developer | Data Enthusiast",
  email: "kartikpatni729@gmail.com",
  location: "Pithoragarh, India",
  bio: "Computer Science undergraduate specializing in Data Science & Machine Learning, with a strong background in Python, SQL, and data visualization.",
  github: "https://github.com/KArtik-34",
  linkedin: "https://linkedin.com/in/kartikaypatni",
};

export const skills = {
  languages: ["Python", "Java", "Kotlin", "SQL", "Bash"],
  frameworks: ["PyTorch", "TensorFlow", "Scikit-Learn", "PySpark", "Stable Diffusion"],
  dataAnalytics: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
  cloudDevOps: ["AWS", "Docker", "Git", "GitHub Actions"],
  mobileDev: ["Android (Java, Kotlin)"],
};

export interface Project {
  title: string;
  description: string;
  link: string;
  github?: string;
  image?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A real-time analytics dashboard using machine learning for predictive insights.",
    link: "https://analytics-dashboard.demo",
    github: "https://github.com/KArtik-34/analytics-dashboard",
    image: "/projects/analytics-dashboard.png",
    tags: ["React", "Python", "TensorFlow", "AWS"],
  },
  {
    title: "E-commerce Recommendation Engine",
    description: "Personalized product recommendations using collaborative filtering.",
    link: "https://recommender.demo",
    github: "https://github.com/KArtik-34/recommender",
    image: "/projects/recommender.png",
    tags: ["Python", "scikit-learn", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Natural Language Processing API",
    description: "REST API for text analysis, sentiment detection, and entity recognition.",
    link: "https://nlp-api.demo",
    github: "https://github.com/KArtik-34/nlp-api",
    tags: ["Python", "spaCy", "Flask", "Docker"],
  },
  // Add more projects as needed
];

export const theme = {
  colors: {
    primary: {
      light: "#a5b4fc", // Soft indigo
      dark: "#6366f1",
    },
    secondary: {
      light: "#fde68a", // Soft yellow
      dark: "#fbbf24",
    },
    background: {
      light: "#ffffff",
      dark: "#1f2937",
    },
    text: {
      light: "#1f2937",
      dark: "#f3f4f6",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Roboto",
  },
}; 