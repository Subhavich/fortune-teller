import card1 from "../assets/Tarot1.png";
import card2 from "../assets/Tarot2.png";
import card3 from "../assets/Tarot3.png";
import { useEffect, useState } from "react";
const CardSection = () => {
  const [stackId, setStackId] = useState(0);
  const handleStackClick = (no) => {
    setStackId(no);
  };
  return (
    <div className="mt-4 grid grid-cols-12 min-h-96 border-rose-200 border-2">
      <div className="relative col-span-4">
        <CardStack
          id={0}
          stackId={stackId}
          handleClick={handleStackClick}
          bgUrl={card1}
          shadowColor="shadow-[0_0_10px_5px_rgba(255,182,193,0.4)]"
        />
      </div>
      <div className="relative col-span-4">
        <CardStack
          id={1}
          stackId={stackId}
          handleClick={handleStackClick}
          bgUrl={card2}
          shadowColor="shadow-[0_0_10px_5px_rgba(255,255,160,0.4)]"
        />
      </div>
      <div className="relative col-span-4">
        <CardStack
          id={2}
          stackId={stackId}
          handleClick={handleStackClick}
          bgUrl={card3}
          shadowColor="shadow-[0_0_10px_5px_rgba(173,216,230,0.4)]"
        />
      </div>
    </div>
  );
};
export default CardSection;

const CardStack = ({ bgUrl, stackId, id, handleClick, shadowColor }) => {
  const display = id === stackId;

  return (
    <div
      className={`${
        display ? " -rotate-12 transition-transform" : null
      } relative min-w-full min-h-full flex justify-center items-center`}
    >
      {Array.from({ length: 9 }).map((_, index) => {
        const translateX = display ? index * 2 : index * 1; // Example translation
        const translateY = -index * 4; // Example translation
        const rotation = display ? (index % 2 === 0 ? index : -index) : 0; // Apply rotation only when clicked is true

        return (
          <div
            key={index}
            className={`absolute w-14 h-20 sm:w-20 sm:h-28 bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-110 ${
              display ? shadowColor : ""
            }`}
            style={{
              transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`,
              zIndex: 9 - index,
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleClick(id)}
          ></div>
        );
      })}
    </div>
  );
};
