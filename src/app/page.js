"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const [showProjects, setShowProjects] = useState(false);
    const containerRef = useRef(null);

    const sampleProjects = [
        { name: "NEETI Website", desc: "A website for the students of ISEP-LETI.", href: "https://neeti.josefranciso.tech/" },
        { name: "Library Managing System", desc: "A Spring Boot API with microservices, using RabbitMQ as a message broker." , href: "https://github.com/josefrancisco17/SIDIS-LMS"},
        { name: "Library Client App", desc: "A React Native mobile application that enables users to manage their books." , href: "https://github.com/josefrancisco17/DSSMV_ProjectReact_1220971"},
    ];

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const maxRotation = 15;
        const rotateY = ((x - midX) / midX) * maxRotation;
        const rotateX = -((y - midY) / midY) * maxRotation;

        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
        const container = containerRef.current;
        if (!container) return;
        container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        container.style.transition = "transform 0.5s ease";
    };

    const handleMouseEnter = () => {
        const container = containerRef.current;
        if (!container) return;
        container.style.transition = "transform 0.1s ease";
    };

    const toggleProjects = () => {
        setShowProjects((prev) => !prev);
    };

    return (
        <div
            ref={containerRef}
            className="glass-container relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <h1>José Francisco</h1>
            <h2>Student @ Instituto Superior de Engenharia do Porto</h2>
            <div className="tagline">
                Aspiring Software Engineer / DevSecOps Engineer
            </div>

            <p>
                Passionate about crafting secure, scalable software solutions.
                Enjoy exploring new technologies and embracing best practices in DevSecOps.
            </p>
            <div className="links">
                <a
                    href="https://github.com/josefrancisco17"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/github.svg"
                        alt="Github"
                        width={30}
                        height={30}
                        className="icon"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/josefrancisco17/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/linkedin.svg"
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="icon"
                    />
                </a>
                <a
                    href="mailto:josefrancisco17@gmail.com"
                    aria-label="Email"
                >
                    <Image
                        src="/icons/mail.svg"
                        alt="Email"
                        width={40}
                        height={40}
                        className="icon"
                    />
                </a>
            </div>
            <div className="mt-8">
                <button
                    onClick={toggleProjects}
                    className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                    {showProjects ? "Hide Projects" : "View Projects"}
                </button>
            </div>

            <AnimatePresence>
                {showProjects && (
                    <motion.div
                        className="projects-container mt-8 space-y-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {sampleProjects.map((proj, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/10 rounded-md p-4 shadow-md text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <a className="text-lg font-bold text-white"
                                   key={idx}
                                   href={proj.href}
                                   target="_blank"
                                   rel="noopener noreferrer">{proj.name}</a>
                                <p className="text-gray-300">{proj.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
