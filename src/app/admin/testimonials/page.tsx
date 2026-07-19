"use client";

import React, { useState, useEffect } from "react";
import { storage, Testimonial } from "@/lib/storage";
import { Plus, Edit2, Trash2, Star } from "lucide-react";

const TestimonialsAdminPage = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<Partial<Testimonial>>({});
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        setTestimonials(storage.getTestimonials());
    }, []);

    const handleEdit = (item: Testimonial) => {
        setEditingId(item.id);
        setEditForm(item);
        setIsAdding(false);
    };

    const handleDelete = (id: string) => {
        if (confirm("Hapus testimoni ini?")) {
            const updated = testimonials.filter(t => t.id !== id);
            setTestimonials(updated);
            storage.saveTestimonials(updated);
        }
    };

    const handleSave = () => {
        let updated: Testimonial[];
        if (isAdding) {
            const newItem: Testimonial = {
                ...editForm as Testimonial,
                id: Date.now().toString(),
                featured: true
            };
            updated = [...testimonials, newItem];
        } else {
            updated = testimonials.map(t => t.id === editingId ? { ...t, ...editForm } : t);
        }

        setTestimonials(updated);
        storage.saveTestimonials(updated);
        setEditingId(null);
        setIsAdding(false);
        setEditForm({});
    };

    return (
        <div>
            <div className="pageHeader">
                <h1 className="pageTitle">Kelola Testimoni</h1>
                <button onClick={() => { setIsAdding(true); setEditingId('new'); setEditForm({ name: '', location: '', text: '', rating: 5 }); }} className="btn btn-primary">
                    <Plus size={18} /> Tambah Testimoni
                </button>
            </div>

            <div className="adminCard">
                <table className="adminTable">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Lokasi</th>
                            <th>Rating</th>
                            <th>Pesan</th>
                            <th style={{ width: "120px" }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.map((item) => (
                            <tr key={item.id}>
                                <td style={{ fontWeight: 600 }}>{item.name}</td>
                                <td>{item.location}</td>
                                <td>{item.rating} <Star size={12} fill="orange" color="orange" style={{ display: "inline" }} /></td>
                                <td>{item.text.substring(0, 50)}...</td>
                                <td>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        <button onClick={() => handleEdit(item)} className="btn btn-outline" style={{ padding: "0.4rem" }}><Edit2 size={16} /></button>
                                        <button onClick={() => handleDelete(item.id)} className="btn btn-outline" style={{ padding: "0.4rem", color: "red" }}><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editingId && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
                    <div className="adminCard" style={{ width: "100%", maxWidth: "500px" }}>
                        <h2 style={{ marginBottom: "1.5rem" }}>{isAdding ? "Tambah Testimoni" : "Edit Testimoni"}</h2>
                        <div className="formGroup">
                            <label className="formLabel">Nama Pasien</label>
                            <input type="text" className="formInput" value={editForm.name || ''} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Lokasi</label>
                            <input type="text" className="formInput" value={editForm.location || ''} onChange={(e) => setEditForm({ ...editForm, location: e.target.value })} />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Rating (1-5)</label>
                            <input type="number" min="1" max="5" className="formInput" value={editForm.rating || 5} onChange={(e) => setEditForm({ ...editForm, rating: parseInt(e.target.value) })} />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Testimoni</label>
                            <textarea className="formInput" style={{ minHeight: "100px" }} value={editForm.text || ''} onChange={(e) => setEditForm({ ...editForm, text: e.target.value })} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                            <button onClick={() => setEditingId(null)} className="btn btn-outline">Batal</button>
                            <button onClick={handleSave} className="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialsAdminPage;
