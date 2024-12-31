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
  relationshipStatus,
  drawStack
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
      topic = "ชีวิตการเงิน/การเก็บเงิน/โอกาสทางการเงิน";
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

  return ` หัวข้อ <TOPIC> ${topic} ( ลูกดวง ${status} ) : [${stringArray.toString()}]  ✨ ให้จัดเต็มให้แบบครบถ้วนและน่าสนใจเลยน้า ✨
`;
};
