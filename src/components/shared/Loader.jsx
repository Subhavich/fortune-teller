import { useState, useEffect } from "react";

const AlternatingLoader = () => {
  const messages = [
    "กำลังเปิดไพ่แห่งโชคชะตา... ✨",
    "กำลังปรึกษาดวงดาว... 🌟",
    "กำลังค้นหาความจริง... 🔮",
    "เตรียมพร้อมรับคำตอบ... 🪄",
    "กำลังรวบรวมพลังแห่งจักรวาล... 🌌",
  ];
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const nextIndex = (messages.indexOf(prev) + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 800); // Change message every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [messages]);

  return (
    <div className="pt-8 flex items-center justify-center space-x-4">
      <p className="text-sm font-medium text-gray-600 animate-bounce">
        {currentMessage}
      </p>
    </div>
  );
};

export default AlternatingLoader;
