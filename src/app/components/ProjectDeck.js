'use client'
import ProjectCard from "./ProjectCard";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";



export default function ProjectDeck({ projects }) {
    // should take array of Project Cards as prop
    // has arrow buttons on either side to change the index of the current project
    // we display projectArray[currentIndex]
    // State to track the current project index
    const [index, setIndex] = useState(0);
    const [startX, setStartX] = useState(1)

    // Function to handle left arrow click
    const handleLeft = () => {
        setStartX(1);
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
    };

    // Function to handle right arrow click
    const handleRight = () => {
        setStartX(-1);
        setIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="flex flex-col items-center justify-center align-middle content-center w-3/5 h-5/6 transition-transform hover:scale-105 m-4">
            {/* Arrow Buttons and Project Display */}
            <div className="flex items-center justify-center w-full gap-4 h-full">
                {/* Left Arrow */}
                <button
                    onClick={handleLeft}
                    className="p-2 rounded-full shadow scale-125 hover:scale-150"
                    aria-label="Previous Project"
                >
                    ←
                </button>

                {/* Current Project */}
                <div className="flex-1 flex items-center justify-center w-full h-full p-4 relative">
                    <AnimatePresence>
                        <motion.div
                            key={projects[index].title} // Unique key for AnimatePresence
                            initial={{ x: -startX * 150, opacity: 0 }} // Dynamic initial position
                            animate={{ x: 0, opacity: 1 }} // End at center
                            exit={{ opacity: 0, position: 'absolute', scale: 0.5 }} // Exit in opposite direction
                            transition={{
                                // x: { type: "spring", stiffness: 175 },
                                opacity: { duration: 0.3, ease: "easeInOut" }, // Quick opacity transition
                            }}
                            className="w-full h-full"
                        >
                            <ProjectCard
                                title={projects[index].title}
                                caption={projects[index].caption}
                                icons={projects[index].icons}
                                image={projects[index].image}
                                link={projects[index].link}
                                github={projects[index].github}
                                cpp={projects[index].cpp}
                                psql={projects[index].psql}
                                torch={projects[index].torch}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleRight}
                    className="p-2 rounded-full shadow scale-125 hover:scale-150"
                    aria-label="Next Project"
                >
                    →
                </button>
            </div>
        </div>
    );
}
