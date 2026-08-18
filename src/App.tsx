import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div
      aria-busy="true"
      className="flex min-h-screen items-center justify-center bg-[#04070f]"
    >
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-accent-500 border-t-transparent" />
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <div className={isHome ? "flex-1 overflow-hidden" : "flex-1"}>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route
              path="/contact"
              element={<Navigate to="/#contact" replace />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      {!isHome && <Footer />}
      {!isHome && <BackToTop />}
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router basename="/Portfolio">
        <Layout />
      </Router>
    </MotionConfig>
  );
}
