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
  console.log("KIMI", cardObject.name);
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
🌟 ข้อมูลของลูกดวง 🌟
วันเกิด: ${date} ${THAI_MONTHS[month - 1]} ${year}
เพศ: ${sex}
<TOPIC> การเงิน (${jobStatus}): [${getNameString(
    drawStack.money[0]
  )},${getNameString(drawStack.money[1])},${getNameString(drawStack.money[2])}]
<TOPIC> ความรัก (${relationshipStatus}):  [${drawStack.love[0].name},${
    drawStack.love[1].name
  },${drawStack.love[2].name}]
<TOPIC> อาชีพ (${jobStatus}):  [${drawStack.work[0].name},${
    drawStack.work[1].name
  },${drawStack.work[2].name}]
✨ ให้จัดเต็มให้แบบครบถ้วนและน่าสนใจเลยน้า ✨
`;
};
