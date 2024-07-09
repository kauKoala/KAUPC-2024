"use client";

import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import section_id from "@/app/_constants/section_id.js";
import Load from "@/app/_components/Loading";
import Back from "@/app/_components/Back";
import Logo from "@/app/_components/Logo";
import Spacing from "@/app/_components/Spacing";
import Summary from "@/app/_containers/Summary";
import Info from "@/app/_containers/Info";
import Apply from "@/app/_containers/Apply";
import Link_ from "@/app/_containers/Link_";
import Footer from "@/app/_components/Footer";
import Side from "@/app/_components/Side";
import '@/styles/globals.css';

export default function Home() {
    const logoRef = useRef(null);
    const videoBackgroundRef = useRef(null);
    const summaryContainerRef = useRef(null);
    const infoContainerRef = useRef(null);
    const applyContainerRef = useRef(null);
    const linkContainerRef = useRef(null);
    const footContainerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visibleSection, setVisibleSection] = useState(null);

    useEffect(() => {
        // 로딩 상태를 3초 동안 유지한 후 로딩 상태를 해제
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useLayoutEffect(() => {
        const updateMargin = () => {
            if (logoRef.current && videoBackgroundRef.current && summaryContainerRef.current) {
                const logoHeight = logoRef.current.offsetHeight;
                videoBackgroundRef.current.style.marginTop = `${logoHeight}px`;
                summaryContainerRef.current.style.marginTop = `${logoHeight}px`;
            }
        };

        if (typeof window !== 'undefined') {
            updateMargin();
            window.addEventListener('resize', updateMargin);
            return () => {
                window.removeEventListener('resize', updateMargin);
            };
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sections = [
                summaryContainerRef.current,
                infoContainerRef.current,
                applyContainerRef.current,
                linkContainerRef.current,
                footContainerRef.current
            ];

            const options = {
                root: null,
                rootMargin: "0px",
                threshold: [0.1, 0.5, 0.9]
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            }, options);

            sections.forEach(section => {
                if (section) observer.observe(section);
            });

            return () => {
                sections.forEach(section => {
                    if (section) observer.unobserve(section);
                });
            };
        }
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {isLoading ? (
                <Load />
            ) : (
                <>
                    <Back ref={videoBackgroundRef} />
                    <div className="logoWrapper" ref={logoRef}>
                        <Logo id={section_id.LOGO} />
                    </div>
                    <div className="top-controller">
                        <div className="container">
                            <section id={section_id.SUM} className="section" ref={summaryContainerRef}>
                                <Summary />
                            </section>
                            <section id={section_id.INFO} className="section" ref={infoContainerRef}>
                                <Info />
                            </section>
                            <section id={section_id.APPLY} className="section" ref={applyContainerRef}>
                                <Apply />
                            </section>
                            <Spacing />
                            <section id={section_id.LINK} className="section" ref={linkContainerRef}>
                                <Link_ />
                            </section>
                            <Spacing />
                            <section id={section_id.FOOT} className="section" ref={footContainerRef}>
                                <Footer />
                            </section>
                        </div>
                        <div>
                            <Side visibleSection={visibleSection} onSectionClick={scrollToSection} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}