import Header from "@/components/layout/Header";

// 스와이프 처리하는 페이지 예제
export default function SwipePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Swipe Page</h1>
        </div>
      </main>
    </div>
  );
}
