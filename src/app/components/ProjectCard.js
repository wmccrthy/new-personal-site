`use client`
import { React, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJsSquare, faHtml5, faCss3Alt, faReact, faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJava, faRProject } from "@fortawesome/free-brands-svg-icons"; // Java and R icons
import { faLink } from "@fortawesome/free-solid-svg-icons";
import KeywordIcon from "./KeywordIcon";
import { SiCplusplus, SiPostgresql } from "react-icons/si"; // C++ and PostgreSQL from React Icons

export default function ProjectCard({ image, title, caption, icons, link, github, cpp = false, psql = false, torch = false }) {
    const [isAnimating, setIsAnimating] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const gradientStyle = {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.1), rgba(0, 0, 0, 0) 100%)`,
    };

    useEffect(() => {
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    }, []);

    return (
        <a
            onMouseMove={handleMouseMove}
            className={`cursor-default flex flex-col w-full min-h-[300px] md:h-full border border-gray-800 bg-black hover:border-sky-500 shadow-lg rounded-xl transition-all duration-300 ease-in-out ${isAnimating ? "pointer-events-none" : "pointer-events-auto"}`}
            href={link}
        >
            {/* Border Effect */}
            <div
                className="absolute inset-4 rounded-xl pointer-events-none"
                style={gradientStyle}
            ></div>

            {/* Image Section */}
            <div className="flex-shrink-0 h-1/3 md:h-1/2 w-full">
                <img src={image} alt="Project image" className="object-cover w-full h-full rounded-t-xl" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow md:h-1/2 justify-center items-center p-4 overflow-scroll">
                {/* Title Section */}
                <h3 className="text-center font-semibold text-lg md:text-xl">
                    {title}
                </h3>

                {/* Caption Section */}
                <p className="text-center text-sm font-extralight mt-2 w-full">
                    {caption}
                </p>

                {/* Skills Icons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                    {icons.map((icon, index) => (
                        <FontAwesomeIcon key={index} icon={icon} size="xl" className="hover:scale-110 transition-transform" />
                    ))}
                    {cpp && <SiCplusplus size="1.5em" className="hover:scale-110 transition-transform" />}
                    {psql && <SiPostgresql size="1.5em" className="hover:scale-110 transition-transform" />}
                    {torch && (
                        <img
                            src="/util/pytorch.svg"
                            alt="PyTorch"
                            className="w-6 h-6 hover:scale-110 transition-transform"
                        />
                    )}
                </div>

                {/* Links */}
                <a href={github || link} className="hover:scale-110 hover:text-sky-400 transition-transform mt-4">
                    {github ? <FontAwesomeIcon icon={faGithub} size="xl" /> : <FontAwesomeIcon icon={faLink} size="lg" />}
                </a>
            </div>
        </a>
    );
}
