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

export const deriveExtension = (
  date,
  month,
  year,
  sex,
  jobStatus,
  relationshipStatus
) => {
  return `
🌟 ข้อมูลของลูกดวง 🌟
วันเกิด: ${date} ${THAI_MONTHS[month - 1]} ${year}
เพศ: ${sex}
<TOPIC> การเงิน (${jobStatus}): [Six of Pentacles, The Wheel of Fortune, Four of Pentacles]
<TOPIC> ความรัก (${relationshipStatus}): [Ace of Cups, Three of Swords, The Lovers]
<TOPIC> อาชีพ (${jobStatus}): [The Emperor, Eight of Pentacles, The Chariot]
✨ ให้จัดเต็มให้แบบครบถ้วนและน่าสนใจเลยน้า ✨
`;
};
