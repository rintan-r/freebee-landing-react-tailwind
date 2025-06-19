import { motion } from "framer-motion";
import useTypingText from "../Hooks/useTypingText";

export default function TypingTextLoop({
  text = "Lorem Ipsum",
  speed = 100,
  deleteSpeed = 50,
  pause = 1000,
  className = "",
}) {
  const displayedText = useTypingText({ text, speed, deleteSpeed, pause });

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayedText}
      <span className="inline-block w-1 bg-white animate-pulse ml-1">|</span>
    </motion.span>
  );
}
