import { useState } from "react";
import { FAKE_RESPONSE, TAROT_PROMPT_SYSTEM, TAROT_PROMPT_USER } from "./DATA";
import SexInput from "./components/SexInput";
import DOBInput from "./components/DOBInput";
import RelationshipInput from "./components/RelationshipInput";
import JobStatusInput from "./components/JobInput";
import { deriveExtension, deriveTopicString } from "./utils/prompts";
import CardSection from "./components/CardSection";
import { TarotCard } from "./DATA";
import { Button } from "./components/shared/Button";
import { fetchTarotResponse } from "./utils/dataFetching";
import StarRating from "./components/shared/StarRating";
import Cards from "./components/Cards";
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
  const [form, setForm] = useState({
    sex: "",
    date: "",
    month: "",
    year: "",
    jobStatus: "",
    relationshipStatus: "",
  }); // Store form state
  const [response, setResponse] = useState(""); // Store AI response
  const [moneyResponse, setMoneyResponse] = useState();
  const [loveResponse, setLoveResponse] = useState();
  const [workResponse, setworkResponse] = useState();
  const [loading, setLoading] = useState(false); // Loading state
  const [stackId, setStackId] = useState(0);
  const [sent, setSent] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const setTrue = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleSendRequest = async (topic) => {
    const lowerTopic = topic.toLowerCase();
    console.log(lowerTopic);
    switch (lowerTopic) {
      case "money":
        setLoading(true);
        console.log("munnuy");
        break;
      case "love":
        setLoading(true);
        console.log("luv");
        break;
      case "work":
        setLoading(true);
        console.log("werks");
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
    return;
    const response = await fetchTarotResponse({
      systemPrompt: TAROT_PROMPT_SYSTEM,
      userPrompt,
    });

    switch (topic) {
      case "money":
        setMoneyResponse(response);
        break;
      case "love":
        setLoveResponse(response);
        break;
      case "work":
        setworkResponse(response);
        break;
    }

    // console.log(response.choices[0]);
    setResponse(response);
    setLoading(false);
  };

  const handleFakeSent = (e) => {
    e.preventDefault();

    setSent(true);
    setResponse(FAKE_RESPONSE.choices[0]);
  };

  return (
    <div className="p-5 font-prompt  max-w-screen-sm mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-center">ถามไพ่ทาโรต์</h1>
      <form className="space-y-4 rounded-3xl bg-fuchsia-100/50 p-8">
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
        <Button loading={loading} handleClick={setTrue} message={"ดูคำทำนาย"} />
        <Button loading={loading} handleClick={setTrue} message={"MOCK RES"} />
      </form>

      {sent && (
        <div className=" flex flex-col space-y-8 mt-4 rounded-3xl bg-purple-100/50 p-6">
          {Object.entries(drawStacks[stackId]).map(([topic, array], ind) => (
            <div key={topic}>
              <b className="mb-4 block text-center">{topic.toUpperCase()}</b>
              <Cards array={array} />
              <button
                className="mt-4 mx-auto block border px-3 py-2 rounded-xl"
                onClick={() => handleSendRequest(topic)}
              >
                เช็คความหมาย
              </button>
              {!loading && response && <Summary response={response} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

const Summary = ({ response, loading }) => {
  const result = response.reading[0];
  return (
    <>
      {loading && <p> กำลังทำนาย </p>}
      <div className="flex flex-col items-center mt-4">
        <p>{result.topic}</p>
        <StarRating score={result.score} />
      </div>
    </>
  );
};

{
  /* {response && (
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
      )} */
}
