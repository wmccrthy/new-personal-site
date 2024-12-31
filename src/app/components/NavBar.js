import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
    return (
        <div className="flex justify-between content-between align-middle w-11/12 h-fit m-4 p-4 font-extralight">
            <div className="flex gap-4 h-full">
                {/* logo/links */}
                <a className="h-8 w-8 cursor-pointer" href="https://www.linkedin.com/in/wyatt-mccarthy-134997209/">
                    <FontAwesomeIcon icon={faLinkedin} size="2xs" />
                </a>
                <a className="h-8 w-8 cursor-pointer" href="https://github.com/wmccrthy">
                    <FontAwesomeIcon icon={faGithub} size="2xs" />
                </a>
            </div>
            <div className="flex gap-8 align-middle justify-center text-lg content-between w-1/5">
                {/* pages */}
                <a className="w-1/3 cursor-pointer text-center items-center align-middle justify-center content-center hover:font-normal transition-all">
                    Home
                </a>
                <a className="w-1/3 cursor-pointer text-center items-center align-middle justify-center content-center hover:font-normal transition-all">
                    About
                </a>
                <a className="w-1/3 cursor-pointer text-center items-center align-middle justify-center content-center hover:font-normal transition-all">
                    Projects
                </a>
            </div>
        </div>
    );
}