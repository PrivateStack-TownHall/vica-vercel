"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownViewerProps {
  content: string;
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <article
      className="
        prose
        prose-slate
        max-w-none

        prose-headings:text-[#0D1B2A]

        prose-h1:mb-6
        prose-h1:text-4xl
        prose-h1:font-bold

        prose-h2:mt-10
        prose-h2:mb-4
        prose-h2:text-3xl
        prose-h2:font-semibold

        prose-h3:mt-8
        prose-h3:mb-3
        prose-h3:text-2xl
        prose-h3:font-semibold

        prose-h4:text-xl
        prose-h4:font-semibold

        prose-p:text-slate-700
        prose-p:leading-8

        prose-strong:text-[#0D1B2A]

        prose-a:text-[#5477A6]
        prose-a:no-underline
        hover:prose-a:text-[#3E5F89]

        prose-ul:text-slate-700
        prose-ol:text-slate-700

        prose-li:marker:text-[#5477A6]

        prose-blockquote:border-l-[#5477A6]
        prose-blockquote:text-slate-600

        prose-code:rounded
        prose-code:bg-slate-100
        prose-code:px-1.5
        prose-code:py-0.5
        prose-code:text-[#0D1B2A]
        prose-code:before:content-none
        prose-code:after:content-none

        prose-pre:rounded-xl
        prose-pre:bg-[#0D1B2A]
        prose-pre:p-5
        prose-pre:text-slate-100

        prose-table:block
        prose-table:w-full
        prose-table:overflow-hidden
        prose-table:rounded-xl
        prose-table:border

        prose-thead:bg-[#EDF2FF]

        prose-th:px-4
        prose-th:py-3
        prose-th:text-left
        prose-th:text-[#0D1B2A]

        prose-td:px-4
        prose-td:py-3

        prose-img:rounded-xl
        prose-img:shadow-sm

        prose-hr:border-slate-200
      "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
