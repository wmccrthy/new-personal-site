import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJsSquare, faHtml5, faCss3Alt, faReact, faGit, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faJava, faRProject } from "@fortawesome/free-brands-svg-icons"; // Java and R icons
import { faLink } from "@fortawesome/free-solid-svg-icons";
import KeywordIcon from "./KeywordIcon";

export default function ProjectCard({ image, title, caption, icons, link, github }) {
    console.log(image)

    return (
        <a className="flex flex-col w-full h-full border border-white shadow-md rounded justify-center items-center align-middle content-center cursor-default" href={link}>
            {/* Image Section */}
            <div className="border-b border-white h-1/2 flex w-full">
                <img src={image} alt="Project image" className="object-cover w-full h-full rounded" />
            </div>

            <div className="flex flex-col justify-center items-center align-middle content-center h-1/2 w-full mt-2">
                {/* Title Section */}
                <h3 className="text-center font-bold text-xl">
                    {title}
                </h3>

                {/* Caption Section */}
                <p className="text-center text-sm mt-6 w-5/6">
                    {caption}
                </p>

                {/* Skills Icons */}
                <div className="flex flex-wrap items-center justify-center align-middle content-center gap-6 mt-6">
                    {/* <h3 className="font-bold">Worked With</h3> */}
                    {
                        icons.map((icon) => {
                            return <FontAwesomeIcon icon={icon} size="xl"></FontAwesomeIcon>;
                        })
                    }
                </div>
                
                <a href={github != "" ? github : link} className="hover:scale-110 hover:text-sky-400 transition-transform mt-4">
                    {github != "" ? <FontAwesomeIcon icon={faGithub} size="xl"></FontAwesomeIcon> : <FontAwesomeIcon icon={faLink} size="lg"></FontAwesomeIcon>}
                </a>
            </div>
        </a>
    );
}