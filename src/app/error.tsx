"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mb-6 text-sm text-slate-500">{error.message}</p>

        <button
          onClick={() => reset()}
          className="rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:opacity-90"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
