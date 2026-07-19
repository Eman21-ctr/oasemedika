"use client";

import React from "react";
import { motion } from "framer-motion";
import { storage, Service } from "@/lib/storage";
import styles from "./Services.module.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={service.imageUrl || "/hero-bg.png"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                />
                <div className={styles.imageOverlay} />
            </div>
            <div className={styles.cardBody}>
                <span className={styles.tagline}>{service.tagline}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <Link href={`/layanan/${service.id}`} className={styles.learnMore}>
                    Pelajari Lebih Lanjut <ArrowRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const services = storage.getServices();

    return (
        <section id="layanan" className={styles.servicesSection}>
            <div className="container">
                <div className={styles.header}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Layanan Kami
                    </motion.span>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Kesehatan Keluarga Anda Adalah Prioritas Kami
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Kami menyediakan layanan medis profesional dengan tim berpengalaman yang siap membantu kebutuhan kesehatan Anda.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
