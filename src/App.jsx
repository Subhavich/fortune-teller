import { motion } from "framer-motion";
import { sectionVariants } from "./animations/animations";
import { useState, useRef } from "react";

import {
  TAROT_PROMPT_SYSTEM,
  TAROT_PROMPT_SYSTEM_ENG,
  TAROT_PROMPT_USER_ENG,
  TAROT_PROMPT_USER,
} from "./DATA";
import {
  deriveExtension,
  deriveTopicString,
  deriveTopicString_eng,
  deriveExtension_eng,
} from "./utils/prompts";
import { TarotCard } from "./DATA";
import { fetchTarotResponse } from "./utils/dataFetching";

import SexInput from "./components/SexInput";
import DOBInput from "./components/DOBInput";
import RelationshipInput from "./components/RelationshipInput";
import JobStatusInput from "./components/JobInput";
import CardSection from "./components/CardSection";
import { Button } from "./components/shared/Button";
import Cards from "./components/Cards";
import AlternatingLoader from "./components/shared/Loader";
import Summary from "./components/Summary";
import LangToggle from "./components/LangToggle";
import { useLanguage } from "./store/LangContext";

let drawStacks = TarotCard.getDrawStacks();

const App = () => {
  const { language } = useLanguage(); // Access current language

  const [form, setForm] = useState({
    sex: "",
    date: "",
    month: "",
    year: "",
    jobStatus: "",
    relationshipStatus: "",
  });
  const [moneyResponse, setMoneyResponse] = useState();
  const [loveResponse, setLoveResponse] = useState();
  const [workResponse, setWorkResponse] = useState();
  const [loadingStates, setLoadingStates] = useState({
    money: false,
    love: false,
    work: false,
  });
  const [stackId, setStackId] = useState(0);
  const [sent, setSent] = useState(false);

  const isFormValid = Object.values(form).every((field) => field.trim() !== "");
  const resultsRef = useRef(null);
  const formRef = useRef();

  const handleDraw = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleResetDraw = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setSent(false);
      setMoneyResponse();
      setLoveResponse();
      setWorkResponse();
      drawStacks = TarotCard.getDrawStacks();
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSendRequest = async (topic) => {
    const lowerTopic = topic.toLowerCase();
    setLoadingStates((prev) => ({ ...prev, [lowerTopic]: true }));

    // Dynamically choose prompts and functions based on language
    const userPrompt =
      language === "th"
        ? `${TAROT_PROMPT_USER} ${deriveExtension(
            form.date,
            form.month,
            form.year,
            form.sex,
            form.jobStatus,
            form.relationshipStatus,
            drawStacks[stackId]
          )} ${deriveTopicString(
            topic,
            form.jobStatus,
            drawStacks[stackId][topic.toLowerCase()]
          )}`
        : `${TAROT_PROMPT_USER_ENG} ${deriveExtension_eng(
            form.date,
            form.month,
            form.year,
            form.sex,
            form.jobStatus,
            form.relationshipStatus,
            drawStacks[stackId]
          )} ${deriveTopicString_eng(
            topic,
            form.jobStatus,
            drawStacks[stackId][topic.toLowerCase()]
          )}`;

    // console.log(userPrompt);

    const response = await fetchTarotResponse({
      systemPrompt:
        language === "th" ? TAROT_PROMPT_SYSTEM : TAROT_PROMPT_SYSTEM_ENG,
      userPrompt,
    });

    if (response.error) {
      alert(response.message); // Show error message
      setLoadingStates((prev) => ({ ...prev, [lowerTopic]: false })); // Update loading state
      return;
    }

    const result = response.reading[0];

    switch (lowerTopic) {
      case "money":
        setMoneyResponse(result);
        break;
      case "love":
        setLoveResponse(result);
        break;
      case "work":
        setWorkResponse(result);
        break;
    }

    setLoadingStates((prev) => ({ ...prev, [lowerTopic]: false }));
  };

  return (
    <div className="min-w-full bg-white">
      <div className="p-5 font-prompt max-w-screen-sm mx-auto text-gray-800">
        <h1 className="text-2xl font-bold mb-5 text-center font-mono">
          {language === "th" ? "manymu.io" : "manymu.io"}
        </h1>
        <form
          className="space-y-4 rounded-3xl bg-pink-200/75 p-8"
          ref={formRef}
        >
          <LangToggle disabled={sent} />

          <fieldset disabled={sent} className={`${sent ? "opacity-50" : ""}`}>
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
          </fieldset>
          <CardSection sent={sent} stackId={stackId} setStackId={setStackId} />

          <Button
            handleClick={handleDraw}
            message={language === "th" ? "จั่วไพ่ 🫳" : "Draw Cards 🫳"}
            disabled={!isFormValid}
            sent={sent}
            handleResetDraw={handleResetDraw}
          />
        </form>

        {sent && (
          <div
            ref={resultsRef}
            className="flex flex-col space-y-8 mt-4 rounded-3xl bg-indigo-200/75 p-6"
          >
            {Object.entries(drawStacks[stackId]).map(([topic, array], ind) => {
              let responseToShow = null;

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
                  custom={ind}
                  className="opacity-0"
                >
                  <b className="mb-4 block text-center">
                    {language === "th" ? topic.toUpperCase() : topic}
                  </b>
                  <Cards array={array} />
                  <button
                    className="mt-4 mx-auto block bg-white border px-3 py-2 rounded-xl"
                    onClick={() => handleSendRequest(topic)}
                  >
                    {language === "th" ? "ดูความหมาย 👁️" : "See Meaning 👁️"}
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
