'use client'
import React, { useState, useEffect } from "react";
import "../TypewriterText.css"

export default function TypewriterText({ text, typingSpeed = 150, isHeader = true}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (typeof text !== "string") {
            console.error("The `text` prop must be a string.");
            return;
        }
        var currentIndex = 0;
        console.log(text)

        const typeText = () => {
            if (currentIndex <= text.length && isTyping) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                setIsTyping(false);
            }
        };

        typeText();
    }, [text, typingSpeed]);

    return (
        <div className={`terminal ${isHeader ? "header" : "paragraph"} font-extralight`}>
            <span>{displayedText}</span>
            <span className={`cursor ${isTyping ? "blinking" : "blinking"}`}>&#9608;</span>
        </div>
    );
};