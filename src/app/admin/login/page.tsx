"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../admin.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            localStorage.setItem("oase_admin_logged_in", "true");
            router.push("/admin/dashboard");
        } else {
            setError("Username atau password salah!");
        }
    };

    return (
        <div className="loginWrapper">
            <div className="loginCard">
                <h1 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>Login Dashboard</h1>
                <p style={{ color: "#666", marginBottom: "2rem" }}>Gunakan kredensial admin Anda.</p>

                <form onSubmit={handleLogin}>
                    <div className="formGroup">
                        <label className="formLabel">Username</label>
                        <input
                            type="text"
                            className="formInput"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="admin"
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">Password</label>
                        <input
                            type="password"
                            className="formInput"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="admin"
                            required
                        />
                    </div>
                    {error && <p style={{ color: "red", marginBottom: "1rem", fontSize: "0.875rem" }}>{error}</p>}
                    <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                        MASUK
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
