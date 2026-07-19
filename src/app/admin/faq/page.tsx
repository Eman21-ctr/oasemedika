"use client";

import React, { useState, useEffect } from "react";
import { storage, FAQItem } from "@/lib/storage";
import { Plus, Edit2, Trash2, Save, X } from "lucide-react";

const FAQAdminPage = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<Partial<FAQItem>>({});
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        setFaqs(storage.getFAQs());
    }, []);

    const handleEdit = (faq: FAQItem) => {
        setEditingId(faq.id);
        setEditForm(faq);
        setIsAdding(false);
    };

    const handleDelete = (id: string) => {
        if (confirm("Hapus FAQ ini?")) {
            const updated = faqs.filter(f => f.id !== id);
            setFaqs(updated);
            storage.saveFAQs(updated);
        }
    };

    const handleSave = () => {
        let updated: FAQItem[];
        if (isAdding) {
            const newItem: FAQItem = {
                ...editForm as FAQItem,
                id: Date.now().toString(),
                order: faqs.length + 1
            };
            updated = [...faqs, newItem];
        } else {
            updated = faqs.map(f => f.id === editingId ? { ...f, ...editForm } : f);
        }

        setFaqs(updated);
        storage.saveFAQs(updated);
        setEditingId(null);
        setIsAdding(false);
        setEditForm({});
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingId('new');
        setEditForm({ question: '', answer: '' });
    };

    return (
        <div>
            <div className="pageHeader">
                <h1 className="pageTitle">Kelola FAQ</h1>
                <button onClick={handleAdd} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Plus size={18} /> Tambah Pertanyaan
                </button>
            </div>

            <div className="adminCard">
                <table className="adminTable">
                    <thead>
                        <tr>
                            <th>Pertanyaan</th>
                            <th>Jawaban</th>
                            <th style={{ width: "120px" }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faqs.map((faq) => (
                            <tr key={faq.id}>
                                <td style={{ fontWeight: 600 }}>{faq.question}</td>
                                <td>{faq.answer.substring(0, 100)}...</td>
                                <td>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        <button onClick={() => handleEdit(faq)} className="btn btn-outline" style={{ padding: "0.4rem" }}><Edit2 size={16} /></button>
                                        <button onClick={() => handleDelete(faq.id)} className="btn btn-outline" style={{ padding: "0.4rem", color: "red" }}><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editingId && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
                    <div className="adminCard" style={{ width: "100%", maxWidth: "600px" }}>
                        <h2 style={{ marginBottom: "1.5rem" }}>{isAdding ? "Tambah FAQ" : "Edit FAQ"}</h2>
                        <div className="formGroup">
                            <label className="formLabel">Pertanyaan</label>
                            <input type="text" className="formInput" value={editForm.question || ''} onChange={(e) => setEditForm({ ...editForm, question: e.target.value })} />
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Jawaban</label>
                            <textarea className="formInput" style={{ minHeight: "150px" }} value={editForm.answer || ''} onChange={(e) => setEditForm({ ...editForm, answer: e.target.value })} />
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

export default FAQAdminPage;
