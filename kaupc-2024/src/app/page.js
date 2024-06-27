"use client";

import { useEffect, useRef } from "react";
import section_id from "@/app/_constants/section_id.js";
import Back from "@/app/_components/Back";
import Logo from "@/app/_components/Logo";
import Spacing from "@/app/_components/Spacing";
import Summary from "@/app/_containers/Summary";
import Info from "@/app/_containers/Info";
import Apply from "@/app/_containers/Apply";
import Link_ from "@/app/_containers/Link_";
import Footer from "@/app/_components/Footer";
import '@/styles/globals.css';

export default function Home() {
    const logoRef = useRef(null);
    const videoBackgroundRef = useRef(null);

    useEffect(() => {
        const updateMargin = () => {
            if (logoRef.current && videoBackgroundRef.current) {
                const logoHeight = logoRef.current.offsetHeight;
                videoBackgroundRef.current.style.marginTop = `${logoHeight}px`;
            }
        };

        updateMargin();
        window.addEventListener('resize', updateMargin);

        return () => {
            window.removeEventListener('resize', updateMargin);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <div>
                <Back id={section_id.BACK} />
            </div>
            <div className="logoWrapper" ref={logoRef}>
                <Logo id={section_id.LOGO} />
            </div>
            <div className="container">
                <section id={section_id.SUM} className="section">
                    <Summary />
                </section>
                <Spacing />
                <section id={section_id.INFO} className="section">
                    <Info />
                </section>
                <section id={section_id.APPLY} className="section">
                    <Apply />
                </section>
                <section id={section_id.LINK} className="section">
                    <Link_ />
                </section>
                <section id={section_id.FOOT} className="section">
                    <Footer />
                </section>
            </div>
        </>
    );
}