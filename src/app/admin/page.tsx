"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("oase_admin_logged_in");
        if (isLoggedIn) {
            router.replace("/admin/dashboard");
        } else {
            router.replace("/admin/login");
        }
    }, [router]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'var(--font-jakarta)' }}>
            <p>Memuat...</p>
        </div>
    );
}
