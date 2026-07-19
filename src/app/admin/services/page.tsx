"use client";

import React, { useState, useEffect } from "react";
import { storage, Service } from "@/lib/storage";
import { Plus, Edit2, Trash2, Save, X } from "lucide-react";

const ServicesAdminPage = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<Partial<Service>>({});
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        setServices(storage.getServices());
    }, []);

    const handleEdit = (service: Service) => {
        setEditingId(service.id);
        setEditForm(service);
        setIsAdding(false);
    };

    const handleDelete = (id: string) => {
        if (confirm("Apakah Anda yakin ingin menghapus layanan ini?")) {
            const updated = services.filter(s => s.id !== id);
            setServices(updated);
            storage.saveServices(updated);
        }
    };

    const handleSave = () => {
        let updated: Service[];
        if (isAdding) {
            const newService: Service = {
                ...editForm as Service,
                id: Date.now().toString(),
                status: 'active',
                order: services.length + 1
            };
            updated = [...services, newService];
        } else {
            updated = services.map(s => s.id === editingId ? { ...s, ...editForm } : s);
        }

        setServices(updated);
        storage.saveServices(updated);
        setEditingId(null);
        setIsAdding(false);
        setEditForm({});
    };

    const handleCancel = () => {
        setEditingId(null);
        setIsAdding(false);
        setEditForm({});
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingId('new');
        setEditForm({
            title: '',
            tagline: '',
            description: '',
            icon: '🏥'
        });
    };

    return (
        <div>
            <div className="pageHeader">
                <h1 className="pageTitle">Kelola Layanan</h1>
                <button onClick={handleAdd} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Plus size={18} /> Tambah Layanan
                </button>
            </div>

            <div className="adminCard">
                <table className="adminTable">
                    <thead>
                        <tr>
                            <th style={{ width: "80px" }}>Ikon</th>
                            <th>Judul Layanan</th>
                            <th>Tagline</th>
                            <th>Status</th>
                            <th style={{ width: "150px" }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td><span style={{ fontSize: "1.5rem" }}>{service.icon}</span></td>
                                <td><div style={{ fontWeight: 600 }}>{service.title}</div></td>
                                <td><div style={{ fontSize: "0.875rem", color: "#666" }}>{service.tagline}</div></td>
                                <td>
                                    <span style={{
                                        padding: "0.25rem 0.5rem",
                                        borderRadius: "4px",
                                        fontSize: "0.75rem",
                                        backgroundColor: service.status === 'active' ? "#e6f4ea" : "#f1f3f4",
                                        color: service.status === 'active' ? "#1e7e34" : "#5f6368"
                                    }}>
                                        {service.status.toUpperCase()}
                                    </span>
                                </td>
                                <td>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        <button onClick={() => handleEdit(service)} className="btn btn-outline" style={{ padding: "0.4rem" }} title="Edit">
                                            <Edit2 size={16} />
                                        </button>
                                        <button onClick={() => handleDelete(service.id)} className="btn btn-outline" style={{ padding: "0.4rem", color: "red" }} title="Hapus">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editingId && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 1000
                }}>
                    <div className="adminCard" style={{ width: "100%", maxWidth: "600px" }}>
                        <h2 style={{ marginBottom: "1.5rem" }}>{isAdding ? "Tambah Layanan" : "Edit Layanan"}</h2>

                        <div className="formGroup">
                            <label className="formLabel">Ikon (Emoji)</label>
                            <input
                                type="text"
                                className="formInput"
                                value={editForm.icon || ''}
                                onChange={(e) => setEditForm({ ...editForm, icon: e.target.value })}
                            />
                        </div>

                        <div className="formGroup">
                            <label className="formLabel">Judul Layanan</label>
                            <input
                                type="text"
                                className="formInput"
                                value={editForm.title || ''}
                                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                            />
                        </div>

                        <div className="formGroup">
                            <label className="formLabel">Tagline</label>
                            <input
                                type="text"
                                className="formInput"
                                value={editForm.tagline || ''}
                                onChange={(e) => setEditForm({ ...editForm, tagline: e.target.value })}
                            />
                        </div>

                        <div className="formGroup">
                            <label className="formLabel">URL Gambar</label>
                            <input
                                type="text"
                                className="formInput"
                                value={editForm.imageUrl || ''}
                                onChange={(e) => setEditForm({ ...editForm, imageUrl: e.target.value })}
                                placeholder="/services/name.png"
                            />
                        </div>

                        <div className="formGroup">
                            <label className="formLabel">Deskripsi Singkat (Kartu)</label>
                            <textarea
                                className="formInput"
                                style={{ minHeight: "60px" }}
                                value={editForm.description || ''}
                                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                            />
                        </div>

                        <div className="formGroup">
                            <label className="formLabel">Deskripsi Detail (Modal)</label>
                            <textarea
                                className="formInput"
                                style={{ minHeight: "150px" }}
                                value={editForm.fullDescription || ''}
                                onChange={(e) => setEditForm({ ...editForm, fullDescription: e.target.value })}
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                            <button onClick={handleCancel} className="btn btn-outline">Batal</button>
                            <button onClick={handleSave} className="btn btn-primary">Simpan Perubahan</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesAdminPage;
