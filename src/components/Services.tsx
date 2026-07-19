"use client";

import React from "react";
import { motion } from "framer-motion";
import { storage, Service } from "@/lib/storage";
import styles from "./Services.module.css";
import { ArrowRight } from "lucide-react";
import ServiceModal from "./ServiceModal";

const ServiceCard = ({ service, index, onLearnMore }: { service: Service; index: number; onLearnMore: (s: Service) => void }) => {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.tagline}>{service.tagline}</p>
            <p className={styles.description}>{service.description}</p>
            <button className={styles.learnMore} onClick={() => onLearnMore(service)}>
                Pelajari Lebih Lanjut <ArrowRight size={16} />
            </button>
        </motion.div>
    );
};

const Services = () => {
    const services = storage.getServices();
    const [selectedService, setSelectedService] = React.useState<Service | null>(null);

    return (
        <>
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
                                onLearnMore={setSelectedService}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <ServiceModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />
        </>
    );
};

export default Services;
