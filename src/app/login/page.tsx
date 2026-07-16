"use client";

import React, { Suspense, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Sparkles, Moon, Star, LogIn } from "lucide-react";

const isMock = process.env.NEXT_PUBLIC_MOCK_MODE === "true";

// useSearchParams를 사용하는 내부 컴포넌트 (Suspense로 감싸야 함)
function LoginContent() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const [mockLoggedIn, setMockLoggedIn] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  useEffect(() => {
    if (isMock && mockLoggedIn) {
      router.replace(callbackUrl);
    }
  }, [mockLoggedIn, callbackUrl, router]);

  const handleKakaoLogin = async () => {
    if (isMock) {
      setMockLoggedIn(true);
      return;
    }
    await signIn("kakao", { callbackUrl });
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center flex-1">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-amber-400" />
      </div>
    );
  }

  return (
    <div className="relative z-10 w-full max-w-md">
      {/* 로고 영역 */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Moon className="h-8 w-8 text-purple-400 animate-pulse" />
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-purple-400 bg-clip-text text-transparent">
            온빛타로
          </h1>
          <Sparkles className="h-6 w-6 text-amber-300" />
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          카드가 전하는 빛으로<br />
          당신의 오늘을 밝혀드립니다
        </p>
      </div>

      {/* 로그인 카드 */}
      <div className="bg-slate-900/80 backdrop-blur-md border border-purple-900/40 rounded-3xl p-8 shadow-2xl shadow-purple-950/40">
        {/* 타로 카드 아이콘 */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-28 rounded-2xl bg-gradient-to-b from-purple-900/60 to-slate-900 border-2 border-amber-400/40 flex items-center justify-center shadow-lg shadow-amber-400/10">
              <span className="text-4xl">🔮</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-slate-900" />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-slate-100 mb-2">시작하기</h2>
          <p className="text-slate-400 text-sm">
            카카오 계정으로 간편하게 로그인하고<br />
            프리미엄 타로 리딩을 경험해보세요
          </p>
        </div>

        {/* Mock 모드 배너 */}
        {isMock && (
          <div className="mb-4 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
            <p className="text-amber-300 text-xs font-medium">
              🧪 Mock 모드 활성화 — 실제 카카오 API 없이 테스트 가능
            </p>
          </div>
        )}

        {/* 카카오 로그인 버튼 */}
        <button
          onClick={handleKakaoLogin}
          className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-base transition-all duration-200 active:scale-95 hover:brightness-110 shadow-lg"
          style={{ backgroundColor: "#FEE500", color: "#3C1E1E" }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3C1E1E">
            <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.728 1.67 5.122 4.174 6.536-.171.615-.618 2.222-.707 2.57-.11.424.155.42.327.306.134-.09 2.125-1.44 2.988-2.022A11.42 11.42 0 0012 18.6c5.523 0 10-3.477 10-7.8S17.523 3 12 3z" />
          </svg>
          <LogIn className="h-4 w-4" />
          카카오로 시작하기
        </button>

        {/* 구분선 */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-slate-600 text-xs">또는</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* 비로그인 계속 */}
        <button
          onClick={() => router.replace("/")}
          className="w-full py-3 px-6 rounded-2xl text-slate-400 text-sm font-medium border border-slate-800 hover:border-purple-700/50 hover:text-slate-300 transition-all duration-200"
        >
          로그인 없이 무료 타로 보기
        </button>
      </div>

      {/* 하단 안내 */}
      <p className="text-center text-slate-600 text-xs mt-6 leading-relaxed">
        로그인 시 <span className="text-slate-500">이용약관</span>과{" "}
        <span className="text-slate-500">개인정보처리방침</span>에 동의하게 됩니다.
      </p>
    </div>
  );
}

// 별 배경 장식 (정적 컴포넌트)
function StarBackground() {
  const stars = [
    { size: 10, top: 15, left: 20, delay: 0.5, duration: 3 },
    { size: 14, top: 72, left: 8, delay: 1.2, duration: 2.5 },
    { size: 8, top: 35, left: 85, delay: 0, duration: 4 },
    { size: 12, top: 60, left: 70, delay: 2, duration: 3.5 },
    { size: 16, top: 10, left: 60, delay: 0.8, duration: 2 },
    { size: 9, top: 85, left: 45, delay: 1.5, duration: 3 },
    { size: 11, top: 48, left: 30, delay: 0.3, duration: 4.5 },
    { size: 7, top: 90, left: 80, delay: 2.5, duration: 2 },
    { size: 13, top: 25, left: 45, delay: 1, duration: 3.2 },
    { size: 10, top: 65, left: 15, delay: 0.7, duration: 2.8 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-900/15 rounded-full blur-3xl" />
      {stars.map((s, i) => (
        <Star
          key={i}
          className="absolute text-amber-400/20 animate-pulse"
          style={{
            width: `${s.size}px`,
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      <StarBackground />
      {/* useSearchParams를 사용하는 컴포넌트는 Suspense로 감싸야 함 */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-amber-400" />
          </div>
        }
      >
        <LoginContent />
      </Suspense>
    </div>
  );
}
