import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { SCROLL_THRESHOLD } from "../constants/ui";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD.BACK_TO_TOP);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg transition-opacity duration-300 hover:bg-green-600 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Back to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
