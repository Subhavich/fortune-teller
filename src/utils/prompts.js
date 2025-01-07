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

export const getNameString = (cardObject) => {
  const reversed = cardObject.reversed ? " (reversed) " : "";
  return cardObject.name + reversed;
};

export const deriveExtension = (
  date,
  month,
  year,
  sex,
  jobStatus,
  relationshipStatus
) => {
  return `
  <INFO>
🌟 ข้อมูลของลูกดวง 🌟 
วันเกิด: ${date} ${THAI_MONTHS[month - 1]} ${year}
เพศ: ${sex}
งานปัจจุบัน : ${jobStatus}
ชีวิตความรัก :${relationshipStatus}

`;
};

export const deriveTopicString = (key, status, array) => {
  let topic;
  const upperKey = key.toUpperCase();
  switch (upperKey) {
    case "MONEY":
      topic = "การเงิน/การลงทุน/การกู้เงิน";
      break;
    case "LOVE":
      topic = "ชีวิตความรัก/ชีวิตคู่/ความโสด";
      break;
    case "WORK":
      topic = "ชีวิตการหางาน/การทำงาน/ธุรกิจ";
      break;
    default:
      topic = "เรื่องสุขภาพ";
      break;
  }
  const stringArray = array.map((cardObject) => getNameString(cardObject));

  return ` <TOPIC> ${upperKey} : / <parameters> : ${topic} ( ลูกดวง ${status} ) : [${stringArray.toString()}]  ✨ ให้จัดเต็มให้แบบครบถ้วนและน่าสนใจเลยน้า ✨
`;
};

const ENGLISH_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getNameString_eng = (cardObject) => {
  const reversed = cardObject.reversed ? " (reversed) " : "";
  return cardObject.name + reversed;
};

export const deriveExtension_eng = (
  date,
  month,
  year,
  sex,
  jobStatus,
  relationshipStatus
) => {
  return `
  <INFO>
🌟 Querent's Information 🌟 
Date of Birth: ${date} ${ENGLISH_MONTHS[month - 1]} ${year}
Gender: ${sex}
Current Job: ${jobStatus}
Relationship Status: ${relationshipStatus}

`;
};

export const deriveTopicString_eng = (key, status, array) => {
  let topic;
  const upperKey = key.toUpperCase();
  switch (upperKey) {
    case "MONEY":
      topic = "Finance/Investments/Loans";
      break;
    case "LOVE":
      topic = "Love Life/Relationships/Being Single";
      break;
    case "WORK":
      topic = "Job Hunting/Working/Business";
      break;
    default:
      topic = "Health Matters";
      break;
  }
  const stringArray = array.map((cardObject) => getNameString_eng(cardObject));

  return ` <TOPIC> ${upperKey} : / <parameters> : ${topic} ( Querent ${status} ) : [${stringArray.toString()}] ✨ Please make it as detailed and engaging as possible ✨
`;
};
