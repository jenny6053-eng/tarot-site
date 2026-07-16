export interface TarotCard {
  id: number;
  nameKo: string;
  nameEn: string;
  slug: string;
  type: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  number: number;
  uprightKeywords: string[];
  reversedKeywords: string[];
  summary: string;
}

export const tarotCards: TarotCard[] = [
  // Major Arcana (0-21)
  {
    id: 0,
    nameKo: "광대",
    nameEn: "The Fool",
    slug: "the-fool",
    type: "major",
    number: 0,
    uprightKeywords: ["새로운 시작", "자유", "모험", "순수"],
    reversedKeywords: ["무모함", "무책임", "위험", "주의 부족"],
    summary: "새로운 여정의 시작과 무한한 가능성을 상징하는 순수한 모험가 카드입니다."
  },
  {
    id: 1,
    nameKo: "마법사",
    nameEn: "The Magician",
    slug: "the-magician",
    type: "major",
    number: 1,
    uprightKeywords: ["창조력", "의지", "능력", "실행력"],
    reversedKeywords: ["사기성", "능력 부족", "기만", "계획 지연"],
    summary: "자신의 재능과 도구를 활용해 현실을 창조하는 능력자의 카드입니다."
  },
  {
    id: 2,
    nameKo: "여사제",
    nameEn: "The High Priestess",
    slug: "the-high-priestess",
    type: "major",
    number: 2,
    uprightKeywords: ["직관", "비밀", "지혜", "무의식"],
    reversedKeywords: ["비밀 폭로", "이기심", "표면적 지식", "신경과민"],
    summary: "통찰력과 직관, 그리고 내면의 깊은 지혜를 나타내는 신비로운 카드입니다."
  },
  {
    id: 3,
    nameKo: "여황제",
    nameEn: "The Empress",
    slug: "the-empress",
    type: "major",
    number: 3,
    uprightKeywords: ["풍요", "모성애", "자연", "창조성"],
    reversedKeywords: ["의존성", "낭비", "창의력 결여", "불임"],
    summary: "어머니 같은 따뜻함과 풍요로운 결실, 자연의 생명력을 보여주는 풍요의 카드입니다."
  },
  {
    id: 4,
    nameKo: "황제",
    nameEn: "The Emperor",
    slug: "the-emperor",
    type: "major",
    number: 4,
    uprightKeywords: ["권위", "통제", "구조", "리더십"],
    reversedKeywords: ["폭정", "통제력 상실", "융통성 없음", "비효율"],
    summary: "사회적 질서와 권위, 엄격한 통제와 안정을 추구하는 지도자의 카드입니다."
  },
  {
    id: 5,
    nameKo: "교황",
    nameEn: "The Hierophant",
    slug: "the-hierophant",
    type: "major",
    number: 5,
    uprightKeywords: ["전통", "교육", "정신적 인도", "사회 규범"],
    reversedKeywords: ["도그마", "반항", "새로운 방식", "비정통"],
    summary: "전통적 가치관과 교육, 영적인 지도와 멘토십을 상징하는 지혜의 카드입니다."
  },
  {
    id: 6,
    nameKo: "연인",
    nameEn: "The Lovers",
    slug: "the-lovers",
    type: "major",
    number: 6,
    uprightKeywords: ["사랑", "조화", "선택", "파트너십"],
    reversedKeywords: ["불화", "잘못된 선택", "갈등", "분열"],
    summary: "인생의 중요한 선택과 파트너 간의 깊은 교감 및 조화를 의미하는 연애 카드입니다."
  },
  {
    id: 7,
    nameKo: "전차",
    nameEn: "The Chariot",
    slug: "the-chariot",
    type: "major",
    number: 7,
    uprightKeywords: ["승리", "의지력", "돌파력", "통제"],
    reversedKeywords: ["통제 불능", "방향 상실", "무모한 돌진", "실패"],
    summary: "강한 의지로 장애물을 극복하고 목표를 향해 나아가는 승리자의 카드입니다."
  },
  {
    id: 8,
    nameKo: "힘",
    nameEn: "Strength",
    slug: "strength",
    type: "major",
    number: 8,
    uprightKeywords: ["용기", "인내", "부드러운 통제", "자비"],
    reversedKeywords: ["나약함", "자기 의심", "날것의 분노", "폭력성"],
    summary: "물리적 힘이 아닌, 부드러운 내면의 용기와 인내로 야성을 다스리는 카드입니다."
  },
  {
    id: 9,
    nameKo: "은둔자",
    nameEn: "The Hermit",
    slug: "the-hermit",
    type: "major",
    number: 9,
    uprightKeywords: ["성찰", "고독", "진리 추구", "내면의 가이드"],
    reversedKeywords: ["외로움", "사회적 고립", "망상", "거부"],
    summary: "외부 활동을 멈추고 내면의 진리를 탐구하는 성찰과 고독의 사색가 카드입니다."
  },
  {
    id: 10,
    nameKo: "운명의 수레바퀴",
    nameEn: "Wheel of Fortune",
    slug: "wheel-of-fortune",
    type: "major",
    number: 10,
    uprightKeywords: ["행운", "변화", "운명", "터닝 포인트"],
    reversedKeywords: ["불운", "변화의 거부", "나쁜 반복", "통제 불능"],
    summary: "인생의 큰 흐름 속에서 피할 수 없는 변화와 행운의 타이밍을 상징합니다."
  },
  {
    id: 11,
    nameKo: "정의",
    nameEn: "Justice",
    slug: "justice",
    type: "major",
    number: 11,
    uprightKeywords: ["정의", "공평", "진실", "인과응보"],
    reversedKeywords: ["불공평", "편견", "정직하지 못함", "책임 회피"],
    summary: "논리적이고 객관적인 판단을 통해 선악을 판별하고 균형을 이루는 법관 카드입니다."
  },
  {
    id: 12,
    nameKo: "매달린 사람",
    nameEn: "The Hanged Man",
    slug: "the-hanged-man",
    type: "major",
    number: 12,
    uprightKeywords: ["희생", "새로운 관점", "정지", "인내"],
    reversedKeywords: ["시간 낭비", "희생 거부", "자기만족", "정체"],
    summary: "발상의 전환과 자발적인 정체를 통해 깊은 깨달음을 얻는 인고의 카드입니다."
  },
  {
    id: 13,
    nameKo: "죽음",
    nameEn: "Death",
    slug: "death",
    type: "major",
    number: 13,
    uprightKeywords: ["종결", "새로운 시작", "변형", "급격한 변화"],
    reversedKeywords: ["정체", "변화 두려움", "지연", "불필요한 고통"],
    summary: "낡은 상태가 끝나고 새로운 시작을 위한 문이 열림을 나타내는 변화 카드입니다."
  },
  {
    id: 14,
    nameKo: "절제",
    nameEn: "Temperance",
    slug: "temperance",
    type: "major",
    number: 14,
    uprightKeywords: ["조화", "균형", "절제", "융합"],
    reversedKeywords: ["불균형", "무절제", "과도함", "대립"],
    summary: "서로 다른 요소들을 섞어 이상적인 조화를 이끌어내는 치유와 균형의 카드입니다."
  },
  {
    id: 15,
    nameKo: "악마",
    nameEn: "The Devil",
    slug: "the-devil",
    type: "major",
    number: 15,
    uprightKeywords: ["중독", "유혹", "속박", "물질주의"],
    reversedKeywords: ["속박에서 벗어남", "자각", "영적 극복", "자유"],
    summary: "눈앞의 쾌락 and 유혹, 스스로를 죈 사슬에 얽매인 억압과 물질적 중독의 카드입니다."
  },
  {
    id: 16,
    nameKo: "탑",
    nameEn: "The Tower",
    slug: "the-tower",
    type: "major",
    number: 16,
    uprightKeywords: ["갑작스러운 붕괴", "충격", "해방", "진실 폭로"],
    reversedKeywords: ["위기 모면", "재난 후유증", "서서히 무너짐", "변화 거부"],
    summary: "인위적으로 쌓은 거짓된 구조가 벼락을 맞아 와르르 무너지는 급격한 각성의 카드입니다."
  },
  {
    id: 17,
    nameKo: "별",
    nameEn: "The Star",
    slug: "the-star",
    type: "major",
    number: 17,
    uprightKeywords: ["희망", "영감", "믿음", "치유"],
    reversedKeywords: ["실망", "절망", "영감 부족", "자신감 상실"],
    summary: "어두운 밤하늘 속에서도 빛나는 등대처럼, 치유와 미래의 희망을 약속하는 낙천주의 카드입니다."
  },
  {
    id: 18,
    nameKo: "달",
    nameEn: "The Moon",
    slug: "the-moon",
    type: "major",
    number: 18,
    uprightKeywords: ["불안", "공포", "환상", "오해"],
    reversedKeywords: ["안개 걷힘", "불안 극복", "진실 폭로", "속임수 탄로"],
    summary: "변덕스럽고 불안한 심리와 무의식 속의 공포, 환상을 의미하는 미지의 카드입니다."
  },
  {
    id: 19,
    nameKo: "태양",
    nameEn: "The Sun",
    slug: "the-sun",
    type: "major",
    number: 19,
    uprightKeywords: ["성공", "기쁨", "활력", "긍정성"],
    reversedKeywords: ["일시적 먹구름", "과시", "비현실적 낙관", "우울"],
    summary: "밝은 광채 아래 모든 생명이 생기를 찾고 성공과 기쁨을 누리는 축복의 카드입니다."
  },
  {
    id: 20,
    nameKo: "심판",
    nameEn: "Judgement",
    slug: "judgement",
    type: "major",
    number: 20,
    uprightKeywords: ["부활", "결정", "부름", "면죄"],
    reversedKeywords: ["자기 의심", "기회 놓침", "지연", "나쁜 결정"],
    summary: "과거 행적에 따른 최종 판결과 부활, 정신적 각성을 알리는 구원의 카드입니다."
  },
  {
    id: 21,
    nameKo: "세계",
    nameEn: "The World",
    slug: "the-world",
    type: "major",
    number: 21,
    uprightKeywords: ["완성", "통합", "여행", "성취"],
    reversedKeywords: ["미완성", "지연", "불완전한 성취", "정체"],
    summary: "하나의 거대한 주기가 완성되어 조화와 우주적 평화를 누리는 완벽한 종결의 카드입니다."
  },

  // Minor Arcana
  // Wands (1-14: Ace to King)
  ...Array.from({ length: 14 }, (_, i) => {
    const num = i + 1;
    const numNames = ["에이스", "2번", "3번", "4번", "5번", "6번", "7번", "8번", "9번", "10번", "소년", "기사", "여왕", "왕"];
    const enNames = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];
    const slugMap = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"];
    return {
      id: 22 + i,
      nameKo: `완드 ${numNames[i]}`,
      nameEn: `${enNames[i]} of Wands`,
      slug: `${slugMap[i]}-of-wands`,
      type: "minor" as const,
      suit: "wands" as const,
      number: num,
      uprightKeywords: ["열정", "모험", "창의성", "행동력"],
      reversedKeywords: ["지연", "무기력", "중단", "오판"],
      summary: `완드의 열정과 에너지를 나타내는 카드로서, 목표를 향한 의지와 추진력과 관련이 깊습니다.`
    };
  }),

  // Cups (1-14: Ace to King)
  ...Array.from({ length: 14 }, (_, i) => {
    const num = i + 1;
    const numNames = ["에이스", "2번", "3번", "4번", "5번", "6번", "7번", "8번", "9번", "10번", "소년", "기사", "여왕", "왕"];
    const enNames = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];
    const slugMap = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"];
    return {
      id: 36 + i,
      nameKo: `컵 ${numNames[i]}`,
      nameEn: `${enNames[i]} of Cups`,
      slug: `${slugMap[i]}-of-cups`,
      type: "minor" as const,
      suit: "cups" as const,
      number: num,
      uprightKeywords: ["감정", "관계", "사랑", "상상력"],
      reversedKeywords: ["감정 낭비", "관계 불화", "비현실", "우울"],
      summary: `컵의 수면처럼 잔잔한 감정과 타인과의 공감, 영혼적 교감을 보여주는 사랑의 카드입니다.`
    };
  }),

  // Swords (1-14: Ace to King)
  ...Array.from({ length: 14 }, (_, i) => {
    const num = i + 1;
    const numNames = ["에이스", "2번", "3번", "4번", "5번", "6번", "7번", "8번", "9번", "10번", "소년", "기사", "여왕", "왕"];
    const enNames = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];
    const slugMap = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"];
    return {
      id: 50 + i,
      nameKo: `소드 ${numNames[i]}`,
      nameEn: `${enNames[i]} of Swords`,
      slug: `${slugMap[i]}-of-swords`,
      type: "minor" as const,
      suit: "swords" as const,
      number: num,
      uprightKeywords: ["지성", "결단", "갈등", "명확성"],
      reversedKeywords: ["혼란", "냉혹함", "지적 과시", "의사소통 장애"],
      summary: `칼날처럼 날카롭고 이성적인 지각, 분별력, 때로는 갈등과 상처를 수반하는 마인드의 카드입니다.`
    };
  }),

  // Pentacles (1-14: Ace to King)
  ...Array.from({ length: 14 }, (_, i) => {
    const num = i + 1;
    const numNames = ["에이스", "2번", "3번", "4번", "5번", "6번", "7번", "8번", "9번", "10번", "소년", "기사", "여왕", "왕"];
    const enNames = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];
    const slugMap = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"];
    return {
      id: 64 + i,
      nameKo: `펜타클 ${numNames[i]}`,
      nameEn: `${enNames[i]} of Pentacles`,
      slug: `${slugMap[i]}-of-pentacles`,
      type: "minor" as const,
      suit: "pentacles" as const,
      number: num,
      uprightKeywords: ["물질", "재정", "안정", "노력"],
      reversedKeywords: ["재정 악화", "게으름", "탐욕", "불안정"],
      summary: `풍요로운 대지처럼 단단한 물질적 성공, 일, 저축 및 장기적인 안정을 다루는 현실의 카드입니다.`
    };
  })
];

export function getRandomTarotCard(): TarotCard & { isUpright: boolean } {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const isUpright = Math.random() > 0.3; // 70% chance of upright
  return { ...tarotCards[randomIndex], isUpright };
}
