"use client";

import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Stethoscope, CheckCircle, Shield, Award, ClipboardCheck, MessageCircle, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { storage, Service } from "@/lib/storage";
import styles from "./LayananDetail.module.css";
import { motion } from "framer-motion";

interface ServiceDetailExtra {
    benefits: string[];
    procedures: string[];
    indications?: string[];
    prep?: string[];
}

const SERVICES_EXTRA_DATA: Record<string, ServiceDetailExtra> = {
    '1': { // KUNJUNGAN DOKTER
        benefits: [
            "Pemeriksaan langsung di rumah tanpa perlu memikirkan transportasi atau antrean panjang di klinik.",
            "Waktu konsultasi yang lebih personal, santai, dan mendalam bersama dokter keluarga.",
            "Cocok untuk lansia, pasien pasca-stroke, anak-anak, atau siapa saja yang memerlukan istirahat total di rumah.",
            "Dokter dapat mengamati lingkungan rumah pasien untuk memberikan saran kesehatan preventif yang lebih akurat."
        ],
        procedures: [
            "Pendaftaran dan Anamnesa: Anda mendaftarkan keluhan melalui WhatsApp Oase Medika.",
            "Konfirmasi Jadwal: Tim admin mengonfirmasi waktu kunjungan dokter sesuai kesepakatan.",
            "Pemeriksaan Fisik: Dokter datang ke rumah melakukan pemeriksaan tanda vital (tekanan darah, suhu, nadi) dan pemeriksaan fisik menyeluruh.",
            "Diagnosis & Terapi: Dokter memberikan diagnosis awal, meresepkan obat, atau memberikan rujukan jika diperlukan tindakan penunjang lebih lanjut.",
            "Edukasi Kesehatan: Dokter memberikan saran pola makan, istirahat, serta instruksi perawatan di rumah bagi keluarga."
        ],
        indications: ["Demam, flu, batuk berkelanjutan", "Kontrol rutin penyakit kronis (Hipertensi, Diabetes)", "Konsultasi kesehatan umum", "Pasien dengan keterbatasan fisik/mobilitas"],
        prep: ["Siapkan riwayat medis sebelumnya (buku kontrol, hasil lab, sisa obat yang dikonsumsi)", "Siapkan KTP/Identitas pasien untuk pendataan resep"]
    },
    '2': { // KUNJUNGAN PERAWAT
        benefits: [
            "Pelayanan keperawatan profesional yang berlisensi dan bersertifikat resmi.",
            "Pendampingan dan asuhan keperawatan mandiri maupun kolaboratif (sesuai instruksi dokter).",
            "Membantu memantau perkembangan kesehatan harian pasien secara teratur.",
            "Mengurangi frekuensi kunjungan bolak-balik ke rumah sakit untuk tindakan perawatan rutin."
        ],
        procedures: [
            "Penilaian Awal (Assessment): Perawat meninjau instruksi dokter dan mencatat kondisi terkini pasien.",
            "Tindakan Keperawatan: Melakukan tindakan sesuai kebutuhan (seperti memandikan pasien, mengganti verban, memberi obat via injeksi).",
            "Pemantauan Tanda Vital: Memeriksa tensi, gula darah sewaktu, saturasi oksigen, dan denyut nadi.",
            "Dokumentasi & Laporan: Perawat mencatat perkembangan kondisi pasien untuk dilaporkan ke dokter penanggung jawab."
        ],
        indications: ["Pasien pasca-operasi yang butuh pemantauan medis", "Pasien stroke yang memerlukan bantuan aktivitas harian", "Kebutuhan pemantauan tanda vital rutin di rumah", "Pemberian obat suntik/terapi atas instruksi dokter"],
        prep: ["Sediakan tempat tidur yang nyaman dan bersih untuk pasien", "Siapkan lembar instruksi medis dari dokter penanggung jawab jika ada"]
    },
    '3': { // SUNAT MODERN
        benefits: [
            "Menggunakan metode sirkumsisi modern (seperti Klamp atau Lem/Laser) yang minim rasa nyeri.",
            "Proses tindakan berlangsung cepat, biasanya hanya 15-20 menit.",
            "Tanpa jahitan berat atau tanpa perban tebal (pada metode tertentu), meminimalkan risiko infeksi.",
            "Proses pemulihan sangat cepat, anak/dewasa bisa langsung memakai celana sunat longgar dan beraktivitas ringan."
        ],
        procedures: [
            "Konsultasi awal & Pengukuran: Menentukan metode sunat yang paling cocok sesuai usia dan kondisi fisik.",
            "Desinfeksi & Anestesi Lokal: Area tindakan dibersihkan secara steril, lalu diberikan anestesi lokal yang nyaman.",
            "Proses Sirkumsisi: Dokter/Operator melakukan pemotongan kulup dengan presisi menggunakan alat metode modern.",
            "Perawatan Pasca Tindakan: Area sunat diberikan pelindung khusus atau lem medis.",
            "Edukasi & Obat: Pasien diberikan obat pereda nyeri dan petunjuk perawatan luka sunat di rumah."
        ],
        indications: ["Bayi laki-laki", "Anak-anak usia sekolah", "Pria dewasa", "Kondisi medis tertentu seperti fimosis atau balanitis"],
        prep: ["Mandi bersih sebelum tindakan", "Siapkan celana sunat longgar atau sarung", "Pastikan kondisi fisik anak dalam keadaan fit (tidak sedang demam tinggi)"]
    },
    '4': { // PERAWATAN LUKA
        benefits: [
            "Menggunakan konsep 'Modern Wound Dressing' yang menjaga kelembapan luka agar jaringan baru tumbuh lebih cepat.",
            "Mengurangi rasa nyeri saat penggantian balutan karena bahan tidak menempel pada dasar luka.",
            "Mencegah infeksi silang dan meminimalkan terbentuknya jaringan parut (scar).",
            "Menangani berbagai jenis luka kronis yang sulit sembuh dengan metode balutan konvensional."
        ],
        procedures: [
            "Pembersihan Luka (Debridement): Luka dibersihkan dengan cairan steril khusus untuk membuang jaringan mati dan kuman.",
            "Penilaian Luka (Wound Assessment): Mengukur ukuran luka, kedalaman, dan tingkat eksudat (cairan luka).",
            "Aplikasi Dressing Modern: Memilih jenis balutan modern (seperti alginate, foam, atau hydrogel) sesuai kondisi luka.",
            "Fiksasi Balutan: Luka ditutup dengan plester steril kedap air agar pasien tetap bisa beraktivitas dengan nyaman.",
            "Edukasi Gizi & Jadwal Kontrol: Memberikan saran nutrisi tinggi protein untuk mempercepat pemulihan jaringan."
        ],
        indications: ["Luka diabetes (ulkus diabetikum)", "Luka dekubitus (luka tekan akibat tirah baring lama)", "Luka pasca-operasi yang terbuka", "Luka bakar ringan hingga sedang"],
        prep: ["Siapkan peralatan kebersihan pribadi di sekitar pasien", "Jaga kebersihan area tidur pasien untuk mencegah paparan debu berlebih"]
    },
    '5': { // PELAYANAN FISIOTERAPI
        benefits: [
            "Program terapi gerak yang disesuaikan secara personal untuk pemulihan fungsi motorik tubuh.",
            "Dilakukan oleh fisioterapis berlisensi langsung di rumah, sangat membantu pasien dengan mobilitas terbatas.",
            "Meningkatkan kekuatan otot, kelenturan sendi, dan koordinasi keseimbangan tubuh.",
            "Membantu meningkatkan kemandirian pasien dalam melakukan aktivitas sehari-hari."
        ],
        procedures: [
            "Pemeriksaan Fungsi Gerak: Fisioterapis memeriksa kekuatan otot, lingkup gerak sendi, dan keluhan nyeri pasien.",
            "Penyusunan Program Terapi: Merancang rencana latihan gerak yang sesuai dengan target pemulihan pasien.",
            "Sesi Terapi Gerak: Melakukan latihan peregangan, penguatan, atau stimulasi saraf menggunakan alat terapi portabel jika diperlukan.",
            "Evaluasi & PR Latihan: Fisioterapis memberikan instruksi latihan mandiri yang aman dilakukan pasien bersama keluarga di sela jadwal kunjungan."
        ],
        indications: ["Rehabilitasi pasca-stroke", "Pemulihan pasca-cedera olahraga atau kecelakaan", "Kekakuan sendi pada lansia", "Nyeri punggung kronis (LBP) atau nyeri leher"],
        prep: ["Gunakan pakaian yang longgar dan nyaman untuk bergerak", "Sediakan ruang yang cukup luas dan aman di rumah untuk melakukan latihan fisik"]
    },
    '6': { // PERAWATAN PASIEN 24 JAM
        benefits: [
            "Pendampingan medis dan non-medis secara terus-menerus selama 24 jam penuh di rumah.",
            "Menjamin pemberian obat, makan, dan kebutuhan dasar pasien terpenuhi tepat waktu.",
            "Memberikan rasa aman luar biasa bagi keluarga karena pasien selalu berada di bawah pengawasan perawat terlatih.",
            "Respons cepat terhadap perubahan kondisi darurat pasien secara langsung."
        ],
        procedures: [
            "Rencana Asuhan Harian: Menyusun jadwal aktivitas pasien mulai dari mandi, makan, minum obat, hingga latihan gerak ringan.",
            "Pendampingan Personal: Perawat bersiaga penuh di samping pasien untuk membantu mobilitas dan eliminasi (ke toilet/pispot).",
            "Pemantauan Klinis Kontinu: Memeriksa tanda vital secara berkala sepanjang hari dan malam.",
            "Pelaporan Berkala ke Dokter & Keluarga: Memberikan laporan tertulis mengenai kondisi asupan nutrisi, pola eliminasi, dan respons pengobatan pasien."
        ],
        indications: ["Pasien lansia dengan demensia atau ketergantungan penuh", "Pasien pasca-operasi besar yang membutuhkan observasi ketat", "Pasien dengan penyakit stadium lanjut (perawatan paliatif)", "Pasien dengan disabilitas berat"],
        prep: ["Siapkan kamar khusus untuk perawat beristirahat di sela-sela waktu jaga", "Sediakan perlengkapan obat-obatan dan konsumsi pasien yang memadai"]
    },
    '7': { // PEMASANGAN NGT & KATETER
        benefits: [
            "Tindakan dilakukan dengan teknik aseptik dan steril penuh untuk meminimalkan risiko infeksi saluran kemih atau lambung.",
            "Dilakukan oleh perawat berpengalaman yang terampil memasang selang dengan tingkat kenyamanan maksimal.",
            "Menghindarkan pasien yang lemah dari keharusan dibawa ke rumah sakit hanya untuk ganti selang.",
            "Edukasi mendalam bagi keluarga tentang cara pemberian nutrisi via NGT atau pembuangan urine bag."
        ],
        procedures: [
            "Persiapan Alat Steril: Menyiapkan selang NGT/Kateter baru berkualitas medis sesuai ukuran pasien.",
            "Posisi & Desinfeksi: Memposisikan pasien dengan nyaman dan melakukan desinfeksi pada area pemasangan.",
            "Pemasangan Selang: Memasukkan selang secara perlahan dengan teknik steril dan meminimalkan rasa tidak nyaman.",
            "Fiksasi & Pengujian: Menguji ketepatan posisi selang (memastikan masuk lambung/kandung kemih) dan memfiksasinya dengan plester.",
            "Instruksi Perawatan: Memberikan panduan kebersihan selang kepada keluarga pendamping."
        ],
        indications: ["Pasien yang mengalami kesulitan menelan makanan (butuh NGT)", "Pasien stroke dengan gangguan makan", "Pasien dengan retensi urine (kesulitan buang air kecil)", "Pasien bedridden total yang membutuhkan pemantauan cairan keluar"],
        prep: ["Siapkan tisu basah, tisu kering, dan perlak pengalas", "Pastikan pasien dalam kondisi tenang sebelum tindakan dimulai"]
    },
    '8': { // PERAWATAN BAYI & ANAK
        benefits: [
            "Edukasi langsung dari perawat/bidan berpengalaman mengenai teknik perawatan bayi baru lahir (newborn).",
            "Perawatan tali pusat yang steril untuk mencegah infeksi berat pada bayi.",
            "Pijat bayi (baby massage) untuk melancarkan sirkulasi darah, meningkatkan kualitas tidur, dan mengatasi kembung.",
            "Membantu ibu baru merasa lebih percaya diri dan tenang dalam merawat buah hati."
        ],
        procedures: [
            "Edukasi Mandi Bayi: Mengajarkan/melakukan pemandian bayi dengan suhu air hangat yang tepat dan aman.",
            "Perawatan Tali Pusat: Membersihkan tali pusat bayi menggunakan kasa steril dan menjaga areanya tetap kering.",
            "Pijat Bayi Relaksasi: Melakukan pijatan lembut pada tubuh bayi dengan minyak khusus bayi untuk stimulasi sensorik-motorik.",
            "Konseling Nutrisi & ASI: Memberikan konsultasi seputar pelekatan menyusui (laktasi) dan tips menjaga produksi ASI."
        ],
        indications: ["Bayi baru lahir (newborn) usia 0-28 hari", "Ibu pasca-melahirkan yang membutuhkan bimbingan perawatan bayi", "Bayi yang sering rewel/susah tidur (butuh pijat relaksasi)", "Bayi dengan kolik atau gangguan pencernaan ringan"],
        prep: ["Sediakan bak mandi bayi, air hangat, handuk bersih, dan sabun bayi", "Siapkan pakaian ganti bayi dan minyak telon/baby oil"]
    },
    '9': { // PEMERIKSAAN LABORATORIUM
        benefits: [
            "Pengambilan sampel darah, urine, atau swab langsung di rumah tanpa perlu mengantre lama.",
            "Menghemat waktu dan energi pasien, terutama bagi lansia atau pasien bedridden.",
            "Hasil tes dikirim langsung secara digital via WhatsApp atau email dengan cepat dan akurat.",
            "Bekerja sama dengan laboratorium rujukan berstandar tinggi dan bersertifikasi."
        ],
        procedures: [
            "Registrasi Tes Lab: Menentukan jenis tes darah/urine yang dibutuhkan sesuai resep dokter atau keinginan skrining mandiri.",
            "Pengambilan Sampel (Phlebotomy): Petugas medis datang ke rumah, melakukan desinfeksi area kulit, dan mengambil sampel darah/urine menggunakan alat sekali pakai.",
            "Transportasi Sampel: Sampel disimpan dalam cooler box khusus dengan suhu terjaga untuk dibawa ke lab pusat.",
            "Pengiriman Hasil: Hasil resmi dikeluarkan pihak laboratorium dalam bentuk PDF dan dikirimkan langsung ke nomor WhatsApp Anda."
        ],
        indications: ["Skrining kesehatan berkala (Medical Check-Up mandiri)", "Pemeriksaan gula darah, kolesterol, atau asam urat rutin", "Tes fungsi ginjal, hati, atau hematologi lengkap atas rujukan dokter", "Tes infeksi seperti demam berdarah atau tifus"],
        prep: ["Pahami aturan puasa (biasanya 10-12 jam sebelum tes darah tertentu)", "Minum air putih yang cukup agar pembuluh darah mudah ditemukan"]
    },
    '10': { // SEWA OKSIGEN
        benefits: [
            "Penyediaan tabung oksigen medis lengkap beserta regulator dan nasal kanul steril siap pakai.",
            "Layanan antar-jemput tabung langsung ke depan pintu rumah Anda.",
            "Instalasi awal dan demo penggunaan aman yang dipandu oleh petugas berpengalaman.",
            "Sangat membantu untuk terapi oksigen jangka pendek maupun panjang bagi pasien dengan sesak napas."
        ],
        procedures: [
            "Pemesanan & Verifikasi Kebutuhan: Mengonfirmasi kebutuhan tabung oksigen (ukuran kecil/besar) dan kelengkapannya.",
            "Pengantaran & Instalasi: Petugas mengantarkan peralatan oksigen ke rumah pasien dan merakitnya.",
            "Edukasi Aliran Oksigen: Mengajarkan cara membaca manometer tekanan dan cara mengatur laju aliran oksigen (liter per menit) sesuai instruksi dokter.",
            "Pengembalian/Refill: Petugas mengambil kembali peralatan setelah masa sewa habis, atau melakukan penukaran tabung kosong jika membutuhkan pengisian ulang."
        ],
        indications: ["Pasien dengan penyakit paru kronis (PPOK)", "Pasien dengan sesak napas akut/kronis akibat kondisi jantung atau paru", "Pasien pasca-perawatan RS yang membutuhkan terapi oksigen berkelanjutan", "Kebutuhan medis darurat di rumah"],
        prep: ["Pastikan terdapat ruang aman di rumah yang jauh dari sumber api/panas untuk menaruh tabung oksigen", "Siapkan air steril (distilled water) untuk tabung humidifier oksigen"]
    }
};

export default function LayananDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const services = storage.getServices();
        const found = services.find((s) => s.id === id);
        setService(found || null);
        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    if (!service) {
        return (
            <div className={styles.notFoundContainer}>
                <Navbar />
                <div className="container" style={{ padding: "6rem 1rem", textAlign: "center" }}>
                    <Info size={48} className={styles.notFoundIcon} />
                    <h2>Layanan Tidak Ditemukan</h2>
                    <p>Maaf, layanan kesehatan yang Anda cari tidak tersedia atau telah dinonaktifkan.</p>
                    <Link href="/#layanan" className={styles.backBtn}>
                        <ArrowLeft size={16} /> Kembali ke Halaman Utama
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const extra = SERVICES_EXTRA_DATA[service.id];
    const waLink = `https://wa.me/6285283315033?text=Halo%20Oase%20Medika,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20layanan%20${encodeURIComponent(service.title)}`;

    return (
        <div className={styles.detailPage}>
            <Navbar />

            {/* Header / Hero Section */}
            <div className={styles.heroSection}>
                <div className={styles.heroBg}>
                    <Image
                        src={service.imageUrl || "/hero-bg.png"}
                        alt={service.title}
                        fill
                        priority
                        className={styles.heroBgImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className="container">
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/#layanan" className={styles.backLink}>
                            <ArrowLeft size={16} /> Kembali ke Layanan
                        </Link>
                        <span className={styles.badge}>{service.tagline}</span>
                        <h1 className={styles.title}>{service.title}</h1>
                        <p className={styles.description}>{service.description}</p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Layout */}
            <section className={styles.mainContent}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        
                        {/* Left Column: Core Medical Content */}
                        <div className={styles.leftCol}>
                            
                            {/* Overview Box */}
                            <motion.div
                                className={styles.contentCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className={styles.cardHeader}>
                                    <Stethoscope size={24} className={styles.sectionIcon} />
                                    <h2>Tentang Layanan</h2>
                                </div>
                                <p className={styles.fullDesc}>{service.fullDescription}</p>
                            </motion.div>

                            {/* Keunggulan / Benefits Section */}
                            {extra?.benefits && (
                                <motion.div
                                    className={styles.contentCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <div className={styles.cardHeader}>
                                        <Award size={24} className={styles.sectionIcon} />
                                        <h2>Mengapa Memilih Layanan Kami?</h2>
                                    </div>
                                    <div className={styles.benefitsList}>
                                        {extra.benefits.map((benefit, i) => (
                                            <div key={i} className={styles.benefitItem}>
                                                <CheckCircle size={20} className={styles.checkIcon} />
                                                <p>{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Alur / Procedures Section */}
                            {extra?.procedures && (
                                <motion.div
                                    className={styles.contentCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className={styles.cardHeader}>
                                        <ClipboardCheck size={24} className={styles.sectionIcon} />
                                        <h2>Prosedur & Alur Layanan Medis</h2>
                                    </div>
                                    <div className={styles.procedureSteps}>
                                        {extra.procedures.map((step, i) => {
                                            const [title, desc] = step.split(":");
                                            return (
                                                <div key={i} className={styles.stepItem}>
                                                    <div className={styles.stepNumber}>
                                                        <span>{i + 1}</span>
                                                    </div>
                                                    <div className={styles.stepText}>
                                                        <h3>{title}</h3>
                                                        {desc && <p>{desc.trim()}</p>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Right Column: Sidebar (Indications, Prep, & CTA) */}
                        <div className={styles.rightCol}>
                            
                            {/* CTA Card */}
                            <motion.div
                                className={`${styles.contentCard} ${styles.ctaCard}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <Shield size={36} className={styles.shieldIcon} />
                                <h3>Butuh Layanan Ini?</h3>
                                <p>Konsultasikan keluhan medis keluarga Anda bersama tim dokter dan perawat Oase Medika sekarang.</p>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.waButton}
                                >
                                    <MessageCircle size={20} /> Konsultasi Via WhatsApp
                                </a>
                                <span className={styles.ctaNote}>Respon Cepat & Ramah</span>
                            </motion.div>

                            {/* Indikasi Medis */}
                            {extra?.indications && (
                                <motion.div
                                    className={styles.contentCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={styles.cardHeader}>
                                        <Info size={20} className={styles.sidebarSectionIcon} />
                                        <h3>Kondisi yang Membutuhkan</h3>
                                    </div>
                                    <ul className={styles.sidebarList}>
                                        {extra.indications.map((ind, i) => (
                                            <li key={i}>{ind}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {/* Persiapan Pasien */}
                            {extra?.prep && (
                                <motion.div
                                    className={styles.contentCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={styles.cardHeader}>
                                        <ClipboardCheck size={20} className={styles.sidebarSectionIcon} />
                                        <h3>Persiapan Sebelum Tindakan</h3>
                                    </div>
                                    <ul className={styles.sidebarList}>
                                        {extra.prep.map((pr, i) => (
                                            <li key={i}>{pr}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppFloating />
        </div>
    );
}
