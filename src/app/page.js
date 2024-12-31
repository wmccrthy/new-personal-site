import Image from "next/image";
import NavBar from "./components/NavBar";
import Intro from "./components/Home";


export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle content-center items-center h-[90vh]">
      <NavBar></NavBar>
      <div className="flex flex-col w-2/3 items-center content-center justify-center align-middle h-full">
        <Intro></Intro>
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