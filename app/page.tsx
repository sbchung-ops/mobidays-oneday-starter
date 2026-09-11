export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-6 py-16 text-slate-950">
      <section className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-100 px-7 py-5 sm:px-10">
          <p className="text-sm font-semibold tracking-[-0.01em] text-indigo-700">
            ONE-DAY VIBE CODING
          </p>
        </div>
        <div className="px-7 py-10 sm:px-10 sm:py-12">
          <div
            className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-700"
            aria-hidden="true"
          >
            ✓
          </div>
          <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            수업 준비 완료
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            이 화면이 보이면 수업용 프로젝트와 로컬 서버가 정상적으로 연결된 상태입니다.
          </p>
          <div className="mt-9 rounded-2xl bg-slate-950 px-5 py-5 text-slate-100 sm:px-6">
            <p className="text-sm font-semibold text-slate-400">Claude Code에 입력하세요</p>
            <p className="mt-2 font-mono text-sm leading-6 sm:text-base">
              PROGRESS.md를 읽고 현재 단계부터 수업을 시작해줘.
            </p>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            다음 단계부터 이 페이지는 여러분이 만드는 실제 서비스 화면으로 바뀝니다.
          </p>
        </div>
      </section>
    </main>
  );
}
