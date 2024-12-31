export const TAROT_PROMPT_USER = `
🔮 สวัสดีค่ะ! คุณคือผู้เชี่ยวชาญไพ่ทาโรต์ที่ช่วยเสริมดวงและบอกแนวทางให้คนได้แบบปังๆ! 🔮
วันนี้อยากให้คุณมาช่วยวิเคราะห์โชคชะตาของผู้ถามสำหรับปีข้างหน้า เน้นไปที่ 3 ด้าน: การเงิน ความรัก และอาชีพ ในแต่ละด้านอยากให้ช่วย:

- เช็คข้อมูลลูกดวง จาก <INFO> ให้คำทำนายที่ personalized กับลูกดวง เช่น สถานะความรักปัจจุบัน งานปัจจุบัน
- ตีความไพ่ทาโรต์แบบเข้าใจง่ายๆ จากไพ่ที่สุ่มมา 3 ใบ
- ให้คะแนนโชคชะตาระหว่าง 1-5 ดาว
- บอกคำแนะนำแบบชัดๆ อย่างน้อย 3 ประโยค ว่าควรทำยังไงให้ดวงปังขึ้น
- ช่วยเตือนสิ่งที่ต้องระวังหรือปัญหาที่อาจจะเจอ แบบเข้าใจง่ายๆ อย่างน้อย 3 ประโยค

- ปรับแต่งโมเดลให้ใช้ภาษาไทยที่ชัดเจนและเข้าใจง่าย หลีกเลี่ยงการใช้คำเปรียบเทียบที่ซับซ้อน คำศัพท์ที่เป็นทางการเกินไป หรือคำที่เข้าใจยาก เน้นให้ภาษาเป็นธรรมชาติ เหมือนการสนทนาในชีวิตประจำวัน และหลีกเลี่ยงการแปลที่ไม่เหมาะสมหรือแปลก

✨ **ข้อสำคัญ:** ขอให้ตอบกลับมาเป็น **JSON ล้วนๆ** เท่านั้น! ห้ามใส่ข้อความเกิน JSON เช่น Markdown, ข้อความบรรยาย นอกเหนือจาก โครงสร้าง  JSON ที่กำหนด

  โดยให้ทำการทำนายเฉพาะหัวข้อเท่านั้น สังเกตุจากคำว่า <TOPIC> ถ้ามี 1x<TOPIC> reading ควรจะมี length ===1

ตัวอย่างโครงสร้าง JSON:
{
  "reading": [
    {
      "topic": "Money",
      "cards": [
        { "name": "Card 1", "meaning": "คำอธิบายง่ายๆ สั้นๆ 10 คำ" },
        { "name": "Card 2", "meaning": "คำอธิบายง่ายๆ สั้นๆ 10 คำ" },
        { "name": "Card 3", "meaning": "คำอธิบายง่ายๆ สั้นๆ 10 คำ" }
      ],
      "score": 4,
      "suggestions": "คำแนะนำอย่างน้อยสองประโยค ทำให้ดวงการเงินพุ่งขึ้น!",
      "challenges": "สิ่งที่ควรระวังหรือปัญหาที่อาจจะเจอ แบบง่ายๆ และเข้าใจง่าย"
    },

  ]
}

💡 ช่วยจัดเต็มคำทำนายให้น่าสนใจและชัดเจนสุดๆ นะคะ! ใช้คำพูดที่น่ารักและพยายามให้คำตอบเป็นธรรมชาติที่สุด  ให้ใส่ emoji ประปรายค่ะ ✨
`;

// เรามักเจอปัญหาเวลาได้รับ response.choices[0].message.content แล้วมี markdown backtick backtick backtick json
export const TAROT_PROMPT_SYSTEM =
  "คุณคือผู้เชี่ยวชาญด้านไพ่ทาโรต์ที่ให้คำทำนายแบบละเอียดในรูปแบบ JSON ล้วนๆ ห้ามมีข้อความเกิน JSON";

export const TAROTCARDS = [
  { name: "The Fool", name_short: "ar00" },
  { name: "The Magician", name_short: "ar01" },
  { name: "The High Priestess", name_short: "ar02" },
  { name: "The Empress", name_short: "ar03" },
  { name: "The Emperor", name_short: "ar04" },
  { name: "The Hierophant", name_short: "ar05" },
  { name: "The Lovers", name_short: "ar06" },
  { name: "The Chariot", name_short: "ar07" },
  { name: "Justice", name_short: "ar11" },
  { name: "The Hermit", name_short: "ar09" },
  { name: "Wheel Of Fortune", name_short: "ar10" },
  { name: "Fortitude", name_short: "ar08" },
  { name: "The Hanged Man", name_short: "ar12" },
  { name: "Death", name_short: "ar13" },
  { name: "Temperance", name_short: "ar14" },
  { name: "The Devil", name_short: "ar15" },
  { name: "The Tower", name_short: "ar16" },
  { name: "The Star", name_short: "ar17" },
  { name: "The Moon", name_short: "ar18" },
  { name: "The Sun", name_short: "ar19" },
  { name: "The Last Judgment", name_short: "ar20" },
  { name: "The World", name_short: "ar21" },
  { name: "Ace of Wands", name_short: "waac" },
  { name: "Two of Wands", name_short: "wa02" },
  { name: "Three of Wands", name_short: "wa03" },
  { name: "Four of Wands", name_short: "wa04" },
  { name: "Five of Wands", name_short: "wa05" },
  { name: "Six of Wands", name_short: "wa06" },
  { name: "Seven of Wands", name_short: "wa07" },
  { name: "Eight of Wands", name_short: "wa08" },
  { name: "Nine of Wands", name_short: "wa09" },
  { name: "Ten of Wands", name_short: "wa10" },
  { name: "Page of Wands", name_short: "wapa" },
  { name: "Knight of Wands", name_short: "wakn" },
  { name: "Queen of Wands", name_short: "waqu" },
  { name: "King of Wands", name_short: "waki" },
  { name: "Ace of Cups", name_short: "cuac" },
  { name: "Two of Cups", name_short: "cu02" },
  { name: "Three of Cups", name_short: "cu03" },
  { name: "Four of Cups", name_short: "cu04" },
  { name: "Five of Cups", name_short: "cu05" },
  { name: "Six of Cups", name_short: "cu06" },
  { name: "Seven of Cups", name_short: "cu07" },
  { name: "Eight of Cups", name_short: "cu08" },
  { name: "Nine of Cups", name_short: "cu09" },
  { name: "Ten of Cups", name_short: "cu10" },
  { name: "Page of Cups", name_short: "cupa" },
  { name: "Knight of Cups", name_short: "cukn" },
  { name: "Queen of Cups", name_short: "cuqu" },
  { name: "King of Cups", name_short: "cuki" },
  { name: "Ace of Pentacles", name_short: "peac" },
  { name: "Two of Pentacles", name_short: "pe02" },
  { name: "Three of Pentacles", name_short: "pe03" },
  { name: "Four of Pentacles", name_short: "pe04" },
  { name: "Five of Pentacles", name_short: "pe05" },
  { name: "Six of Pentacles", name_short: "pe06" },
  { name: "Seven of Pentacles", name_short: "pe07" },
  { name: "Eight of Pentacles", name_short: "pe08" },
  { name: "Nine of Pentacles", name_short: "pe09" },
  { name: "Ten of Pentacles", name_short: "pe10" },
  { name: "Page of Pentacles", name_short: "pepa" },
  { name: "Knight of Pentacles", name_short: "pekn" },
  { name: "Queen of Pentacles", name_short: "pequ" },
  { name: "King of Pentacles", name_short: "peki" },
  { name: "Ace of Swords", name_short: "swac" },
  { name: "Two of Swords", name_short: "sw02" },
  { name: "Three of Swords", name_short: "sw03" },
  { name: "Four of Swords", name_short: "sw04" },
  { name: "Five of Swords", name_short: "sw05" },
  { name: "Six of Swords", name_short: "sw06" },
  { name: "Seven of Swords", name_short: "sw07" },
  { name: "Eight of Swords", name_short: "sw08" },
  { name: "Nine of Swords", name_short: "sw09" },
  { name: "Ten of Swords", name_short: "sw10" },
  { name: "Page of Swords", name_short: "swpa" },
  { name: "Knight of Swords", name_short: "swkn" },
  { name: "Queen of Swords", name_short: "swqu" },
  { name: "King of Swords", name_short: "swki" },
];

export class TarotCard {
  static TAROTCARDS = [
    { name: "The Fool", name_short: "ar00" },
    { name: "The Magician", name_short: "ar01" },
    { name: "The High Priestess", name_short: "ar02" },
    { name: "The Empress", name_short: "ar03" },
    { name: "The Emperor", name_short: "ar04" },
    { name: "The Hierophant", name_short: "ar05" },
    { name: "The Lovers", name_short: "ar06" },
    { name: "The Chariot", name_short: "ar07" },
    { name: "Justice", name_short: "ar11" },
    { name: "The Hermit", name_short: "ar09" },
    { name: "Wheel Of Fortune", name_short: "ar10" },
    { name: "Fortitude", name_short: "ar08" },
    { name: "The Hanged Man", name_short: "ar12" },
    { name: "Death", name_short: "ar13" },
    { name: "Temperance", name_short: "ar14" },
    { name: "The Devil", name_short: "ar15" },
    { name: "The Tower", name_short: "ar16" },
    { name: "The Star", name_short: "ar17" },
    { name: "The Moon", name_short: "ar18" },
    { name: "The Sun", name_short: "ar19" },
    { name: "The Last Judgment", name_short: "ar20" },
    { name: "The World", name_short: "ar21" },
    { name: "Ace of Wands", name_short: "waac" },
    { name: "Two of Wands", name_short: "wa02" },
    { name: "Three of Wands", name_short: "wa03" },
    { name: "Four of Wands", name_short: "wa04" },
    { name: "Five of Wands", name_short: "wa05" },
    { name: "Six of Wands", name_short: "wa06" },
    { name: "Seven of Wands", name_short: "wa07" },
    { name: "Eight of Wands", name_short: "wa08" },
    { name: "Nine of Wands", name_short: "wa09" },
    { name: "Ten of Wands", name_short: "wa10" },
    { name: "Page of Wands", name_short: "wapa" },
    { name: "Knight of Wands", name_short: "wakn" },
    { name: "Queen of Wands", name_short: "waqu" },
    { name: "King of Wands", name_short: "waki" },
    { name: "Ace of Cups", name_short: "cuac" },
    { name: "Two of Cups", name_short: "cu02" },
    { name: "Three of Cups", name_short: "cu03" },
    { name: "Four of Cups", name_short: "cu04" },
    { name: "Five of Cups", name_short: "cu05" },
    { name: "Six of Cups", name_short: "cu06" },
    { name: "Seven of Cups", name_short: "cu07" },
    { name: "Eight of Cups", name_short: "cu08" },
    { name: "Nine of Cups", name_short: "cu09" },
    { name: "Ten of Cups", name_short: "cu10" },
    { name: "Page of Cups", name_short: "cupa" },
    { name: "Knight of Cups", name_short: "cukn" },
    { name: "Queen of Cups", name_short: "cuqu" },
    { name: "King of Cups", name_short: "cuki" },
    { name: "Ace of Pentacles", name_short: "peac" },
    { name: "Two of Pentacles", name_short: "pe02" },
    { name: "Three of Pentacles", name_short: "pe03" },
    { name: "Four of Pentacles", name_short: "pe04" },
    { name: "Five of Pentacles", name_short: "pe05" },
    { name: "Six of Pentacles", name_short: "pe06" },
    { name: "Seven of Pentacles", name_short: "pe07" },
    { name: "Eight of Pentacles", name_short: "pe08" },
    { name: "Nine of Pentacles", name_short: "pe09" },
    { name: "Ten of Pentacles", name_short: "pe10" },
    { name: "Page of Pentacles", name_short: "pepa" },
    { name: "Knight of Pentacles", name_short: "pekn" },
    { name: "Queen of Pentacles", name_short: "pequ" },
    { name: "King of Pentacles", name_short: "peki" },
    { name: "Ace of Swords", name_short: "swac" },
    { name: "Two of Swords", name_short: "sw02" },
    { name: "Three of Swords", name_short: "sw03" },
    { name: "Four of Swords", name_short: "sw04" },
    { name: "Five of Swords", name_short: "sw05" },
    { name: "Six of Swords", name_short: "sw06" },
    { name: "Seven of Swords", name_short: "sw07" },
    { name: "Eight of Swords", name_short: "sw08" },
    { name: "Nine of Swords", name_short: "sw09" },
    { name: "Ten of Swords", name_short: "sw10" },
    { name: "Page of Swords", name_short: "swpa" },
    { name: "Knight of Swords", name_short: "swkn" },
    { name: "Queen of Swords", name_short: "swqu" },
    { name: "King of Swords", name_short: "swki" },
  ];

  // static getThreeCards(allowReversed = false) {
  //   const shuffledDeck = [...this.TAROTCARDS]; // Create a shallow copy of the cards
  //   const selectedCards = [];

  //   for (let i = 0; i < 3; i++) {
  //     const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
  //     let card = { ...shuffledDeck[randomIndex] }; // Copy the selected card

  //     // If allowReversed is true, randomly set the reversed field
  //     if (allowReversed) {
  //       card.reversed = Math.random() > 0.5;
  //     } else {
  //       card.reversed = false; // Explicitly set to false if not reversed
  //     }

  //     selectedCards.push(card);
  //     shuffledDeck.splice(randomIndex, 1); // Remove the selected card from the copy
  //   }

  //   return selectedCards;
  // }

  static getNormalDraw() {
    const shuffledDeck = [...this.TAROTCARDS];
    const selectedCards = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
      selectedCards.push(shuffledDeck[randomIndex]);
      shuffledDeck.splice(randomIndex, 1);
    }

    return selectedCards;
  }

  static getReversedDraw() {
    const shuffledDeck = [...this.TAROTCARDS];
    const selectedCards = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
      let card = { ...shuffledDeck[randomIndex] };
      card.reversed = Math.random() > 0.5;
      selectedCards.push(card);
      shuffledDeck.splice(randomIndex, 1);
    }

    return selectedCards;
  }

  static getMajorArcanaDraw() {
    const majorArcana = this.TAROTCARDS.filter(
      (card) => !card.name.includes("of")
    ); // Excludes suit cards
    const shuffledDeck = [...majorArcana];
    const selectedCards = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
      selectedCards.push(shuffledDeck[randomIndex]);
      shuffledDeck.splice(randomIndex, 1);
    }

    return selectedCards;
  }
}

export const FAKE_RESPONSE = {
  choices: [
    {
      reading: [
        {
          topic: "Money",
          cards: [
            {
              name: "Two of Wands",
              meaning: "แสดงให้เห็นถึงการมีแผนการการเงินที่ดี",
            },
            {
              name: "Queen of Swords",
              meaning:
                "นำมาซึ่งความชัดเจนและการตัดสินใจที่ฉลาดในการจัดการเรื่องเงิน",
            },
            {
              name: "King of Pentacles",
              meaning: "บ่งบอกถึงความประสบความสำเร็จในด้านการเงิน",
            },
          ],
          score: 4,
          suggestions:
            "ควรทำการวางแผนในการใช้เงินอย่างประณีตและชัดเจน และควรอยู่เคียงข้างความจริงใจและความมั่นคงในทุกการสร้างความสำเร็จทางการเงิน",
          challenges:
            "ควรระวังเรื่องการเร่งรีบในการตัดสินใจเรื่องการเงิน และผู้อื่นอาจจะล่อลวงคุณในเรื่องเงิน",
        },
        {
          topic: "Love",
          cards: [
            {
              name: "Six of Swords",
              meaning:
                "กำลังจะย้ายจากสถานการณ์ที่ยากลำบากไปสู่สถานการณ์ที่ดีขึ้นในด้านความรัก",
            },
            {
              name: "Page of Cups",
              meaning: "บ่งบอกถึงความรักที่แท้จริงและมีศักยภาพในอนาคต",
            },
            {
              name: "Queen of Pentacles",
              meaning: "นำมาซึ่งความสมดุลและความสุขในความสัมพันธ์",
            },
          ],
          score: 4,
          suggestions:
            "ควรดำเนินชีวิตต่อไปในความสัมพันธ์ด้วยการให้และรับ ซึ่งจะนำไปสู่ความสุขและความสมดุลที่ดี",
          challenges:
            "ควรระวังการเพิ่งพาใครเกินไป และอาจจะต้องเผชิญกับการเปลี่ยนแปลงในความสัมพันธ์",
        },
        {
          topic: "Career",
          cards: [
            {
              name: "Ten of Pentacles",
              meaning: "บ่งบอกถึงความสำเร็จและความมั่งคั่งในอาชีพ",
            },
            {
              name: "The Magician",
              meaning:
                "แสดงถึงทักษะและความสามารถที่จะทำให้คุณประสบความสำเร็จในอาชีพ",
            },
            {
              name: "Seven of Wands",
              meaning: "บ่งบอกถึงความต้องการที่จะต่อสู้และรักษาสิ่งที่คุณมี",
            },
          ],
          score: 4,
          suggestions:
            "คุณควรหาแนวทางในการใช้ทักษะของคุณเพื่อสร้างความสำเร็จในอาชีพ และควรยืนหยัดในการรักษาสิ่งที่คุณทำ",
          challenges:
            "คอยระวังการแข่งขันในสถานที่ทำงาน และคุณควรรู้จักวิธีการจัดการกับความกดดันในสถานที่ทำงาน",
        },
      ],
    },
  ],
};
