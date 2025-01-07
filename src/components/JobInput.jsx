import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../store/LangContext"; // Adjust path as necessary
import { motion, AnimatePresence } from "framer-motion";

const JobStatusInput = ({ value, onChange }) => {
  const { language } = useLanguage(); // Access the current language

  // Language-specific labels and options
  const labels = {
    th: "งานและอาชีพ",
    en: "Job and Occupation",
  };

  const placeholder = {
    th: "เลือกสถานะการงาน",
    en: "Select Job Status",
  };

  const options = {
    th: [
      "พนักงานประจำ",
      "เจ้าของธุรกิจ",
      "กำลังหางาน",
      "ยังเรียนอยู่",
      "ฟรีแลนซ์",
    ],
    en: [
      "Employee",
      "Business Owner",
      "Looking for Work",
      "Student",
      "Freelancer",
    ],
  };

  return (
    <label className="block">
      {/* Animated Label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={language} // Trigger animation when language changes
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="block font-semibold pt-1 my-2"
        >
          {labels[language]}
        </motion.span>
      </AnimatePresence>

      <div className="relative text-gray-600">
        <select
          name="jobStatus"
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded-2xl appearance-none pr-8 bg-white"
        >
          {/* Animated Placeholder */}
          <AnimatePresence mode="wait">
            <motion.option
              key={language} // Trigger animation when language changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              value=""
            >
              {placeholder[language]}
            </motion.option>
          </AnimatePresence>
          {options[language].map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
      </div>
    </label>
  );
};

export default JobStatusInput;
