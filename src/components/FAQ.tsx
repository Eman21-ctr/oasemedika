"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import styles from "./FAQ.module.css";
import { storage, FAQItem as FAQType } from "@/lib/storage";

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
    return (
        <div className={clsx(styles.faqItem, isOpen && styles.faqItemOpen)}>
            <button className={styles.question} onClick={onClick}>
                <span>{question}</span>
                <ChevronDown className={styles.icon} size={20} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.answerWrapper}
                    >
                        <p className={styles.answer}>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [faqs, setFaqs] = useState<FAQType[]>([]);

    useEffect(() => {
        setFaqs(storage.getFAQs());
    }, []);

    if (faqs.length === 0) return null;

    return (
        <section id="faq" className={styles.faqSection}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Tanya Jawab</span>
                    <h2 className={styles.title}>PERTANYAAN YANG SERING DIAJUKAN</h2>
                </div>

                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
