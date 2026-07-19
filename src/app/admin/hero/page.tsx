"use client";

import React, { useState, useEffect } from "react";
import { storage, HeroContent } from "@/lib/storage";
import { Save } from "lucide-react";

const HeroAdminPage = () => {
    const [hero, setHero] = useState<HeroContent | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setHero(storage.getHero());
    }, []);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (hero) {
            storage.saveHero(hero);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }
    };

    if (!hero) return null;

    return (
        <div>
            <div className="pageHeader">
                <h1 className="pageTitle">Kelola Hero Section</h1>
            </div>

            <div className="adminCard">
                <form onSubmit={handleSave}>
                    <div className="formGroup">
                        <label className="formLabel">Headline Utama</label>
                        <input
                            type="text"
                            className="formInput"
                            value={hero.headline}
                            onChange={(e) => setHero({ ...hero, headline: e.target.value })}
                        />
                    </div>

                    <div className="formGroup">
                        <label className="formLabel">Subheadline</label>
                        <textarea
                            className="formInput"
                            style={{ minHeight: "80px" }}
                            value={hero.subheadline}
                            onChange={(e) => setHero({ ...hero, subheadline: e.target.value })}
                        />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                        <div className="formGroup">
                            <label className="formLabel">Teks Tombol Utama (CTA)</label>
                            <input
                                type="text"
                                className="formInput"
                                value={hero.ctaPrimaryText}
                                onChange={(e) => setHero({ ...hero, ctaPrimaryText: e.target.value })}
                            />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Link Tombol Utama (WA Link)</label>
                            <input
                                type="text"
                                className="formInput"
                                value={hero.ctaPrimaryLink}
                                onChange={(e) => setHero({ ...hero, ctaPrimaryLink: e.target.value })}
                            />
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                        <div className="formGroup">
                            <label className="formLabel">Teks Tombol Sekunder</label>
                            <input
                                type="text"
                                className="formInput"
                                value={hero.ctaSecondaryText}
                                onChange={(e) => setHero({ ...hero, ctaSecondaryText: e.target.value })}
                            />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Link Tombol Sekunder</label>
                            <input
                                type="text"
                                className="formInput"
                                value={hero.ctaSecondaryLink}
                                onChange={(e) => setHero({ ...hero, ctaSecondaryLink: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="formGroup">
                        <label className="formLabel">Background Image URL</label>
                        <input
                            type="text"
                            className="formInput"
                            value={hero.bgUrl}
                            onChange={(e) => setHero({ ...hero, bgUrl: e.target.value })}
                        />
                        <p style={{ fontSize: "0.75rem", color: "#666", marginTop: "0.5rem" }}>
                            Gunakan path gambar (misal: /hero-bg.png) atau URL eksternal mendalam.
                        </p>
                    </div>

                    {success && (
                        <div style={{ backgroundColor: "#e6f4ea", color: "#1e7e34", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                            Perubahan berhasil disimpan!
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Save size={18} /> Simpan Semua Perubahan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HeroAdminPage;
