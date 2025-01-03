// 'use client'
// import React, { useState, useEffect } from "react";
// import TypewriterText from "./TypewriterText";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faPython, faJsSquare, faHtml5, faCss3Alt, faReact, faGit } from "@fortawesome/free-brands-svg-icons";
// import { faJava, faRProject } from "@fortawesome/free-brands-svg-icons"; // Java and R icons
// import { motion } from "motion/react"



// export default function About() {
//     return (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <div className="flex flex-col md:flex-row rounded-lg p-6 gap-6 mx-auto w-full h-full">
//                 {/* Left Paragraph Section */}
//                 <div className="flex-1 flex-col gap-6 w-2/3 text-lg items-center align-middle content-center">
//                     {/* <TypewriterText text="Hello! I'm Wyatt, a passionate developer with experience in full-stack
//                     development, data visualization, and 3D rendering. I love solving
//                     complex problems and building tools that make a difference." isHeader={false} typingSpeed={20}></TypewriterText> */}
//                     <p className="text-center">Hello! I'm Wyatt, a passionate developer with experience in full-stack
//                         development, data visualization, and 3D rendering. I love solving
//                         complex problems and building tools that make a difference. I recently graduated from Amherst College with a B.A. in Computer Science. During my time at Amherst, I pursued extensive coursework in Economics and Math alongside my major. I was also a proud member of the men’s varsity soccer team, having played the sport since I was a toddler. I will be taking the skills I've acquired throughout college to Roblox, where I start work as a Software Engineer in early 2025.</p>

//                     {/* Skills Icons */}
//                     <div className="flex flex-wrap items-center justify-center align-middle content-center gap-6 mt-10">
//                         <h3 className="font-bold">I've Worked With</h3>
//                         <FontAwesomeIcon icon={faPython} size="xl" className="text-blue-600" />
//                         <FontAwesomeIcon icon={faJsSquare} size="xl" className="text-yellow-500" />
//                         <FontAwesomeIcon icon={faJava} size="xl" className="text-cyan-500" />
//                         <FontAwesomeIcon icon={faHtml5} size="xl" className="text-orange-600" />
//                         <FontAwesomeIcon icon={faCss3Alt} size="xl" className="text-blue-400" />
//                         <FontAwesomeIcon icon={faRProject} size="xl" className="text-red-500" />
//                         <FontAwesomeIcon icon={faReact} size="xl" className="text-cyan-500" />
//                         <FontAwesomeIcon icon={faGit} size="xl" className="text-red-500" />
//                     </div>
//                 </div>

//                 {/* Right Icon and Links Section */}
//                 <div className="flex flex-col items-center gap-4 w-1/3 h-full justify-center align-middle content-center">
//                     {/* Icon Photo */}
//                     <img
//                         src="https://images.sidearmdev.com/resize?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fathletics.amherst.edu%2fimages%2f2024%2f8%2f28%2fAmherstMediaDay_20240820_CM9_9175.jpg&width=300&type=webp"
//                         //   alt="Wyatt's photo"
//                         className="md:w-64 md:h-64 rounded-full object-cover object-[center_top]"
//                     />

//                     {/* Social Links */}
//                     <div className="flex gap-6">
//                         <a
//                             href="https://linkedin.com/in/yourprofile"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-blue-700 transition-transform hover:scale-110"
//                         >
//                             <FontAwesomeIcon icon={faLinkedin} size="xl" />
//                             {/* linkedIn */}
//                         </a>
//                         <a
//                             href="path/to/resume.pdf"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-green-700 transition-transform hover:scale-110"
//                         >
//                             <FontAwesomeIcon icon={faFileAlt} size="xl" />
//                             {/* resume */}
//                         </a>
//                         <a
//                             href="https://github.com/yourprofile"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-sky-400 transition-transform hover:scale-110"
//                         >
//                             <FontAwesomeIcon icon={faGithub} size="xl" />
//                             {/* github */}
//                         </a>
//                         <a
//                             href="mailto:your.email@example.com"
//                             className="hover:text-red-700 transition-transform hover:scale-110"
//                         >
//                             <FontAwesomeIcon icon={faEnvelope} size="xl" />
//                             {/* mail */}
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPython, faJsSquare, faHtml5, faCss3Alt, faReact, faGit, faJava, faRProject } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
import { SiCplusplus, SiPostgresql } from "react-icons/si"; // C++ and PostgreSQL from React Icons

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-12 mx-auto w-11/12 max-w-5xl border border-gray-800 bg-black hover:border-sky-500 shadow-lg rounded-xl p-8 transition-all hover:scale-105 duration-300 h-full md:h-2/3 overflow-scroll align-middle md:items-center"
        >
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center items-start">
                <h1 className="text-2xl font-semibold text-white mb-6">
                    About Me
                </h1>
                <p className="text-lg font-extralight leading-relaxed text-gray-300">
                    Hello! I'm Wyatt, a passionate developer with experience in full-stack
                    development and data engineering. I love solving
                    complex problems and building tools that make a difference. I recently graduated from Amherst College with a B.A. in Computer Science. During my time at Amherst, I pursued extensive coursework in Economics and Math alongside my major. I was also a proud member of the men’s varsity soccer team, having played the sport since I was a toddler. I will be taking the skills I've acquired throughout college to Roblox, where I start work as a Software Engineer in early 2025.
                </p>

                {/* Skills */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-400 mb-4">
                        I've Worked With
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        <FontAwesomeIcon icon={faPython} size="2x" className="text-blue-600 hover:scale-110 transition-transform" />
                        <FontAwesomeIcon icon={faJsSquare} size="2x" className="text-yellow-500 hover:scale-110 transition-transform" />
                        <FontAwesomeIcon icon={faJava} size="2x" className="text-cyan-500 hover:scale-110 transition-transform" />
                        <FontAwesomeIcon icon={faHtml5} size="2x" className="text-orange-600 hover:scale-110 transition-transform" />
                        <FontAwesomeIcon icon={faCss3Alt} size="2x" className="text-blue-400 hover:scale-110 transition-transform" />
                        <FontAwesomeIcon icon={faRProject} size="2x" className="text-red-500 hover:scale-110 transition-transform" />
                        <FontAwesomeIcon icon={faReact} size="2x" className="text-cyan-500 hover:scale-110 transition-transform" />
                        <FontAwesomeIcon icon={faGit} size="2x" className="text-red-500 hover:scale-110 transition-transform" />
                        <SiCplusplus size="2em" className="text-sky-600 hover:scale-110 transition-transform" />
                        <SiPostgresql size="2em" className="text-purple-500 hover:scale-110 transition-transform" />
                        <img
                            src="/util/pytorch.svg"
                            alt="PyTorch"
                            className="w-8 h-8 hover:scale-110 transition-transform"
                        />
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-center">
                {/* Profile Photo */}
                <img
                    src="https://images.sidearmdev.com/resize?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fathletics.amherst.edu%2fimages%2f2024%2f8%2f28%2fAmherstMediaDay_20240820_CM9_9175.jpg&width=300&type=webp"
                    alt="Wyatt's photo"
                    className="w-48 h-48 rounded-full shadow-lg object-cover object-[center_top]"
                />

                {/* Links */}
                <div className="flex gap-6 mt-8">
                    <a
                        href="https://www.linkedin.com/in/wyatt-mccarthy-134997209/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-700 transition-transform hover:scale-125"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                        href="/util/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-500 transition-transform hover:scale-125"
                    >
                        <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </a>
                    <a
                        href="https://github.com/wmccrthy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-sky-400 transition-transform hover:scale-125"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        href="mailto:wmccarthy24@amherst.edu"
                        className="text-gray-400 hover:text-red-500 transition-transform hover:scale-125"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
