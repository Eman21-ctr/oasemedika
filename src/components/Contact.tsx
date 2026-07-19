"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section id="kontak" className={styles.contactSection}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.infoContent}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.label}>Hubungi Kami</span>
                        <h2 className={styles.title}>KUNJUNGI KAMI</h2>
                        <p className={styles.desc}>
                            Tim kami siap melayani Anda. Silakan hubungi kami melalui saluran di bawah ini atau kunjungi klinik kami langsung.
                        </p>

                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconCircle}><MapPin size={24} /></div>
                                <div className={styles.contactText}>
                                    <h4>ALAMAT</h4>
                                    <p>Jl. Sam Ratulangi I Belakang SMP 5 No.9, Kelapa Lima, Kota Kupang, NTT</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconCircle}><Phone size={24} /></div>
                                <div className={styles.contactText}>
                                    <h4>TELEPON & WA</h4>
                                    <p><a href="https://wa.me/6285283315033" style={{color:'inherit'}}>0852-8331-5033</a></p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconCircle}><Mail size={24} /></div>
                                <div className={styles.contactText}>
                                    <h4>EMAIL</h4>
                                    <p>info@oasemedika.co.id</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconCircle}><Clock size={24} /></div>
                                <div className={styles.contactText}>
                                    <h4>JAM OPERASIONAL</h4>
                                    <p>Senin - Jumat: 08.00 - 20.00 WITA</p>
                                    <p>Sabtu: 08.00 - 15.00 WITA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formContent}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.formCard}>
                            <h3>Kirim Pesan</h3>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label>Nama Lengkap</label>
                                    <input type="text" placeholder="Masukkan nama Anda" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Nomor HP / WhatsApp</label>
                                    <input type="text" placeholder="Contoh: 08123456789" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Layanan yang Dibutuhkan</label>
                                    <select>
                                        <option>Pilih Layanan</option>
                                        <option>Kunjungan Dokter</option>
                                        <option>Kunjungan Perawat</option>
                                        <option>Sunat Modern</option>
                                        <option>Perawatan Luka Modern</option>
                                        <option>Pelayanan Fisioterapi</option>
                                        <option>Perawatan Pasien 24 Jam</option>
                                        <option>Pemasangan NGT & Kateter</option>
                                        <option>Perawatan Bayi & Anak</option>
                                        <option>Pemeriksaan Laboratorium</option>
                                        <option>Sewa Oksigen</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Pesan</label>
                                    <textarea rows={4} placeholder="Tuliskan kebutuhan atau pertanyaan Anda"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    KIRIM PESAN <Send size={18} style={{ marginLeft: '10px' }} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.mapWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {/* Mock Map with Oase Medika styling */}
                    <div className={styles.mockMap}>
                        <div className={styles.mapPlaceholder}>
                            <MapPin size={48} color="var(--primary-orange)" />
                            <h3>Peta Lokasi Klinik</h3>
                            <p>Oase Medika Klinik Kupang</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
