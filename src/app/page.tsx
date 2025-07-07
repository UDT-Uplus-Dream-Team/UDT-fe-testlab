import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">UDT TestLab</h1>
            <p className="text-xl text-gray-600 mb-2">
              Next.js 15, TypeScript, Tailwind CSS로 구축된 테스트 환경
            </p>
            <p className="text-sm text-gray-500">최신 웹 개발 기술을 활용한 현대적인 개발 환경</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="primary" size="lg">
              컴포넌트 보기
            </Button>
            <Button variant="outline" size="lg">
              기능 테스트
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">컴포넌트 시스템</h3>
            <p className="text-gray-600 leading-relaxed">
              재사용 가능한 UI 컴포넌트들을 체계적으로 관리하고, Next.js 15의 최신 기능들을 활용한
              현대적인 개발 경험을 제공합니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">타입 안전성</h3>
            <p className="text-gray-600 leading-relaxed">
              TypeScript를 활용한 완전한 타입 안전성과 향상된 개발자 경험을 통해 안정적인 코드를
              작성할 수 있습니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 7l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">모던 스타일링</h3>
            <p className="text-gray-600 leading-relaxed">
              Tailwind CSS로 빠르고 일관된 디자인을 구현하며, 반응형 웹 디자인과 접근성을 고려한
              현대적인 UI를 제공합니다.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next.js 15의 새로운 기능들</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900">Turbopack</h4>
                <p className="text-sm text-gray-600">빠른 개발 서버</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">⚛️</span>
                </div>
                <h4 className="font-semibold text-gray-900">React 19</h4>
                <p className="text-sm text-gray-600">최신 React 기능</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">🔧</span>
                </div>
                <h4 className="font-semibold text-gray-900">TypeScript</h4>
                <p className="text-sm text-gray-600">향상된 타입 지원</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900">성능</h4>
                <p className="text-sm text-gray-600">최적화된 빌드</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
