import React from "react";
import { motion, scale } from "framer-motion";
import clsx from "clsx";

export default function CTAbutton({
    variant = "primary",
    size = "md",
    className,
    children,
    whileHover = { scale: 1.05 }, //default hover animasi
    whileTap = { scale: 0.95 }, //default tap animasi
    ...props
}) {
    const baseStyle =
        `typography w-full
        md:w-1/2
        bg-yellow
        flex flex-row justify-between 
        
        pb-4.5 md:pb-5 2xl:pb-7 [@media(min-width:2560px)]:pb-8 [@media(min-width:3840px)]:pb-12
        pt-4 md:pt-5 2xl:pt-6 [@media(min-width:2560px)]:pt-7 [@media(min-width:3840px)]:pt-14
        px-9.5 md:px-10 2xl:px-11 [@media(min-width:2560px)]:px-12 [@media(min-width:3840px)]:px-24
        
        rounded-full
    `

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
    };

    return (
        <motion.button
            whileHover={whileHover}
            whileTap={whileTap}
            className={clsx(baseStyle, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );


}