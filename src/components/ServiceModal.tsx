"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Send } from "lucide-react";
import { Service } from "@/lib/storage";
import styles from "./ServiceModal.module.css";

interface ServiceModalProps {
    service: Service | null;
    onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
    if (!service) return null;

    const waLink = `https://wa.me/628123456789?text=Halo%20Oase%20Medika,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`;

    return (
        <AnimatePresence>
            {service && (
                <div className={styles.overlay} onClick={onClose}>
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeBtn} onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className={styles.content}>
                            <div className={styles.imageSection}>
                                <Image
                                    src={service.imageUrl || "/hero-bg.png"}
                                    alt={service.title}
                                    fill
                                    className={styles.image}
                                    priority
                                />
                            </div>

                            <div className={styles.textSection}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{service.icon}</span>
                                </div>
                                <h2 className={styles.title}>{service.title}</h2>
                                <p className={styles.tagline}>{service.tagline}</p>
                                <div className={styles.description}>
                                    {service.fullDescription}
                                </div>

                                <div className={styles.footer}>
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ width: "100%" }}
                                    >
                                        KONSULTASI SEKARANG <Send size={18} style={{ marginLeft: "10px" }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
