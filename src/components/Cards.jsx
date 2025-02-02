import { getNameString } from "../utils/prompts";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import card0 from "../assets/Tarot0.png";
import card1 from "../assets/Tarot1.png";
import card2 from "../assets/Tarot2.png";

const arr = [card0, card1, card2];
const Cards = ({ array, stackId, makeValid, language }) => {
  const cardBack = arr[stackId]; // Assuming `arr` contains backgrounds
  const [flippedStates, setFlippedStates] = useState(
    new Array(array.length).fill(false) // Track flipped state for each card
  );

  useEffect(() => {
    // Check if all cards are flipped
    if (flippedStates.every((flipped) => flipped)) {
      makeValid(); // Call `makeValid` when all cards are flipped
    }
  }, [flippedStates, makeValid]);

  const handleFlip = (index) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? true : state))
    );
  };

  return (
    <div className="grid grid-cols-12">
      {array.map((card, ind) => (
        <Card
          language={language}
          key={ind}
          card={card}
          cardBack={cardBack}
          onFlip={() => handleFlip(ind)} // Pass flip handler
        />
      ))}
    </div>
  );
};

export default Cards;

const Card = ({ card, cardBack, onFlip, language }) => {
  const [flipped, setFlipped] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(cardBack);

  useEffect(() => {
    if (flipped) {
      const img = new Image();
      const newSrc = `https://sacred-texts.com/tarot/pkt/img/${card.name_short}.jpg`;
      img.src = newSrc;
      img.onload = () => {
        setImageSrc(newSrc);
        setImageLoaded(true);
      };
    }
  }, [flipped, card.name_short]);

  const handleFlip = () => {
    if (!flipped) {
      setFlipped(true);
      onFlip(); // Notify parent when flipped
    }
  };

  return (
    <div className="col-span-4 flex flex-col space-y-2 items-center">
      <motion.div
        className="w-20 h-32 relative"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={handleFlip} // Trigger flip logic
      >
        {/* Front Card (Backside) */}
        {!flipped && (
          <div
            className="absolute inset-0 w-full h-full bg-contain bg-center rounded-sm border border-gray-500 shadow-inner filter brightness-90 contrast-125"
            style={{ backgroundImage: `url(${cardBack})` }}
          ></div>
        )}

        {/* Back Card (Revealed) */}
        {flipped && (
          <div
            className={`absolute inset-0 w-full h-full bg-contain bg-center rounded-sm border border-gray-500 shadow-inner filter brightness-90 contrast-125 ${
              card.reversed ? "rotate-180" : ""
            }`}
            style={{
              backgroundImage: imageLoaded ? `url(${imageSrc})` : "",
            }}
          >
            {!imageLoaded && (
              <motion.div className="w-full h-full flex items-center justify-center text-xs rounded-sm border bg-rose-800 border-gray-500 relative overflow-hidden">
                <p className="text-gray-700 font-mono text-xl animate-pulse">
                  ⭐
                </p>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>

      <p className="max-w-full px-2 font-mono text-xs text-center">
        {flipped && imageLoaded
          ? getNameString(card)
          : (language = "th" ? "ดูไพ่" : "See My Draw")}
      </p>
    </div>
  );
};
