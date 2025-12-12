"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 glass-effect border-b border-slate-200 transition-all duration-300 ${isScrolled ? "h-16 shadow-md" : "h-20"
          }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            <div className="flex-shrink-0 flex items-center gap-2">
              <i className="fa-solid fa-microchip text-brand-primary text-2xl"></i>
              <span className="font-display font-bold text-2xl tracking-wide text-brand-dark">
                RESEARCH<span className="text-brand-primary">CONTROL</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {/* Using anchor tags for hash scrolling compatibility with standard browser behavior */}
              <a href="#leistungen" className="text-slate-600 hover:text-brand-primary font-medium transition-colors">
                Leistungen
              </a>
              <a href="#expertise" className="text-slate-600 hover:text-brand-primary font-medium transition-colors">
                Expertise
              </a>
              <a href="#ueber-mich" className="text-slate-600 hover:text-brand-primary font-medium transition-colors">
                Über Mich
              </a>
              <a
                href="#kontakt"
                className="px-6 py-2.5 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all shadow-lg hover:shadow-neon transform hover:scale-105"
              >
                Kontakt aufnehmen
              </a>
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
          <a
            href="#leistungen"
            className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Leistungen
          </a>
          <a
            href="#expertise"
            className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Expertise
          </a>
          <a
            href="#ueber-mich"
            className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Über Mich
          </a>
          <a
            href="#kontakt"
            className="block px-4 py-3 text-brand-primary font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontakt
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 hero-pattern overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-primary opacity-20 blur-[100px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-accent opacity-15 blur-[80px] rounded-full mix-blend-screen"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-stone-800/50 border border-stone-700 backdrop-blur-sm">
            <span className="text-brand-primary font-semibold text-sm tracking-wider uppercase">
              Ingenieurbüro Michael Hermann
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 reveal">
            Softwareentwicklung mit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-300% animate-gradient">
              technischer Präzision
            </span>
          </h1>

          <p
            className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 reveal"
            style={{ transitionDelay: "100ms" }}
          >
            Spezialisiert auf komplexe Anwendungen mit physikalisch-technischem Hintergrund. Von der Laborautomatisierung
            bis zur Maschinensteuerung.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal" style={{ transitionDelay: "200ms" }}>
            <a
              href="#leistungen"
              className="px-8 py-4 bg-brand-primary text-white rounded-lg font-bold text-lg hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/25 hover:shadow-neon transform hover:-translate-y-1"
            >
              Leistungsprofil ansehen
            </a>
            <a
              href="#kontakt"
              className="px-8 py-4 bg-stone-800 text-white border border-stone-700 rounded-lg font-bold text-lg hover:bg-stone-700 transition-all"
            >
              Projekt anfragen
            </a>
          </div>

          {/* Tech Stack Badges */}
          <div
            className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 reveal"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="flex items-center gap-2 text-slate-300 font-mono">
              <i className="fa-brands fa-windows"></i> .NET / C#
            </span>
            <span className="flex items-center gap-2 text-slate-300 font-mono">
              <i className="fa-solid fa-code"></i> WPF / MVVM
            </span>
            <span className="flex items-center gap-2 text-slate-300 font-mono">
              <i className="fa-solid fa-robot"></i> Automation
            </span>
            <span className="flex items-center gap-2 text-slate-300 font-mono">
              <i className="fa-solid fa-microchip"></i> Hardware Control
            </span>
          </div>
        </div>
      </header>

      {/* Services Grid (Box Layout with Hover) */}
      <section id="leistungen" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Mein Leistungsprofil</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Maßgeschneiderte Softwarelösungen an der Schnittstelle zwischen Mensch, Maschine und Physik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: GUI */}
            <div className="bg-white p-8 rounded-2xl border border-orange-100 shadow-card service-card group reveal">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                <i className="fa-solid fa-desktop text-2xl text-brand-primary group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Bedienoberflächen (GUI/HMI)</h3>
              <p className="text-stone-600 leading-relaxed">
                Entwicklung moderner User Interfaces unter Windows mit C#, WPF und dem MVVM-Pattern. Für eine intuitive
                Mensch-Maschine-Kommunikation.
              </p>
            </div>

            {/* Card 2: Datenerfassung */}
            <div
              className="bg-white p-8 rounded-2xl border border-orange-100 shadow-card service-card group reveal"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                <i className="fa-solid fa-network-wired text-2xl text-brand-accent group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Online-Datenerfassung</h3>
              <p className="text-stone-600 leading-relaxed">
                Zuverlässiges Logging und Monitoring über alle gängigen Schnittstellen. Echtzeit-Datenverarbeitung für
                Ihre Labor- oder Industrieprozesse.
              </p>
            </div>

            {/* Card 3: Steuerung */}
            <div
              className="bg-white p-8 rounded-2xl border border-orange-100 shadow-card service-card group reveal"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-stone-500 transition-colors duration-300">
                <i className="fa-solid fa-gears text-2xl text-stone-500 group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Steuerung & Regelung</h3>
              <p className="text-stone-600 leading-relaxed">
                Präzise Steuerung von Abläufen und Regelung komplexer Parameter. Von der Temperaturregelung bis zur
                komplexen Prozesskette.
              </p>
            </div>

            {/* Card 4: Hardware Control */}
            <div className="bg-white p-8 rounded-2xl border border-orange-100 shadow-card service-card group reveal">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-secondary transition-colors duration-300">
                <i className="fa-solid fa-bolt text-2xl text-brand-secondary group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Hardware Ansteuerung</h3>
              <p className="text-stone-600 leading-relaxed">
                Direkte Ansteuerung von Motoren, Antrieben, Ventilen und Heizungen. Nahtlose Integration von Aktoren in
                Ihre Softwareumgebung.
              </p>
            </div>

            {/* Card 5: Auswertungen */}
            <div
              className="bg-white p-8 rounded-2xl border border-orange-100 shadow-card service-card group reveal"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <i className="fa-solid fa-chart-pie text-2xl text-yellow-500 group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Analysen & Berechnungen</h3>
              <p className="text-stone-600 leading-relaxed">
                Umsetzung komplexer physikalischer Auswertungen und mathematischer Berechnungen exakt nach Ihren
                Kundenvorgaben.
              </p>
            </div>

            {/* Card 6: Inbetriebnahme */}
            <div
              className="bg-white p-8 rounded-2xl border border-orange-100 shadow-card service-card group reveal"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-400 transition-colors duration-300">
                <i className="fa-solid fa-screwdriver-wrench text-2xl text-red-400 group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Konzeption & Inbetriebnahme</h3>
              <p className="text-stone-600 leading-relaxed">
                Ganzheitliche Betreuung: Von der Konzeption bis zur Inbetriebnahme angeschlossener elektronischer und
                elektrotechnischer Hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section / Expertise */}
      <section id="expertise" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 reveal">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-dark aspect-video flex items-center justify-center group">
                <Image
                  src="/Automatisierungstechnik.webp"
                  alt="Automatisierungstechnik - Engineering & Coding"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
                <div className="relative z-10 text-center p-8">
                  <i className="fa-solid fa-code text-6xl text-white/90 mb-4 block drop-shadow-md"></i>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">Engineering + Coding</h3>
                  <p className="text-brand-primary mt-2 drop-shadow-md font-semibold">Die perfekte Symbiose</p>
                </div>
              </div>
              {/* Stats / Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                  <span className="block text-3xl font-bold text-brand-primary mb-1">C# / WPF</span>
                  <span className="text-sm text-slate-500">Kernkompetenz</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                  <span className="block text-3xl font-bold text-brand-accent mb-1">Physik</span>
                  <span className="text-sm text-slate-500">Verständnis</span>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Warum ein spezialisiertes Ingenieurbüro?
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Standard-Softwareentwickler stoßen an ihre Grenzen, wenn physikalisches Verständnis und elektrotechnisches
                Know-how gefragt sind.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Bei <strong>Research Control</strong> erhalten Sie nicht nur sauberen Code, sondern einen Partner, der
                versteht, was Ihre Messgeräte, Sensoren und Aktoren physikalisch leisten müssen. Ich verbinde moderne
                Softwarearchitektur (MVVM) mit harter Real-Time-Anforderung.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-brand-primary mt-1 mr-3"></i>
                  <span className="text-slate-700">Tiefes Verständnis für Mess- und Regelungstechnik</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-brand-primary mt-1 mr-3"></i>
                  <span className="text-slate-700">Expertise in Laborautomatisierung</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check-circle text-brand-primary mt-1 mr-3"></i>
                  <span className="text-slate-700">Individuelle Lösungen statt Baukasten-Software</span>
                </li>
              </ul>

              <div className="mt-10">
                <a
                  href="#kontakt"
                  className="text-brand-primary font-bold hover:text-brand-secondary inline-flex items-center group"
                >
                  Mehr erfahren
                  <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="kontakt" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 reveal">Bereit für Ihr Projekt?</h2>
          <p className="text-xl text-slate-300 mb-10 reveal" style={{ transitionDelay: "100ms" }}>
            Lassen Sie uns darüber sprechen, wie wir Ihre Hardware mit der passenden Software zum Leben erwecken.
          </p>

          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 reveal shadow-2xl"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Michael Hermann</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300 hover:text-brand-primary transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-primary/20">
                      <i className="fa-solid fa-globe text-brand-primary"></i>
                    </div>
                    <span>www.researchcontrol.de</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 hover:text-brand-primary transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-primary/20">
                      <i className="fa-solid fa-envelope text-brand-primary"></i>
                    </div>
                    <span>kontakt@researchcontrol.de</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 hover:text-brand-primary transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-primary/20">
                      <i className="fa-solid fa-location-dot text-brand-primary"></i>
                    </div>
                    <span>Deutschland</span>
                  </div>
                </div>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                <p className="text-slate-400 text-sm mb-6">
                  &quot;Qualität entsteht dort, wo technisches Verständnis auf sauberen Code trifft.&quot;
                </p>
                <a
                  href="mailto:kontakt@researchcontrol.de"
                  className="block w-full text-center py-4 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all transform hover:-translate-y-1"
                >
                  Jetzt Anfrage senden
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            &copy; {new Date().getFullYear()} Research Control - Michael Hermann. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
