import TypewriterText from "./TypewriterText";

export default function Intro() {
    return (
        <div className="w-full flex flex-col items-center">
            <TypewriterText text="Hi, I'm Wyatt"></TypewriterText>
            <TypewriterText text="Amherst College 2025E', Software Engineer, Athlete"typingSpeed={50} isHeader={false} keepBlinking={true} delay={2000}></TypewriterText>
        </div>
    );
}

// Want a title line: "Hi, I'm Wyatt" that is typed out with a blinking cursor at the end of it
// want a paragraph below that types out when page is initially loaded

