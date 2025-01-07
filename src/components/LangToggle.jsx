import { motion } from "framer-motion";
import { useLanguage } from "../store/LangContext";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const LangToggle = ({ disabled }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className={`relative flex w-fit items-center rounded-full bg-white p-1 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {/* Thai Button */}
      <button
        className={`${TOGGLE_CLASSES} ${
          language === "th" ? "text-white" : "text-gray-700"
        }`}
        onClick={(e) => {
          e.preventDefault(); // Prevent default button behavior
          if (!disabled && language !== "th") toggleLanguage();
        }}
        disabled={disabled}
      >
        <span className="relative z-10">ไทย</span>
      </button>

      {/* English Button */}
      <button
        className={`${TOGGLE_CLASSES} ${
          language === "en" ? "text-white" : "text-gray-700"
        }`}
        onClick={(e) => {
          e.preventDefault(); // Prevent default button behavior
          if (!disabled && language !== "en") toggleLanguage();
        }}
        disabled={disabled}
      >
        <span className="relative z-10">ENG</span>
      </button>

      {/* Sliding Indicator */}
      <div
        className={`absolute inset-0 z-0 flex ${
          language === "en" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-br from-blue-200 via-pink-300 to-purple-400"
        />
      </div>
    </div>
  );
};

export default LangToggle;
