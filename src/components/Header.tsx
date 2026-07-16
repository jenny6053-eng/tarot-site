"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/40 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-wider text-amber-400 hover:text-amber-300 transition-colors">
          <Moon className="h-6 w-6 text-purple-400 animate-pulse" />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
            온빛타로
          </span>
          <Sparkles className="h-4 w-4 text-amber-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#today-tarot" className="text-slate-300 hover:text-amber-300 transition-colors">
            오늘의 타로
          </Link>
          <Link href="/cards/the-fool" className="text-slate-300 hover:text-amber-300 transition-colors">
            타로 카드 사전
          </Link>
          <Link href="/blog" className="text-slate-300 hover:text-amber-300 transition-colors">
            운세 블로그
          </Link>
          <Link href="/zodiac/aries" className="text-slate-300 hover:text-amber-300 transition-colors">
            별자리 운세
          </Link>
        </nav>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="rounded-full bg-purple-950/50 p-2 border border-purple-500/20 text-purple-300">
            <Moon className="h-4 w-4" />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-purple-950/30 hover:text-amber-300 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">메뉴 열기</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-purple-900/60" id="mobile-menu">
          <div className="space-y-1 px-2 pb-4 pt-2">
            <Link
              href="/#today-tarot"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-purple-950/40 hover:text-amber-300 transition-colors"
            >
              오늘의 타로
            </Link>
            <Link
              href="/cards/the-fool"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-purple-950/40 hover:text-amber-300 transition-colors"
            >
              타로 카드 사전
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-purple-950/40 hover:text-amber-300 transition-colors"
            >
              운세 블로그
            </Link>
            <Link
              href="/zodiac/aries"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-purple-950/40 hover:text-amber-300 transition-colors"
            >
              별자리 운세
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
