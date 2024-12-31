'use client'
import React, { useState, useEffect } from "react";
import "../TypewriterText.css"

export default function TypewriterText({ text, typingSpeed = 120, isHeader = true, keepBlinking = false, delay = 0 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (typeof text !== "string") {
            console.error("The `text` prop must be a string.");
            return;
        }
        var currentIndex = 0;
        console.log(text)

        

        const typeText = () => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                if (!keepBlinking) {
                    setIsTyping(false);   
                }
            }
        };
        
        if (delay > 0) {
            setTimeout(() => {
                setIsTyping(true);
                typeText();
            }, delay)
        } else {
            setIsTyping(true);
            typeText();
        }
    }, [text, typingSpeed]);

    return (
        <div className={`terminal ${isHeader ? "header" : "paragraph"} font-extralight`}>
            <span>{displayedText}</span>
            <span className={`cursor ${isTyping ? "blinking" : "hidden"}`}>&#9608;</span>
        </div>
    );
};