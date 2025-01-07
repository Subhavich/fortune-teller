import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../store/LangContext";
import { motion, AnimatePresence } from "framer-motion";

const THAI_MONTHS = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];

const ENGLISH_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getDaysInMonth = (month, year) => {
  if (!month || !year) return 31; // Default to 31 days
  return new Date(year, month, 0).getDate(); // Get the last day of the month
};

const DOBInput = ({ date, month, year, onChange }) => {
  const { language } = useLanguage(); // Access current language
  const months = language === "th" ? THAI_MONTHS : ENGLISH_MONTHS;
  const daysInMonth = getDaysInMonth(Number(month), Number(year));

  return (
    <div className="block">
      {/* Animated Label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={language} // Trigger animation when the language changes
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="block font-semibold pt-1 my-2"
        >
          {language === "th" ? "วันเกิด" : "Date of Birth"}
        </motion.span>
      </AnimatePresence>

      <div className="flex space-x-2">
        {/* Date Select */}
        <div className="relative w-1/3 text-gray-600">
          <select
            name="date"
            value={date}
            onChange={onChange}
            className="w-full p-3 border rounded-2xl appearance-none pr-8 bg-white"
          >
            <AnimatePresence mode="wait">
              <motion.option
                key={language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                value=""
              >
                {language === "th" ? "วันที่" : "Day"}
              </motion.option>
            </AnimatePresence>
            {Array.from({ length: daysInMonth }).map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600" />
        </div>

        {/* Month Select */}
        <div className="relative w-1/3 text-gray-600">
          <select
            name="month"
            value={month}
            onChange={onChange}
            className="w-full p-3 border rounded-2xl appearance-none pr-8 bg-white"
          >
            <AnimatePresence mode="wait">
              <motion.option
                key={language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                value=""
              >
                {language === "th" ? "เดือน" : "Month"}
              </motion.option>
            </AnimatePresence>
            {months.map((monthName, index) => (
              <option key={index} value={index + 1}>
                {monthName}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Year Select */}
        <div className="relative w-1/3 text-gray-600">
          <select
            name="year"
            value={year}
            onChange={onChange}
            className="w-full p-3 border rounded-2xl appearance-none pr-8 bg-white"
          >
            <AnimatePresence mode="wait">
              <motion.option
                key={language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                value=""
              >
                {language === "th" ? "ปี" : "Year"}
              </motion.option>
            </AnimatePresence>
            {Array.from({ length: 100 }).map((_, i) => (
              <option key={i} value={2008 - Number(i)}>
                {2008 - Number(i)}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default DOBInput;
