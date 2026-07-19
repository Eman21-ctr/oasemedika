"use client";

import React, { useState, useEffect } from "react";
import { storage, AboutContent, AboutPoint } from "@/lib/storage";
import { Plus, Edit2, Trash2, Save, Info } from "lucide-react";

const AboutAdminPage = () => {
    const [about, setAbout] = useState<AboutContent | null>(null);
    const [success, setSuccess] = useState(false);
    const [editingPoint, setEditingPoint] = useState<AboutPoint | null>(null);

    useEffect(() => {
        setAbout(storage.getAbout());
    }, []);

    const handleSaveMain = (e: React.FormEvent) => {
        e.preventDefault();
        if (about) {
            storage.saveAbout(about);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }
    };

    const handleEditPoint = (point: AboutPoint) => {
        setEditingPoint({ ...point });
    };

    const handleDeletePoint = (id: string) => {
        if (about && confirm("Hapus poin keunggulan ini?")) {
            const updatedPoints = about.valuePoints.filter(p => p.id !== id);
            const updatedAbout = { ...about, valuePoints: updatedPoints };
            setAbout(updatedAbout);
            storage.saveAbout(updatedAbout);
        }
    };

    const handleSavePoint = () => {
        if (about && editingPoint) {
            let updatedPoints;
            if (about.valuePoints.find(p => p.id === editingPoint.id)) {
                updatedPoints = about.valuePoints.map(p => p.id === editingPoint.id ? editingPoint : p);
            } else {
                updatedPoints = [...about.valuePoints, { ...editingPoint, id: Date.now().toString() }];
            }
            const updatedAbout = { ...about, valuePoints: updatedPoints };
            setAbout(updatedAbout);
            storage.saveAbout(updatedAbout);
            setEditingPoint(null);
        }
    };

    const handleAddPoint = () => {
        setEditingPoint({
            id: 'new',
            icon: '✨',
            title: '',
            description: ''
        });
    };

    if (!about) return null;

    return (
        <div>
            <div className="pageHeader">
                <h1 className="pageTitle">Kelola Tentang Kami</h1>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {/* Main Content Form */}
                <div className="adminCard">
                    <h2 style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>Konten Utama</h2>
                    <form onSubmit={handleSaveMain}>
                        <div className="formGroup">
                            <label className="formLabel">Label Seksi</label>
                            <input
                                type="text"
                                className="formInput"
                                value={about.label}
                                onChange={(e) => setAbout({ ...about, label: e.target.value })}
                            />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Judul Utama</label>
                            <input
                                type="text"
                                className="formInput"
                                value={about.title}
                                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                            />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Teks Pengantar (Intro)</label>
                            <textarea
                                className="formInput"
                                style={{ minHeight: "100px" }}
                                value={about.intro}
                                onChange={(e) => setAbout({ ...about, intro: e.target.value })}
                            />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Teks Penutup (Conclusion)</label>
                            <textarea
                                className="formInput"
                                style={{ minHeight: "100px" }}
                                value={about.conclusion}
                                onChange={(e) => setAbout({ ...about, conclusion: e.target.value })}
                            />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">URL Gambar</label>
                            <input
                                type="text"
                                className="formInput"
                                value={about.imageUrl}
                                onChange={(e) => setAbout({ ...about, imageUrl: e.target.value })}
                                placeholder="/about-img.png"
                            />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div className="formGroup">
                                <label className="formLabel">Angka Pengalaman (Hero Card)</label>
                                <input
                                    type="text"
                                    className="formInput"
                                    value={about.experienceNumber}
                                    onChange={(e) => setAbout({ ...about, experienceNumber: e.target.value })}
                                />
                            </div>
                            <div className="formGroup">
                                <label className="formLabel">Teks Pengalaman</label>
                                <input
                                    type="text"
                                    className="formInput"
                                    value={about.experienceText}
                                    onChange={(e) => setAbout({ ...about, experienceText: e.target.value })}
                                />
                            </div>
                        </div>

                        {success && (
                            <div style={{ backgroundColor: "#e6f4ea", color: "#1e7e34", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                                Perubahan berhasil disimpan!
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <Save size={18} /> Simpan Konten Utama
                        </button>
                    </form>
                </div>

                {/* Value Points Management */}
                <div className="adminCard">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                        <h2 style={{ fontSize: "1.1rem" }}>Poin Keunggulan (Kenapa Memilih Kami)</h2>
                        <button onClick={handleAddPoint} className="btn btn-primary btn-sm">
                            <Plus size={16} /> Tambah
                        </button>
                    </div>

                    <table className="adminTable">
                        <thead>
                            <tr>
                                <th style={{ width: "50px" }}>Icon</th>
                                <th>Judul</th>
                                <th style={{ width: "100px" }}>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {about.valuePoints.map((point) => (
                                <tr key={point.id}>
                                    <td><span style={{ fontSize: "1.25rem" }}>{point.icon}</span></td>
                                    <td><div style={{ fontWeight: 600 }}>{point.title}</div></td>
                                    <td>
                                        <div style={{ display: "flex", gap: "0.5rem" }}>
                                            <button onClick={() => handleEditPoint(point)} className="btn btn-outline" style={{ padding: "0.4rem" }}>
                                                <Edit2 size={14} />
                                            </button>
                                            <button onClick={() => handleDeletePoint(point.id)} className="btn btn-outline" style={{ padding: "0.4rem", color: "red" }}>
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {editingPoint && (
                        <div style={{
                            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center",
                            zIndex: 1000
                        }}>
                            <div className="adminCard" style={{ width: "100%", maxWidth: "500px" }}>
                                <h2 style={{ marginBottom: "1.5rem" }}>{editingPoint.id === 'new' ? "Tambah Poin" : "Edit Poin"}</h2>
                                <div className="formGroup">
                                    <label className="formLabel">Icon (Emoji)</label>
                                    <input
                                        type="text"
                                        className="formInput"
                                        value={editingPoint.icon}
                                        onChange={(e) => setEditingPoint({ ...editingPoint, icon: e.target.value })}
                                    />
                                </div>
                                <div className="formGroup">
                                    <label className="formLabel">Judul</label>
                                    <input
                                        type="text"
                                        className="formInput"
                                        value={editingPoint.title}
                                        onChange={(e) => setEditingPoint({ ...editingPoint, title: e.target.value })}
                                    />
                                </div>
                                <div className="formGroup">
                                    <label className="formLabel">Deskripsi</label>
                                    <textarea
                                        className="formInput"
                                        style={{ minHeight: "80px" }}
                                        value={editingPoint.description}
                                        onChange={(e) => setEditingPoint({ ...editingPoint, description: e.target.value })}
                                    />
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                                    <button onClick={() => setEditingPoint(null)} className="btn btn-outline">Batal</button>
                                    <button onClick={handleSavePoint} className="btn btn-primary">Simpan Poin</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutAdminPage;
