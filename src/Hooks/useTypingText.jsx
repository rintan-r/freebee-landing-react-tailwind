import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypingTextLoop({
    text = "",
    speed = 100,
    deleteSpeed = 50,
    pause = 1000,

}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        console.log("🚀 useEffect RUNNING");
        console.log("displayedText:", displayedText);
        console.log("isDeleting:", isDeleting);
        let typingInterval;

        if (!isDeleting && displayedText.length < text.length) {
            typingInterval = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
                console.log("✨ TYPING", displayedText.length);
            }, speed);
        } else if (isDeleting && displayedText.length > 0) {
            typingInterval = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length - 1));
                console.log("🗑️ DELETING", displayedText.length);
            }, deleteSpeed);
        } else if (!isDeleting && displayedText.length === text.length) {
            typingInterval = setTimeout(() => {
                setIsDeleting(true);
                console.log("✅ SWITCH TO DELETE");
            }, pause);
        } else if (isDeleting && displayedText.length === 0) {
            setIsDeleting(false);
            console.log("🔁 SWITCH TO TYPING");
        }

        return () => clearTimeout(typingInterval);
    }, [displayedText, isDeleting, text, speed, deleteSpeed, pause]);


    return displayedText;
}