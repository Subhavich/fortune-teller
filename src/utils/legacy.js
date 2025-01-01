// export const handleSendRequest2 = async (topic) => {
//   const lowerTopic = topic.toLowerCase();

//   setLoadingStates((prev) => ({ ...prev, [lowerTopic]: true }));

//   console.log(`Fetching response for ${lowerTopic}...`);

//   switch (lowerTopic) {
//     case "money":
//       console.log("munnuy");
//       break;
//     case "love":
//       console.log("luv");
//       break;
//     case "work":
//       console.log("werks");
//       break;
//     default:
//       console.log("Invalid topic");
//       return; // Exit the function for invalid topics
//   }

//   const userPrompt = `${TAROT_PROMPT_USER} ${deriveExtension(
//     form.date,
//     form.month,
//     form.year,
//     form.sex,
//     form.jobStatus,
//     form.relationshipStatus,
//     drawStacks[stackId]
//   )} ${deriveTopicString(topic, form.jobStatus, drawStacks[stackId].money)}`;

//   console.log(userPrompt);

//   setTimeout(() => {
//     switch (lowerTopic) {
//       case "money":
//         setMoneyResponse(MONEY_RES);
//         break;
//       case "love":
//         setLoveResponse(LOVE_RES);
//         break;
//       case "work":
//         setworkResponse(WORK_RES);
//         break;
//     }
//     setLoadingStates((prev) => ({ ...prev, [lowerTopic]: false }));
//   }, 2000);
// };
