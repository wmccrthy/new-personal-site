`use client`
import { React, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJsSquare, faHtml5, faCss3Alt, faReact, faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJava, faRProject } from "@fortawesome/free-brands-svg-icons"; // Java and R icons
import { faLink } from "@fortawesome/free-solid-svg-icons";
import KeywordIcon from "./KeywordIcon";
import { SiCplusplus, SiPostgresql } from "react-icons/si"; // C++ and PostgreSQL from React Icons

export default function ProjectCard({ image, title, caption, icons, link, github, cpp = false, psql = false, torch = false }) {
    console.log(image)
    const [isAnimating, setIsAnimating] = useState(true); // Tracks animation state

    useEffect(() => { // on render, set isAnimating false after .3s delay
        setTimeout(() => {
            setIsAnimating(false)
        }, 300);
    }, [])


    return (
        <a className={`cursor-default flex flex-col w-full h-full border border-gray-800 bg-black hover:border-sky-500 shadow-lg rounded-xl transition-all duration-300 ease-in-out ${isAnimating ? "pointer-events-none" : "pointer-events-auto"}`} href={link}>
            {/* Image Section */}
            <div className="h-1/2 flex w-full">
                <img src={image} alt="Project image" className="object-cover w-full h-full rounded-t-xl" />
            </div>

            <div className="flex flex-col justify-center items-center align-middle content-center h-1/2 w-full mt-1">
                {/* Title Section */}
                <h3 className="text-center font-semibold text-xl">
                    {title}
                </h3>

                {/* Caption Section */}
                <p className="text-center text-sm font-extralight mt-2 w-5/6">
                    {caption}
                </p>

                {/* Skills Icons */}
                <div className="flex flex-wrap items-center justify-center align-middle content-center gap-6 mt-4">
                    <h3 className="font-semibold">Skills and Tools:</h3>
                    {/* <h3 className="font-bold">Worked With</h3> */}
                    {
                        icons.map((icon) => {
                            return <FontAwesomeIcon icon={icon} size="xl" className='hover:scale-110 transition-transform'></FontAwesomeIcon>;
                        })
                    }
                    {cpp ? <SiCplusplus size="1.5em" className="hover:scale-110 transition-transform" /> : null}
                    {psql ? <SiPostgresql size="1.5em" className="hover:scale-110 transition-transform" /> : null}
                    {torch ? <img
                        src="/util/pytorch.svg"
                        alt="PyTorch"
                        className="w-6 h-6 hover:scale-110 transition-transform"
                    /> : null}
                </div>

                <a href={github != "" ? github : link} className="hover:scale-110 hover:text-sky-400 transition-transform mt-4">
                    {github != "" ? <FontAwesomeIcon icon={faGithub} size="xl"></FontAwesomeIcon> : <FontAwesomeIcon icon={faLink} size="lg"></FontAwesomeIcon>}
                </a>
            </div>
        </a>
    );
}