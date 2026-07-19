"use client";

export type Service = {
    id: string;
    icon: string;
    title: string;
    tagline: string;
    description: string;
    fullDescription: string;
    imageUrl?: string;
    status: 'active' | 'draft' | 'inactive';
    order: number;
};

export type Testimonial = {
    id: string;
    name: string;
    location: string;
    text: string;
    rating: number;
    featured: boolean;
};

export type FAQItem = {
    id: string;
    question: string;
    answer: string;
    order: number;
};

export type HeroContent = {
    headline: string;
    subheadline: string;
    ctaPrimaryText: string;
    ctaPrimaryLink: string;
    ctaSecondaryText: string;
    ctaSecondaryLink: string;
    bgType: 'image' | 'video';
    bgUrl: string;
};

export type AboutPoint = {
    id: string;
    icon: string;
    title: string;
    description: string;
};

export type AboutContent = {
    label: string;
    title: string;
    intro: string;
    valuePoints: AboutPoint[];
    conclusion: string;
    experienceNumber: string;
    experienceText: string;
    imageUrl: string;
    visi?: string;
    misi?: string[];
    motto?: string;
};

// ── INITIAL DATA ──────────────────────────────────────────────────────────────

const INITIAL_SERVICES: Service[] = [
    {
        id: '1',
        icon: '👨‍⚕️',
        title: 'KUNJUNGAN DOKTER',
        tagline: 'Pemeriksaan & Pengobatan di Rumah',
        description: 'Layanan kunjungan dokter ke rumah untuk memberikan pemeriksaan medis dan pengobatan yang praktis.',
        fullDescription: 'Layanan Kunjungan Dokter Oase Medika dirancang untuk memberikan kenyamanan medis langsung di tempat Anda. Dokter kami akan melakukan pemeriksaan fisik, diagnosis awal, memberikan resep obat, serta merancang rencana perawatan yang sesuai dengan kondisi klinis Anda tanpa harus keluar rumah.',
        imageUrl: '/services/homecare_lansia.png',
        status: 'active',
        order: 1
    },
    {
        id: '2',
        icon: '👩‍⚕️',
        title: 'KUNJUNGAN PERAWAT',
        tagline: 'Pelayanan Keperawatan Profesional',
        description: 'Pemeriksaan rutin, pelayanan keperawatan, dan tindakan kolaboratif langsung di rumah Anda.',
        fullDescription: 'Layanan Kunjungan Perawat kami menghadirkan perawat profesional bersertifikat untuk melayani kebutuhan asuhan keperawatan mandiri maupun kolaboratif (instruksi dokter). Mulai dari pemantauan tanda-tanda vital, pemberian terapi obat, hingga perawatan berkelanjutan untuk menjaga kesehatan Anda dan keluarga.',
        imageUrl: '/services/homecare_lansia.png',
        status: 'active',
        order: 2
    },
    {
        id: '3',
        icon: '✂️',
        title: 'SUNAT MODERN',
        tagline: 'Sirkumsisi Nyaman & Cepat',
        description: 'Pelayanan sunat dengan teknik modern untuk bayi, anak, dan dewasa dengan proses pemulihan cepat.',
        fullDescription: 'Klinik Oase Medika menghadirkan layanan sunat modern menggunakan teknologi terkini yang meminimalkan rasa nyeri, tanpa jahitan berlebih, serta memiliki waktu pemulihan yang sangat cepat. Dilakukan oleh tenaga medis berpengalaman dengan pendekatan ramah untuk menjamin kenyamanan klien.',
        imageUrl: '/services/sunat.png',
        status: 'active',
        order: 3
    },
    {
        id: '4',
        icon: '🩹',
        title: 'PERAWATAN LUKA',
        tagline: 'Teknik Perawatan Modern',
        description: 'Perawatan berbagai jenis luka seperti luka diabetes, luka operasi, luka bakar, dan luka kronis.',
        fullDescription: 'Kami menggunakan teknik "Modern Dressing" untuk merawat luka kronis, luka diabetes (ulkus), luka pasca operasi, dan luka bakar. Teknik ini menjaga kelembapan optimal pada area luka guna merangsang pertumbuhan jaringan baru lebih cepat sekaligus meminimalkan risiko infeksi.',
        imageUrl: '/services/luka.png',
        status: 'active',
        order: 4
    },
    {
        id: '5',
        icon: '🧎',
        title: 'PELAYANAN FISIOTERAPI',
        tagline: 'Rehabilitasi & Pemulihan Fisik',
        description: 'Fisioterapi profesional untuk memulihkan mobilitas, kekuatan tubuh, dan fungsi fisik di rumah.',
        fullDescription: 'Layanan Fisioterapi Home Care membantu pasien memulihkan fungsi gerak tubuh yang terganggu akibat cedera, stroke, pasca operasi, atau faktor usia. Fisioterapis kami akan datang membawa program latihan terarah langsung ke rumah Anda.',
        imageUrl: '/services/fisioterapi.png',
        status: 'active',
        order: 5
    },
    {
        id: '6',
        icon: '⏰',
        title: 'PERAWATAN PASIEN 24 JAM',
        tagline: 'Pendampingan Medis Berkelanjutan',
        description: 'Pelayanan dan pendampingan perawatan pasien di rumah selama 24 jam penuh secara profesional.',
        fullDescription: 'Untuk kondisi yang membutuhkan perhatian konstan, kami menyediakan perawat pendamping (caregiver medis) yang standby di rumah pasien selama 24 jam. Layanan ini memastikan pemenuhan kebutuhan medis, pemberian obat terjadwal, dan penanganan responsif setiap saat.',
        imageUrl: '/services/homecare_lansia.png',
        status: 'active',
        order: 6
    },
    {
        id: '7',
        icon: '💉',
        title: 'PEMASANGAN NGT & KATETER',
        tagline: 'Tindakan Medis Khusus di Rumah',
        description: 'Pemasangan serta perawatan selang makan (NGT) dan selang urine (kateter) secara steril.',
        fullDescription: 'Tindakan medis khusus seperti pemasangan atau penggantian NGT (selang makan) dan kateter urine dilakukan langsung di rumah Anda oleh perawat terlatih. Kami menjamin kebersihan dan sterilitas alat sesuai standar operasional medis demi mencegah infeksi saluran kemih atau komplikasi lainnya.',
        imageUrl: '/services/infus_tindakan.png',
        status: 'active',
        order: 7
    },
    {
        id: '8',
        icon: '👶',
        title: 'PERAWATAN BAYI & ANAK',
        tagline: 'Tumbuh Kembang & Kesehatan Anak',
        description: 'Layanan memandikan bayi baru lahir, perawatan tali pusat, serta stimulasi tumbuh kembang anak.',
        fullDescription: 'Layanan perawatan bayi (baby care) kami mendampingi orang tua dalam merawat buah hati, mulai dari memandikan bayi, perawatan tali pusat agar cepat kering dan steril, pijat bayi untuk stimulasi relaksasi, hingga edukasi nutrisi tumbuh kembang anak.',
        imageUrl: '/services/bayi.png',
        status: 'active',
        order: 8
    },
    {
        id: '9',
        icon: '🔬',
        title: 'PEMERIKSAAN LABORATORIUM',
        tagline: 'Pengambilan Sampel Darah & Tes Lab',
        description: 'Pemeriksaan laboratorium dengan pengambilan sampel langsung di rumah untuk efisiensi waktu Anda.',
        fullDescription: 'Dapatkan hasil uji laboratorium tanpa harus mengantre. Petugas kami akan mengunjungi rumah Anda untuk melakukan pengambilan sampel darah, urine, atau sampel lainnya, lalu membawanya ke laboratorium mitra terpercaya untuk dianalisis.',
        imageUrl: '/services/lab.png',
        status: 'active',
        order: 9
    },
    {
        id: '10',
        icon: '💨',
        title: 'SEWA OKSIGEN',
        tagline: 'Penyediaan & Pengantaran Oksigen',
        description: 'Penyewaan tabung oksigen beserta kelengkapannya untuk mendukung kebutuhan pernapasan pasien.',
        fullDescription: 'Kami menyediakan layanan sewa tabung oksigen beserta regulator dan kanul hidung bagi pasien yang membutuhkan dukungan pernapasan di rumah. Layanan ini mencakup pengantaran langsung ke alamat Anda dan panduan penggunaan yang aman.',
        imageUrl: '/services/oksigen.png',
        status: 'active',
        order: 10
    }
];

const INITIAL_FAQS: FAQItem[] = [
    {
        id: '1',
        question: "Apakah layanan Home Care tersedia 24 jam?",
        answer: "Ya, kami menyediakan pelayanan perawatan pasien di rumah selama 24 jam penuh untuk pasien yang memerlukan pendampingan medis intensif dan berkelanjutan.",
        order: 1
    },
    {
        id: '2',
        question: "Berapa lama proses pemulihan sunat modern?",
        answer: "Proses pemulihan sunat modern relatif cepat. Biasanya dalam 1-3 hari sudah bisa beraktivitas ringan, dan pemulihan sempurna biasanya memakan waktu 1-2 minggu tergantung metode yang digunakan dan kondisi fisik klien.",
        order: 2
    },
    {
        id: '3',
        question: "Apakah tindakan medis seperti pemasangan infus atau kateter bisa dilakukan di rumah?",
        answer: "Bisa, tim perawat profesional kami siap melakukan pemasangan serta perawatan selang NGT dan kateter urine di rumah dengan standar higienis dan keamanan medis yang ketat.",
        order: 3
    },
    {
        id: '4',
        question: "Area mana saja yang dijangkau oleh layanan Oase Medika?",
        answer: "Saat ini kami fokus melayani area Kota Kupang, Provinsi Nusa Tenggara Timur dan sekitarnya, dengan komitmen untuk langsung datang ke lokasi kediaman Anda.",
        order: 4
    }
];

const INITIAL_TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Ibu Ratna',
        location: 'Kupang',
        text: 'Layanan Home Care dari Oase Medika luar biasa. Perawat sangat sopan, profesional, dan telaten saat merawat luka pasca operasi ibu saya.',
        rating: 5,
        featured: true
    },
    {
        id: '2',
        name: 'Bapak Heru',
        location: 'Oebobo, Kupang',
        text: 'Proses sunat modern untuk anak saya sangat praktis, minim nyeri, dan pemulihannya cepat sekali. Terima kasih Oase Medika!',
        rating: 5,
        featured: true
    }
];

const INITIAL_ABOUT: AboutContent = {
    label: "Tentang Kami",
    title: "SEKILAS TENTANG KLINIK OASE MEDIKA",
    intro: "Klinik Oase Medika mulai digagas pada tanggal 13 Mei 2023 di Kota Kupang, Provinsi Nusa Tenggara Timur, berangkat dari keterpanggilan untuk menghadirkan pelayanan kesehatan yang berkualitas, praktis, mudah, responsif, dan dapat diakses langsung ke rumah maupun tempat klien berada. Kami beroperasi sebagai klinik umum yang menyelenggarakan pelayanan kesehatan dasar secara menyeluruh, dengan prioritas utama pada layanan Home Care.",
    valuePoints: [
        {
            id: '1',
            icon: "O",
            title: "OPTIMIS",
            description: "Selalu menatap masa depan dengan keyakinan untuk kesembuhan dan pemulihan kesehatan klien."
        },
        {
            id: '2',
            icon: "A",
            title: "AKUNTABEL",
            description: "Menyelenggarakan pelayanan medis dasar dan keperawatan yang dapat dipertanggungjawabkan sesuai standar profesi."
        },
        {
            id: '3',
            icon: "S",
            title: "SETIA KAWAN",
            description: "Menjadi mitra dan sahabat yang suportif dalam menemani proses pemulihan serta perawatan klien."
        },
        {
            id: '4',
            icon: "E",
            title: "EMPATI",
            description: "Melayani sepenuh hati dengan kepedulian yang tulus, memahami kekhawatiran serta kenyamanan pasien."
        }
    ],
    conclusion: "Seluruh jajaran Klinik Oase Medika memiliki komitmen dan dedikasi tinggi untuk satu tujuan yang sama, yaitu mewujudkan pelayanan kesehatan berkualitas bagi setiap klien.",
    experienceNumber: "2023",
    experienceText: "DIGAGAS SEJAK MEI 2023",
    imageUrl: "/about-doctor.png",
    visi: "Menjadi pusat pelayanan Home Care terkemuka dan terpercaya dengan pelayanan kesehatan berkualitas tinggi.",
    misi: [
        "Meningkatkan komitmen untuk menyediakan pelayanan Home Care berkualitas tinggi, aman, dan nyaman kepada setiap klien.",
        "Meningkatkan kualitas SDM, sarana-prasarana, serta standar perawatan dan responsif terhadap perubahan informasi juga ilmu kesehatan terbaru untuk peningkatan mutu pelayanan kesehatan.",
        "Memberikan jaminan kesejahteraan bagi karyawan yang berdedikasi tinggi.",
        "Membangun kemitraan dengan profesional kesehatan terkait untuk meningkatkan pelayanan bagi pasien.",
        "Meningkatkan penghargaan kepada setiap mitra."
    ],
    motto: "Melayani Sepenuh Hati"
};

// ── STORAGE API ───────────────────────────────────────────────────────────────

export const storage = {
    getServices: (): Service[] => {
        if (typeof window === 'undefined') return INITIAL_SERVICES;
        const data = localStorage.getItem('oase_services');
        if (!data) return INITIAL_SERVICES;
        try {
            const parsed: Service[] = JSON.parse(data);
            let updated = false;
            const merged = parsed.map(item => {
                const initial = INITIAL_SERVICES.find(i => i.id === item.id);
                if (initial && item.imageUrl !== initial.imageUrl) {
                    item.imageUrl = initial.imageUrl;
                    updated = true;
                }
                return item;
            });
            if (updated) {
                localStorage.setItem('oase_services', JSON.stringify(merged));
            }
            return merged;
        } catch (e) {
            return INITIAL_SERVICES;
        }
    },
    saveServices: (services: Service[]) => {
        localStorage.setItem('oase_services', JSON.stringify(services));
    },

    // Hero
    getHero: (): HeroContent => {
        const defaultHero: HeroContent = {
            headline: 'Melayani Sepenuh Hati',
            subheadline: 'Layanan kesehatan Home Care profesional langsung ke rumah Anda.',
            ctaPrimaryText: 'KONSULTASI SEKARANG',
            ctaPrimaryLink: 'https://wa.me/6285283315033',
            ctaSecondaryText: 'LIHAT LAYANAN KAMI',
            ctaSecondaryLink: '#layanan',
            bgType: 'image',
            bgUrl: '/hero-bg.png'
        };
        if (typeof window === 'undefined') return defaultHero;
        const data = localStorage.getItem('oase_hero');
        return data ? JSON.parse(data) : defaultHero;
    },
    saveHero: (hero: HeroContent) => {
        localStorage.setItem('oase_hero', JSON.stringify(hero));
    },

    // FAQs
    getFAQs: (): FAQItem[] => {
        if (typeof window === 'undefined') return INITIAL_FAQS;
        const data = localStorage.getItem('oase_faqs');
        return data ? JSON.parse(data) : INITIAL_FAQS;
    },
    saveFAQs: (faqs: FAQItem[]) => {
        localStorage.setItem('oase_faqs', JSON.stringify(faqs));
    },

    // Testimonials
    getTestimonials: (): Testimonial[] => {
        if (typeof window === 'undefined') return INITIAL_TESTIMONIALS;
        const data = localStorage.getItem('oase_testimonials');
        return data ? JSON.parse(data) : INITIAL_TESTIMONIALS;
    },
    saveTestimonials: (testimonials: Testimonial[]) => {
        localStorage.setItem('oase_testimonials', JSON.stringify(testimonials));
    },

    // About
    getAbout: (): AboutContent => {
        if (typeof window === 'undefined') return INITIAL_ABOUT;
        const data = localStorage.getItem('oase_about');
        return data ? JSON.parse(data) : INITIAL_ABOUT;
    },
    saveAbout: (about: AboutContent) => {
        localStorage.setItem('oase_about', JSON.stringify(about));
    }
};
