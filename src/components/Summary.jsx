import { motion } from "framer-motion";
import StarRating from "./shared/StarRating";
import { getNameString, getNameString_eng } from "../utils/prompts";
import { useLanguage } from "../store/LangContext"; // Adjust path as needed

const Summary = ({ response }) => {
  const { language } = useLanguage(); // Access current language

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center px-2 flex flex-col items-center mt-4 space-y-4 tracking-wide"
    >
      <p className="text-md font-bold">
        {language === "th" ? response.topic : response.topic.toUpperCase()}
      </p>
      <StarRating score={response.score} />
      <div className="flex flex-col items-center space-y-2">
        {response.cards.map((card, ind) => (
          <div className="flex flex-col items-center space-y-2" key={ind}>
            <p className="text-sm font-bold">
              {language === "th"
                ? getNameString(card)
                : getNameString_eng(card)}
            </p>
            <p className="whitespace-normal break-words text-sm">
              {card.meaning}
            </p>
          </div>
        ))}
      </div>
      <p className="pt-2 font-bold">
        {language === "th" ? "ข้อควรระวัง" : "Challenges"}
      </p>
      <div className="text-sm text-center leading-relaxed">
        {response.challenges}
      </div>
      <p className="pt-2 font-bold">
        {language === "th" ? "คำแนะนำ" : "Suggestions"}
      </p>
      <div className="text-sm text-center leading-relaxed">
        {response.suggestions}
      </div>
    </motion.div>
  );
};

export default Summary;
