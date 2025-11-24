export const personalInfo = {
  name: "Jutipong Puntuleng",
  title: "Software Engineering Student",
  university: "Concordia University",
  location: "Montreal, QC",
  email: "p.jutipong13@gmail.com",
  phone: "(514) 585-5823",
  github: "https://github.com/Jpuntul",
  linkedin: "https://www.linkedin.com/in/jpuntul/",
  yearsOfExperience: 3,
};

export const projects = [
  {
    id: 1,
    role: "Full Stack",
    title: "HMS",
    shortDesc:
      "Comprehensive health facility employee status tracking system for pandemic management.",
    description: `HFESTS (Hospital Facility Employee Status Tracking System) is a comprehensive system designed to track the status of employees in health facilities, especially during pandemic situations like COVID-19. It maintains detailed information about employees, people they live or work with, facilities, residences, infections, and vaccinations. The system supports:

      - Managing facilities (hospitals, clinics, pharmacies, etc.) and their employees
      - Tracking employee roles, schedules, and assignments across multiple facilities
      - Recording infection and vaccination history for employees and their contacts
      - Managing residences and relationships of people living with employees
      - Enforcing scheduling rules based on infection/vaccination status
      - Automated email notifications for schedule updates, infection warnings, and assignment changes
      - Logging all system-generated emails for auditing

      The system features a user-friendly GUI and is practical for health organizations to reduce the risk of disease spread and ensure compliance with health protocols.`,
    image: "images/projects/hms.png",
    technologies: ["Vite", "MySQL", "Django"],
    github: "https://github.com/Jpuntul/HMS",
    demo: "",
    category: "Web",
    status: "Ongoing",
    features: [
      "Patient Management",
      "Doctor Scheduling",
      "Appointment Booking",
    ],
    highlight: true,
  },
  {
    id: 2,
    role: "Full Stack",
    title: "Onmi Rentals",
    shortDesc: "Car rental web app with booking, payment, and admin dashboard.",
    description: `Welcome to the Car-Rental Web Application project for the SOEN 341 course, Winter 2024. This project aims to develop a comprehensive car rental platform using Agile methodologies. The application serves as a bridge between customers seeking vehicle rentals and the car rental company offering services.\n\nKey Features:\n- Vehicle Catalog: Browse an extensive catalogue of rental vehicles, including cars, SUVs, vans, and trucks.\n- Reservation Management: Easily start, view, modify, or cancel reservations.\n- Account Management: Secure login, profile management, and order history.\n- Search Functionality: Quickly find vehicles or content using the search bar.\n- Responsive Design: Seamless experience across modern browsers and devices.\n\nTechnology Stack:\n- Frontend: React, Next.js, Tailwind CSS\n- Backend: Next.js (API routes), MongoDB\n\nFor more details, visit the project repository and documentation.`,
    image: "images/projects/car-rental.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/Shamiivan/omni-rentals",
    demo: "",
    category: "Web",
    status: "Completed",
    features: ["Car Booking", "Payment Integration", "Admin Dashboard"],
  },
  {
    id: 3,
    role: "Full Stack",
    title: "Campus Navigation",
    shortDesc: "Interactive campus map for navigation and location search.",
    description: `The Concordia Campus Guide is a mobile application designed to provide comprehensive indoor and outdoor navigation, schedule management, and accessibility features for Concordia University. The app helps students, staff, and visitors efficiently find their way across both Sir George Williams and Loyola campuses, including buildings, rooms, and facilities.\n\nKey Features:\n- Indoor navigation from room to room or floor to floor, with accessibility details (elevators, stairs, etc.)\n- Outdoor navigation between buildings and off-campus locations\n- Inter-campus travel guidance, including transport schedules and waiting times\n- Integration with user calendars to find and navigate to upcoming events or classes\n- Search for buildings, rooms, and schedules through a user-friendly interface\n- Clear map views for both indoor and outdoor navigation\n- Accessibility-focused route planning for users with mobility needs\n\nThe project aims to deliver a seamless, accessible, and efficient campus navigation and planning experience for the Concordia community.`,
    image: "images/projects/campus-map.png",
    technologies: ["Flutter", "Codecov"],
    github: "https://github.com/SOEN-390-W2025/SOEN-390",
    demo: "",
    category: "Mobile",
    status: "Completed",
    features: ["Map Navigation", "Location Search", "Responsive Design"],
    highlight: true,
  },
  {
    id: 4,
    role: "Frontend",
    title: "Velosim",
    shortDesc:
      "Open-source network simulation platform for managing distributed resources (used by Bixi).",
    description: `VeloSim is an open-source network simulation platform that enables job dispatchers to manage distributed resources in dynamic environments. It features a Python backend and simulation engine, and a modern JavaScript/React frontend. VeloSim is used by Bixi for real-world resource management and simulation.\n\nKey Features:\n- Distributed resource/job management\n- Python backend API and simulation engine\n- Modern JavaScript/React frontend\n- Used in production by Bixi\n- Team-based collaborative development\n\nThe project is structured for robust development, testing, and CI/CD, with strict code quality standards and automated workflows.`,
    image: "images/projects/velosim.png",
    technologies: ["Vite", "Django", "MapboxGL", "Codecov"],
    github: "https://github.com/vinishamanek/VeloSim",
    demo: "",
    category: "Web",
    status: "Ongoing",
    features: ["Physics Simulation", "User Controls"],
    highlight: true,
  },
  {
    id: 5,
    role: "Full Stack",
    title: "Delivery System",
    shortDesc:
      "Smart delivery platform with real-time tracking, dynamic routing, and automated customer service.",
    description: `The Delivery System project is a smart logistics platform enabling users to request and manage deliveries for mail, food, devices, and more. It features real-time tracking, dynamic routing algorithms, and automated customer communication to optimize efficiency and customer satisfaction.\n\nKey Features:\n- Intuitive interface for managing deliveries, payments, and status\n- Real-time GPS tracking and status notifications\n- Dynamic routing based on traffic, distance, and delivery urgency\n- Automated customer service and chatbots\n- Scalable, resource-optimized architecture\n\nThe system addresses common delivery challenges such as lack of visibility, poor customer service, and inefficient intra-city networks by leveraging intelligent software and automation.`,
    image: "images/projects/delivery-system.png",
    technologies: ["React", "Vite", "Node.js", "MySQL"],
    github: "https://github.com/azalmashta/GroupOne-SOEN343-F2024",
    demo: "",
    category: "Web",
    status: "Completed",
    features: ["Order Tracking", "Delivery Management"],
  },
  {
    id: 6,
    role: "Full Stack",
    title: "Calculator",
    shortDesc: "Simple calculator web application.",
    description: "A simple calculator application.",
    image: "images/projects/calculator.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Jpuntul/Calculator",
    demo: "",
    category: "Web",
    status: "Completed",
    features: ["Basic Operations", "Responsive UI"],
  },
  {
    id: 7,
    role: "Full Stack",
    title: "Date Countdown",
    shortDesc: "Countdown timer for important dates (ongoing).",
    description: "A countdown timer for important dates (ongoing).",
    image: "images/projects/date-countdown.png",
    technologies: ["React Native"],
    github: "https://github.com/Jpuntul/countdown",
    demo: "",
    category: "Web",
    status: "Ongoing",
    features: ["Countdown Timer", "Custom Dates"],
    highlight: true,
  },
  {
    id: 8,
    role: "Full Stack",
    title: "Hand-in-Hand",
    shortDesc: "Auction web app for bidding and selling items.",
    description: "Auction web application for bidding and selling items.",
    image: "images/projects/hand-in-hand.png",
    technologies: ["Vite", "Node.js", "Firebase"],
    github: "https://github.com/Jpuntul/hand-in-hand-auction",
    demo: "",
    category: "Web",
    status: "Ongoing",
    features: ["Auction Bidding", "User Accounts", "Item Listings"],
    highlight: true,
  },
  {
    id: 9,
    role: "Full Stack",
    title: "Adopt Cat Dog",
    shortDesc:
      "Pet adoption platform connecting adopters with cats and dogs in need.",
    description: `Adopt Cat Dog is a web application designed to streamline the adoption process for both potential adopters and rescue organizations. Users can browse available cats and dogs, submit adoption applications, and connect with rescue centers, making it easier for pets to find loving homes.`,
    image: "images/projects/adopt-cat-dog.png",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Jpuntul/Adopt_cat-dog",
    demo: "",
    category: "Web",
    status: "Completed",
    features: ["Pet Listings", "Adoption Forms", "Responsive Design"],
  },
  {
    id: 10,
    role: "Frontend",
    title: "Personal Portfolio",
    shortDesc:
      "Modern, responsive portfolio website to showcase my projects and skills.",
    description: `This portfolio website was designed and built by me to showcase my software engineering projects, skills, and experience. It features a modern UI, advanced filtering, project modals, and a featured projects carousel. The site is built with React, Vite, and Tailwind CSS, and includes automated code quality tools (Husky, lint-staged, Prettier, ESLint) for a professional workflow.

  Key Features:
  - Responsive design for all devices
  - Dynamic project filtering by category, status, and role
  - Project detail modals with click-outside/Escape close
  - Featured projects carousel
  - Automated code formatting and linting on commit
  - Custom dropdowns and branded UI elements

  This project demonstrates my ability to design, develop, and maintain a modern web application from scratch.`,
    image: "images/projects/portfolio.png",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Husky",
      "Prettier",
      "ESLint",
    ],
    github: "https://github.com/Jpuntul/Portfolio",
    demo: "",
    category: "Web",
    status: "Completed",
    features: [
      "Responsive Design",
      "Project Filtering",
      "Featured Carousel",
      "Modal UI",
      "Automated Linting/Formatting",
    ],
    highlight: true,
  },
];

export const skills = {
  "Programming Languages": [
    { name: "JavaScript", experience: "Proficient" },
    { name: "Python", experience: "Experienced" },
    { name: "Java", experience: "Experienced" },
    { name: "TypeScript", experience: "Experienced" },
  ],
  Frontend: [
    { name: "React", experience: "Proficient" },
    { name: "HTML/CSS", experience: "Proficient" },
    { name: "Tailwind CSS", experience: "Experienced" },
    { name: "Vue.js", experience: "Familiar" },
  ],
  Backend: [
    { name: "Node.js", experience: "Proficient" },
    { name: "SQL", experience: "Experienced" },
    { name: "Django", experience: "Experienced" },
    { name: "MongoDB", experience: "Experienced" },
  ],
};
