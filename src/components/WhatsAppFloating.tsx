"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloating = () => {
    return (
        <a
            href="https://wa.me/6285283315033"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                backgroundColor: "#25D366",
                color: "white",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                zIndex: 999,
                transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Chat WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppFloating;
