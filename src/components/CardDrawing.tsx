"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, RefreshCw, Eye, BookOpen } from "lucide-react";
import { tarotCards, TarotCard } from "@/lib/tarotData";
import AdSlot from "./AdSlot";
import AffiliateLink from "./AffiliateLink";

interface DrawnCardResult extends TarotCard {
  isUpright: boolean;
}

export default function CardDrawing() {
  const [isShuffling, setIsShuffling] = useState(false);
  const [drawnCard, setDrawnCard] = useState<DrawnCardResult | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const drawCard = () => {
    if (isShuffling) return;

    setIsShuffling(true);
    setIsFlipped(false);
    setDrawnCard(null);

    // Simulate shuffling vibration/timing
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const isUpright = Math.random() > 0.3; // 70% upright probability
      const card = tarotCards[randomIndex];
      
      setDrawnCard({ ...card, isUpright });
      setIsShuffling(false);
      
      // Trigger card flipping animation
      setTimeout(() => {
        setIsFlipped(true);
      }, 100);
    }, 1200);
  };

  const resetDeck = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setDrawnCard(null);
    }, 300);
  };

  return (
    <div className="w-full py-8 text-slate-100 flex flex-col items-center">
      {/* Board Box */}
      <div className="w-full max-w-2xl rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
        {/* Star backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <h3 className="text-xl font-bold tracking-wide text-amber-300 flex items-center gap-1.5 mb-2">
            <Sparkles className="h-5 w-5 text-amber-400" />
            신비로운 타로 셔플
          </h3>
          <p className="text-xs text-slate-400 text-center max-w-sm mb-8 leading-relaxed">
            오늘 당신을 비추는 밤하늘의 메시지는 무엇일까요? 마음을 차분히 가라앉히고 아래 버튼을 눌러 카드를 뽑으세요.
          </p>

          {/* Interactive Card Section */}
          <div className="h-[380px] w-[240px] relative perspective-1000 mb-8">
            {/* Card Deck Wrapper */}
            <div
              className={`w-full h-full duration-700 transform-style-3d relative ${
                isFlipped ? "rotate-y-180" : ""
              } ${isShuffling ? "animate-wiggle" : ""}`}
            >
              {/* Card Back (Flipped = False) */}
              <div className="absolute inset-0 w-full h-full rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-3 backface-hidden shadow-2xl flex flex-col items-center justify-between overflow-hidden">
                {/* Decorative border */}
                <div className="absolute inset-2 rounded-xl border border-purple-500/10 pointer-events-none" />
                <div className="w-full text-right text-[10px] text-amber-500/30">✦</div>
                
                {/* Mystic Symbolism center */}
                <div className="flex flex-col items-center justify-center grow">
                  <div className="h-20 w-20 rounded-full border border-amber-500/20 flex items-center justify-center relative animate-pulse">
                    <div className="absolute inset-2 rounded-full border border-purple-500/20 border-dashed" />
                    <span className="text-4xl text-amber-400/40">★</span>
                  </div>
                  <span className="text-[10px] tracking-widest text-purple-400/40 uppercase mt-4">
                    Astro Tarot
                  </span>
                </div>
                
                <div className="w-full text-left text-[10px] text-amber-500/30">✦</div>
              </div>

              {/* Card Front (Flipped = True) */}
              {drawnCard && (
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl border-2 border-amber-400 bg-slate-950 p-4 backface-hidden rotate-y-180 shadow-2xl flex flex-col items-center justify-between overflow-hidden ${
                    !drawnCard.isUpright ? "rotate-180" : ""
                  }`}
                >
                  <div className="absolute inset-2 rounded-xl border border-amber-500/10 pointer-events-none" />
                  
                  {/* Card Number & Suit Header */}
                  <div className="w-full flex justify-between items-center text-xs text-amber-300 font-bold font-mono">
                    <span>{drawnCard.type === "major" ? `Major - ${drawnCard.number}` : "Minor"}</span>
                    <span>✦</span>
                  </div>

                  {/* Card Main Art Placeholder (CSS Cosmic style) */}
                  <div className="w-full h-44 rounded-lg bg-gradient-to-b from-purple-950/60 to-slate-900 border border-purple-500/20 flex flex-col items-center justify-center relative my-2 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-amber-400/10 bg-radial-gradient" />
                    <span className="text-5xl text-amber-400 animate-pulse z-10 drop-shadow-glow">
                      {drawnCard.id % 4 === 0 ? "🌙" : drawnCard.id % 4 === 1 ? "☀️" : drawnCard.id % 4 === 2 ? "🔮" : "🗝️"}
                    </span>
                    <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase mt-3 z-10">
                      {drawnCard.slug}
                    </span>
                  </div>

                  {/* Card Name */}
                  <div className="text-center z-10">
                    <h4 className="text-lg font-bold text-amber-300">
                      {drawnCard.nameKo}
                    </h4>
                    <span className="text-[10px] text-slate-400 block font-mono">
                      {drawnCard.nameEn}
                    </span>
                  </div>

                  {/* Direction footer */}
                  <div className="w-full text-center text-xs font-semibold text-purple-400 mt-2">
                    {drawnCard.isUpright ? "▲ 정방향 (Upright)" : "▼ 역방향 (Reversed)"}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex gap-4">
            {!drawnCard ? (
              <button
                onClick={drawCard}
                disabled={isShuffling}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-amber-500 hover:opacity-90 px-8 py-3.5 text-sm font-bold text-white transition-all shadow-lg shadow-purple-500/20 disabled:opacity-50 active:scale-95"
              >
                {isShuffling ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>카드 섞는 중...</span>
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    <span>오늘의 카드 뽑기</span>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={resetDeck}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 px-8 py-3.5 text-sm font-bold text-slate-200 transition-all border border-slate-700 active:scale-95"
              >
                <RefreshCw className="h-4 w-4" />
                <span>다시 뽑기</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reading Report Result (Shown after Flip) */}
      {drawnCard && isFlipped && (
        <div className="w-full max-w-2xl mt-8 space-y-6 animate-fade-in">
          {/* Card Meaning Box */}
          <div className="rounded-2xl border border-amber-500/20 bg-slate-900/40 p-6 md:p-8 backdrop-blur-md">
            <div className="flex items-center gap-2 text-amber-300 font-bold mb-3 border-b border-purple-950 pb-2">
              <Sparkles className="h-4 w-4" />
              <span>오늘의 카드 분석 결과</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-slate-500 font-semibold block uppercase tracking-wider">카드 개요</span>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  {drawnCard.summary}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-semibold block uppercase tracking-wider">주요 키워드</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {(drawnCard.isUpright ? drawnCard.uprightKeywords : drawnCard.reversedKeywords).map((keyword, idx) => (
                    <span key={idx} className="rounded bg-purple-950/60 border border-purple-500/20 px-2 py-0.5 text-xs text-purple-300 font-medium">
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-semibold block uppercase tracking-wider">오늘의 조언</span>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  당신이 뽑은 카드는 {drawnCard.isUpright ? "정방향" : "역방향"}으로 해석됩니다. 
                  {drawnCard.isUpright 
                    ? ` 현재 이 카드가 가진 긍정적인 측면인 ${drawnCard.uprightKeywords.join(', ')}의 기운이 강하게 작용하고 있습니다. 마음을 열고 이 긍정적인 파동을 받아들이세요.` 
                    : ` 현재 상황에서 경계해야 할 측면인 ${drawnCard.reversedKeywords.join(', ')} 등의 에너지가 감지됩니다. 조급함이나 무리수를 피하고 내면을 돌아보며 정돈할 필요가 있습니다.`}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-950/40 flex justify-end">
                <Link
                  href={`/cards/${drawnCard.slug}`}
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-bold"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>&apos;{drawnCard.nameKo}&apos; 카드 상세 백과사전 보기</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Ad Slot Integration */}
          <AdSlot id="today-tarot-ad" type="banner" />

          {/* Affiliate Recommendation Placement */}
          <AffiliateLink 
            url="https://link.coupang.com/example-affiliate-link"
            title="마르세유 오리지널 타로 카드 + 해설서 세트"
            description="직접 나만의 운세를 뽑고 수련할 수 있는 전 세계 타로 마스터들의 정통 타로 세트입니다. 한정 판매 특가 진행 중!"
            price="18,900원"
            ctaText="제품 구경하기"
          />
        </div>
      )}
    </div>
  );
}
