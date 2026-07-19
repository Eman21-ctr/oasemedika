"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import { storage, AboutContent } from '@/lib/storage';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle } from 'lucide-react';

const About = () => {
    const [content, setContent] = useState<AboutContent | null>(null);

    useEffect(() => {
        setContent(storage.getAbout());
    }, []);

    if (!content) return null;




    return (
        <section className={styles.aboutSection} id="tentang">
            <div className="container">

                {/* ── TOP GRID: Narasi + Image ── */}
                <div className={styles.grid}>
                    {/* Text Content */}
                    <div className={styles.textContent}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={styles.label}
                        >
                            {content.label}
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={styles.title}
                        >
                            {content.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className={styles.intro}
                        >
                            {content.intro}
                        </motion.p>

                        {/* Motto */}
                        {content.motto && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className={styles.mottoBox}
                            >
                                <span className={styles.mottoLabel}>MOTTO</span>
                                <p className={styles.mottoText}>&quot;{content.motto}&quot;</p>
                            </motion.div>
                        )}

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className={styles.conclusion}
                        >
                            {content.conclusion}
                        </motion.p>
                    </div>

                    {/* Visual Side */}
                    <div className={styles.visualContent}>
                        <motion.div
                            className={styles.imageWrapper}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            {content.imageUrl ? (
                                <Image
                                    src={content.imageUrl}
                                    alt="Tentang Oase Medika"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            ) : (
                                <div className={styles.placeholderImg} />
                            )}

                            <div className={styles.experienceCard}>
                                {content.experienceNumber && (
                                    <div className={styles.expNumber}>{content.experienceNumber}</div>
                                )}
                                <div className={styles.expText}>{content.experienceText}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── VISI & MISI ── */}
                {(content.visi || content.misi) && (
                    <motion.div
                        className={styles.visiMisiGrid}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {content.visi && (
                            <div className={styles.visiCard}>
                                <div className={styles.vmIconWrap}>
                                    <Eye size={28} />
                                </div>
                                <h3 className={styles.vmTitle}>VISI</h3>
                                <p className={styles.vmText}>&quot;{content.visi}&quot;</p>
                            </div>
                        )}
                        {content.misi && content.misi.length > 0 && (
                            <div className={styles.misiCard}>
                                <div className={styles.vmIconWrap}>
                                    <Target size={28} />
                                </div>
                                <h3 className={styles.vmTitle}>MISI</h3>
                                <ul className={styles.misiList}>
                                    {content.misi.map((item, i) => (
                                        <li key={i} className={styles.misiItem}>
                                            <CheckCircle size={16} className={styles.misiCheck} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* ── NILAI OASE ── */}
                <motion.div
                    className={styles.valuesSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className={styles.sectionMiniHeader}>
                        <span className={styles.label}>Nilai Kami</span>
                        <h3 className={styles.sectionSubTitle}>NILAI-NILAI KLINIK OASE MEDIKA</h3>
                    </div>
                    <div className={styles.valueList}>
                        {content.valuePoints.map((point, index) => (
                            <motion.div
                                key={point.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + (index * 0.1) }}
                                className={styles.valueItem}
                            >
                                <div className={styles.valueIcon}>{point.icon}</div>
                                <div className={styles.pointText}>
                                    <h3 className={styles.valueTitle}>{point.title}</h3>
                                    <p className={styles.valueDesc}>{point.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
