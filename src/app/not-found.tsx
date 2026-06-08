import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-bold text-slate-900">404</h1>

        <p className="mb-6 text-slate-500">Page not found.</p>

        <Link href="/" className="rounded-xl bg-slate-900 px-4 py-2 text-white">
          Back Home
        </Link>
      </div>
    </main>
  );
}
