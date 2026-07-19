"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "HUBUNGI KAMI",
            description: "Via WhatsApp, telepon, atau form website kami yang tersedia 24/7."
        },
        {
            number: "02",
            title: "KONSULTASI AWAL",
            description: "Ceritakan kebutuhan kesehatan Anda, tim kami akan memberikan solusi terbaik."
        },
        {
            number: "03",
            title: "JADWALKAN KUNJUNGAN",
            description: "Pilih waktu dan lokasi yang paling sesuai untuk kenyamanan Anda."
        },
        {
            number: "04",
            title: "DAPATKAN PERAWATAN",
            description: "Tim medis profesional kami siap melayani dengan empati dan keahlian tinggi."
        }
    ];

    return (
        <section className={styles.howItWorks}>
            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Prosedur Kami
                    </motion.span>
                    <h2 className={styles.title}>CARA BERKONSULTASI</h2>
                </div>

                <div className={styles.stepsContainer}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepContent}>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className={styles.connector} />}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <a href="https://wa.me/6285283315033" className="btn btn-primary">
                        MULAI KONSULTASI SEKARANG
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
