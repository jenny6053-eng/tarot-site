import React from "react";
import { ShoppingBag, ArrowUpRight, Sparkles } from "lucide-react";

interface AffiliateLinkProps {
  url: string;
  title: string;
  description?: string;
  price?: string;
  ctaText?: string;
}

export default function AffiliateLink({
  url,
  title,
  description = "오늘 당신에게 어울리는 행운의 아이템을 추천합니다.",
  price,
  ctaText = "보러가기",
}: AffiliateLinkProps) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-amber-500/20 bg-gradient-to-r from-purple-950/40 via-amber-950/20 to-purple-950/40 p-5 md:p-6 shadow-lg shadow-purple-950/40">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Product Details */}
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>행운의 제휴 상품 추천</span>
          </div>
          <h4 className="text-base font-bold text-slate-100 group-hover:text-amber-200 transition-colors">
            {title}
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* Action Button & Optional Price */}
        <div className="flex items-center gap-4 self-end md:self-center">
          {price && (
            <div className="text-right">
              <span className="text-[10px] text-slate-500 block">최저가</span>
              <span className="text-sm font-extrabold text-amber-300 font-mono">{price}</span>
            </div>
          )}
          <a
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 px-5 py-2.5 text-xs font-bold text-slate-950 transition-all hover:scale-105 shadow-md shadow-amber-500/10"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{ctaText}</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
      
      {/* FTC Disclosure */}
      <span className="mt-3 block text-[9px] text-slate-600 font-medium">
        * 파트너스 활동의 일환으로 수수료를 제공받을 수 있으며, 구매자에게는 추가 부담이 없습니다.
      </span>
    </div>
  );
}
