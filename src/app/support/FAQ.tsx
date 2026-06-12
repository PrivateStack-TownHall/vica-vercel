"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is VICA?",
      answer:
        "VICA is a learning portal that provides structured learning paths, lessons, assignments, and resources.",
    },
    {
      question: "How do I start learning?",
      answer:
        "Open a program, choose a module, complete lessons, and submit assignments.",
    },
    {
      question: "Can I download resources?",
      answer:
        "Yes. Resources can be downloaded directly from the Resources page.",
    },
    {
      question: "Do I need an account?",
      answer:
        "Account requirements depend on the platform configuration and future releases.",
    },
  ];

  return (
    <section
      className="
        rounded-2xl
        border
        border-[#D9E2F2]
        bg-white
        p-6
      "
    >
      <h2
        className="
          mb-6
          text-2xl
          font-bold
          text-[#0D1B2A]
        "
      >
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>

            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
