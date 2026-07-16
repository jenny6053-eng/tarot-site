import React from "react";
import Link from "next/link";
import { Star, Sparkles } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import AdSlot from "@/components/AdSlot";

interface Props {
  searchParams: {
    category?: string;
  };
}

export const revalidate = 1800; // Cache list for 30 minutes

export default function BlogListPage({ searchParams }: Props) {
  const selectedCategory = searchParams.category;
  
  const allPosts = getAllPosts("blog");
  
  // Extract all unique categories
  const categories = ["전체", ...Array.from(new Set(allPosts.map((p) => p.frontmatter.category).filter((cat): cat is string => !!cat)))];
  
  // Filter posts
  const filteredPosts = selectedCategory && selectedCategory !== "전체"
    ? allPosts.filter((post) => post.frontmatter.category === selectedCategory)
    : allPosts;

  return (
    <div className="w-full bg-slate-950 pb-20 pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="h-3 w-3" />
            <span>AstroTarot Column</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
            신비로운 운세 & 타로 가이드
          </h1>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            별빛의 흐름을 읽는 점성학 분석과 타로 카드를 깊게 배우는 리딩 가이드, 
            그리고 실생활에 유용한 운세 칼럼을 연재합니다.
          </p>
        </div>

        {/* Top Ad banner */}
        <AdSlot id="blog-list-top-ad" type="banner" />

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => {
            const isActive = (!selectedCategory && cat === "전체") || selectedCategory === cat;
            return (
              <Link
                key={cat}
                href={cat === "전체" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/10"
                    : "bg-slate-900 border border-purple-950 text-slate-400 hover:text-amber-300"
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl border border-purple-900/30 bg-slate-900/20 overflow-hidden hover:border-amber-500/20 transition-all hover:bg-slate-900/40"
              >
                {/* Visual Cover placeholder */}
                <div className="aspect-video w-full bg-gradient-to-br from-purple-950 to-slate-900 flex items-center justify-center relative border-b border-purple-900/20">
                  <Star className="h-8 w-8 text-amber-500/15 animate-pulse" />
                  <span className="absolute bottom-2 left-3 rounded bg-purple-950/80 px-2.5 py-0.5 text-[9px] font-bold text-amber-400 uppercase border border-amber-500/20">
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
                    <div className="flex gap-1.5">
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
                      <span>보기</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-purple-950 rounded-xl bg-slate-900/10">
            <span className="text-slate-500 text-xs">작성된 글이 아직 없습니다.</span>
          </div>
        )}

        {/* Bottom Ad slot */}
        <AdSlot id="blog-list-bottom-ad" type="banner" />

      </div>
    </div>
  );
}
