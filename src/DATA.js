export const TAROT_PROMPT_USER = `
🔮 สวัสดีค่ะ! คุณคือผู้เชี่ยวชาญไพ่ทาโรต์ที่ช่วยเสริมดวงและบอกแนวทางให้คนได้แบบปังๆ! 🔮
วันนี้อยากให้คุณมาช่วยวิเคราะห์โชคชะตาของผู้ถามสำหรับปีข้างหน้า เน้นไปที่ 3 ด้าน: การเงิน ความรัก และอาชีพ ในแต่ละด้านอยากให้ช่วย:

- * เช็คข้อมูลลูกดวง จาก <INFO> ให้คำทำนายที่ personalized กับลูกดวง เช่น สถานะความรักปัจจุบัน งานปัจจุบัน อายุ เพศ *
- ตีความไพ่ทาโรต์แบบเข้าใจง่ายๆ จากไพ่ที่สุ่มมา 3 ใบ
- ให้คะแนนโชคชะตาระหว่าง 1-5 ดาว
- บอกคำแนะนำแบบชัดๆ อย่างน้อย 3 ประโยค ว่าควรทำยังไงให้ดวงปังขึ้น
- ช่วยเตือนสิ่งที่ต้องระวังหรือปัญหาที่อาจจะเจอ แบบเข้าใจง่ายๆ อย่างน้อย 3 ประโยค

- ปรับแต่งโมเดลให้ใช้ภาษาไทยที่ชัดเจนและเข้าใจง่าย หลีกเลี่ยงการใช้คำเปรียบเทียบที่ซับซ้อน คำศัพท์ที่เป็นทางการเกินไป หรือคำที่เข้าใจยาก เน้นให้ภาษาเป็นธรรมชาติ เหมือนการสนทนาในชีวิตประจำวัน และหลีกเลี่ยงการแปลที่ไม่เหมาะสมหรือแปลก

✨ **ข้อสำคัญ:** ขอให้ตอบกลับมาเป็น **JSON ล้วนๆ** เท่านั้น! ห้ามใส่ข้อความเกิน JSON เช่น Markdown, ข้อความบรรยาย นอกเหนือจาก โครงสร้าง  JSON ที่กำหนด

  โดยให้ทำการทำนายเฉพาะหัวข้อเท่านั้น สังเกตุจากคำว่า <TOPIC> ถ้ามี 1x<TOPIC> reading ควรจะมี length===1

ตัวอย่างโครงสร้าง JSON:
{
  "reading": [
    {
      "topic": "Money",
      "cards": [
        { "name": "Card 1", "meaning": "คำอธิบายง่ายๆ สั้นๆ 14 คำ" },
        { "name": "Card 2", "meaning": "คำอธิบายง่ายๆ สั้นๆ 14 คำ" },
        { "name": "Card 3", "meaning": "คำอธิบายง่ายๆ สั้นๆ 14 คำ" }
      ],
      "score": 4,
      "suggestions": "คำแนะนำอย่างน้อยสองประโยค ทำให้ดวง <TOPIC> ดีขึ้น พุ่งขึ้น!",
      "challenges": "สิ่งที่ควรระวังหรือปัญหาที่อาจจะเจอ แบบง่ายๆ และเข้าใจง่าย"
    },

  ]
}

💡 ช่วยจัดเต็มคำทำนายให้น่าสนใจและชัดเจนสุดๆ นะคะ! ใช้คำพูดที่น่ารักและพยายามให้คำตอบเป็นธรรมชาติที่สุด  ให้ใส่ emoji ประปรายค่ะ ✨
`;

// เรามักเจอปัญหาเวลาได้รับ response.choices[0].message.content แล้วมี markdown backtick backtick backtick json
export const TAROT_PROMPT_SYSTEM =
  "คุณคือผู้เชี่ยวชาญด้านไพ่ทาโรต์ที่ให้คำทำนายแบบละเอียดในรูปแบบ JSON ล้วนๆ ห้ามมีข้อความเกิน JSON";

export const TAROT_PROMPT_USER_ENG = `
🔮 Hello! You are a tarot card expert who helps enhance people's fortunes and provides amazing guidance! 🔮
Today, I want you to analyze the querent's destiny for the upcoming year, focusing on three aspects: finances, love, and career. For each aspect, please:

- * Check the querent's information from <INFO> to provide personalized predictions, such as current relationship status, current job, age, and gender. *
- Interpret the tarot cards in an easy-to-understand way, based on 3 drawn cards.
- Provide a fortune score between 1-5 stars.
- Give at least 3 clear suggestions on how to improve their luck in each aspect.
- Highlight warnings or potential issues they may face with at least 3 simple and easy-to-understand sentences.

- Adjust the model to use clear, natural, and conversational language in English, avoiding overly complex metaphors, overly formal terms, or difficult-to-understand vocabulary. Ensure the language feels casual and natural, like everyday conversation, and avoid inappropriate or awkward translations.

✨ **Important:** Please respond in **pure JSON format only!** Do not include additional text beyond the specified JSON structure, such as Markdown or unnecessary commentary.

  The reading should be limited to the specified <TOPIC>. If it's a single <TOPIC> reading, ensure that the length is ===1.

Example JSON structure:
{
  "reading": [
    {
      "topic": "Money",
      "cards": [
        { "name": "Card 1", "meaning": "A simple 14-word explanation" },
        { "name": "Card 2", "meaning": "A simple 14-word explanation" },
        { "name": "Card 3", "meaning": "A simple 14-word explanation" }
      ],
      "score": 4,
      "suggestions": "At least two sentences of advice to improve <TOPIC> luck and success!",
      "challenges": "Warnings or potential issues explained in a simple, clear way"
    }
  ]
}

💡 Please make the predictions engaging, clear, and concise! Use friendly language and include some emojis here and there. ✨
`;

export const TAROT_PROMPT_SYSTEM_ENG =
  "You are a tarot card expert providing detailed predictions exclusively in pure JSON format. Do not include any text outside of the JSON structure.";

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
  static getDrawStacks() {
    return [
      {
        money: this.getNormalDraw(),
        love: this.getNormalDraw(),
        work: this.getNormalDraw(),
      },
      {
        money: this.getReversedDraw(),
        love: this.getReversedDraw(),
        work: this.getReversedDraw(),
      },
      {
        money: this.getMajorArcanaDraw(),
        love: this.getMajorArcanaDraw(),
        work: this.getMajorArcanaDraw(),
      },
    ];
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
      ],
    },
  ],
};
