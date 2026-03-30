"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "How do I know whether LASIK, EVO ICL, RLE, or cataract surgery is right for me?",
    answer:
      "That depends on your prescription, eye measurements, lens changes, eye health, age, and visual goals. The consultation helps determine which options fit your eyes and which do not.",
  },
  {
    question: "What if I’m interested, but not ready to decide yet?",
    answer:
      "That’s completely normal. The consultation is meant to give you clarity, not pressure. You can get answers, understand your options, and decide afterward in your own time.",
  },
  {
    question: "Is the consultation really free, and am I under any pressure to move forward?",
    answer:
      "Yes. The consultation is free, and the goal is to help you understand your options clearly. If you’re a candidate, you can decide in your own time whether you want to take the next step.",
  },
  {
    question: "What if I’m not a good LASIK candidate?",
    answer:
      "That’s exactly why the evaluation matters. Some patients are better suited for PRK, EVO ICL, RLE, cataract surgery, or another approach depending on their measurements, prescription, and eye health.",
  },
  {
    question: "I’m over 40, use reading glasses, or may have cataracts — do I still have options?",
    answer:
      "Yes. Many people in that stage still have treatment options, but the best fit is often different from standard LASIK. Lens-based procedures such as RLE or cataract surgery may be more appropriate depending on your eyes and goals.",
  },
  {
    question: "How long is recovery, and how soon can vision improve?",
    answer:
      "Recovery depends on the procedure and on your eyes. Some treatments allow patients to notice perfect or clearer vision right away, while others take more healing time. Your consultation helps clarify the typical timeline for the option that best fits you.",
  },
  {
    question: "What if I’m nervous about having a vision correction procedure?",
    answer:
      "That’s very common. Most people want more clarity before making any decision. The consultation gives you a chance to ask questions, understand the process, and find out what may be appropriate for your eyes before deciding on anything.",
  },
  {
    question: "How much can treatment reduce my need for glasses?",
    answer:
      "Many patients are able to reduce their dependence on glasses completely, but the likely result depends on your age, prescription, and the procedure chosen. The consultation helps set clear expectations based on your eyes and daily needs.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4"
            style={{ backgroundColor: 'rgba(2, 157, 218, 0.1)', color: '#0B4F8A' }}
          >
            FAQ
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" 
            style={{ color: "#003775" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#5A7A8F" }}>
            Get answers to common questions about vision correction procedures
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-2xl border bg-white overflow-hidden transition-all hover:shadow-md data-[state=open]:shadow-premium"
                  style={{ borderColor: '#C0D8E8' }}
                >
                  <AccordionTrigger 
                    className="px-6 py-5 text-left font-semibold hover:no-underline text-base md:text-lg transition-colors [&[data-state=open]]:text-[#029DDA]" 
                    style={{ color: "#003775" }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="px-6 pb-6 text-base leading-relaxed" 
                    style={{ color: "#5A7A8F" }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
