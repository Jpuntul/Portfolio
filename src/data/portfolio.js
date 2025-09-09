export const personalInfo = {
  name: "Jutipong Puntuleng",
  title: "Software Engineering Student",
  university: "Concordia University",
  location: "Montreal, QC",
  email: "p.jutipong13@gmail.com",
  phone: "(514) 585-5823",
  github: "https://github.com/Jpuntul",
  linkedin: "https://www.linkedin.com/in/jpuntul/",
  yearsOfExperience: 3
}

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.",
    image: "/images/projects/project1-screenshot.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/jutipong/ecommerce-platform",
    demo: "https://your-ecommerce-demo.netlify.app",
    category: "web"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React Native mobile app for task management with offline support and real-time synchronization.",
    image: "/images/projects/project2-screenshot.png",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/jutipong/task-management-app",
    demo: null,
    category: "mobile"
  },
  {
    id: 3,
    title: "Weather ML Model",
    description: "Machine learning model for weather prediction using historical data and neural networks.",
    image: "/images/projects/project3-screenshot.png",
    technologies: ["Python", "TensorFlow", "Pandas"],
    github: "https://github.com/jutipong/weather-ml-model",
    demo: "https://weather-ml-demo.streamlit.app",
    category: "ai/ml"
  }
]

export const skills = {
  "Programming Languages": [
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "TypeScript", level: 65 }
  ],
  "Frontend": [
    { name: "React", level: 80 },
    { name: "HTML/CSS", level: 85 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Vue.js", level: 60 }
  ],
  "Backend": [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "SQL", level: 80 },
    { name: "Django", level: 65 },
  ]
}