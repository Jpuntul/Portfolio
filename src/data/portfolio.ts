export type ProjectCategory = "Web" | "Mobile";
export type ProjectStatus = "Completed" | "Ongoing";
export type ProjectRole = "Full Stack" | "Frontend" | "Backend";
export type SkillLevel = "Proficient" | "Experienced" | "Familiar";

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  citizenship: string;
  university: string;
  graduated: string;
  location: string;
  /** Working arrangement, not a start date. */
  openTo: string;
  email: string;
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
  /** Intrinsic size of `image`, so the layout can reserve the box. */
  imageWidth?: number;
  imageHeight?: number;
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
  /** Why source/demo isn't accessible — shown instead of "Private" */
  privateNote?: string;
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
    "Software Engineer who ships across the full stack — real-time apps, backend systems, and multi-stack rewrites.",
  citizenship: "Thai/Canadian",
  university: "Concordia University",
  graduated: "2026",
  location: "Bangkok, Thailand",
  openTo: "Remote, or on-site in Bangkok",
  email: "p.jutipong13@gmail.com",
  github: "https://github.com/Jpuntul",
  linkedin: "https://www.linkedin.com/in/jpuntul/",
  /** Working languages only — a "Basic" entry is padding, not a qualification. */
  languagesSpoken: [
    { name: "Thai", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "hand-in-hand-auction",
    role: "Full Stack",
    title: "Hand-in-Hand Auction",
    tagline:
      "Shipped San Fun Group's charity auction in under a week for non-devs, then rebuilt it with Next.js + Supabase.",
    shortDesc:
      "Finished a non-developer team's HTML + Firebase app under a one-week deadline for San Fun Group's live charity event, then took full ownership and rebuilt the platform.",
    problem:
      "San Fun Group needed a working live-bidding tool for the company's Hand-in-Hand charity event. A non-developer team had started with plain HTML + Firebase but couldn't finish it in time.",
    solution:
      "As Business Development & Consultant Intern at San Fun Group, stepped in with less than a week to go: finished the HTML + Firebase build and shipped it for the live event. Afterwards, took full ownership and rewrote the platform — first to React + Vite + Firestore, then to Next.js + TypeScript + Supabase — for a stable, maintainable long-term foundation.",
    impact: [
      "Delivered the working HTML + Firebase app for the real live charity event in under one week",
      "Rewrote post-event: React + Vite + Firestore (real-time bidding, admin CRUD, guest auth)",
      "Admin dashboard with full CRUD and multi-image upload gallery",
      "Lightweight guest auth — no signup friction for event-day attendees",
      "Further migrated to Next.js + TypeScript + Supabase for long-term stability and new features",
    ],
    architecture: [
      "Event build: HTML + Firebase (finished with the original non-dev team's stack)",
      "V2 (rewrite): React + Vite + Firebase Firestore — real-time snapshot listeners, localStorage guest auth",
      "V3 (current): Next.js + TypeScript + Supabase (PostgreSQL) — App Router, Vercel deployment",
    ],
    description: `Built as part of a Business Development & Consultant Intern role at San Fun Group. Stepped in to help a non-developer team finish their HTML + Firebase charity auction app with less than a week before the company's live Hand-in-Hand charity event. Kept their existing stack, completed the missing pieces, and shipped it in time.

After the event, took full ownership and rebuilt the platform from scratch:

V2 (solo rewrite — React + Vite + Firebase):
- Real-time Firestore snapshot listeners for instant bid sync
- Admin dashboard with full CRUD for managing auction items on the fly
- Multi-image upload gallery, watchlist, advanced search/filter
- Lightweight guest authentication using localStorage
- Toast notifications and bid increment enforcement

V3 (current — long-term migration):
- Full rewrite to Next.js + TypeScript + Supabase (PostgreSQL)
- App Router architecture with server components, deployed on Vercel`,
    image: "images/projects/hand-in-hand.webp",
    imageWidth: 1200,
    imageHeight: 650,
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "React",
      "Vite",
      "Firebase",
    ],
    github: "https://github.com/Jpuntul/hand-in-hand-auction",
    demo: "https://hand-in-hand-auction.vercel.app",
    category: "Web",
    status: "Completed",
    features: [
      "Live Bidding",
      "Admin CRUD",
      "Watchlist",
      "Image Gallery",
      "Guest Auth",
    ],
    myRole:
      "Business Development & Consultant Intern at San Fun Group (May 2025 – May 2026). Joined a non-developer team with < 1 week to event day — finished their HTML + Firebase app and shipped it for the live event. Took full ownership afterwards: rewrote to React + Vite + Firestore, then migrated again to Next.js + TypeScript + Supabase.",
    highlight: true,
  },
  {
    id: 2,
    slug: "velosim",
    role: "Frontend",
    title: "VeloSim — Bike Network Simulator",
    tagline:
      "Bike-share network simulator built with BIXI Montréal — FastAPI, WebSockets, live Mapbox visualization.",
    shortDesc:
      "Network simulation platform that lets dispatchers manage distributed bike-share resources under dynamic conditions.",
    problem:
      "Dispatchers at large bike-share networks need a way to simulate fleet behavior under variable demand, route disruptions, and rebalancing strategies before deploying changes to the live network.",
    solution:
      "Shipped a FastAPI + React/TypeScript simulation platform with real-time WebSocket streaming, GraphHopper-powered traffic-aware routing, and live visualization on Mapbox — built with an 11-person team over a multi-release cycle in partnership with BIXI Montréal.",
    impact: [
      "11-person team across Frontend, Backend, and Simulation, partnering with BIXI Montréal",
      "Shipped across three release cycles (Release 1, 2, 3) on a weekly Agile cadence",
      "WebSocket-driven live simulation updates and real-time data streaming",
      'Built the "All Routes Toggle" map control and other frontend features; wrote Vitest unit tests; collaborated on architecture decisions during weekly Agile sprints',
    ],
    architecture: [
      "Backend: FastAPI + SQLAlchemy + PostgreSQL, Alembic migrations, JWT auth",
      "Routing: GraphHopper for traffic-aware route calculation",
      "Frontend: Vite + React + TypeScript + Mapbox GL for live map visualization",
      "Realtime: WebSocket streaming between sim engine and frontend",
      "Observability: Grafana + Loki + Promtail centralized logging",
      "Testing: pytest + Vitest + @testing-library/react + Playwright e2e",
      "CI/CD: GitHub Actions, Codecov, Docker Compose, pre-commit hooks (black, flake8, mypy, ESLint, Prettier)",
    ],
    description: `VeloSim is a bike-network simulation platform built with BIXI Montréal. The system lets dispatchers model distributed bike-share resources under dynamic conditions — demand spikes, route disruptions, and rebalancing strategies — before applying changes to the live fleet.

Architecture:
- FastAPI backend with SQLAlchemy ORM and PostgreSQL, Alembic-managed migrations
- Python simulation engine separated into a dedicated module
- GraphHopper for traffic-aware routing with per-request custom-model speed adjustments
- React + TypeScript + Vite frontend rendering live state on Mapbox GL
- WebSocket connection from sim → frontend for live updates
- Grafana + Loki + Promtail logging stack
- Vitest + RTL on the frontend, pytest on the backend, Playwright for e2e
- GitHub Actions CI, Codecov, Docker Compose for local services, pre-commit hooks

Private team repository`,
    image: "images/projects/velosim.webp",
    imageWidth: 1536,
    imageHeight: 868,
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "WebSockets",
      "React",
      "TypeScript",
      "Vite",
      "Mapbox GL",
      "GraphHopper",
    ],
    github: "",
    demo: "",
    private: true,
    privateNote:
      "Institutional deployment — contains live BIXI operational data. Source and demo are not publicly accessible.",
    category: "Web",
    status: "Completed",
    features: [
      "Real-Time Simulation",
      "WebSocket Streaming",
      "Mapbox Visualization",
      "GraphHopper Routing",
      "Grafana Observability",
    ],
    myRole:
      'Frontend engineer on an 11-person team. Implemented WebSocket frontend integration for live simulation updates, built the "All Routes Toggle" map control, wrote Vitest unit tests, and collaborated on architecture decisions, schema migrations, and data visualizations during weekly Agile sprints.',
    highlight: true,
  },
  {
    id: 3,
    slug: "hms",
    role: "Full Stack",
    title: "Healthcare Management System",
    tagline:
      "Hospital platform built and exercised against 447 patient records, 303 staff, and 11 facilities.",
    shortDesc:
      "Healthcare platform seeded and exercised against 447 patient records, 303 staff accounts, and 11 facilities.",
    problem:
      "Healthcare admins were juggling patient records, staff scheduling, and facility coordination across disconnected tools, with slow queries and no audit-friendly access control.",
    solution:
      "Team phase (course project, complete): PHP + MySQL schema, triggers, and query optimization. Solo phase (personal side project): rewrote most of the stack to Django REST + React/TypeScript with JWT auth, role-based permissions (admin, doctor, staff), and analytics dashboards.",
    impact: [
      "Modelled a full hospital domain — seeded and exercised against 447 patient records, 303 staff accounts, and 11 facilities",
      "Team phase: sole PHP developer; co-built MySQL schema, triggers, and query optimizations (75% speedup, 3s → 0.7s) — course project, complete",
      "Solo phase: rewrote most of the stack to Django REST + React/TypeScript, as personal side work",
      "Designed 15+ REST API endpoints powering interactive data analytics dashboards",
      "Enforced quality with 13 pre-commit hooks (flake8, isort, ESLint, TypeScript, Prettier, Black)",
    ],
    architecture: [
      "Team phase: PHP + MySQL (schema, triggers, query optimization)",
      "Solo rewrite: Django 4.2 + Django REST Framework, JWT auth, MySQL (prod) / SQLite (dev)",
      "Frontend: React 19 + TypeScript + Vite + Tailwind CSS + Axios",
      "Tooling: 13 pre-commit hooks, GitHub Actions CI",
    ],
    description: `Full-stack healthcare platform with two phases.

Team phase (PHP + MySQL) — school course project, complete:
- Sole PHP developer; co-built MySQL schema, triggers, and query optimizations with the team
- Cut the slowest patient-lookup query through indexing, caching, and schema redesign

Solo rewrite (Django REST + React/TypeScript) — personal side project:
- Rebuilt the backend in Django REST Framework with JWT authentication and role-based access control for admin, doctor, and staff workflows
- Built the React/TypeScript frontend from scratch (replacing PHP templates)
- Designed 15+ REST API endpoints powering interactive analytics dashboards
- Seeded and exercised against 447 patient records, 303 staff, and 11 facilities
- Enforced quality with 13 pre-commit hooks (flake8, isort, ESLint, TypeScript, Prettier, Black)`,
    image: "images/projects/hms.webp",
    imageWidth: 1536,
    imageHeight: 868,
    technologies: ["Django", "Django REST", "React", "TypeScript", "MySQL"],
    github: "https://github.com/Jpuntul/HMS",
    demo: "",
    category: "Web",
    status: "Ongoing",
    features: [
      "Patient Management",
      "Staff Scheduling",
      "Analytics Dashboards",
      "Role-Based Access Control",
    ],
    myRole:
      "Team phase: sole PHP developer; co-built MySQL schema, triggers, and query optimizations — school course project, complete. Solo phase: rewrote most of the stack to Django REST + React/TypeScript — backend, frontend, auth, REST API, and 13-hook pre-commit pipeline — as a personal side project.",
    highlight: true,
  },
  {
    id: 4,
    slug: "campus-navigation",
    role: "Full Stack",
    title: "Campus Navigation",
    tagline:
      "Cross-platform Flutter app for Concordia campus indoor/outdoor navigation.",
    shortDesc:
      "Cross-platform Flutter app for indoor and outdoor navigation across Concordia's two campuses.",
    problem:
      "Concordia students and visitors struggled with finding rooms, navigating between Sir George Williams and Loyola campuses, and accessibility-aware routing.",
    solution:
      "Built a Flutter app with Google Maps integration covering indoor room-to-room routing, outdoor inter-campus navigation, and calendar-driven trip planning.",
    impact: [
      "9-person Agile capstone team (SOEN-390, W2025); released v1.0.0 in April 2025",
      "Cross-platform iOS + Android build pipeline (Flutter)",
      "CI gates via GitHub Actions, Codecov coverage tracking, and SonarCloud quality checks",
      "Pre-commit hooks via `.githooks` for consistent formatting and linting",
    ],
    architecture: [
      "Mobile: Flutter (Dart) cross-platform — 99.6% Dart",
      "Mapping: Google Maps API + custom indoor floorplan data",
      "Quality: GitHub Actions CI, Codecov coverage, SonarCloud quality gates",
    ],
    description: `Concordia Campus Guide is a cross-platform Flutter mobile app providing indoor and outdoor navigation, schedule management, and accessibility features across Sir George Williams and Loyola campuses.

Key Features:
- Indoor navigation room-to-room and floor-to-floor with accessibility info (elevators, stairs, etc.)
- Outdoor navigation between buildings and off-campus locations
- Inter-campus travel guidance with transport schedules
- Calendar integration for upcoming events and classes
- Accessibility-aware route planning`,
    image: "images/projects/campus-map.webp",
    imageWidth: 1536,
    imageHeight: 777,
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
      "Mini-capstone team project (SOEN-390, 9-person team). Contributed to navigation logic, UI components, and the CI pipeline.",
    highlight: true,
  },
  {
    id: 5,
    slug: "omni-rentals",
    role: "Full Stack",
    title: "Omni Rentals",
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
    image: "images/projects/car-rental.webp",
    imageWidth: 1536,
    imageHeight: 832,
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
    id: 6,
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
- Automated customer service with chatbots`,
    image: "images/projects/delivery-system.webp",
    imageWidth: 1536,
    imageHeight: 833,
    technologies: ["React", "Vite", "Node.js", "MySQL"],
    github: "",
    demo: "",
    private: true,
    privateNote: "Team repository is private.",
    category: "Web",
    status: "Completed",
    features: ["Real-Time Tracking", "Dynamic Routing", "Automated Chatbots"],
    myRole: "Team project. Worked on backend routing and the React frontend.",
  },
  {
    id: 7,
    slug: "vanasin-residence",
    role: "Frontend",
    title: "Vanasin Residence",
    tagline:
      "Low-code public website for a Thai wellness resort, built with Softr + Monday.com.",
    shortDesc:
      "Public website for Vanasin Residence, a wellness resort in Tak, Thailand, built low-code with Softr and a Monday.com backend.",
    description: `Public marketing and booking-info website for Vanasin Residence, built as part of a Business Development & Consultant Intern role at San Fun Group.

Built low-code with Softr, using Monday.com as the backend database for content and booking data — no custom backend code.`,
    image: "images/projects/vanasin-residence.webp",
    imageWidth: 1200,
    imageHeight: 675,
    technologies: ["Softr", "Monday.com"],
    github: "",
    demo: "https://www.vanasinresidence.com",
    category: "Web",
    status: "Completed",
    features: ["Low-Code Build", "Booking Info", "Multi-Section Site"],
    myRole:
      "Business Development & Consultant Intern at San Fun Group (May 2025 – May 2026). Designed and built the site independently using Softr with Monday.com as the backend.",
  },
  {
    id: 8,
    slug: "portfolio",
    role: "Frontend",
    title: "Personal Portfolio",
    tagline: "This site — React 19, TypeScript, Tailwind v4, Vite 6.",
    shortDesc:
      "Modern, responsive portfolio website to showcase my projects and skills.",
    description: `The site you're reading right now. Built with React 19 + TypeScript + Vite 6 + Tailwind v4. Typed data model, route-based code splitting, automated quality gates (Husky + lint-staged + ESLint + Prettier + tsc), and GitHub Actions deploy pipeline.`,
    image: "images/projects/portfolio.webp",
    imageWidth: 1200,
    imageHeight: 650,
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
    { name: "CI/CD", experience: "Experienced" },
    { name: "Docker", experience: "Experienced" },
    { name: "AWS", experience: "Familiar" },
    { name: "WebSockets", experience: "Experienced" },
    { name: "Vite", experience: "Proficient" },
    { name: "Tailwind CSS", experience: "Proficient" },
  ],
  Practices: [
    { name: "Agile / Scrum", experience: "Proficient" },
    { name: "TDD", experience: "Familiar" },
    { name: "REST API Design", experience: "Proficient" },
    { name: "Code Review", experience: "Proficient" },
    { name: "Clean Architecture", experience: "Experienced" },
    { name: "Pre-Commit Hooks", experience: "Proficient" },
  ],
  "Automation & No-Code": [
    { name: "Zapier", experience: "Proficient" },
    { name: "Make.com", experience: "Proficient" },
    { name: "n8n", experience: "Proficient" },
    { name: "Softr", experience: "Proficient" },
    { name: "Monday.com", experience: "Proficient" },
    { name: "Claude Skills / Projects", experience: "Proficient" },
    { name: "LINE API", experience: "Proficient" },
  ],
};

/** Skill categories the Skills section renders, in display order. */
export const skillCategoryOrder = [
  "Languages",
  "Frameworks",
  "Databases",
  "Tools & Cloud",
  "Practices",
  "Automation & No-Code",
] as const;
