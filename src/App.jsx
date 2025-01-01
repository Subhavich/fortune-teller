import { motion } from "framer-motion";
import { sectionVariants } from "./animations/animations";
import { useState, useRef } from "react";
import { TAROT_PROMPT_SYSTEM, TAROT_PROMPT_USER } from "./DATA";
import { WORK_RES, MONEY_RES, LOVE_RES } from "./utils/fakeResponses";
import SexInput from "./components/SexInput";
import DOBInput from "./components/DOBInput";
import RelationshipInput from "./components/RelationshipInput";
import JobStatusInput from "./components/JobInput";
import { deriveExtension, deriveTopicString } from "./utils/prompts";
import CardSection from "./components/CardSection";
import { TarotCard } from "./DATA";
import { Button } from "./components/shared/Button";
import { fetchTarotResponse } from "./utils/dataFetching";

import Cards from "./components/Cards";
import AlternatingLoader from "./components/shared/Loader";
import Summary from "./components/Summary";

let drawStacks = [
  {
    money: TarotCard.getNormalDraw(),
    love: TarotCard.getNormalDraw(),
    work: TarotCard.getNormalDraw(),
  },
  {
    money: TarotCard.getReversedDraw(),
    love: TarotCard.getReversedDraw(),
    work: TarotCard.getReversedDraw(),
  },
  {
    money: TarotCard.getMajorArcanaDraw(),
    love: TarotCard.getMajorArcanaDraw(),
    work: TarotCard.getMajorArcanaDraw(),
  },
];

const App = () => {
  const [form, setForm] = useState({
    sex: "",
    date: "",
    month: "",
    year: "",
    jobStatus: "",
    relationshipStatus: "",
  }); // Store form state
  const [moneyResponse, setMoneyResponse] = useState();
  const [loveResponse, setLoveResponse] = useState();
  const [workResponse, setworkResponse] = useState();
  const [loadingStates, setLoadingStates] = useState({
    money: false,
    love: false,
    work: false,
  });
  const [stackId, setStackId] = useState(0);
  const [sent, setSent] = useState(false);

  const isFormValid = Object.values(form).every((field) => field.trim() !== "");
  const resultsRef = useRef(null);

  const setTrue = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to results section
    }, 100);
  };

  const handleResetDraw = () => {
    setSent(false);
    drawStacks = [
      {
        money: TarotCard.getNormalDraw(),
        love: TarotCard.getNormalDraw(),
        work: TarotCard.getNormalDraw(),
      },
      {
        money: TarotCard.getReversedDraw(),
        love: TarotCard.getReversedDraw(),
        work: TarotCard.getReversedDraw(),
      },
      {
        money: TarotCard.getMajorArcanaDraw(),
        love: TarotCard.getMajorArcanaDraw(),
        work: TarotCard.getMajorArcanaDraw(),
      },
    ];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSendRequest = async (topic) => {
    const lowerTopic = topic.toLowerCase();
    setLoadingStates((prev) => ({ ...prev, [lowerTopic]: true }));
    console.log(`Fetching response for ${lowerTopic}...`);

    switch (lowerTopic) {
      case "money":
        console.log("money");
        break;
      case "love":
        console.log("love");
        break;
      case "work":
        console.log("work");
        break;
      default:
        console.log("Invalid topic");
        return; // Exit the function for invalid topics
    }

    const userPrompt = `${TAROT_PROMPT_USER} ${deriveExtension(
      form.date,
      form.month,
      form.year,
      form.sex,
      form.jobStatus,
      form.relationshipStatus,
      drawStacks[stackId]
    )} ${deriveTopicString(topic, form.jobStatus, drawStacks[stackId].money)}`;

    console.log(userPrompt);

    const response = await fetchTarotResponse({
      systemPrompt: TAROT_PROMPT_SYSTEM,
      userPrompt,
    });
    const result = response.reading[0];
    console.log("HIT", response);

    switch (lowerTopic) {
      case "money":
        setMoneyResponse(result);
        break;
      case "love":
        setLoveResponse(result);
        break;
      case "work":
        setworkResponse(result);
        break;
    }
    setLoadingStates((prev) => ({ ...prev, [lowerTopic]: false }));
  };

  return (
    <div className="min-w-full bg-gray-50">
      <div className="p-5 font-prompt  max-w-screen-sm mx-auto text-gray-800 ">
        <h1 className="text-2xl font-bold mb-5 text-center">ถามไพ่ทาโรต์</h1>
        <form
          className="space-y-4 rounded-3xl bg-pink-200/75
       p-8"
        >
          <SexInput value={form.sex} onChange={handleChange} />
          <DOBInput
            date={form.date}
            month={form.month}
            year={form.year}
            onChange={handleChange}
          />
          <JobStatusInput value={form.jobStatus} onChange={handleChange} />
          <RelationshipInput
            value={form.relationshipStatus}
            onChange={handleChange}
          />
          <CardSection sent={sent} stackId={stackId} setStackId={setStackId} />
          <Button
            handleClick={setTrue}
            message="จั่วไพ่ 🫳"
            disabled={!isFormValid}
            sent={sent}
          />
        </form>

        {sent && (
          <div
            ref={resultsRef}
            className=" flex flex-col space-y-8 mt-4 rounded-3xl bg-indigo-200/75 p-6"
          >
            {Object.entries(drawStacks[stackId]).map(([topic, array], ind) => {
              let responseToShow = null;

              // Match topic with the corresponding state
              if (topic.toLowerCase() === "money") {
                responseToShow = moneyResponse;
              } else if (topic.toLowerCase() === "love") {
                responseToShow = loveResponse;
              } else if (topic.toLowerCase() === "work") {
                responseToShow = workResponse;
              }

              return (
                <motion.div
                  key={topic}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  custom={ind} // Pass index for delay calculation
                  className="opacity-0"
                >
                  <b className="mb-4 block text-center">
                    {topic.toUpperCase()}
                  </b>
                  <Cards array={array} />
                  <button
                    className="mt-4 mx-auto block bg-white border px-3 py-2 rounded-xl"
                    onClick={() => handleSendRequest(topic)}
                  >
                    ดูความหมาย 👁️
                  </button>
                  {loadingStates[topic.toLowerCase()] && <AlternatingLoader />}
                  {!loadingStates[topic.toLowerCase()] && responseToShow && (
                    <Summary response={responseToShow} />
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
