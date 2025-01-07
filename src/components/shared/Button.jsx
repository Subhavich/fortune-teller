import { ResetButton } from "../ResetButton";
import { useLanguage } from "../../store/LangContext"; // Import the useLanguage hook

export const Button = ({
  handleClick,
  message,
  disabled,
  sent,
  handleResetDraw,
}) => {
  const { language } = useLanguage(); // Access current language

  // Translations for button text
  const translations = {
    th: {
      reset: "เริ่มใหม่",
      selectPrompt: "เลือกข้อมูลด้านบน",
    },
    en: {
      reset: "Reset",
      selectPrompt: "Please fill in the form",
    },
  };

  return (
    <>
      {sent && (
        <ResetButton
          handleResetDraw={handleResetDraw}
          sent={sent}
          message={translations[language].reset}
        />
      )}
      {!sent && (
        <button
          onClick={handleClick}
          type="submit"
          className={`w-full p-3 rounded-2xl text-white ${
            disabled
              ? "bg-zinc-300 cursor-not-allowed "
              : "bg-fuchsia-600 hover:bg-fushcia-500 animate-pulse"
          }`}
          disabled={disabled || sent} // Disable the button while loading
        >
          {disabled ? translations[language].selectPrompt : message}{" "}
          {/* Use message if not disabled */}
        </button>
      )}
    </>
  );
};
