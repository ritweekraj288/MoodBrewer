"use client";

import { useEffect } from "react";
import axios from "axios";

export default function BackendWarmup() {
    useEffect(() => {
        const warmup = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
                // Simple health check ping to wake up the server
                await axios.get(`${apiUrl}/`);
                console.log("Backend warmed up");
            } catch (error) {
                // Silent fail - we don't want to disturb the user if warmup fails
                console.warn("Backend warmup ping failed", error);
            }
        };

        warmup();
    }, []);

    return null;
}
