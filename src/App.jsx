import { useState } from "react";
import OpenAI from "openai";
import { TAROT_PROMPT_SYSTEM, TAROT_PROMPT_USER } from "./DATA";
import SexInput from "./components/SexInput";
import DOBInput from "./components/DOBInput";
import RelationshipInput from "./components/RelationshipInput";
import JobStatusInput from "./components/JobInput";
import { deriveExtension } from "./utils/prompts";
import { sanitizeResponse } from "./utils/sanitize";
import CardSection from "./components/CardSection";
import { TarotCard } from "./DATA";
import { Button } from "./components/shared/Button";
// Initialize OpenAI
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const TarotDeck = new TarotCard();

const App = () => {
  console.log(TarotCard.getThreeCards());
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
  const [draws, setDraws] = useState([]);
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ ...form, [name]: value });
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4", // Recommend using gpt-4 for nuanced outputs
        store: true, // Optional: Store the session for later retrieval
        messages: [
          { role: "system", content: TAROT_PROMPT_SYSTEM },
          {
            role: "user",
            content: `${TAROT_PROMPT_USER} ${deriveExtension(
              form.date,
              form.month,
              form.year,
              form.sex,
              form.jobStatus,
              form.relationshipStatus
            )}`,
          },
        ],
      });
      console.log(response.choices[0].message.content);
      setResponse(sanitizeResponse(response.choices[0].message.content)); // Update the response
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("ขออภัย เกิดข้อผิดพลาด");
    } finally {
      setLoading(false); // Stop the loading spinner
    }
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
        <CardSection />
        <Button loading={loading} />
      </form>

      {/* Response */}
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
