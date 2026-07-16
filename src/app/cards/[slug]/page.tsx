import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { tarotCards } from "@/lib/tarotData";
import AdSlot from "@/components/AdSlot";
import AffiliateLink from "@/components/AffiliateLink";

interface Props {
  params: {
    slug: string;
  };
}

// Statically generate all 78 paths at build time
export async function generateStaticParams() {
  const cards = getAllPosts("cards");
  return cards.map((card) => ({
    slug: card.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug("cards", slug);

  if (!post) {
    return {
      title: "카드를 찾을 수 없습니다",
    };
  }

  const title = post.frontmatter.title;
  const description = post.frontmatter.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://astrotarot.vercel.app/cards/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CardDetailPage({ params }: Props) {
  const { slug } = params;
  const post = getPostBySlug("cards", slug);

  if (!post) {
    notFound();
  }

  // Find the basic metadata structured in tarotData.ts
  const cardMeta = tarotCards.find((c) => c.slug === slug);

  // Recommendations: Pick 3 cards from the same suite or same type
  const recommendations = tarotCards
    .filter((c) => c.slug !== slug && (c.type === cardMeta?.type || c.suit === cardMeta?.suit))
    .slice(0, 3);

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

        {/* Ad Placement Top */}
        <AdSlot id="card-top-ad" type="banner" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
          {/* Sticky Card Art Panel (Left Side on Desktop) */}
          <div className="md:sticky md:top-24 flex flex-col items-center">
            <div className="w-[200px] aspect-[2/3] rounded-2xl border-4 border-amber-400 bg-slate-950 p-4 shadow-xl shadow-purple-950/50 flex flex-col items-center justify-between relative overflow-hidden">
              <div className="absolute inset-1.5 rounded-xl border border-amber-500/10 pointer-events-none" />
              <div className="w-full text-left text-[10px] text-amber-300 font-bold font-mono">
                {cardMeta?.type === "major" ? `MAJOR - ${cardMeta.number}` : "MINOR"}
              </div>
              
              <div className="grow flex flex-col items-center justify-center my-4">
                <span className="text-6xl animate-pulse text-amber-400 drop-shadow-glow mb-4">
                  {cardMeta && cardMeta.id % 4 === 0 ? "🌙" : cardMeta && cardMeta.id % 4 === 1 ? "☀️" : cardMeta && cardMeta.id % 4 === 2 ? "🔮" : "🗝️"}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                  {cardMeta?.slug}
                </span>
              </div>
              
              <div className="text-center">
                <h2 className="text-lg font-bold text-amber-300">{cardMeta?.nameKo}</h2>
                <span className="text-[9px] text-slate-500 block font-mono">{cardMeta?.nameEn}</span>
              </div>
            </div>
            
            {/* Quick Keywords Box */}
            <div className="w-full max-w-[200px] mt-6 p-4 rounded-xl border border-purple-900/30 bg-purple-950/10 text-center">
              <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider mb-2">핵심 기운</span>
              <div className="flex flex-col gap-1 text-xs text-purple-300 font-semibold">
                <span>정: {cardMeta?.uprightKeywords.slice(0, 2).join(", ")}</span>
                <span>역: {cardMeta?.reversedKeywords.slice(0, 2).join(", ")}</span>
              </div>
            </div>
          </div>

          {/* Detailed MDX Content Panel (Right Side on Desktop) */}
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-invert prose-headings:text-amber-300 prose-h2:text-xl prose-h2:font-bold prose-h2:border-b prose-h2:border-purple-950/60 prose-h2:pb-2 prose-p:text-slate-300 prose-p:leading-relaxed text-sm">
              <MDXRemote source={post.content} />
            </div>

            {/* Affiliate Recommendation Placement (Contextual) */}
            <AffiliateLink
              url="https://link.coupang.com/example-affiliate-link"
              title="한 권으로 끝내는 타로 독학 교과서"
              description="78장 모든 카드의 디테일한 상징 해석과 실전 리딩 스프레드 기법이 총망라된 타로 공부의 바이블 도서입니다."
              price="22,500원"
              ctaText="책 보러가기"
            />

            {/* In-feed Ad Banner */}
            <AdSlot id="card-middle-ad" type="native" />

            {/* Related Cards Recommendation Section */}
            {recommendations.length > 0 && (
              <div className="border-t border-purple-950 pt-8">
                <h3 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-1.5">
                  <Compass className="h-4.5 w-4.5 text-amber-400" />
                  <span>연관 카드 해설 추천</span>
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {recommendations.map((card) => (
                    <Link
                      key={card.id}
                      href={`/cards/${card.slug}`}
                      className="group flex flex-col p-3 rounded-lg border border-purple-900/30 bg-slate-900/40 hover:border-amber-500/20 transition-all text-center"
                    >
                      <span className="text-xl mb-1 text-purple-500/60 group-hover:text-amber-400/80 transition-colors">🔮</span>
                      <span className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition-colors truncate">
                        {card.nameKo}
                      </span>
                      <span className="text-[8px] text-slate-500 font-mono truncate">{card.nameEn}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>

        {/* Ad Placement Bottom */}
        <AdSlot id="card-bottom-ad" type="banner" />

      </div>
    </div>
  );
}
