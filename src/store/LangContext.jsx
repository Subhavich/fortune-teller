import React, { createContext, useState, useContext } from "react";

// Create Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  // Set default language to Thai
  const [language, setLanguage] = useState("th");

  // Toggle language
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "th" ? "en" : "th"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => useContext(LanguageContext);
