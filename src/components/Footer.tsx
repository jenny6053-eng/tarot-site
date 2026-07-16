import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-purple-900/40 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold text-amber-400">
              <Star className="h-5 w-5 text-purple-400" />
              <span className="font-extrabold tracking-wider bg-gradient-to-r from-amber-200 via-amber-400 to-purple-400 bg-clip-text text-transparent">
                AstroTarot
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              AstroTarot은 별빛의 흐름과 타로의 신비로운 에너지를 매칭하여 일상의 지혜를 얻을 수 있는 타로 콘텐츠 플랫폼입니다. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 mb-4 tracking-wider">서비스</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#today-tarot" className="hover:text-amber-300 transition-colors">오늘의 타로 카드 뽑기</Link>
              </li>
              <li>
                <Link href="/cards/the-fool" className="hover:text-amber-300 transition-colors">78장 타로 사전</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-300 transition-colors">운세 칼럼 & 블로그</Link>
              </li>
              <li>
                <Link href="/zodiac/aries" className="hover:text-amber-300 transition-colors">12별자리 타로 운세</Link>
              </li>
            </ul>
          </div>

          {/* Popular Cards */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 mb-4 tracking-wider">주요 타로 카드 의미</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/cards/the-fool" className="hover:text-amber-300 transition-colors">0. 광대 카드 (The Fool)</Link>
              </li>
              <li>
                <Link href="/cards/the-magician" className="hover:text-amber-300 transition-colors">1. 마법사 카드 (The Magician)</Link>
              </li>
              <li>
                <Link href="/cards/the-lovers" className="hover:text-amber-300 transition-colors">6. 연인 카드 (The Lovers)</Link>
              </li>
              <li>
                <Link href="/cards/wheel-of-fortune" className="hover:text-amber-300 transition-colors">10. 운명의 수레바퀴 (Wheel of Fortune)</Link>
              </li>
            </ul>
          </div>

          {/* Legal / Disclaimer */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider">면책 조항</h3>
            <p className="text-[10px] leading-relaxed text-slate-600">
              AstroTarot에서 제공하는 모든 타로 해석 및 별자리 운세 결과는 오락 및 참고용이며, 과학적인 근거를 제공하지 않습니다. 중요한 결정은 전문가와의 상담을 통해 내리시기 바랍니다. 본 사이트는 쿠팡 파트너스 활동의 일환으로 일정액의 수수료를 제공받을 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-purple-950/60 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <p>&copy; {new Date().getFullYear()} AstroTarot. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-400">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-slate-400">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
