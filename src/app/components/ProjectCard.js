import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJsSquare, faHtml5, faCss3Alt, faReact, faGit } from "@fortawesome/free-brands-svg-icons";
import { faJava, faRProject } from "@fortawesome/free-brands-svg-icons"; // Java and R icons
import KeywordIcon from "./KeywordIcon";

export default function ProjectCard({ image, title, caption, icons, link }) {
    console.log(image)

    return (
        <a className="flex flex-col border border-white w-full h-full shadow rounded cursor-pointer justify-center items-center align-middle content-center" href={ link }>
            {/* Image Section */}
            <div className="border-b border-white h-1/2 flex justify-center items-center w-full">
                <img src={image} alt="Project image" className="object-contain max-w-full max-h-full" />
            </div>

            {/* Title Section */}
            <h3 className="text-center font-bold text-xl mt-4">
                {title}
            </h3>

            {/* Caption Section */}
            <p className="text-center text-sm mt-8 w-5/6">
                {caption}
            </p>

            {/* Skills Icons */}
            <div className="flex flex-wrap items-center justify-center align-middle content-center gap-6 mt-10">
                        {/* <h3 className="font-bold">Worked With</h3> */}
                        {
                            icons.map((icon) => {
                                return <FontAwesomeIcon icon={icon} size="xl"></FontAwesomeIcon>;
                            })
                        }
            </div>
        </a>
    );
}