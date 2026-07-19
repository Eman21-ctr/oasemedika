"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    Image as ImageIcon,
    Stethoscope,
    HelpCircle,
    MessageSquare,
    LogOut,
    Menu,
    X,
    Info
} from "lucide-react";
import "./admin.css";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check auth
        const isLoggedIn = localStorage.getItem("oase_admin_logged_in");
        if (!isLoggedIn && pathname !== "/admin/login") {
            router.push("/admin/login");
        }
    }, [pathname, router]);

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Hero Section", href: "/admin/hero", icon: ImageIcon },
        { name: "Tentang Kami", href: "/admin/about", icon: Info },
        { name: "Layanan", href: "/admin/services", icon: Stethoscope },
        { name: "FAQ", href: "/admin/faq", icon: HelpCircle },
        { name: "Testimoni", href: "/admin/testimonials", icon: MessageSquare },
    ];

    const handleLogout = () => {
        localStorage.removeItem("oase_admin_logged_in");
        router.push("/admin/login");
    };

    if (!isMounted) return null;

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="adminLayout">
            <aside className={`sidebar ${!isSidebarOpen ? "collapsed" : ""}`}>
                <div className="sidebarHeader">
                    <span className="adminLogo">Oase Medika Admin</span>
                </div>
                <nav className="sidebarNav">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`navLink ${isActive ? "navLinkActive" : ""}`}
                            >
                                <Icon size={20} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
                <div className="sidebarFooter">
                    <button onClick={handleLogout} className="navLink" style={{ width: "100%", border: "none", background: "none", cursor: "pointer" }}>
                        <LogOut size={20} />
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>
            <main className="mainContent">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
