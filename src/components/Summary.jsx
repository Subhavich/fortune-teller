import { motion } from "framer-motion";
import StarRating from "./shared/StarRating";
import { getNameString } from "../utils/prompts";

const Summary = ({ response }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center px-2 flex flex-col items-center mt-4 space-y-4 tracking-wide"
    >
      <p className="text-md  font-bold">{response.topic}</p>
      <StarRating score={response.score} />
      <div className="flex flex-col items-center space-y-2">
        {response.cards.map((card, ind) => (
          <div className="flex flex-col items-center space-y-2" key={ind}>
            <p className="text-sm font-bold">{getNameString(card)}</p>
            <p className=" whitespace-normal break-words text-sm">
              {card.meaning}
            </p>
          </div>
        ))}
      </div>
      <p className="pt-2 font-bold">ข้อควรระวัง</p>
      <div className="text-sm text-center leading-relaxed">
        {response.challenges}
      </div>
      <p className="pt-2 font-bold">คำแนะนำ</p>
      <div className="text-sm text-center leading-relaxed">
        {response.suggestions}
      </div>
    </motion.div>
  );
};

export default Summary;
