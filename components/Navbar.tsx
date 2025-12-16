"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Helper to determine if link should be treated as anchor or full navigation
    const getLinkHref = (anchor: string) => {
        if (pathname === "/") {
            return anchor;
        }
        return `/${anchor}`;
    };

    return (
        <>
            <nav
                className={`fixed w-full z-50 glass-effect border-b border-slate-200 transition-all duration-300 ${isScrolled ? "h-16 shadow-md" : "h-20"
                    }`}
                id="navbar"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-full">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <i className="fa-solid fa-microchip text-brand-primary text-2xl"></i>
                            <span className="font-display font-bold text-2xl tracking-wide text-brand-dark">
                                RESEARCH<span className="text-brand-primary">CONTROL</span>
                            </span>
                        </Link>
                        <div className="hidden md:flex space-x-8 items-center">
                            {/* Using Link for optimized navigation, but need careful handling of anchors */}
                            <Link href={getLinkHref("#leistungen")} className="text-slate-600 hover:text-brand-primary font-medium transition-colors">
                                Leistungen
                            </Link>
                            <Link href={getLinkHref("#expertise")} className="text-slate-600 hover:text-brand-primary font-medium transition-colors">
                                Expertise
                            </Link>
                            <Link href="/ueber-mich" className="text-slate-600 hover:text-brand-primary font-medium transition-colors">
                                Über Mich
                            </Link>
                            <Link
                                href={getLinkHref("#kontakt")}
                                className="px-6 py-2.5 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all shadow-lg hover:shadow-neon transform hover:scale-105"
                            >
                                Kontakt aufnehmen
                            </Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                id="mobile-menu-btn"
                                className="text-slate-600 hover:text-brand-primary focus:outline-none"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden bg-white border-t border-slate-100 absolute w-full`}
                >
                    <Link
                        href={getLinkHref("#leistungen")}
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Leistungen
                    </Link>
                    <Link
                        href={getLinkHref("#expertise")}
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Expertise
                    </Link>
                    <Link
                        href="/ueber-mich"
                        className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Über Mich
                    </Link>
                    <Link
                        href={getLinkHref("#kontakt")}
                        className="block px-4 py-3 text-brand-primary font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Kontakt
                    </Link>
                </div>
            </nav>
        </>
    );
}
