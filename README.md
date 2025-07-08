# UDT TestLab - Next.js 15

Next.js 15, TypeScript, Tailwind CSS v4로 구축된 최신 테스트 환경입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.3.5 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.0.0 (최신 버전)
- **Linting**: ESLint 9
- **Code Formatting**: Prettier
- **Git Hooks**: Husky
- **React**: React 19

## 🆕 Next.js 15의 새로운 기능들

### 주요 개선사항

- **Turbopack**: 기본적으로 활성화된 빠른 번들러
- **React 19**: 최신 React 기능 지원
- **향상된 TypeScript**: 더 나은 타입 추론
- **개선된 성능**: 더 빠른 빌드와 런타임 성능
- **최적화된 개발 경험**: 더 나은 에러 메시지와 디버깅

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── ui-showcase/        # UI 컴포넌트 쇼케이스 페이지 (/ui-showcase)
│   ├── globals.css        # 전역 스타일 (Tailwind v4 설정)
│   ├── layout.tsx         # 루트 레이아웃 (Next.js 15 최적화)
│   └── page.tsx           # 홈페이지 (/)
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   │   ├── Button.tsx    # 향상된 버튼 컴포넌트
│   │   └── Input.tsx     # 새로운 Input 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   │   └── Header.tsx    # 헤더 컴포넌트
│   └── features/         # 기능별 컴포넌트
├── lib/                  # 유틸리티 함수들
│   └── utils.ts          # 공통 유틸리티 (clsx)
├── hooks/                # 커스텀 훅
├── types/                # TypeScript 타입 정의
│   └── index.ts          # 공통 타입
└── styles/               # 추가 스타일 파일들
```

## 🌐 URL 구조

- **홈페이지**: `/`
- **UI 쇼케이스**: `/ui-showcase`
- **기능 테스트**: `/features` (준비 중)

## 🛠️ 개발 환경 설정

### 설치

```bash
npm install
```

### 개발 서버 실행 (Turbopack 활성화)

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 린팅

```bash
npm run lint
```

## 📝 컴포넌트 개발 가이드

### 1. UI 컴포넌트 추가 (Next.js 15 스타일)

새로운 UI 컴포넌트는 `src/components/ui/` 디렉토리에 추가합니다.

```typescript
'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  // 컴포넌트별 props
}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "base-classes",
          className
        )}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';

export default Component;
```

### 2. 클라이언트 컴포넌트

Next.js 15에서는 클라이언트 컴포넌트에 `'use client'` 지시어를 명시적으로 사용합니다.

### 3. 타입 안전성

React 19의 새로운 타입 기능들을 활용하여 더 안전한 컴포넌트를 작성합니다.

## 🎨 스타일링 가이드

### Tailwind CSS v4 클래스 병합

`src/lib/utils.ts`의 `cn` 함수를 사용하여 클래스를 병합합니다:

```typescript
import { cn } from '@/lib/utils';

<button className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)}>
```

### 반응형 디자인

Next.js 15와 Tailwind CSS v4의 최신 기능을 활용한 반응형 디자인:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 반응형 그리드 */}
</div>
```

## 🔧 유틸리티 함수

### 날짜 포맷팅

```typescript
import { formatDate } from "@/lib/utils";

const formattedDate = formatDate(new Date());
```

### 숫자 포맷팅

```typescript
import { formatNumber } from "@/lib/utils";

const formattedNumber = formatNumber(1234567); // 1,234,567
```

## 📋 타입 정의

공통 타입은 `src/types/index.ts`에 정의되어 있습니다:

- `User`: 사용자 정보 타입
- `ApiResponse<T>`: API 응답 타입
- `PaginationParams`: 페이지네이션 타입
- `BaseComponentProps`: 컴포넌트 기본 props 타입

## 🚀 성능 최적화

### Next.js 15 최적화

- **Turbopack**: 빠른 개발 서버
- **자동 코드 분할**: 더 작은 번들 크기
- **이미지 최적화**: 자동 WebP 변환
- **폰트 최적화**: `display: swap` 적용

### React 19 최적화

- **자동 배치**: 상태 업데이트 최적화
- **Suspense**: 더 나은 로딩 상태 관리
- **Concurrent Features**: 사용자 경험 개선

## 📚 Tailwind CSS v4 정보

### 현재 사용 중인 버전

- **Tailwind CSS**: v4.0.0 (최신 버전)

### Tailwind CSS v4의 주요 특징

- **설정 파일 불필요**: `tailwind.config.js` 파일이 필요 없음
- **CSS 기반 설정**: 모든 설정을 CSS 파일에서 직접 관리
- **향상된 성능**: 더 빠른 빌드 시간과 런타임 성능
- **새로운 구문**: `@import "tailwindcss"`와 `@theme` 블록 사용

### CSS 설정 예시

```css
@import "tailwindcss";

@theme {
  --color-primary: 222.2 47.4% 11.2%;
  --color-background: 0 0% 100%;
  /* 추가 테마 설정 */
}

@theme dark {
  --color-primary: 210 40% 98%;
  --color-background: 222.2 84% 4.9%;
  /* 다크 모드 설정 */
}
```

### v4 업그레이드의 장점

- ✅ **더 빠른 성능**: 향상된 빌드 및 런타임 성능
- ✅ **간소화된 설정**: 설정 파일 없이 CSS에서 직접 관리
- ✅ **최신 기능**: 새로운 CSS 기반 테마 시스템
- ✅ **향상된 개발 경험**: 더 나은 에러 메시지와 디버깅

## 🚀 배포

이 프로젝트는 Vercel에 최적화되어 있습니다:

```bash
npm run build
```

## �� 라이선스

MIT License
