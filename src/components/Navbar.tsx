"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Layanan", href: "#layanan" },
        { name: "Tentang Kami", href: "#tentang" },
        { name: "FAQ", href: "#faq" },
        { name: "Kontak", href: "#kontak" },
    ];

    return (
        <nav
            className={clsx(
                styles.navbar,
                isScrolled && styles.scrolled,
                isOpen && styles.open
            )}
        >
            <div className={clsx("container", styles.container)}>
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        src="/logo.png"
                        alt="Oase Medika Logo"
                        width={180}
                        height={60}
                        className={styles.logo}
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className={styles.desktopLinks}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.navLink}>
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/6285283315033"
                        className="btn btn-primary btn-sm"
                        style={{ padding: "0.5rem 1.5rem", fontSize: "14px" }}
                    >
                        KONSULTASI
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={clsx(styles.mobileMenu, isOpen && styles.mobileMenuOpen)}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={styles.mobileNavLink}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <a
                    href="https://wa.me/6285283315033"
                    className="btn btn-primary"
                    style={{ marginTop: "1rem" }}
                    onClick={() => setIsOpen(false)}
                >
                    KONSULTASI SEKARANG
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
