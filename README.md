# AstroTarot - 타로 콘텐츠 & 수익화 플랫폼

AstroTarot은 무료 타로 운세 및 별자리 분석을 통해 고품질의 SEO 트래픽을 유치하고, 광고(구글 애드센스, 카카오 애드핏) 및 제휴 마케팅(쿠팡 파트너스)을 통해 수익화를 실현하기 위한 현대적인 웹 플랫폼입니다.

## 🛠️ 기술 스택
- **프레임워크**: Next.js 14 (App Router, TypeScript)
- **스타일링**: Tailwind CSS v3 (Cosmic Mystic 다크 테마 및 3D 카드 플립 애니메이션 지원)
- **콘텐츠 엔진**: MDX (Markdown Component) + `next-mdx-remote` + `gray-matter`
- **배포 인프라**: Vercel (Static Site Generation(SSG) 및 Incremental Static Regeneration(ISR) 완벽 지원)

---

## 📁 주요 폴더 구조
```
├── content/               # MDX 콘텐츠 (78개 타로 카드 사전 & 운세 칼럼 블로그)
│   ├── cards/             # 타로 카드별 상세 해석 파일들 (.mdx)
│   └── blog/              # 카테고리별 운세 포스트들 (.mdx)
├── src/
│   ├── app/               # Next.js App Router (sitemap, robots 포함)
│   ├── components/        # 공통 UI, 광고(AdSlot), 제휴링크(AffiliateLink) 컴포넌트
│   ├── lib/               # tarot 데이터셋, MDX 로더 유틸리티
│   └── styles/            # Tailwind 글로벌 스타일 및 3D CSS
```

---

## 🚀 로컬 실행 방법

1. **의존성 패키지 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   실행 후 브라우저에서 `http://localhost:3000`으로 접속합니다.

3. **프로젝트 빌드 테스트 (SSG/ISR 컴파일 검증)**
   ```bash
   npm run build
   ```
   `/cards/[slug]` 78개 정적 페이지와 `/blog/[slug]`, `/zodiac/[sign]` 페이지가 완벽하게 빌드 타임에 정적 html로 사전 생성되는 것을 확인하실 수 있습니다.

---

## ☁️ Vercel 배포 방법

이 프로젝트는 Vercel 배포 시 별도의 데이터베이스 없이 **완전한 정적/증적 배포(SSG/ISR)** 형태로 전 세계 CDN에 초고속으로 배포됩니다.

1. **GitHub 저장소에 코드 업로드**
2. **Vercel 콘솔 접속 및 프로젝트 가져오기**
   - Vercel Dashboard -> "Add New" -> "Project" -> GitHub 레포지토리 연동
3. **환경 변수 세팅 (선택 사항)**
   - `src/app/layout.tsx` 내에 배치된 구글 애널리틱스 측정 ID (`G-XXXXXXXXXX`)를 실제 운영용 ID로 교체하거나 프로세스 변수(`process.env.NEXT_PUBLIC_GA_ID`)로 처리할 수 있습니다.
4. **배포 시작 (Deploy)**
   - 빌드 명령 (`npm run build`) 및 출력 디렉토리 (`.next`)는 Vercel이 기본으로 자동 인식합니다.

---

## 💰 수익화 컴포넌트 활용 가이드

### 1. 광고 연동 (`AdSlot.tsx`)
사이트의 주요 스폿(상단, 본문 중간, 하단)에 `<AdSlot id="광고슬롯ID" type="banner" />` 형태로 즉시 삽입이 준비되어 있습니다. 
- 구글 애드센스나 카카오 애드핏 연동 승인 완료 후 `src/components/AdSlot.tsx` 내부 주석 부분에 광고스크립트 (`ins` 태그)를 주입하시면 전역 배치된 광고가 즉시 가동됩니다.

### 2. 제휴 마케팅 링크 (`AffiliateLink.tsx`)
블로그 본문 하단 및 별자리/카드 상세 해설 영역에 삽입되어 있습니다.
- 쿠팡 파트너스 링크 전달 시 검색엔진으로부터 불이익(Link Juice 유출)을 받지 않도록 `rel="nofollow noopener noreferrer"` 옵션이 기본 구성되어 SEO 친화적입니다.

### 3. SEO 및 분석 (`sitemap.ts`, `robots.ts`, GA4)
- 네이버 웹마스터도구 및 구글 서치콘솔에 사이트 주소와 함께 `/sitemap.xml`을 등록하시면 78장의 카드 정보와 모든 별자리 및 블로그 글이 즉시 수집 대상이 됩니다.
- Google Analytics 4가 전역 레이아웃에 내장되어 있어 사용자 트래픽 통계를 즉시 모니터링할 수 있습니다.
