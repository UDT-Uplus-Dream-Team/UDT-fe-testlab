import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">컴포넌트 테스트 - Next.js 15</h1>
          <p className="text-gray-600">
            Next.js 15의 최신 기능들을 활용한 UI 컴포넌트들을 확인하고 테스트할 수 있습니다.
          </p>
        </div>

        <div className="space-y-8">
          {/* Button 컴포넌트 테스트 */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Button 컴포넌트</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>
                  Disabled
                </Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
                <Button variant="primary" loading>
                  Loading
                </Button>
              </div>
            </div>
          </section>

          {/* Input 컴포넌트 테스트 */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Input 컴포넌트</h2>
            <div className="space-y-4 max-w-md">
              <Input
                label="이메일"
                type="email"
                placeholder="example@email.com"
                helperText="회원가입에 사용될 이메일 주소입니다."
              />

              <Input
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력하세요"
                error="비밀번호는 8자 이상이어야 합니다."
              />

              <Input label="사용자명" placeholder="사용자명을 입력하세요" />

              <Input
                label="전화번호"
                type="tel"
                placeholder="010-1234-5678"
                disabled
                helperText="현재 비활성화된 필드입니다."
              />
            </div>
          </section>

          {/* 추가 컴포넌트 섹션 */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Next.js 15 기능들</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Turbopack</h3>
                <p className="text-sm text-gray-600">
                  기본적으로 활성화된 빠른 번들러로 개발 속도가 향상됩니다.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">React 19</h3>
                <p className="text-sm text-gray-600">최신 React 19 기능들을 활용할 수 있습니다.</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">개선된 타입스크립트</h3>
                <p className="text-sm text-gray-600">
                  더 나은 타입 추론과 개발자 경험을 제공합니다.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">최적화된 성능</h3>
                <p className="text-sm text-gray-600">
                  더 빠른 빌드 시간과 런타임 성능을 제공합니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
