import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import AdSlot from "@/components/AdSlot";
import AffiliateLink from "@/components/AffiliateLink";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static routes for all blog posts at build-time
export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO metadata tags
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug("blog", slug);

  if (!post) {
    return {
      title: "칼럼을 찾을 수 없습니다",
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
      url: `https://astrotarot.vercel.app/blog/${slug}`,
      publishedTime: post.frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = params;
  const post = getPostBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  // Find related articles (same category)
  const relatedPosts = getAllPosts("blog")
    .filter((p) => p.slug !== slug && p.frontmatter.category === post.frontmatter.category)
    .slice(0, 2);

  return (
    <div className="w-full bg-slate-950 pb-20 pt-10">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>목록으로 돌아가기</span>
          </Link>
        </div>

        {/* Ad Placement Top */}
        <AdSlot id="blog-top-ad" type="banner" />

        {/* Post Metadata Header */}
        <header className="py-6 border-b border-purple-950 mb-8">
          <span className="inline-block rounded bg-purple-950/80 px-2.5 py-0.5 text-xs font-bold text-amber-400 border border-amber-500/20 mb-3">
            {post.frontmatter.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100 leading-snug">
            {post.frontmatter.title}
          </h1>
          <p className="mt-4 text-sm text-slate-400 italic">
            {post.frontmatter.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <time>{post.frontmatter.date}</time>
            </span>
            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              <span>AstroTarot 마스터</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>5분 소요</span>
            </span>
          </div>
        </header>

        {/* Post Body (MDX Remote Compilation) */}
        <div className="prose prose-invert prose-headings:text-amber-300 prose-h2:text-lg prose-h2:font-bold prose-h2:border-b prose-h2:border-purple-950/60 prose-h2:pb-1.5 prose-h2:mt-8 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 text-sm">
          <MDXRemote source={post.content} />
        </div>

        {/* Affiliate Product Recommendation (In-article) */}
        <AffiliateLink
          url="https://link.coupang.com/example-affiliate-link"
          title="유니버셜 웨이트 타로카드 오리지널 공식 덱"
          description="타로 마스터 교육 및 실무에서 가장 널리 쓰이는 전설적인 웨이트 계열 오리지널 패키지입니다."
          price="14,000원"
          ctaText="최저가 확인하기"
        />

        {/* Middle Native Ad Placement */}
        <AdSlot id="blog-middle-ad" type="native" />

        {/* Tags footer */}
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="mt-8 pt-4 border-t border-purple-950/40 flex flex-wrap items-center gap-2">
            <Tag className="h-3.5 w-3.5 text-slate-600" />
            {post.frontmatter.tags.map((tag: string) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded bg-slate-900 border border-purple-950/40 px-2 py-0.5 text-[10px] text-slate-400 hover:text-amber-300 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-purple-950">
            <h3 className="text-sm font-bold text-slate-200 mb-6">
              연관 운세 칼럼 추천
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="group flex flex-col p-4 rounded-xl border border-purple-900/30 bg-slate-900/40 hover:border-amber-500/20 transition-all"
                >
                  <span className="text-[10px] text-slate-500 font-mono mb-1">{rPost.frontmatter.date}</span>
                  <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition-colors line-clamp-1">
                    {rPost.frontmatter.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                    {rPost.frontmatter.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Ad slot */}
        <AdSlot id="blog-bottom-ad" type="banner" />

      </article>
    </div>
  );
}
