import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionProvider from "@/components/SessionProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "온빛타로 - 무료 오늘의 타로 카드 & 별자리 운세",
    template: "%s | 온빛타로"
  },
  description: "매일 무료로 오늘의 타로 카드를 뽑고, 78장 타로 백과사전 및 12별자리 운세를 통해 일상의 지혜와 조언을 얻으세요.",
  keywords: ["타로", "온빛타로", "오늘의 타로", "타로카드", "무료 타로", "별자리 운세", "타로 해석"],
  authors: [{ name: "온빛타로" }],
  openGraph: {
    title: "온빛타로 - 무료 오늘의 타로 카드 & 별자리 운세",
    description: "매일 무료로 오늘의 타로 카드를 뽑고, 78장 타로 백과사전 및 12별자리 운세를 통해 일상의 지혜와 조언을 얻으세요.",
    type: "website",
    locale: "ko_KR",
    url: "https://onbit-tarot.vercel.app",
    siteName: "온빛타로",
  },
  twitter: {
    card: "summary_large_image",
    title: "온빛타로 - 무료 오늘의 타로 카드 & 별자리 운세",
    description: "매일 무료로 오늘의 타로 카드를 뽑고, 78장 타로 백과사전 및 12별자리 운세를 통해 일상의 지혜와 조언을 얻으세요.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Replace G-XXXXXXXXXX with your actual GA Measurement ID when deploying
  const gaId = "G-XXXXXXXXXX";

  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 min-h-screen flex flex-col`}
      >
        <SessionProvider>
          <Header />
          <main className="grow flex flex-col">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

