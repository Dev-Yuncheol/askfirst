# 미리 묻다 (AskFirst)

출시 전에 AI 고객에게 먼저 물어보고, 구매자 관점의 의견을 받아보는 랜딩 페이지입니다.

상품 정보를 입력하면 다양한 AI 페르소나가 반응하고, 핵심 인사이트로 정리되는 흐름을 소개합니다.

## 주요 기능

- 히어로: 상품 콘셉트 → AI 고객 응답 → 인사이트 요약 플로우
- 서비스 소개: 상품 정보 입력, 합성 고객 검토, 구매 인사이트 도출
- 인사이트 리포트 예시
- FAQ 및 무료 의견 받기 CTA

## 기술 스택

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [vinext](https://github.com/cloudflare/vinext) (Vite 기반 로컬/빌드)
- TypeScript

## 사전 요구사항

- Node.js `>= 22.13.0`
- pnpm (권장)

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속합니다. 포트가 사용 중이면 다른 포트로 열릴 수 있습니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `pnpm run dev` | 개발 서버 실행 |
| `pnpm run build` | 프로덕션 빌드 |
| `pnpm run start` | 빌드 결과 실행 |
| `pnpm run lint` | ESLint 검사 |
| `pnpm run test` | 빌드 후 HTML 렌더 테스트 |

## 프로젝트 구조

```text
askfirst/
├── app/                 # 페이지 및 글로벌 스타일
│   ├── page.tsx         # 랜딩 페이지
│   ├── layout.tsx       # 루트 레이아웃
│   └── globals.css      # 공통 스타일
├── public/              # 정적 에셋 (로고, 상품/아바타 이미지)
├── db/                  # Drizzle 스키마 (선택)
├── tests/               # 테스트
└── package.json
```

## 라이선스

Private - All rights reserved.
