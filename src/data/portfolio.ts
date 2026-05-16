export type ProjectCategory = "Web" | "Mobile";
export type ProjectStatus = "Completed" | "Ongoing";
export type ProjectRole = "Full Stack" | "Frontend" | "Backend";
export type SkillLevel = "Proficient" | "Experienced" | "Familiar";

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  availability: string;
  citizenship: string;
  university: string;
  graduated: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  languagesSpoken: { name: string; level: string }[];
}

export interface Project {
  id: number;
  slug: string;
  role: ProjectRole;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: ProjectCategory;
  status: ProjectStatus;
  features: string[];
  private?: boolean;
  highlight?: boolean;
  /** ≤80-char one-liner shown on cards */
  tagline?: string;
  /** Single-sentence problem statement */
  problem?: string;
  /** Single-sentence solution statement */
  solution?: string;
  /** Bulleted, defensible impact metrics */
  impact?: string[];
  /** Short stack/architecture lines */
  architecture?: string[];
  /** What this individual specifically owned on team projects */
  myRole?: string;
}

export interface Skill {
  name: string;
  experience: SkillLevel;
}

export type SkillCategories = Record<string, Skill[]>;

export const personalInfo: PersonalInfo = {
  name: "Jutipong Puntuleng",
  title: "Full-Stack Software Engineer",
  headline:
    "Software Engineer building backend systems, real-time apps, and developer tools.",
  availability: "Available for full-time roles from July 2026",
  citizenship: "Thai/Canadian",
  university: "Concordia University",
  graduated: "2026",
  location: "Montréal, QC • Open to relocate to Bangkok",
  email: "p.jutipong13@gmail.com",
  phone: "+1 (514) 585-5823",
  github: "https://github.com/Jpuntul",
  linkedin: "https://www.linkedin.com/in/jpuntul/",
  languagesSpoken: [
    { name: "Thai", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Intermediate" },
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "hms",
    role: "Full Stack",
    title: "Healthcare Management System",
    tagline:
      "Hospital platform managing 447 patients, 303 staff, and 11+ facilities.",
    shortDesc:
      "Healthcare platform managing 447 patient records, 303 staff accounts, and 11+ facilities.",
    problem:
      "Healthcare admins were juggling patient records, staff scheduling, and facility coordination across disconnected tools, with slow queries and no audit-friendly access control.",
    solution:
      "Built a Django REST + React/TypeScript platform with hybrid public/authenticated access, role-based permissions, and analytics dashboards backed by an indexed MySQL schema.",
    impact: [
      "Manages 447 patient records, 303 staff accounts, and 11+ medical facilities",
      "Optimized database queries by 75% (3s → 0.7s) via indexing, caching, and schema redesign",
      "Designed and maintained 30+ REST API endpoints powering analytics and admin workflows",
      "Enforced quality with 13 pre-commit hooks (ESLint, Prettier, Flake8, isort, Black)",
    ],
    architecture: [
      "Backend: Django 4.2 + Django REST Framework, JWT auth, MySQL",
      "Frontend: React 19 + TypeScript + Vite + Tailwind CSS",
      "Tooling: 13 pre-commit hooks, GitHub Actions CI",
    ],
    description: `Built a comprehensive full-stack healthcare platform designed to manage patient records, staff accounts, and healthcare operations efficiently.

      Key Achievements:
      - Manages 447 patient records, 303 staff accounts, and 11+ medical facilities
      - Optimized database queries by 75% (from 3s → 0.7s) through indexing, caching, and improved schema design
      - Designed and maintained 30+ REST API endpoints powering analytics dashboards
      - Implemented token-based authentication (Django REST Framework) with a hybrid access model: public viewing + authenticated modifications
      - Added automated code quality checks using 13 pre-commit hooks

      The platform provides a user-friendly interface for healthcare professionals to efficiently manage patient data, schedules, and administrative tasks while ensuring data security and compliance with healthcare protocols.`,
    image: "images/projects/hms.png",
    technologies: ["Django", "Django REST", "React", "TypeScript", "MySQL"],
    github: "https://github.com/Jpuntul/HMS",
    demo: "",
    category: "Web",
    status: "Completed",
    features: [
      "Patient Management",
      "Staff Scheduling",
      "Analytics Dashboards",
      "Role-Based Access Control",
    ],
    highlight: true,
  },
  {
    id: 2,
    slug: "onmi-rentals",
    role: "Full Stack",
    title: "Onmi Rentals",
    tagline:
      "Car rental platform with reservation management and admin dashboard.",
    shortDesc: "Car rental web app with booking, payment, and admin dashboard.",
    description: `Car rental web platform developed for SOEN 341 (Winter 2024) using Agile methodologies. Bridges customers and the rental company with full booking, account management, and search workflows.

Key Features:
- Vehicle catalogue (cars, SUVs, vans, trucks)
- Reservation management (start, view, modify, cancel)
- Account management with order history
- Search across catalogue and content
- Responsive across modern browsers and devices

Stack:
- Frontend: React, Next.js, Tailwind CSS
- Backend: Next.js API routes, MongoDB`,
    image: "images/projects/car-rental.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/Shamiivan/omni-rentals",
    demo: "",
    category: "Web",
    status: "Completed",
    features: ["Car Booking", "Payment Integration", "Admin Dashboard"],
    myRole:
      "Contributed to frontend (catalogue, reservation flow) and Next.js API routes in a team of four.",
  },
  {
    id: 3,
    slug: "campus-navigation",
    role: "Full Stack",
    title: "Campus Navigation",
    tagline:
      "Cross-platform Flutter app for Concordia campus indoor/outdoor navigation.",
    shortDesc:
      "Cross-platform mobile app for Concordia campus navigation with 95% location accuracy.",
    problem:
      "Concordia students and visitors struggled with finding rooms, navigating between Sir George Williams and Loyola campuses, and accessibility-aware routing.",
    solution:
      "Built a Flutter app with Google Maps integration covering indoor room-to-room routing, outdoor inter-campus navigation, and calendar-driven trip planning.",
    impact: [
      "Achieved 95% location accuracy across both campuses",
      "Reduced average navigation time by 30% via optimized path planning",
      "Set up GitHub Actions CI with automated test runs on every PR",
    ],
    architecture: [
      "Mobile: Flutter (Dart) cross-platform",
      "Mapping: Google Maps API + custom indoor floorplan data",
      "Quality: CI via GitHub Actions, Codecov coverage tracking",
    ],
    description: `Concordia Campus Guide is a cross-platform Flutter mobile app providing indoor and outdoor navigation, schedule management, and accessibility features across Sir George Williams and Loyola campuses.

Key Features:
- Indoor navigation room-to-room and floor-to-floor with accessibility info (elevators, stairs, etc.)
- Outdoor navigation between buildings and off-campus locations
- Inter-campus travel guidance with transport schedules
- Calendar integration for upcoming events and classes
- Accessibility-aware route planning`,
    image: "images/projects/campus-map.png",
    technologies: [
      "Flutter",
      "Dart",
      "Google Maps API",
      "GitHub Actions",
      "Codecov",
    ],
    github: "https://github.com/SOEN-390-W2025/SOEN-390",
    demo: "",
    category: "Mobile",
    status: "Completed",
    features: [
      "Indoor Navigation",
      "Outdoor Navigation",
      "Calendar Integration",
      "Accessibility Routing",
    ],
    myRole:
      "Mini-capstone team project (SOEN-390). Contributed to navigation logic, UI components, and CI pipeline.",
    highlight: true,
  },
  {
    id: 4,
    slug: "velosim",
    role: "Full Stack",
    title: "VeloSim — Bike Network Simulator",
    tagline:
      "Open-source bike network simulator built with BIXI Montréal (ongoing).",
    shortDesc:
      "Open-source bike network simulation platform built with BIXI Montréal for managing distributed resources in dynamic environments.",
    problem:
      "Dispatchers at large bike-share networks need a way to simulate fleet behavior under variable demand, route disruptions, and rebalancing strategies before deploying changes to the live network.",
    solution:
      "Contributing to a Python + React simulation platform with real-time WebSocket data streaming, schema-driven simulation state, and live visualization on MapboxGL.",
    impact: [
      "Open-source contribution alongside BIXI Montréal",
      "11-person Agile team running weekly sprints",
      "WebSocket-driven live updates for simulation state and visualization",
      "Schema migrations and unit tests reviewed via PR-based workflow",
    ],
    architecture: [
      "Backend: Python simulation engine, PostgreSQL, WebSockets",
      "Frontend: Vite + React + MapboxGL for live visualization",
      "Tooling: Codecov, GitHub Actions, code review on every PR",
    ],
    description: `VeloSim is an open-source bike-network simulation platform developed in partnership with BIXI Montréal. The system lets dispatchers model distributed bike-share resources under dynamic conditions — demand spikes, route disruptions, and rebalancing strategies — before applying changes to the live fleet.

Key Features:
- Distributed resource and job dispatch simulation
- WebSocket-driven real-time updates and data streaming
- Python simulation engine with schema-driven state
- React + MapboxGL frontend for live visualization
- 11-person Agile team with code review and CI/CD

This is a private team repository.`,
    image: "images/projects/velosim.svg",
    technologies: [
      "Python",
      "React",
      "Vite",
      "PostgreSQL",
      "WebSockets",
      "MapboxGL",
    ],
    github: "",
    demo: "",
    private: true,
    category: "Web",
    status: "Ongoing",
    features: [
      "Real-Time Simulation",
      "WebSocket Streaming",
      "Map Visualization",
      "Schema Migrations",
    ],
    myRole:
      "Working on WebSocket live-update flow, unit tests, schema migrations, and data visualization in weekly Agile sprints.",
    highlight: true,
  },
  {
    id: 5,
    slug: "delivery-system",
    role: "Full Stack",
    title: "Delivery System",
    tagline:
      "Smart logistics platform with real-time tracking and dynamic routing.",
    shortDesc:
      "Smart delivery platform with real-time tracking, dynamic routing, and automated customer service.",
    description: `Smart logistics platform letting users request and manage deliveries for mail, food, devices, and more. Features real-time tracking, dynamic routing, and automated customer communication.

Key Features:
- Manage deliveries, payments, and status in one interface
- Real-time GPS tracking with status notifications
- Dynamic routing based on traffic, distance, and urgency
- Automated customer service with chatbots
- Resource-optimized, scalable architecture`,
    image: "images/projects/delivery-system.png",
    technologies: ["React", "Vite", "Node.js", "MySQL"],
    github: "https://github.com/azalmashta/GroupOne-SOEN343-F2024",
    demo: "",
    category: "Web",
    status: "Completed",
    features: ["Real-Time Tracking", "Dynamic Routing", "Automated Chatbots"],
    myRole:
      "SOEN 343 team project. Contributed to backend routing and React frontend.",
  },
  {
    id: 6,
    slug: "calculator",
    role: "Frontend",
    title: "Calculator",
    tagline: "Simple browser calculator (early-learner project).",
    shortDesc: "Simple calculator web application.",
    description:
      "Simple calculator web app — one of my earliest projects, kept here as a record rather than a portfolio highlight.",
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
    slug: "date-countdown",
    role: "Frontend",
    title: "Date Countdown",
    tagline: "React Native countdown timer for important dates (ongoing).",
    shortDesc: "Countdown timer for important dates (ongoing).",
    description:
      "A React Native countdown timer for important dates. Work in progress.",
    image: "images/projects/date-countdown.svg",
    technologies: ["React Native"],
    github: "",
    private: true,
    demo: "",
    category: "Web",
    status: "Ongoing",
    features: ["Countdown Timer", "Custom Dates"],
  },
  {
    id: 8,
    slug: "hand-in-hand-auction",
    role: "Full Stack",
    title: "Hand-in-Hand Auction",
    tagline: "Real-time charity auction platform with live Firestore bidding.",
    shortDesc:
      "Real-time bidding platform for the Hand-in-Hand Myanmar charity event.",
    problem:
      "The Hand-in-Hand Myanmar charity needed a live-bidding tool for an in-person event where bids had to sync instantly across phones, with admin tooling to manage items on the fly.",
    solution:
      "Built a React + Firebase Firestore platform with live snapshot listeners for instant bid sync, admin CRUD with image galleries, and lightweight guest auth backed by localStorage.",
    impact: [
      "Live Firestore synchronization with sub-second bid propagation",
      "Admin dashboard with full CRUD and multi-image upload gallery",
      "Lightweight guest auth (no signup friction for event attendees)",
      "Unit tests in `__test__/` directory; debounced search; optimized snapshot listeners",
    ],
    architecture: [
      "Frontend: React + Vite + custom hooks (useToast, useAnalytics)",
      "Realtime DB: Firebase Firestore with snapshot listeners",
      "Auth: localStorage-backed guest registration (event-day friendly)",
    ],
    description: `Built a real-time bidding platform for the Hand-in-Hand Myanmar charity event, enabling live auctions with instant synchronization across all attendees.

Key Features:
- Live Firestore synchronization for instant bid updates
- Admin dashboard with full CRUD for auction items
- Multi-image upload gallery for showcasing items
- Lightweight guest authentication using localStorage
- Real-time highest-bid tracking with toast notifications
- Watchlist, advanced search/filter, bid validation with increment enforcement`,
    image: "images/projects/hand-in-hand.svg",
    technologies: ["React", "Vite", "Firebase", "Firestore", "JavaScript"],
    github: "https://github.com/Jpuntul/hand-in-hand-auction",
    demo: "",
    category: "Web",
    status: "Completed",
    features: [
      "Live Bidding",
      "Admin CRUD",
      "Watchlist",
      "Image Gallery",
      "Guest Auth",
    ],
    myRole: "Sole developer — built end-to-end for a real charity event.",
    highlight: true,
  },
  {
    id: 9,
    slug: "adopt-cat-dog",
    role: "Full Stack",
    title: "Adopt Cat Dog",
    tagline:
      "Pet adoption platform connecting adopters with rescue organizations.",
    shortDesc:
      "Pet adoption platform connecting adopters with cats and dogs in need.",
    description: `Web application designed to streamline the adoption process for both potential adopters and rescue organizations. Users can browse available cats and dogs, submit adoption applications, and connect with rescue centers.`,
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
    slug: "portfolio",
    role: "Frontend",
    title: "Personal Portfolio",
    tagline: "This site — React 19, TypeScript, Tailwind v4, Vite 6.",
    shortDesc:
      "Modern, responsive portfolio website to showcase my projects and skills.",
    description: `The site you're reading right now. Built with React 19 + TypeScript + Vite 6 + Tailwind v4. Typed data model, route-based code splitting, automated quality gates (Husky + lint-staged + ESLint + Prettier + tsc), and GitHub Actions deploy pipeline.`,
    image: "images/projects/portfolio.png",
    technologies: [
      "React",
      "TypeScript",
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
      "Typed Data Model",
      "Project Filtering",
      "Route-Based Code Splitting",
      "Automated Linting/Formatting",
    ],
  },
];

export const skills: SkillCategories = {
  Languages: [
    { name: "TypeScript", experience: "Proficient" },
    { name: "JavaScript", experience: "Proficient" },
    { name: "Python", experience: "Proficient" },
    { name: "SQL", experience: "Proficient" },
    { name: "Java", experience: "Experienced" },
    { name: "Dart", experience: "Experienced" },
    { name: "HTML/CSS", experience: "Proficient" },
    { name: "C", experience: "Familiar" },
  ],
  Frameworks: [
    { name: "React", experience: "Proficient" },
    { name: "Node.js", experience: "Proficient" },
    { name: "Express.js", experience: "Experienced" },
    { name: "Next.js", experience: "Experienced" },
    { name: "Django REST", experience: "Experienced" },
    { name: "FastAPI", experience: "Experienced" },
    { name: "Flutter", experience: "Experienced" },
    { name: "GraphQL", experience: "Familiar" },
  ],
  Databases: [
    { name: "PostgreSQL", experience: "Experienced" },
    { name: "MySQL", experience: "Experienced" },
    { name: "MongoDB", experience: "Experienced" },
    { name: "Firebase / Firestore", experience: "Experienced" },
    { name: "Supabase", experience: "Familiar" },
  ],
  "Tools & Cloud": [
    { name: "Git", experience: "Proficient" },
    { name: "GitHub Actions", experience: "Experienced" },
    { name: "Docker", experience: "Experienced" },
    { name: "AWS", experience: "Familiar" },
    { name: "WebSockets", experience: "Experienced" },
    { name: "Vite", experience: "Proficient" },
    { name: "Tailwind CSS", experience: "Proficient" },
  ],
  Practices: [
    { name: "Agile / Scrum", experience: "Proficient" },
    { name: "TDD", experience: "Experienced" },
    { name: "REST API Design", experience: "Proficient" },
    { name: "Code Review", experience: "Proficient" },
    { name: "Clean Architecture", experience: "Experienced" },
    { name: "Pre-Commit Hooks", experience: "Proficient" },
  ],
};
