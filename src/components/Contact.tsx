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
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.186591238475!2d123.62125471479708!3d-10.152188492747169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c5683004abdf98f%3A0x59dd1a591def7715!2sKlinik%20Oase%20Medika!5e0!3m2!1sid!2sid!4v1721380000000!5m2!1sid!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Peta Lokasi Klinik Oase Medika"
                        ></iframe>
                        <div className={styles.mapOverlayLink}>
                            <a
                                href="https://www.google.com/maps/place/Klinik+Oase+Medika/@-10.1521885,123.6234434,17z/data=!3m1!4b1!4m6!3m5!1s0x2c5683004abdf98f:0x59dd1a591def7715!8m2!3d-10.1521885!4d123.6234434!16s%2Fg%2F11zj9zt02k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary glass"
                            >
                                <MapPin size={18} style={{ marginRight: '8px' }} /> Buka di Google Maps
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
