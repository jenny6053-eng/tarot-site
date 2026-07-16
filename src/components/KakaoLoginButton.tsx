"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn, LogOut, User, ChevronDown } from "lucide-react";

const isMock = process.env.NEXT_PUBLIC_MOCK_MODE === "true";

// Mock 세션 타입
interface MockSession {
  user: { name: string; email: string; image?: string };
}

const MOCK_SESSION: MockSession = {
  user: { name: "테스트유저", email: "test@kakao.com" },
};

export default function KakaoLoginButton() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Mock 모드 상태 관리
  const [mockLoggedIn, setMockLoggedIn] = useState(false);

  const effectiveSession = isMock
    ? mockLoggedIn
      ? MOCK_SESSION
      : null
    : session;

  const isLoading = !isMock && status === "loading";
  const isLoggedIn = isMock ? mockLoggedIn : status === "authenticated";

  const handleLogin = () => {
    if (isMock) {
      setMockLoggedIn(true);
      return;
    }
    router.push("/login");
  };

  const handleLogout = async () => {
    setDropdownOpen(false);
    if (isMock) {
      setMockLoggedIn(false);
      return;
    }
    await signOut({ redirect: false });
    router.refresh();
  };

  if (isLoading) {
    return (
      <div className="w-24 h-8 rounded-full bg-slate-800 animate-pulse" />
    );
  }

  if (isLoggedIn && effectiveSession?.user) {
    const user = effectiveSession.user;
    return (
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 hover:bg-amber-400/20 transition-all duration-200 text-sm"
        >
          {/* 아바타 */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-purple-500 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
            {user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.image} alt={user.name ?? ""} className="w-full h-full object-cover" />
            ) : (
              <User className="h-3.5 w-3.5" />
            )}
          </div>
          <span className="text-amber-300 font-medium max-w-[80px] truncate">
            {user.name ?? "유저"}
          </span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-amber-400/70 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* 드롭다운 메뉴 */}
        {dropdownOpen && (
          <>
            {/* 오버레이 */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setDropdownOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-purple-900/40 rounded-2xl shadow-xl shadow-purple-950/40 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-800">
                <p className="text-xs text-slate-500">카카오 계정</p>
                <p className="text-sm text-slate-200 font-medium truncate">
                  {user.email ?? user.name}
                </p>
              </div>
              <Link
                href="/my-readings"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2.5 px-4 py-3 text-sm text-slate-300 hover:bg-purple-900/30 hover:text-amber-300 transition-colors"
              >
                <span className="text-base">🔮</span>
                나의 리딩 이력
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-slate-400 hover:bg-red-900/20 hover:text-red-400 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                로그아웃
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95 shadow-md"
      style={{ backgroundColor: "#FEE500", color: "#3C1E1E" }}
    >
      {/* 카카오 아이콘 */}
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3C1E1E">
        <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.728 1.67 5.122 4.174 6.536-.171.615-.618 2.222-.707 2.57-.11.424.155.42.327.306.134-.09 2.125-1.44 2.988-2.022A11.42 11.42 0 0012 18.6c5.523 0 10-3.477 10-7.8S17.523 3 12 3z" />
      </svg>
      <LogIn className="h-3.5 w-3.5" />
      카카오 로그인
    </button>
  );
}
