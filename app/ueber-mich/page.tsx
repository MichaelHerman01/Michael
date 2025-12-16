"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-brand-dark overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-primary opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-brand-accent opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-stone-900/60 border border-stone-600 backdrop-blur-sm shadow-lg">
                            <span className="text-brand-primary font-semibold text-sm tracking-wider uppercase">
                                Ingenieurbüro Michael Hermann
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                            Ich bringe Maschinen <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-300% animate-gradient">
                                zum Leben.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Der Brückenschlag zwischen IT und Maschine – maßgeschneiderte Softwarelösungen für die Industrie.
                        </p>
                    </div>
                </div>
            </header>

            {/* Intro & Profile Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Image Column */}
                        <div className="lg:col-span-4 relative">
                            <div className="sticky top-24">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-100 group">
                                    <Image
                                        src="/Ing. Michael Hermann.jpg"
                                        alt="Dipl.-Ing. (FH) Michael Hermann"
                                        width={800}
                                        height={1067}
                                        quality={100}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    {/* Overlay Gradient for Text readability if needed, or just style */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="font-display font-bold text-2xl">Michael Hermann</div>
                                        <div className="text-brand-primary text-sm font-medium uppercase tracking-wider mt-1">Dipl.-Ing. (FH)</div>
                                    </div>
                                </div>

                                {/* Decorative Pattern behind */}
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-primary/20 rounded-2xl -z-10 bg-brand-light/50"></div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 leading-relaxed">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                                    Der Brückenschlag zwischen <span className="text-brand-primary">IT und Maschine</span>
                                </h2>
                                <p className="mb-6">
                                    Mein Name ist Michael Hermann, und ich bin Diplomingenieur (FH) für Technologie elektronischer Bauelemente und Spezialingenieur für Mikroprozessortechnik. Meine Leidenschaft liegt genau an der Schnittstelle zweier Welten: Dort, wo <strong>klassische Maschinenbau-Hardware</strong> auf <strong>moderne Software-Architektur</strong> trifft.
                                </p>
                                <p>
                                    Während viele Entwickler rein in der virtuellen Welt bleiben, liegt meine Kernkompetenz darin, Windows-Applikationen zu entwickeln, die reale industrielle Prozesse steuern, anzeigen und protokollieren. Ich sorge dafür, dass Ihr PC nicht nur Daten verarbeitet, sondern direkt mit Sensoren, Motoren und Ventilen kommuniziert.
                                </p>
                            </div>

                            {/* Philosophy Quote Box */}
                            <div className="bg-stone-50 border-l-4 border-brand-primary p-8 rounded-r-xl my-10">
                                <i className="fa-solid fa-quote-left text-brand-primary/20 text-4xl mb-2 block"></i>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Meine Philosophie: Mehr als nur Code</h3>
                                <p className="italic text-slate-700">
                                    "Ein Projekt ist für mich dann erfolgreich, wenn aus einer starren Konstruktion ein dynamischer Prozess wird. Mein Lieblingsprojekt beginnt oft mit Ihrer Idee für eine Maschine oder ein Messgerät und endet damit, dass ich diese Maschine durch meine Software zum Leben erwecke."
                                </p>
                            </div>

                            <div>
                                <p className="mb-4">
                                    Dabei verstehe ich mich nicht als reiner Befehlsempfänger für Software-Code, sondern als <strong>Partner im gesamten Entwicklungsprozess</strong>. Von der Auswahl der geeigneten Sensoren über die Erstellung der Stromlaufpläne bis hin zur gemeinsamen Inbetriebnahme in der Fertigungshalle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competence & Tech Section */}
            <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                        <div className="mb-12 lg:mb-0">
                            <h2 className="text-3xl font-display font-bold mb-6">Warum PC-basierte Steuerung?</h2>
                            <p className="text-slate-300 text-lg mb-8">
                                In meiner langjährigen Praxis – unter anderem für Kunden wie
                                <span className="text-white font-semibold"> Carl Zeiss, Infineon und seleon</span> –
                                habe ich gelernt, dass eine reine SPS oft nicht ausreicht. Wenn Prozesse hochflexibel sein müssen,
                                komplexe mathematische Berechnungen erfordern oder tief in die Firmen-IT integriert werden sollen,
                                ist eine .NET-Applikation unter Windows überlegen.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <div className="text-brand-primary font-bold text-xl mb-1">15+ Jahre</div>
                                    <div className="text-sm text-slate-400">Erfahrung in der Industrie</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <div className="text-brand-accent font-bold text-xl mb-1">High-Tech</div>
                                    <div className="text-sm text-slate-400">Halbleiter & Medizintechnik</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                <h3 className="text-xl font-bold mb-6 text-brand-light">Ich biete Ihnen genau diese Flexibilität:</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mr-4">
                                            <i className="fa-solid fa-code text-brand-primary text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Technologie</h4>
                                            <p className="text-slate-300">C# (WPF, MVVM) auf dem neuesten Stand (.NET 4.8 / Framework 8.0).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 mr-4">
                                            <i className="fa-solid fa-network-wired text-brand-accent text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Kommunikation</h4>
                                            <p className="text-slate-300">Nahtlose Integration von SPS (Beckhoff, Wago, Codesys) via OPC UA, gRPC oder TCP/IP.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center shrink-0 mr-4">
                                            <i className="fa-solid fa-shield-halved text-brand-secondary text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">Qualität</h4>
                                            <p className="text-slate-300">Clean Code (Resharper), Unit-Testing und Git für wartbare und sichere Software.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & CTA */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6">Erfahrung, die zählt</h2>
                    <p className="text-xl text-stone-600 mb-12">
                        Seit über 15 Jahren bewege ich mich in anspruchsvollen Branchen wie der Halbleiterindustrie, der Medizintechnik und der optischen Industrie. Ich bin es gewohnt, in stark reglementierten Umfeldern zu arbeiten und Software zu liefern, die nicht nur funktioniert, sondern präzise und ausfallsicher ist.
                    </p>

                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-orange-100">
                        <h3 className="text-2xl font-bold text-stone-900 mb-4">Starten wir Ihr Projekt</h3>
                        <p className="text-stone-600 mb-8">
                            Egal ob Sie eine komplexe Hybrid-Lösung aus PC und SPS benötigen oder eine maßgeschneiderte Visualisierung für einen Versuchsstand suchen – ich stehe bereit, um Ihre Anforderungen in funktionierende Software umzusetzen.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/#kontakt" className="px-8 py-4 bg-brand-primary text-white rounded-lg font-bold text-lg hover:bg-brand-secondary transition-all shadow-lg hover:shadow-neon transform hover:-translate-y-1 inline-flex items-center justify-center">
                                <i className="fa-solid fa-envelope mr-2"></i>
                                Kontakt aufnehmen
                            </Link>
                            <Link href="/" className="px-8 py-4 bg-white text-stone-700 border border-stone-300 rounded-lg font-bold text-lg hover:bg-stone-50 transition-all inline-flex items-center justify-center">
                                Zur Startseite
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
