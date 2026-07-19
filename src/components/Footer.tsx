"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.column}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/logo.png"
                                alt="Oase Medika Logo"
                                width={150}
                                height={150}
                                className={styles.logo}
                            />
                        </div>
                        <p className={styles.tagline}>
                            "Melayani Sepenuh Hati"
                        </p>
                        <p className={styles.desc}>
                            Klinik Oase Medika hadir sebagai pusat pelayanan Home Care terkemuka di Kota Kupang, NTT, menghadirkan layanan kesehatan profesional langsung ke rumah Anda.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
                            <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
                            <a href="#" className={styles.socialLink}><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Tautan Cepat</h4>
                        <ul className={styles.links}>
                            <li><Link href="/">Tentang Kami</Link></li>
                            <li><Link href="#layanan">Layanan</Link></li>
                            <li><Link href="#kontak">Kontak Kami</Link></li>
                            <li><Link href="#">Karir</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Layanan Kami</h4>
                        <ul className={styles.links}>
                            <li><Link href="#layanan">Kunjungan Dokter</Link></li>
                            <li><Link href="#layanan">Kunjungan Perawat</Link></li>
                            <li><Link href="#layanan">Sunat Modern</Link></li>
                            <li><Link href="#layanan">Perawatan Luka</Link></li>
                            <li><Link href="#layanan">Sewa Oksigen</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Jam Operasional</h4>
                        <ul className={styles.links}>
                            <li>Senin-Jumat: 08:00 - 20:00 WITA</li>
                            <li>Sabtu: 08:00 - 15:00 WITA</li>
                            <li>Minggu: Tutup</li>
                        </ul>
                        <button onClick={scrollToTop} className={styles.backToTop}>
                            Kembali ke Atas <ArrowUp size={16} />
                        </button>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2025 Klinik Oase Medika. Kota Kupang, NTT. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="#">Kebijakan Privasi</Link>
                        <Link href="#">Syarat & Ketentuan</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
