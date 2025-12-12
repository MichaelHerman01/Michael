"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                setError("Falsches Passwort");
            }
        } catch (err) {
            setError("Ein Fehler ist aufgetreten.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-dark hero-pattern relative overflow-hidden">
            {/* Background blobs similar to home page */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-primary opacity-20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-accent opacity-15 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="max-w-md w-full mx-4">
                <div className="glass-effect p-8 rounded-2xl shadow-2xl border border-stone-700/50 relative z-10">
                    <div className="text-center mb-8">
                        <i className="fa-solid fa-lock text-4xl text-brand-primary mb-4"></i>
                        <h1 className="text-2xl font-display font-bold text-stone-900">Geschützter Bereich</h1>
                        <p className="text-stone-600 mt-2">Bitte geben Sie das Passwort ein, um fortzufahren.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                                placeholder="Passwort eingeben"
                                autoFocus
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-lg border border-red-100">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold shadow-lg shadow-brand-primary/25 hover:shadow-neon transform hover:-translate-y-1 transition-all"
                        >
                            Zugang freischalten
                        </button>
                    </form>
                </div>

                <div className="text-center mt-6 text-stone-500 text-sm">
                    &copy; {new Date().getFullYear()} Research Control
                </div>
            </div>
        </div>
    );
}
