import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

const faqs = [
  {
    question: "How secure is my financial data with Duospense?",
    answer:
      "Duospense uses bank-level encryption to protect your data. We never store your bank credentials and use secure, read-only connections to fetch your transaction data.",
  },
  {
    question: "Can I sync Duospense with my bank accounts?",
    answer:
      "Yes, Duospense can securely connect to over 10,000 financial institutions to automatically import and categorize your transactions.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Duospense offers mobile apps for both iOS and Android, allowing you to track your expenses on the go.",
  },
  {
    question: "How much does Duospense cost?",
    answer:
      "Duospense offers a free basic plan and premium plans starting at $5/month. Check our pricing page for more details on features included in each plan.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 relative bg-background">
      <Container variant={"fullMobileConstrainedPadded"}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
        <div className="relative z-10">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="font-sans w-full max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
