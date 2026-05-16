import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-md px-6 text-center">
        <p className="font-mono text-sm font-medium uppercase tracking-wider text-accent-700 dark:text-accent-400">
          404
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          That route doesn&rsquo;t exist. It may have been moved or never
          existed in the first place.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-700"
          >
            <Home className="h-4 w-4" /> Home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-accent-500 hover:text-accent-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </div>
      </div>
    </main>
  );
}
