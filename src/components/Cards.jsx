import { getNameString } from "../utils/prompts";
const Cards = ({ array }) => {
  return (
    <div className="grid grid-cols-12">
      {array.map((card, ind) => (
        <div className="col-span-4  flex flex-col space-y-2 items-center">
          <div
            className={`w-20 h-32 bg-contain bg-center rounded-sm border border-gray-500 shadow-inner filter brightness-90 contrast-125 ${
              card.reversed ? " rotate-180" : ""
            }`}
            style={{
              backgroundImage: `url(https://sacred-texts.com/tarot/pkt/img/${card.name_short}.jpg)`,
            }}
          >
            <div className="absolute inset-0"></div>
          </div>
          <p className="max-w-full px-2 font-mono text-xs wrap  text-center">
            {getNameString(card)}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Cards;
