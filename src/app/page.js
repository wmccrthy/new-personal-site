'use client'
import Image from "next/image";
import NavBar from "./components/NavBar";
import Intro from "./components/Home";
import About from "./components/About";
import ProjectDeck from "./components/ProjectDeck";
import ProjectCard from "./components/ProjectCard";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPython, faJsSquare, faHtml5, faCss3Alt, faReact, faGit } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJava, faRProject } from "@fortawesome/free-brands-svg-icons"; // Java and R icons


export default function Home() {
  const [activePage, setActivePage] = useState(<Intro></Intro>)
  const [menuOpen, setMenuOpen] = useState(false); // Tracks the state of the mobile menu

  const handleInput = (element) => {
    setActivePage(element);
    setMenuOpen(false); // Close menu after selecting a page
    return;
  };

  const projects = [
    {
      title: "Amherst Athletics Database Visualization Interface",
      caption: "Designed and developed a full-stack PERN (PostgreSQL, Express, React, Node.js) application for Amherst Athletics, enabling coaches and athletes to visualize and manage performance data efficiently. Built a robust backend to handle data storage in PostgreSQL and created dynamic, responsive front-end components using React. The interface allows data filtering, visualization through charts, and role-based access for users.",
      icons: [faReact, faJsSquare],
      cpp: false,
      psql: true,
      torch: false,
      link: "https://github.com/wmccrthy/Catapult-Database-Project",
      image: "/util/mammoth.png",
      github: "https://github.com/wmccrthy/Catapult-Database-Project"
    },
    {
      title: "Pathfinding Algorithm Visualizer",
      caption: "Developed an educational tool to visualize pathfinding algorithms such as A* and Dijkstra in Python. Later re-implemented the project as a web application using HTML, CSS, and JavaScript, providing an interactive interface for users to see algorithms in action. The project showcases grid-based visualizations with adjustable parameters and highlights how different algorithms traverse and optimize paths.",
      icons: [faPython, faJsSquare, faReact],
      cpp: false,
      psql: false,
      torch: false,
      link: "https://wmccrthy.github.io/PathfindingVisualizer/index.html",
      image: "/util/path.png",
      github: ""
    },
    {
      title: "Checkers AI",
      caption: "Built an advanced Checkers AI using the Minimax algorithm with alpha-beta pruning optimizations to evaluate game states efficiently. Incorporated heuristics to assess board positions and implemented game rules programmatically in Python. The AI demonstrates competitive gameplay and can evaluate moves in real-time against human players, emphasizing optimization and algorithmic design.",
      icons: [faPython],
      cpp: false,
      psql: false,
      torch: false,
      link: "https://github.com/wmccrthy/CheckersAI",
      image: "/util/check.png",
      github: "https://github.com/wmccrthy/CheckersAI"
    },
    {
      title: "Roblox Text Scaling Feature",
      caption: "As an intern on the Accessibility team at Roblox, implemented a text scaling feature in C++, enhancing the usability of the platform for visually impaired users. Refactored over 25 UI components using Lua and React to integrate the feature seamlessly. Delivered robust solutions that followed best practices for accessibility and UI performance.",
      icons: [faReact],
      cpp: true,
      psql: false,
      torch: false,
      link: "https://devforum.roblox.com/t/introducing-text-scaling-setting-studio-beta/3136967",
      image: "/util/text_scaling.png",
      github: ""
    },
    {
      title: "Genomics of Longevity Research",
      caption: "As an undergraduate research assistant with the Regina Barzilay group at MIT, developed and maintained data pipelines and conducted statistical analyses to preprocess and analyze large-scale genomic datasets. This work informed the design and implementation of long-context transformer models for genome data analysis. Leveraged PyTorch and PyTorch Lightning to build scalable models capable of processing large sequences efficiently.",
      icons: [faPython],
      cpp: false,
      psql: false,
      torch: true,
      link: "https://github.com/wmccrthy/Max-Lifespan-Project/blob/main/work_log/Max_Lifespan_Research_Weekly_Log.pdf",
      image: "/util/dna.jpg",
      github: "https://github.com/wmccrthy/Max-Lifespan-Project"
    },
  ];

  return (
    <div className="h-[100vh] flex flex-col justify-evenly align-middle content-center items-center">

      {/* NavBar */}
      <div className="flex justify-between content-between align-middle w-11/12 h-fit p-4 pb-0 mb-2 font-extralight">
        <div className="flex gap-4 h-full">
          {/* logo/links */}
          <a className="h-8 w-8 cursor-pointer hover:text-blue-700 transition-transform hover:scale-110" href="https://www.linkedin.com/in/wyatt-mccarthy-134997209/">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a className="h-8 w-8 cursor-pointer hover:text-sky-400 transition-transform hover:scale-110" href="https://github.com/wmccrthy">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
        </div>
        <div className="md:!flex w-0 gap-8 align-middle justify-center text-lg content-between md:w-1/5 overflow-auto">
          {/* pages */}
          <a className="w-1/3 cursor-pointer text-center items-center align-middle justify-center content-center hover:scale-110 transition-transform" onClick={() => handleInput(<Intro></Intro>)}>
            Home
          </a>
          <a className="w-1/3 cursor-pointer text-center items-center align-middle justify-center content-center hover:scale-110 transition-transform" onClick={() => handleInput(<About></About>)}>
            About
          </a>
          <a className="w-1/3 cursor-pointer text-center items-center align-middle justify-center content-center hover:scale-110 transition-transform" onClick={() => handleInput(<ProjectDeck projects={projects}></ProjectDeck>)}>
            Projects
          </a>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-sky-500 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl">&#9776;</span> {/* Hamburger Icon */}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-3xl hover:text-sky-500 focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              &times; {/* Close Icon */}
            </button>
            <a className="py-4 text-2xl hover:scale-110 transition-transform" onClick={() => handleInput(<Intro></Intro>)}>
              Home
            </a>
            <a className="py-4 text-2xl hover:scale-110 transition-transform" onClick={() => handleInput(<About></About>)}>
              About
            </a>
            <a className="py-4 text-2xl hover:scale-110 transition-transform" onClick={() => handleInput(<ProjectDeck projects={projects}></ProjectDeck>)}>
              Projects
            </a>
          </div>
        )}
      </div>

      <div className="flex flex-col md:w-2/3 w-full items-center content-center justify-center align-middle flex-grow max-h-[90vh] md:h-[85vh] pb-4">
        {activePage}
        {/* toggle different pages within this div based on the navbar input */}
      </div>
    </div>
  );
}


/*
PROJECT PLAN and STRUCTURE

Pages
- home page
- project page
  - can toggle between grid view and carousel view
    - will need ProjectGridCard and ProjectCarouselCard to support this approach
- detailed about page

Components
- project card
- project carousel
  - consists of project cards
- nav bar

Where can I find design inspiration???

*/