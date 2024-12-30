import { useState } from "react";
import OpenAI from "openai";
import { TAROT_PROMPT_SYSTEM, TAROT_PROMPT_USER } from "./DATA";
import SexInput from "./components/SexInput";
import DOBInput from "./components/DOBInput";
import RelationshipInput from "./components/RelationshipInput";
import JobStatusInput from "./components/JobInput";

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const THAI_MONTHS = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
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
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ ...form, [name]: value });
    setForm({ ...form, [name]: value });
  };

  const deriveExtension = () => {
    return `
🌟 ข้อมูลของลูกดวง 🌟
วันเกิด: ${form.date} ${THAI_MONTHS[form.month - 1]} ${form.year}
เพศ: ${form.sex}
<TOPIC> การเงิน (${
      form.jobStatus
    }): [Six of Pentacles, The Wheel of Fortune, Four of Pentacles]
<TOPIC> ความรัก (${
      form.relationshipStatus
    }): [Ace of Cups, Three of Swords, The Lovers]
<TOPIC> อาชีพ (${
      form.jobStatus
    }): [The Emperor, Eight of Pentacles, The Chariot]
✨ ให้จัดเต็มให้แบบครบถ้วนและน่าสนใจเลยน้า ✨
`;
  };

  const handleSubmit = async (e) => {
    console.log(`${TAROT_PROMPT_USER} ${deriveExtension()}`);
    e.preventDefault();
    setLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo", // Recommend using gpt-4 for nuanced outputs
        store: true, // Optional: Store the session for later retrieval
        messages: [
          { role: "system", content: TAROT_PROMPT_SYSTEM },
          {
            role: "user",
            content: `${TAROT_PROMPT_USER} ${deriveExtension()}`,
          },
        ],
      });

      setResponse(JSON.parse(response.choices[0].message.content)); // Update the response
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("ขออภัย เกิดข้อผิดพลาด");
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  return (
    <div className="p-5 font-sans max-w-screen-sm mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-center">ถามไพ่ทาโรต์</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Sex */}
        <SexInput value={form.sex} onChange={handleChange} />

        {/* Date of Birth */}
        <DOBInput
          date={form.date}
          month={form.month}
          year={form.year}
          onChange={handleChange}
        />

        {/* Job Status */}
        <JobStatusInput value={form.jobStatus} onChange={handleChange} />

        {/* Relationship Status */}
        <RelationshipInput
          value={form.relationshipStatus}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full p-3 rounded-md text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
          disabled={loading} // Disable the button while loading
        >
          {loading ? "กำลังทำนาย..." : "ถามไพ่ทาโรต์"}
        </button>
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
