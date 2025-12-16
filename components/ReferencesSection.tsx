"use client";

import Image from "next/image";

const references = [
    // Global Player & Halbleiter/Optik
    {
        name: "Carl Zeiss",
        alt: "Softwareentwicklung Automatisierung Referenz Carl Zeiss",
        src: "/logos/zeiss.png",
        placeholderText: "ZEISS",
    },
    {
        name: "Infineon",
        alt: "Prozesssteuerung Halbleiterindustrie Infineon",
        src: "/logos/infineon.png",
        placeholderText: "Infineon",
    },
    {
        name: "KLA",
        alt: "SPS Software Engineering KLA Corporation",
        src: "/logos/kla.png",
        placeholderText: "KLA",
    },
    // Spezialisten & Industrie
    {
        name: "Hekuma",
        alt: "HMI Entwicklung Spritzgussmaschinen Hekuma",
        src: "/logos/hekuma.png",
        placeholderText: "HEKUMA",
    },
    {
        name: "Vistec",
        alt: "Elektronenstrahllithografie Steuerung Vistec",
        src: "/logos/vistec.png", // Added generic alt for SEO consistency if not provided
        placeholderText: "Vistec",
    },
    {
        name: "Freiberger",
        alt: "Compound Materials Prozessautomatisierung Freiberger",
        src: "/logos/freiberger.png",
        placeholderText: "Freiberger",
    },
    {
        name: "Omicron",
        alt: "Lasersysteme Software Steuerung Omicron",
        src: "/logos/omicron.png",
        placeholderText: "OMICRON",
    },
    // Medizintechnik & Forschung
    {
        name: "Gambro",
        alt: "Medizintechnik Dialyse Software Gambro",
        src: "/logos/gambro.png",
        placeholderText: "Gambro",
    },
    {
        name: "Seleon",
        alt: "Medizintechnik Software Dosiersysteme Seleon",
        src: "/logos/seleon.png",
        placeholderText: "seleon",
    },
    {
        name: "TU Bergakademie Freiberg",
        alt: "Forschungsprojekt Automatisierung TU Bergakademie",
        src: "/logos/tu-freiberg.png",
        placeholderText: "TU Freiberg",
    },
];

export default function ReferencesSection() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        Erfolgreiche Projekte bei Technologieführern
                    </h2>
                    <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Seit über 15 Jahren realisiere ich anspruchsvolle Softwarelösungen für Marktführer in der Halbleiterindustrie, Medizintechnik und optischen Industrie. Hier ein Auszug meiner Projektpartner:
                    </p>
                </div>

                {/* The Trust Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                    {references.map((ref, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 h-32"
                        >
                            <div className="relative w-full h-full flex items-center justify-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                                {/* 
                  NOTE: Using a text fallback since we don't have the actual logo files yet.
                  In a real scenario, the Image component would be used.
                  For now, we render a stylish text placeholder that looks professional.
                */}
                                <span className="font-display font-bold text-xl text-slate-400 group-hover:text-slate-900 transition-colors">
                                    {ref.placeholderText}
                                </span>

                                {/* Uncomment this block when logo files are present in /public/logos/ */}
                                {/*
                <Image
                  src={ref.src}
                  alt={ref.alt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                */}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-sm text-slate-400 italic">
                    * Markenlogos dienen als Referenz für durchgeführte Projekte.
                </p>
            </div>
        </section>
    );
}
