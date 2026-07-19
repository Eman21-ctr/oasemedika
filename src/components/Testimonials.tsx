"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";
import { storage, Testimonial as TestimonialType } from "@/lib/storage";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

    useEffect(() => {
        setTestimonials(storage.getTestimonials());
    }, []);

    if (testimonials.length === 0) return null;

    return (
        <section className={styles.testimonials}>
            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Apa Kata Mereka?
                    </motion.span>
                    <h2 className={styles.title}>TESTIMONI PASIEN KAMI</h2>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Quote className={styles.quoteIcon} size={40} />
                            <div className={styles.stars}>
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--primary-orange)" color="var(--primary-orange)" />
                                ))}
                            </div>
                            <p className={styles.text}>"{item.text}"</p>
                            <div className={styles.footer}>
                                <div className={styles.avatar}>
                                    {item.name.charAt(0)}
                                </div>
                                <div className={styles.info}>
                                    <h4 className={styles.name}>{item.name}</h4>
                                    <span className={styles.location}>{item.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
