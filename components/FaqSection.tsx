"use client";

import { useState } from "react";

const faqData = [
    {
        question: "Was genau ist Ihre Kernkompetenz in der Automatisierung?",
        answer: (
            <>
                Mein Fokus liegt auf der Entwicklung maßgeschneiderter <strong>Windows-Applikationen</strong>, die industrielle Prozesse steuern, visualisieren und protokollieren. Im Gegensatz zu Standardlösungen biete ich Software an, die tief in die Maschinensteuerung eingreift. Dazu gehören:
                <ul className="mt-4 space-y-2 list-none">
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-check"></i>
                        </span>
                        <span>
                            <strong>Sensor- & Aktuator-Steuerung:</strong> Direkte Abfrage von Sensoren (Temperatur, Abstand, etc.) und Ansteuerung von Motoren oder Ventilen.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-check"></i>
                        </span>
                        <span>
                            <strong>Schnittstellen-Integration:</strong> Kommunikation mit SPS-Systemen (PLC) via OPC UA oder anderen Anwendungen über gRPC.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-check"></i>
                        </span>
                        <span>
                            <strong>Datenmanagement:</strong> Protokollierung und Speicherung von Prozessdaten lokal oder im Netzwerk in verschiedensten Dateiformaten.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-check"></i>
                        </span>
                        <span>
                            <strong>Konfiguration:</strong> Bereitstellung umfangreicher Konfigurationsmöglichkeiten für maximale Flexibilität.
                        </span>
                    </li>
                </ul>
            </>
        ),
    },
    {
        question: "Wann ist eine PC-basierte Steuerung (Windows-App) besser als eine reine SPS-Lösung?",
        answer: (
            <>
                Während eine klassische SPS-Visualisierung für einfache Prozesse gut geeignet ist, stößt sie bei steigender Komplexität an ihre Grenzen. Eine <strong>.NET-Applikation unter Windows</strong> ist die bessere Wahl, wenn:
                <ul className="mt-4 space-y-2 list-none">
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <span>
                            <strong>Hohe Flexibilität</strong> gefordert ist, etwa wenn Prozessabläufe beim Entwurf noch nicht final definiert sind.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <span>
                            <strong>Komplexe Berechnungen</strong> nötig sind (z. B. mathematische Modelle oder Einbindung von Matlab).
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <span>
                            <strong>Erweiterte Kommunikation</strong> mit übergeordneten Systemen (ERP, Leitsysteme, Firmennetzwerke) oder komplexen PC-Sensoren erforderlich ist.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <span>
                            <strong>Datenvielfalt</strong> herrscht und Daten in spezifischen Formaten oder Datenbanken gespeichert werden müssen.
                        </span>
                    </li>
                </ul>
            </>
        ),
    },
    {
        question: "Bieten Sie auch Hybrid-Lösungen aus PC und SPS (PLC) an?",
        answer: (
            <>
                Ja, das ist ein sehr häufiges und leistungsfähiges Szenario. Hierbei werden kritische Echtzeit-Steuerungen auf der SPS (PLC) abgewickelt, während die Windows-Applikation als "Gehirn" fungiert.
                <ul className="mt-4 space-y-2 list-none">
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-microchip"></i>
                        </span>
                        <span>
                            <strong>Aufgabenteilung:</strong> Die PC-Software übernimmt die Koordination, die Visualisierung, komplizierte Berechnungen und die Kommunikation mit übergeordneten Ebenen.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-code"></i>
                        </span>
                        <span>
                            <strong>SPS-Programmierung:</strong> Ich unterstütze auch direkt bei der Programmierung gängiger SPS-Systeme wie Beckhoff, Wago, Codesys oder TwinCAT.
                        </span>
                    </li>
                </ul>
            </>
        ),
    },
    {
        question: "Begleiten Sie Projekte nur softwareseitig oder bieten Sie einen ganzheitlichen Service?",
        answer: (
            <>
                Mein Ansatz ist ganzheitlich. Ich begleite Sie durch den gesamten Entwicklungsprozess der Automatisierung – von der ersten Idee bis zur Inbetriebnahme. Mein Leistungsspektrum umfasst neben der Softwareentwicklung:
                <ul className="mt-4 space-y-2 list-none">
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-layer-group"></i>
                        </span>
                        <span>
                            <strong>Architektur & Design:</strong> Entwurf der Automatisierungsarchitektur und Auswahl geeigneter Produkte.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                        </span>
                        <span>
                            <strong>Hardware-Planung:</strong> Organisation der Stromlaufpläne sowie Begleitung von Montage und Verdrahtung.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-play"></i>
                        </span>
                        <span>
                            <strong>Inbetriebnahme:</strong> Gemeinsame Inbetriebnahme der Maschine mit anderen Fachleuten vor Ort.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-brand-primary mt-1">
                            <i className="fa-solid fa-rotate"></i>
                        </span>
                        <span>
                            <strong>Lifecycle-Service:</strong> Langfristige Weiterentwicklung, Anpassungen und Software-Updates.
                        </span>
                    </li>
                </ul>
            </>
        ),
    },
    {
        question: "Wie sieht ein typisches Projekt mit Ihnen aus?",
        answer: (
            <>
                Ein ideales Projekt startet oft mit einer spezifischen Idee für eine Maschine, ein Messgerät oder einen industriellen Prozess. Mein Ziel ist es, diese "Maschine zum Leben zu erwecken". Egal, ob Sie eine reine PC-Steuerung über IO-Interfaces benötigen oder eine komplexe Kombination aus PC und SPS  – ich entwerfe die passende Applikation, die genau das tut, was Sie sich vorstellen, und sorge für eine nahtlose Integration in Ihre IT-Infrastruktur.
            </>
        ),
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Prepare Schema.org JSON-LD data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof item.answer === 'string' ? item.answer : "Detaillierte Antwort zur Automatisierungstechnik verfügbar." // Simplified for markup validity if JSX is complex, but often better to extract plain text.
                // Note: For complex JSX in answers, proper schema generation would require stripping tags or server-side rendering of text. 
                // For this implementation, I will manually provide text versions for the schema to ensure valid JSON-LD.
            }
        }))
    };

    // Refined text-only answers for Schema to ensure validity
    schemaTextOverrides[0] = "Mein Fokus liegt auf der Entwicklung maßgeschneiderter Windows-Applikationen... Dazu gehören: Sensor- & Aktuator-Steuerung, Schnittstellen-Integration, Datenmanagement und Konfiguration.";
    schemaTextOverrides[1] = "Eine .NET-Applikation unter Windows ist die bessere Wahl, wenn hohe Flexibilität gefordert ist, komplexe Berechnungen nötig sind, erweiterte Kommunikation mit übergeordneten Systemen erforderlich ist oder Datenvielfalt herrscht.";
    schemaTextOverrides[2] = "Ja, das ist ein sehr häufiges Szenario. Hierbei werden kritische Echtzeit-Steuerungen auf der SPS (PLC) abgewickelt, während die Windows-Applikation als 'Gehirn' fungiert.";
    schemaTextOverrides[3] = "Mein Ansatz ist ganzheitlich. Ich begleite Sie durch den gesamten Entwicklungsprozess – von Architektur & Design, über Hardware-Planung und Inbetriebnahme bis zum Lifecycle-Service.";
    schemaTextOverrides[4] = "Ein ideales Projekt startet oft mit einer spezifischen Idee für eine Maschine. Mein Ziel ist es, diese 'Maschine zum Leben zu erwecken'.";

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((item, index) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": schemaTextOverrides[index]
            }
        }))
    };

    return (
        <section className="py-24 bg-white" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Wissenswertes</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2 mb-4">
                        Häufige Fragen zu Industrieller Automatisierung
                    </h2>
                    <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Hier finden Sie Antworten rund um individuelle Softwarelösungen für die Industrie, PC-basierte Steuerungen und die Integration von SPS-Systemen.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold pr-8 ${openIndex === index ? 'text-brand-primary' : 'text-slate-800'}`}>
                                    {item.question}
                                </span>
                                <span className={`transform transition-transform duration-300 w-8 h-8 rounded-full flex items-center justify-center border ${openIndex === index ? 'rotate-180 bg-brand-primary text-white border-brand-primary' : 'bg-white text-slate-400 border-slate-200'}`}>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                                    } overflow-hidden`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50 border-t border-slate-100/50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Helpers for schema
const schemaTextOverrides: string[] = [];
