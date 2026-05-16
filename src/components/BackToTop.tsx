import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { SCROLL_THRESHOLD } from "../constants/ui";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD.BACK_TO_TOP);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-600 text-white shadow-lg transition-opacity duration-200 hover:bg-accent-700 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
