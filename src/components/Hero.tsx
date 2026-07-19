"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { storage } from "@/lib/storage";
import { Stethoscope, HeartPulse, ShieldCheck, Clock, TestTube } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
    const heroData = storage.getHero();

    return (
        <section className={styles.hero}>
            {/* Background Overlay */}
            <div className={styles.overlay} />

            {/* Background Image/Video (Placeholder until generated) */}
            <div
                className={styles.bgImage}
                style={{ backgroundImage: `url(${heroData.bgUrl || '/oase_medika_hero_bg.png'})` }}
            />

            <div className="container">
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={styles.headline}>
                            {heroData.headline}
                        </h1>
                    </motion.div>

                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {heroData.subheadline}
                    </motion.p>

                    <motion.div
                        className={styles.ctaGroup}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href={heroData.ctaPrimaryLink} className="btn btn-primary">
                            {heroData.ctaPrimaryText}
                        </a>
                        <Link href={heroData.ctaSecondaryLink} className="btn btn-secondary glass">
                            {heroData.ctaSecondaryText}
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.trustBadges}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <div className={styles.badge}>
                            <Stethoscope size={16} className={styles.badgeIcon} />
                            <span>Kunjungan Dokter</span>
                        </div>
                        <div className={styles.badge}>
                            <HeartPulse size={16} className={styles.badgeIcon} />
                            <span>Perawatan Luka</span>
                        </div>
                        <div className={styles.badge}>
                            <ShieldCheck size={16} className={styles.badgeIcon} />
                            <span>Sunat Modern</span>
                        </div>
                        <div className={styles.badge}>
                            <Clock size={16} className={styles.badgeIcon} />
                            <span>Home Care 24 Jam</span>
                        </div>
                        <div className={styles.badge}>
                            <TestTube size={16} className={styles.badgeIcon} />
                            <span>Laboratorium</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
