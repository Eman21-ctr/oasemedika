"use client";

import React, { useEffect, useState } from "react";
import { storage, Service, FAQItem, Testimonial } from "@/lib/storage";
import { Stethoscope, HelpCircle, MessageSquare, ExternalLink } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
    const [stats, setStats] = useState({
        services: 0,
        faqs: 0,
        testimonials: 0
    });

    useEffect(() => {
        setStats({
            services: storage.getServices().length,
            faqs: storage.getFAQs().length,
            testimonials: storage.getTestimonials().length
        });
    }, []);

    const statCards = [
        { name: "Total Layanan", value: stats.services, icon: Stethoscope, color: "#4FA5C7", href: "/admin/services" },
        { name: "Total FAQ", value: stats.faqs, icon: HelpCircle, color: "#5FB3B3", href: "/admin/faq" },
        { name: "Total Testimoni", value: stats.testimonials, icon: MessageSquare, color: "#F5A24D", href: "/admin/testimonials" },
    ];

    return (
        <div>
            <div className="pageHeader">
                <h1 className="pageTitle">Dashboard Ringkasan</h1>
                <Link href="/" target="_blank" className="btn btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    Lihat Website <ExternalLink size={16} />
                </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
                {statCards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <Link href={card.href} key={card.name} style={{ textDecoration: "none" }}>
                            <div className="adminCard" style={{ display: "flex", alignItems: "center", gap: "1.5rem", cursor: "pointer", transition: "transform 0.2s" }}>
                                <div style={{ backgroundColor: card.color + "22", color: card.color, padding: "1rem", borderRadius: "12px" }}>
                                    <Icon size={32} />
                                </div>
                                <div>
                                    <p style={{ color: "#666", fontSize: "0.875rem", marginBottom: "0.25rem" }}>{card.name}</p>
                                    <p style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--neutral-dark)" }}>{card.value}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="adminCard">
                <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Selamat Datang di Panel Admin</h2>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                    Di sini Anda dapat mengelola seluruh konten website Oase Medika Klinik.
                    Gunakan menu di sebelah kiri untuk memperbarui layanan, FAQ, testimoni, atau informasi di halaman beranda.
                    Semua perubahan yang Anda simpan akan langsung terlihat di website utama.
                </p>
            </div>
        </div>
    );
};

export default DashboardPage;
