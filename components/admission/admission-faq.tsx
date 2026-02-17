"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the minimum requirements to apply?",
    answer:
      "Applicants must have completed secondary education or its equivalent. No prior design experience is required — we value creative potential and a willingness to learn.",
  },
  {
    question: "Is there an application fee?",
    answer:
      "No. Don Bosco school does not charge an application fee. We believe access to education should begin with an accessible application process.",
  },
  {
    question: "What should my portfolio include?",
    answer:
      "Your portfolio should contain 10-15 pieces of original work in any medium — sketches, digital design, photography, or mixed media. We look for creativity, intention, and growth.",
  },
  {
    question: "Can international students apply?",
    answer:
      "Absolutely. We welcome applications from students worldwide. International applicants may need to provide additional documentation such as English proficiency scores.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes. Don Bosco school offers merit-based and need-based scholarships. Scholarship applications are reviewed alongside your admission application.",
  },
];

export function AdmissionFaq() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl mb-10">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:text-primary [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
