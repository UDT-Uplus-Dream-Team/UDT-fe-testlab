import { type ClassValue, clsx } from "clsx";

/**
 * Tailwind CSS 클래스들을 병합하는 유틸리티 함수
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * 문자열을 카멜케이스로 변환
 */
export function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * 문자열을 파스칼케이스로 변환
 */
export function toPascalCase(str: string): string {
  const camelCase = toCamelCase(str);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

/**
 * 날짜를 포맷팅하는 함수
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * 숫자를 천 단위로 포맷팅
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("ko-KR").format(num);
}
