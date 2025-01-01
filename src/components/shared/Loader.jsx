import { useState, useEffect } from "react";

const AlternatingLoader = () => {
  const messages = [
    "Shuffling the cards... 🃏",
    "Drawing your destiny... ✨",
    "Consulting the stars... 🌟",
  ];
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => {
        const nextIndex = (messages.indexOf(prev) + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 500); // Change message every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [messages]);

  return (
    <div className="pt-4 flex items-center justify-center space-x-4">
      <p className="text-sm font-medium text-gray-600 animate-bounce">
        {currentMessage}
      </p>
    </div>
  );
};

export default AlternatingLoader;
