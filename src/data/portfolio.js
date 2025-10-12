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
    description: "Full-stack e-commerce application with user authentication, payment processing, and admin dashboard. Features include product catalog, shopping cart, order management, and Stripe integration.",
    image: "/images/projects/project1-screenshot.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
    github: "https://github.com/Jpuntul/ecommerce-platform",
    demo: "https://ecommerce-demo-jp.netlify.app",
    category: "Full Stack",
    status: "In Development",
    features: ["User Authentication", "Payment Processing", "Admin Dashboard", "Responsive Design"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React Native mobile app for task management with offline support and real-time synchronization. Includes features like project organization, team collaboration, and progress tracking.",
    image: "/images/projects/project2-screenshot.png",
    technologies: ["React Native", "Firebase", "Redux", "AsyncStorage", "Push Notifications"],
    github: "https://github.com/Jpuntul/task-management-app",
    demo: null,
    category: "Mobile",
    status: "Completed",
    features: ["Offline Support", "Real-time Sync", "Team Collaboration", "Push Notifications"]
  },
  {
    id: 3,
    title: "Weather ML Prediction",
    description: "Machine learning model for weather prediction using historical data and neural networks. Built with Python and TensorFlow, deployed on Streamlit for interactive predictions.",
    image: "/images/projects/project3-screenshot.png",
    technologies: ["Python", "TensorFlow", "Pandas", "Streamlit", "NumPy", "Scikit-learn"],
    github: "https://github.com/Jpuntul/weather-ml-model",
    demo: "https://weather-ml-jp.streamlit.app",
    category: "AI/ML",
    status: "Completed",
    features: ["Neural Networks", "Data Visualization", "Interactive Interface", "Real-time Predictions"]
  }
]

export const skills = {
  "Programming Languages": [
    { name: "JavaScript", experience: "Proficient" },
    { name: "Python", experience: "Experienced" },
    { name: "Java", experience: "Experienced" },
    { name: "TypeScript", experience: "Experienced" }
  ],
  "Frontend": [
    { name: "React", experience: "Proficient" },
    { name: "HTML/CSS", experience: "Proficient" },
    { name: "Tailwind CSS", experience: "Experienced" },
    { name: "Vue.js", experience: "Familiar" }
  ],
  "Backend": [
    { name: "Node.js", experience: "Proficient" },
    { name: "SQL", experience: "Experienced" },
    { name: "Django", experience: "Experienced" },
    { name: "MongoDB", experience: "Experienced" },
  ]
}