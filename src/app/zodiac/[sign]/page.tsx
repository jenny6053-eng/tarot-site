import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Heart, TrendingUp, DollarSign } from "lucide-react";
import { tarotCards } from "@/lib/tarotData";
import AdSlot from "@/components/AdSlot";
import AffiliateLink from "@/components/AffiliateLink";

interface ZodiacData {
  id: string;
  name: string;
  period: string;
  symbol: string;
  element: "불" | "흙" | "바람" | "물";
  ruler: string;
  tarotCardSlug: string; // Target tarot match
  description: string;
  loveHoroscope: string;
  careerHoroscope: string;
  moneyHoroscope: string;
}

const zodiacs: Record<string, ZodiacData> = {
  aries: {
    id: "aries", name: "양자리", period: "3.21 - 4.19", symbol: "♈", element: "불", ruler: "화성", tarotCardSlug: "the-emperor",
    description: "용기 있고 열정적인 양자리는 리더의 자질을 타고났습니다. 스스로의 의지로 행동을 이끌어 냅니다.",
    loveHoroscope: "상대방에게 마음을 숨김없이 표현하는 열정적인 고백이 성공을 가져옵니다. 다만 지나친 고집은 다툼이 될 수 있으니 경청하는 태도가 중요합니다.",
    careerHoroscope: "강한 추진력과 개척자 정신이 결실을 맺을 시기입니다. 신규 프로젝트나 창업 등 스스로 주도권을 쥔 업무 환경에서 성과가 극대화됩니다.",
    moneyHoroscope: "수익 창출에 대한 아이디어가 활성화되나, 순간적인 투자 결정이나 충동적인 소비 성향이 커질 수 있어 자산 방어에 초점을 맞추어야 합니다."
  },
  taurus: {
    id: "taurus", name: "황소자리", period: "4.20 - 5.20", symbol: "♉", element: "흙", ruler: "금성", tarotCardSlug: "the-hierophant",
    description: "신중하고 믿음직스러우며, 안정을 소중히 여기는 평화주의적인 성격을 가집니다.",
    loveHoroscope: "자극적인 연애보다는 오랜 시간 알아온 관계에서 신뢰를 회복하는 안정된 연애 기운이 강합니다. 차분하고 다정한 조언을 아끼지 마세요.",
    careerHoroscope: "규칙적이고 구조화된 조직 속에서 뛰어난 실무 능력을 발휘합니다. 전통적인 방법론이나 교육적 커리어 분야에서 강점이 있습니다.",
    moneyHoroscope: "재무적 장기 관점 투자가 적합합니다. 저축이나 신중한 부동산 등 실물 자산 위주의 축적으로 점진적인 번영을 약속합니다."
  },
  gemini: {
    id: "gemini", name: "쌍둥이자리", period: "5.21 - 6.21", symbol: "♊", element: "바람", ruler: "수성", tarotCardSlug: "the-lovers",
    description: "호기심이 왕성하고 소통에 뛰어나며 다재다능한 지성인 기질이 돋보입니다.",
    loveHoroscope: "대화가 유쾌하게 잘 통하는 이상적인 대화 상대를 만날 가능성이 큽니다. 연인과의 적극적인 피드백이 연애 전반에 조화를 부릅니다.",
    careerHoroscope: "기획, 마케팅, 다방면 정보 큐레이팅 직군에서 높은 창의성을 보입니다. 단, 여러 업무를 한 번에 하려다 피로해질 수 있으니 선택과 집중이 요망됩니다.",
    moneyHoroscope: "정보 검색을 통한 트렌디한 재테크나 금융 상품 딜을 잡기에 탁월합니다. 단기적인 현금 전환 흐름은 긍정적입니다."
  },
  cancer: {
    id: "cancer", name: "게자리", period: "6.22 - 7.22", symbol: "♋", element: "물", ruler: "달", tarotCardSlug: "the-empress",
    description: "가족적이고 감수성이 예민하며 타인을 따뜻하게 보살펴주는 모성적 힐러입니다.",
    loveHoroscope: "가정적인 분위기에서 감정이 깊어지며 서로에게 안식처가 되는 파트너십을 이룹니다. 풍요롭고 포용력 있는 자세가 조화를 부릅니다.",
    careerHoroscope: "인적 서포트가 많은 환경이나 복지, 케어 관련 분야에서 최상의 시너지를 얻습니다. 감정적인 소모를 방지할 바운더리 설정이 필요합니다.",
    moneyHoroscope: "생활 자금의 안정적인 증가와 유산, 혹은 예상외의 집안 내 서포트 등 풍족함을 뜻하는 금전운이 강력하게 뒷받침됩니다."
  },
  leo: {
    id: "leo", name: "사자자리", period: "7.23 - 8.22", symbol: "♌", element: "불", ruler: "태양", tarotCardSlug: "strength",
    description: "창의적이고 당당하며, 관대하고 주변의 이목을 끄는 태양 같은 활력가입니다.",
    loveHoroscope: "진실되고 듬직한 용기가 매력을 끌어당깁니다. 자존심을 굽히고 부드러운 화법으로 상대를 대할 때 진정한 애정이 피어납니다.",
    careerHoroscope: "무대 위 주인공처럼 주목받는 프레젠테이션이나 예체능 분야, 창의적 프로젝트 수장직에 어울립니다. 내면의 인내력으로 승부하세요.",
    moneyHoroscope: "투자 흐름은 긍정적이지만, 품위 유지를 위한 대인 지출이나 고가 제품 지출이 잦아질 수 있으니 절제가 필요합니다."
  },
  virgo: {
    id: "virgo", name: "처녀자리", period: "8.23 - 9.23", symbol: "♍", element: "흙", ruler: "수성", tarotCardSlug: "the-hermit",
    description: "분석력이 날카롭고 꼼꼼하며, 진리를 깊이 탐구하는 성찰주의자입니다.",
    loveHoroscope: "혼자만의 시간을 조율하며 감정을 신중히 필터링하는 시기입니다. 연인에게 비판적인 어조를 취하기보다는 너른 배려가 요구됩니다.",
    careerHoroscope: "연구 개발, 세무 회계, 기획 분석 등의 꼼꼼한 직군에서 역량이 빛납니다. 자기성찰이 과해 스스로에게 엄격해지는 슬럼프를 경계해야 합니다.",
    moneyHoroscope: "알뜰한 재정 검토와 숨겨진 불필요 지출의 절감 효과가 큰 시점입니다. 보수적이고 안전한 예금 중심의 자산 전략이 확실합니다."
  },
  libra: {
    id: "libra", name: "천칭자리", period: "9.24 - 10.22", symbol: "♎", element: "바람", ruler: "금성", tarotCardSlug: "justice",
    description: "대인 관계의 밸런스와 미적 감각, 그리고 객관적인 공평함을 유지하는 판관 성격입니다.",
    loveHoroscope: "계산적이거나 감정의 저울질을 멈추고 직관적이고 공평하게 상대방을 배려할 때 관계의 신뢰가 생깁니다. 솔직담백한 감정 공유가 열쇠입니다.",
    careerHoroscope: "협상, 중재, 계약 성사 업무에서 진가를 발휘합니다. 이해관계가 첨예한 논쟁 상황에서도 객관적인 중심을 유지하여 존경을 받습니다.",
    moneyHoroscope: "수입과 지출의 균형이 정확하게 매칭되어 무리 없는 흐름입니다. 계약 문서나 법적 자산 검토를 명확히 하는 과정이 필수적입니다."
  },
  scorpio: {
    id: "scorpio", name: "전갈자리", period: "10.23 - 11.22", symbol: "♏", element: "물", ruler: "명왕성", tarotCardSlug: "death",
    description: "통찰력이 예리하고 카리스마가 있으며 비밀스러우면서 열정적인 신비주의자입니다.",
    loveHoroscope: "낡고 불필요한 감정 소모적인 관계를 종식하고 새로운 출발을 선언할 수 있는 전환기입니다. 과거의 미련을 놓을수록 상쾌한 애정이 찾아옵니다.",
    careerHoroscope: "낡은 업무 시스템의 과감한 리모델링이나 사내 대변혁, 이직 등의 시도에 탁월한 카드를 뽑았습니다. 위기를 기회로 바꾸는 시기입니다.",
    moneyHoroscope: "부채를 해결하거나 불필요한 고정 지출을 차단하는 자산 대수술이 필요한 운세입니다. 뼈대를 새로 세워 안정적 리빌딩을 진행해야 합니다."
  },
  sagittarius: {
    id: "sagittarius", name: "사수자리", period: "11.23 - 12.21", symbol: "♐", element: "불", ruler: "목성", tarotCardSlug: "temperance",
    description: "낙천적이고 자유로우며 철학적 탐구와 광활한 모험을 추구하는 방랑자입니다.",
    loveHoroscope: "서로 다른 성장 배경이나 가치관의 차이를 융합하는 조화가 빛을 발합니다. 대화와 여행을 통해 이국적이고 신선한 연애를 경험할 수 있습니다.",
    careerHoroscope: "글로벌 비즈니스, 수입 수출, 학술 교육 분야에서 강합니다. 여러 일의 템포를 적절히 제어(절제)하며 조화롭게 진행하는 것이 좋습니다.",
    moneyHoroscope: "해외 투자나 장기적인 자산 믹스 전략에서 소소한 차익을 노릴 수 있으며 자금 회전력이 유연하게 돌아가는 국면입니다."
  },
  capricorn: {
    id: "capricorn", name: "염소자리", period: "12.22 - 1.19", symbol: "♑", element: "흙", ruler: "토성", tarotCardSlug: "the-devil",
    description: "책임감이 강하고 목표 지향적이며 성실함과 끈기로 세상을 헤쳐 나가는 개척자입니다.",
    loveHoroscope: "서로를 구속하려는 강한 소유욕이나 집착을 경계해야 하는 운세입니다. 편안한 신뢰와 심리적 자유를 줄 때 관계가 도리어 끈끈해집니다.",
    careerHoroscope: "업무에 과도하게 몰입(워커홀릭)하여 야근과 과로가 따르기 쉽습니다. 건강과 에너지 균형을 조율해야 지속 가능한 전진을 그릴 수 있습니다.",
    moneyHoroscope: "눈앞의 일확천금을 노리는 고위험 투자의 유혹에 쉽게 빠질 수 있습니다. 현실적인 리스크 계산과 철저한 안전지대 전략이 요구됩니다."
  },
  aquarius: {
    id: "aquarius", name: "물병자리", period: "1.20 - 2.18", symbol: "♒", element: "바람", ruler: "천왕성", tarotCardSlug: "the-star",
    description: "독창적이고 독립적이며 인도주의적이고 늘 혁신적인 미래를 바라보는 몽상가입니다.",
    loveHoroscope: "미래를 함께 그리며 서로의 가치관을 존중하는 긍정적인 희망의 시기입니다. 긍정적인 말 한마디가 연인의 가슴에 큰 위안을 심어줍니다.",
    careerHoroscope: "아이디어가 돋보이는 개발자, 크리에이터 직군에 최적입니다. 혁신적인 기획안이 심사를 통과하여 많은 이들의 영감을 일깨웁니다.",
    moneyHoroscope: "재정적 곤궁에서 서서히 탈출하여 장래의 치유와 희망을 그릴 수 있는 긍정 기류가 생성됩니다. 미래 투자 전망이 맑습니다."
  },
  pisces: {
    id: "pisces", name: "물고기자리", period: "2.19 - 3.20", symbol: "♓", element: "물", ruler: "해왕성", tarotCardSlug: "the-moon",
    description: "상상력이 풍부하고 감성적이며 영감이 뛰어나 무의식 세계에 민감하게 반응합니다.",
    loveHoroscope: "혼란스럽거나 오해가 쌓이기 쉬우니 불분명한 태도를 피하고 명확하게 서로의 신뢰를 다져야 합니다. 숨김없는 솔직함이 불안을 해소합니다.",
    careerHoroscope: "예술, 창작, 심리 상담, 카운셀러 분야에서 강한 통찰과 영감을 받습니다. 현실적인 일정 관리와 데드라인을 잡아야 프로젝트 지연을 막습니다.",
    moneyHoroscope: "지출 관리의 안개가 낀 것처럼 낭비 요인이 보이지 않는 시점입니다. 가계부를 꼼꼼하게 정리하여 고정적 누수를 확인해야 할 국면입니다."
  }
};

export async function generateStaticParams() {
  return Object.keys(zodiacs).map((sign) => ({
    sign,
  }));
}

export async function generateMetadata({ params }: { params: { sign: string } }): Promise<Metadata> {
  const data = zodiacs[params.sign];
  if (!data) return { title: "별자리를 찾을 수 없습니다" };

  const title = `2026년 ${data.name} 운세 & 매칭 타로 카드 분석`;
  const description = `${data.name}(${data.period})를 위한 2026년 상세 운세 가이드. 수호 타로 카드인 [${data.tarotCardSlug}]와의 신비로운 조율 결과를 분석해 드립니다.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://astrotarot.vercel.app/zodiac/${params.sign}`,
    }
  };
}

export default function ZodiacPage({ params }: { params: { sign: string } }) {
  const data = zodiacs[params.sign];
  if (!data) notFound();

  // Find matching card object from tarotData.ts
  const cardMeta = tarotCards.find((c) => c.slug === data.tarotCardSlug);

  return (
    <div className="w-full bg-slate-950 pb-20 pt-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>메인으로 돌아가기</span>
          </Link>
        </div>

        {/* Top Ad */}
        <AdSlot id="zodiac-top-ad" type="banner" />

        {/* Zodiac Hero Header */}
        <div className="text-center py-8 border-b border-purple-950 mb-10 relative overflow-hidden rounded-2xl bg-purple-950/10 p-6 border border-purple-500/10">
          <span className="text-6xl text-purple-400 block mb-2 animate-pulse">{data.symbol}</span>
          <h1 className="text-3xl font-extrabold text-amber-300">
            {data.name} ({data.period}) 운세 분석
          </h1>
          <div className="flex justify-center gap-4 text-xs text-slate-400 mt-3 font-semibold">
            <span>수호원소: {data.element}</span>
            <span>•</span>
            <span>지배행성: {data.ruler}</span>
          </div>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Column: Matching Tarot Card Art */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">수호 타로 매칭</h3>
            
            {cardMeta ? (
              <Link href={`/cards/${cardMeta.slug}`} className="group flex flex-col items-center">
                <div className="w-[180px] aspect-[2/3] rounded-xl border-2 border-amber-400 bg-slate-950 p-4 shadow-xl flex flex-col items-center justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-1 rounded-lg border border-amber-500/10 pointer-events-none" />
                  <span className="text-[8px] font-mono text-slate-500">ZODIAC KEY</span>
                  <span className="text-5xl my-4 text-amber-400 group-hover:animate-pulse">🔮</span>
                  <div className="text-center">
                    <span className="text-xs font-extrabold text-amber-300 block">{cardMeta.nameKo}</span>
                    <span className="text-[8px] text-slate-500 font-mono block">{cardMeta.nameEn}</span>
                  </div>
                </div>
                <span className="mt-3 text-xs text-purple-400 font-bold group-hover:text-amber-300 flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  <span>카드 해설 자세히 보기 &rarr;</span>
                </span>
              </Link>
            ) : (
              <span className="text-slate-600 text-xs">매칭 카드가 없습니다.</span>
            )}

            {/* Sub-content Ad box */}
            <div className="w-full mt-8">
              <AdSlot id="zodiac-side-ad" type="rectangle" />
            </div>
          </div>

          {/* Right Column: Dynamic Horoscope Details */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Love Section */}
            <div className="rounded-xl border border-purple-900/30 bg-slate-900/40 p-6">
              <h3 className="text-base font-bold text-amber-300 flex items-center gap-2 mb-3">
                <Heart className="h-5 w-5 text-fuchsia-500" />
                <span>연애 & 관계 운세</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {data.loveHoroscope}
              </p>
            </div>

            {/* Career Section */}
            <div className="rounded-xl border border-purple-900/30 bg-slate-900/40 p-6">
              <h3 className="text-base font-bold text-amber-300 flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-amber-500" />
                <span>업무, 학업 & 커리어</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {data.careerHoroscope}
              </p>
            </div>

            {/* Financial Section */}
            <div className="rounded-xl border border-purple-900/30 bg-slate-900/40 p-6">
              <h3 className="text-base font-bold text-amber-300 flex items-center gap-2 mb-3">
                <DollarSign className="h-5 w-5 text-emerald-500" />
                <span>재물 & 금전적 팁</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {data.moneyHoroscope}
              </p>
            </div>

            {/* Affiliate Link Placement */}
            <AffiliateLink
              url="https://link.coupang.com/example-affiliate-link"
              title="운명을 바꾸는 별자리 수호석 탄생석 팔찌"
              description="당신의 지배 행성과 주파수가 일치하는 원석으로 제작된 우주의 기운을 활성화하는 기운 정화 팔찌입니다."
              price="24,900원"
              ctaText="팔찌 구경하기"
            />

          </div>
        </div>

        {/* Bottom Ad */}
        <AdSlot id="zodiac-bottom-ad" type="banner" />

      </div>
    </div>
  );
}
