import { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

// 환경변수 검증 및 안내
function validateEnv() {
  const isMock = process.env.NEXT_PUBLIC_MOCK_MODE === "true";
  if (isMock) return;

  if (!process.env.KAKAO_CLIENT_ID) {
    console.warn("⚠️  KAKAO_CLIENT_ID가 설정되지 않았습니다. .env.local을 확인하세요.");
  }
  if (!process.env.KAKAO_CLIENT_SECRET) {
    console.warn("⚠️  KAKAO_CLIENT_SECRET이 설정되지 않았습니다. .env.local을 확인하세요.");
  }
  if (!process.env.NEXTAUTH_SECRET) {
    console.warn("⚠️  NEXTAUTH_SECRET이 설정되지 않았습니다. .env.local을 확인하세요.");
  }
}

validateEnv();

const isMockMode = process.env.NEXT_PUBLIC_MOCK_MODE === "true";

export const authOptions: NextAuthOptions = {
  providers: isMockMode
    ? []
    : [
        KakaoProvider({
          clientId: process.env.KAKAO_CLIENT_ID ?? "",
          clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",
        }),
      ],

  secret: process.env.NEXTAUTH_SECRET ?? "mock-secret-for-dev",

  pages: {
    signIn: "/login",
    error: "/login",
  },

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.sub;
        (session.user as { kakaoId?: string }).kakaoId = token.sub;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.sub = account.providerAccountId;
      }
      return token;
    },
  },
};
