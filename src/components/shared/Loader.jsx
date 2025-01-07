import { useState, useEffect } from "react";
import { useLanguage } from "../../store/LangContext";
const AlternatingLoader = () => {
  const { language } = useLanguage(); // Access current language

  // Language-specific messages
  const messages = {
    th: [
      "กำลังเปิดไพ่แห่งโชคชะตา... ✨",
      "กำลังปรึกษาดวงดาว... 🌟",
      "กำลังค้นหาความจริง... 🔮",
      "เตรียมพร้อมรับคำตอบ... 🪄",
      "กำลังรวบรวมพลังแห่งจักรวาล... 🌌",
    ],
    en: [
      "Unveiling the cards of fate... ✨",
      "Consulting the stars... 🌟",
      "Seeking the truth... 🔮",
      "Preparing your answer... 🪄",
      "Gathering cosmic energy... 🌌",
    ],
  };

  const [currentMessage, setCurrentMessage] = useState(messages[language][0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const currentMessages = messages[language];
        const nextIndex =
          (currentMessages.indexOf(prev) + 1) % currentMessages.length;
        return currentMessages[nextIndex];
      });
    }, 800); // Change message every 0.8 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [messages, language]);

  return (
    <div className="pt-8 flex items-center justify-center space-x-4">
      <p className="text-sm font-medium text-gray-600 animate-bounce">
        {currentMessage}
      </p>
    </div>
  );
};

export default AlternatingLoader;
