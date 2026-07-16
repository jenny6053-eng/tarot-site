import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Book, Calendar, Compass, Star } from "lucide-react";
import CardDrawing from "@/components/CardDrawing";
import AdSlot from "@/components/AdSlot";
import { getAllPosts } from "@/lib/mdx";
import { tarotCards } from "@/lib/tarotData";

export const revalidate = 3600; // Cache page for 1 hour (ISR)

export default function Home() {
  // Fetch latest blog posts
  const blogPosts = getAllPosts("blog").slice(0, 3);
  
  // Pick some major cards to showcase on home page
  const featuredCards = tarotCards.filter((card) => card.type === "major" && card.number <= 5);

  const starSigns = [
    { id: "aries", name: "양자리", period: "3.21 - 4.19", symbol: "♈" },
    { id: "taurus", name: "황소자리", period: "4.20 - 5.20", symbol: "♉" },
    { id: "gemini", name: "쌍둥이자리", period: "5.21 - 6.21", symbol: "♊" },
    { id: "cancer", name: "게자리", period: "6.22 - 7.22", symbol: "♋" },
    { id: "leo", name: "사자자리", period: "7.23 - 8.22", symbol: "♌" },
    { id: "virgo", name: "처녀자리", period: "8.23 - 9.23", symbol: "♍" },
    { id: "libra", name: "천칭자리", period: "9.24 - 10.22", symbol: "♎" },
    { id: "scorpio", name: "전갈자리", period: "10.23 - 11.22", symbol: "♏" },
    { id: "sagittarius", name: "사수자리", period: "11.23 - 12.21", symbol: "♐" },
    { id: "capricorn", name: "염소자리", period: "12.22 - 1.19", symbol: "♑" },
    { id: "aquarius", name: "물병자리", period: "1.20 - 2.18", symbol: "♒" },
    { id: "pisces", name: "물고기자리", period: "2.19 - 3.20", symbol: "♓" },
  ];

  return (
    <div className="w-full bg-slate-950 pb-20 relative">
      {/* Decorative starry background effects */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[500px] right-10 w-96 h-96 rounded-full bg-amber-900/5 blur-[120px] pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 px-3.5 py-1 text-xs text-purple-300 font-medium mb-6">
          <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-spin" />
          <span>우주가 당신에게 보내는 오늘의 시그널</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="block text-slate-100">운명의 비밀을 읽는 시간</span>
          <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
            무료 오늘의 타로 카드
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
          복잡한 생각은 내려두고, 당신의 무의식이 선택하는 카드 한 장에 집중하세요. 
          오늘의 운세, 사랑, 그리고 커리어의 흐름을 짚어드립니다.
        </p>

        {/* 2. Interactive Game Area */}
        <div id="today-tarot" className="scroll-mt-24">
          <CardDrawing />
        </div>
      </section>

      {/* Inline Middle Advertisement */}
      <div className="max-w-4xl mx-auto px-4">
        <AdSlot id="home-middle-ad" type="banner" />
      </div>

      {/* 3. Star Signs Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 border-b border-purple-950/60 pb-3">
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-amber-400" />
            <h2 className="text-xl font-bold tracking-tight text-slate-100">12별자리 타로 매칭 운세</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {starSigns.map((sign) => (
            <Link
              key={sign.id}
              href={`/zodiac/${sign.id}`}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-purple-900/30 bg-purple-950/5 hover:bg-purple-950/20 hover:border-amber-500/30 transition-all hover:-translate-y-1 text-center"
            >
              <span className="text-3xl mb-2 text-purple-400 group-hover:text-amber-400 transition-colors">
                {sign.symbol}
              </span>
              <span className="text-xs font-bold text-slate-200">{sign.name}</span>
              <span className="text-[9px] text-slate-500 mt-1 font-mono">{sign.period}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Cards (Tarot Dictionary Directory) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 border-b border-purple-950/60 pb-3">
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5 text-amber-400" />
            <h2 className="text-xl font-bold tracking-tight text-slate-100">대표 타로 카드 해설 백과</h2>
          </div>
          <Link
            href="/cards/the-fool"
            className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-amber-300 transition-colors"
          >
            <span>전체 78장 도감 보기</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {featuredCards.map((card) => (
            <Link
              key={card.id}
              href={`/cards/${card.slug}`}
              className="group flex flex-col p-4 rounded-xl border border-purple-900/30 bg-slate-900/40 hover:border-amber-500/20 transition-all"
            >
              <div className="aspect-[2/3] w-full rounded-lg bg-slate-950 border border-purple-500/10 flex items-center justify-center mb-3 relative overflow-hidden group-hover:border-amber-400/30 transition-colors">
                <span className="text-2xl text-purple-500/40 group-hover:text-amber-400/60 transition-colors">🔮</span>
                <span className="absolute top-1 left-2 text-[9px] font-mono text-slate-600 font-bold">No.{card.number}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-200 group-hover:text-amber-300 transition-colors">
                {card.nameKo}
              </h3>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">{card.nameEn}</span>
              <p className="text-[10px] text-slate-400 leading-tight mt-2 line-clamp-2">
                {card.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Latest Blog Posts */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 border-b border-purple-950/60 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-amber-400" />
            <h2 className="text-xl font-bold tracking-tight text-slate-100">최신 운세 & 가이드 칼럼</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-amber-300 transition-colors"
          >
            <span>전체 칼럼 보기</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-xl border border-purple-900/30 bg-slate-900/20 overflow-hidden hover:border-amber-500/20 transition-all hover:bg-slate-900/40"
            >
              {/* Cover Placeholder */}
              <div className="aspect-video w-full bg-gradient-to-r from-purple-950 to-slate-900 flex items-center justify-center relative border-b border-purple-900/20">
                <Star className="h-8 w-8 text-amber-500/20 animate-pulse" />
                <span className="absolute bottom-2 left-3 rounded bg-purple-950/80 px-2 py-0.5 text-[9px] font-bold text-amber-400 uppercase border border-amber-500/20">
                  {post.frontmatter.category}
                </span>
              </div>
              
              <div className="p-5 grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-semibold font-mono">
                    {post.frontmatter.date}
                  </span>
                  <h3 className="text-base font-bold text-slate-100 leading-snug hover:text-amber-300 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {post.frontmatter.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-purple-950/40 flex items-center justify-between">
                  <div className="flex gap-1">
                    {post.frontmatter.tags?.slice(0, 2).map((tag: string) => (
                      <span key={tag} className="text-[9px] text-slate-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-0.5 text-xs text-amber-400 font-bold hover:underline"
                  >
                    <span>읽기</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
