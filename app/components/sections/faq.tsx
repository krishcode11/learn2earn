'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does the Learn2Earn token system work?',
    answer: 'Learn2Earn tokens are earned by completing courses, participating in study groups, and contributing to the community. These tokens can be used to unlock premium content, participate in exclusive events, or be converted to other cryptocurrencies.',
  },
  {
    question: 'What blockchain technologies do you cover?',
    answer: 'We cover a wide range of blockchain technologies including Ethereum, Solana, Polkadot, and more. Our curriculum includes smart contract development, DeFi protocols, NFT creation, and blockchain security.',
  },
  {
    question: 'Do I need prior blockchain experience?',
    answer: 'No prior blockchain experience is required. Our learning paths are designed for all levels, from complete beginners to experienced developers looking to specialize in blockchain development.',
  },
  {
    question: 'How do the certifications work?',
    answer: 'Our certifications are earned by completing specific learning paths and passing skill assessments. They are recognized by leading blockchain companies and can be verified on-chain.',
  },
  {
    question: 'What support is available if I get stuck?',
    answer: 'We offer multiple support channels including community forums, study groups, peer reviews, and direct support from instructors. Pro members also get priority support.',
  },
  {
    question: 'Can I learn at my own pace?',
    answer: 'Yes, all courses are self-paced. However, we recommend following the suggested learning paths and maintaining a consistent study schedule to maximize your progress.',
  },
];

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about Learn2Earn? We've got you covered with answers to the most
            common questions about our platform.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
} 