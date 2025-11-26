export const personalInfo = {
  name: "Jutipong Puntuleng",
  title: "Software Engineering Student",
  citizenship: "Thai/Canadian",
  university: "Concordia University",
  location: "Montreal, QC • Open to relocate to Bangkok",
  email: "p.jutipong13@gmail.com",
  phone: "+1 (514) 585-5823",
  github: "https://github.com/Jpuntul",
  linkedin: "https://www.linkedin.com/in/jpuntul/",
  graduationDate: "April 2026",
};

export const projects = [
  {
    id: 1,
    role: "Full Stack",
    title: "HMS",
    shortDesc:
      "Healthcare platform managing 447 patient records and 303 staff .",
    description: `Built a comprehensive full-stack healthcare platform designed to manage patient records, staff accounts, and healthcare operations efficiently.

      Key Achievements:
      - Manages 447 patient records and 303 staff accounts
      - Optimized database queries by 75% (from 3s → 0.7s) through indexing, caching, and improved schema design
      - Implemented JWT authentication with role-based access control for admin, doctor, and staff workflows
      - Designed REST API with 15+ endpoints powering analytics dashboards
      - Added automated code quality checks using 13 pre-commit hooks

      The platform provides a user-friendly interface for healthcare professionals to efficiently manage patient data, schedules, and administrative tasks while ensuring data security and compliance with healthcare protocols.`,
    image: "images/projects/hms.png",
    technologies: ["Django", "React", "TypeScript", "MySQL"],
    github: "https://github.com/Jpuntul/HMS",
    demo: "",
    category: "Web",
    status: "Completed",
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
    role: "Frontend",
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
    image: "images/projects/velosim.svg",
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
    image: "images/projects/date-countdown.svg",
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
    title: "Real-Time Auction Platform",
    shortDesc:
      "Real-time bidding platform for Hand in Hand Myanmar charity event with live updates.",
    description: `Built a real-time bidding platform for the Hand in Hand Myanmar charity event, enabling live auctions with instant synchronization across all users.

        Key Features:
        - Implemented live Firestore synchronization for instant bid updates across all connected users
        - Designed admin dashboard with full CRUD operations for managing auction items
        - Built multi-image upload gallery for showcasing auction items
        - Added lightweight guest authentication using localStorage for improved user experience
        - Real-time bidding with automatic highest bid tracking and notifications

        The platform successfully facilitated charity auctions, providing a seamless experience for both organizers and participants.`,
    image: "images/projects/hand-in-hand.svg",
    technologies: ["React", "Firebase", "JavaScript", "Firestore"],
    github: "https://github.com/Jpuntul/hand-in-hand-auction",
    demo: "",
    category: "Web",
    status: "Completed",
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
    { name: "Python", experience: "Proficient" },
    { name: "Java", experience: "Experienced" },
    { name: "TypeScript", experience: "Experienced" },
    { name: "C", experience: "Familiar" },
  ],
  Frontend: [
    { name: "React", experience: "Proficient" },
    { name: "HTML/CSS", experience: "Proficient" },
    { name: "Tailwind CSS", experience: "Proficient" },
    { name: "Vue.js", experience: "Experienced" },
    { name: "Flutter", experience: "Experienced" },
  ],
  Backend: [
    { name: "Node.js", experience: "Proficient" },
    { name: "SQL", experience: "Proficient" },
    { name: "Django", experience: "Experienced" },
    { name: "MongoDB", experience: "Experienced" },
    { name: "Firebase", experience: "Experienced" },
  ],
};
