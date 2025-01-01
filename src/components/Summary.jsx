import { motion } from "framer-motion";
import StarRating from "./shared/StarRating";
import { getNameString } from "../utils/prompts";

const Summary = ({ response }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mt-4 space-y-2"
    >
      <p>{response.topic}</p>
      <StarRating score={response.score} />
      <div className="flex flex-col items-center space-y-2">
        {response.cards.map((card, ind) => (
          <div className="flex flex-col items-center" key={ind}>
            <p className="text-sm">{getNameString(card)}</p>
            <p className="text-[12px]">{card.meaning}</p>
          </div>
        ))}
      </div>
      <p className="pt-2 font-bold">ข้อควรระวัง</p>
      <div className="text-sm text-center leading-relaxed">
        {response.challenges}
      </div>
      <p className="pt-2 font-bold">ข้อควรระวัง</p>
      <div className="text-sm text-center leading-relaxed">
        {response.suggestions}
      </div>
    </motion.div>
  );
};

export default Summary;
