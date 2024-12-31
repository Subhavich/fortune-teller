import { useState } from "react";
import { TAROT_PROMPT_SYSTEM, TAROT_PROMPT_USER } from "./DATA";
import SexInput from "./components/SexInput";
import DOBInput from "./components/DOBInput";
import RelationshipInput from "./components/RelationshipInput";
import JobStatusInput from "./components/JobInput";
import {
  deriveExtension,
  getNameString,
  deriveTopicString,
} from "./utils/prompts";
import CardSection from "./components/CardSection";
import { TarotCard } from "./DATA";
import { Button } from "./components/shared/Button";
import { fetchTarotResponse } from "./utils/dataFetching";
// Initialize OpenAI

const drawStacks = [
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
  console.log(TarotCard.getNormalDraw());
  console.log(TarotCard.getReversedDraw());
  console.log(TarotCard.getMajorArcanaDraw());
  const [form, setForm] = useState({
    sex: "",
    date: "",
    month: "",
    year: "",
    jobStatus: "",
    relationshipStatus: "",
  }); // Store form state
  const [response, setResponse] = useState(""); // Store AI response
  const [loading, setLoading] = useState(false); // Loading state
  const [stackId, setStackId] = useState(0);
  const [sent, setSent] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ ...form, [name]: value });
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();

    const userPrompt = `${TAROT_PROMPT_USER} ${deriveExtension(
      form.date,
      form.month,
      form.year,
      form.sex,
      form.jobStatus,
      form.relationshipStatus,
      drawStacks[stackId]
    )} ${deriveTopicString(
      "money",
      form.jobStatus,
      drawStacks[stackId].money
    )}`;

    const response = await fetchTarotResponse({
      systemPrompt: TAROT_PROMPT_SYSTEM,
      userPrompt,
    });
    setResponse(response);

    setLoading(false);
  };

  const handleFakeSent = (e) => {
    e.preventDefault();
    console.log(
      deriveExtension(
        form.date,
        form.month,
        form.year,
        form.sex,
        form.jobStatus,
        form.relationshipStatus,
        drawStacks[1]
      )
    );
    console.log(
      "here",
      deriveTopicString("money", form.jobStatus, drawStacks[stackId].money) +
        deriveTopicString(
          "love",
          form.relationshipStatus.jobStatus,
          drawStacks[stackId].money
        ) +
        deriveTopicString("work", form.jobStatus, drawStacks[stackId].money)
    );
    setSent(true);
  };

  return (
    <div className="p-5 font-prompt  max-w-screen-sm mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-center">ถามไพ่ทาโรต์</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl bg-fuchsia-100/50 p-8"
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
        <CardSection stackId={stackId} setStackId={setStackId} />
        <Button loading={loading} handleClick={handleSubmit} />
        <Button loading={loading} handleClick={handleFakeSent} />
      </form>
      {sent && (
        <div className=" flex flex-col  space-y-8 mt-4 rounded-3xl bg-purple-100/50 p-6">
          {Object.entries(drawStacks[stackId]).map(([topic, array]) => (
            <div key={topic}>
              <b className="mb-4 block text-center">{topic.toUpperCase()}</b>
              <div className="grid grid-cols-12">
                {array.map((card, ind) => (
                  <div className="col-span-4  flex flex-col space-y-2 items-center">
                    <div
                      className="w-20 h-32 bg-contain bg-center rounded-sm border border-gray-500 shadow-inner filter   brightness-90 contrast-125"
                      style={{
                        backgroundImage: `url(https://sacred-texts.com/tarot/pkt/img/${card.name_short}.jpg)`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                    </div>
                    <p className="max-w-full px-2 font-mono text-xs wrap  text-center">
                      {getNameString(card)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {response && (
        <div className="mt-5 p-5 bg-gray-100 rounded-md shadow-md">
          <h3 className="text-lg font-semibold">ผลการทำนาย:</h3>
          {response.reading.map((topic) => (
            <div key={topic.topic}>
              <p>
                <b>
                  {topic.topic} คะแนน {topic.score}/5
                </b>
              </p>
              <p>
                <b>สิ่งที่ควรระวัง : </b> {topic.challenges}
              </p>
              <p>
                <b>คำแนะนำ : </b> {topic.suggestions}
              </p>
              {topic.cards.map((card) => (
                <>
                  <b>{card.name}</b>
                  <p>{card.meaning}</p>
                </>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
