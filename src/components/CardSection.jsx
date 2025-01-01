import card0 from "../assets/Tarot1.png";
import card2 from "../assets/Tarot2.png";
import card1 from "../assets/Tarot3.png";
import { useEffect, useState } from "react";
const DECK_DETAILS = [
  {
    title: "Pendragon Rules",
    desc: "Normal Draw ใช้ไพ่ทั้งหมด 78 ใบในการอ่านไพ่ โดยความหมายของไพ่จะปรากฏตรงไปตรงมาและไม่ซับซ้อน การ์ดจะไม่มีการกลับด้าน ทำให้การตีความง่ายและตรงไปตรงมา",
  },
  {
    title: "Morgana Rules",
    desc: "Reversed Draw อนุญาตให้มีการกลับด้านของไพ่ ความหมายของไพ่ในตำแหน่งกลับด้านจะแตกต่างจากตำแหน่งปกติ แสดงถึงความท้าทาย ความจริงที่ซ่อนอยู่ หรือมุมมองที่แตกต่าง",
  },
  {
    title: "Merlin Rules",
    desc: "Major-Only Draw ใช้เฉพาะไพ่ Major Arcana ทั้งหมด 22 ใบ การ์ดเหล่านี้มีน้ำหนักในเชิงสัญลักษณ์สูง มุ่งเน้นเหตุการณ์สำคัญในชีวิต การเปิดเผยเชิงลึก และอิทธิพลจากพลังสวรรค์",
  },
];

const CardSection = ({ stackId, setStackId, sent }) => {
  const handleStackClick = (no, sent) => {
    if (sent) return;
    setStackId(no);
  };

  const [deckInfo, setDeckInfo] = useState(DECK_DETAILS[stackId]);

  useEffect(() => {
    setDeckInfo(DECK_DETAILS[stackId]);
  }, [stackId]);

  return (
    <>
      <div className=" leading-relaxed tracking-wide flex flex-col items-center text-center space-y-4">
        <div className="mt-4 font-bold text-gray-800">เลือกกองไพ่</div>
        <p className="text-lg font-light  text-gray-800">{deckInfo.title}</p>
        <p className="text-gray-800 leading-loose">{deckInfo.desc}</p>
      </div>
      <div className="mt-4 grid grid-cols-12 sm:min-h-80 min-h-40 ">
        <div className="relative col-span-4">
          <CardStack
            id={0}
            stackId={stackId}
            handleClick={handleStackClick}
            bgUrl={card0}
            shadowColor="0 0 10px 5px rgba(255,182,193,0.4)"
            sent={sent}
          />
        </div>
        <div className="relative col-span-4">
          <CardStack
            id={1}
            stackId={stackId}
            handleClick={handleStackClick}
            bgUrl={card1}
            shadowColor="0 0 10px 5px rgba(173,216,230,0.4)"
            sent={sent}
          />
        </div>
        <div className="relative col-span-4">
          <CardStack
            id={2}
            stackId={stackId}
            handleClick={handleStackClick}
            bgUrl={card2}
            shadowColor="0 0 10px 5px rgba(255,255,160,0.4)"
            sent={sent}
          />
        </div>
      </div>
    </>
  );
};
export default CardSection;

const CardStack = ({ bgUrl, stackId, id, handleClick, shadowColor, sent }) => {
  const display = id === stackId;

  return (
    <div
      className={`${
        display ? " -rotate-12 transition-transform scale-125" : null
      } relative translate-y-4 min-w-full min-h-full flex justify-center items-center`}
    >
      {Array.from({ length: 9 }).map((_, index) => {
        const translateX = display ? index * 2 : index * 1; // Example translation
        const translateY = -index * 4; // Example translation
        const rotation = display ? (index % 2 === 0 ? index : -index) : 0; // Apply rotation only when clicked is true

        return (
          <div
            key={index}
            className={`absolute w-14 h-20 sm:w-20 sm:h-28 bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-110 
            }`}
            style={{
              transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`,
              zIndex: 9 - index,
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow: display ? shadowColor : "none", // Proper box-shadow applied here
            }}
            onClick={() => {
              if (!sent) handleClick(id);
            }}
          ></div>
        );
      })}
    </div>
  );
};
