// 사용자 관련 타입
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
  updatedAt: Date;
}

// API 응답 타입
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 페이지네이션 타입
export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

// 컴포넌트 공통 props 타입
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// 테마 타입
export type Theme = "light" | "dark" | "system";

// 사이드바 상태 타입
export interface SidebarState {
  isOpen: boolean;
  isCollapsed: boolean;
}
