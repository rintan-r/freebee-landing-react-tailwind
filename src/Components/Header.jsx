import React from "react";
import IconLogo from "../Assets/logo.svg?react";
import IconFlag from "../Assets/flag.svg?react";
import IconArrowDown from "../Assets/arrow_down.svg?react";


function Header() {
    return (
        <div className='typography py-3 px-5 bg-white rounded-full flex flex-1 mx-3.5 md:mx-12 mt-12 [@media(min-width:1920px)]:mt-34 md:mt-16 [@media(min-width:3840px)]:mt-54 justify-between [@media(min-width:1920px)]:mx-24'>
            <div className="w-full flex md:justify-center ">
                <IconLogo className="w-18 h-auto sm:w-18 sm:h-auto md:w-26 md:h-auto lg:w-30 lg:h-auto [@media(min-width:2560px)]:w-36 [@media(min-width:2560px)]:h-auto [@media(min-width:3840px)]:w-44 [@media(min-width:3840px)]:h-auto"/>
            </div>

            <div className="flex justify-center items-center flex-row gap-1.5">
                <IconFlag className="w-6 h-6 sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-10 lg:h-10 [@media(min-width:2560px)]:w-16 [@media(min-width:2560px)]:h-16 [@media(min-width:3840px)]:w-20 [@media(min-width:3840px)]:h-20"/>
                <IconArrowDown className="w-6 h-6 sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-10 lg:h-10 [@media(min-width:2560px)]:w-16 [@media(min-width:2560px)]:h-16 [@media(min-width:3840px)]:w-20 [@media(min-width:3840px)]:h-20"/>
            </div>
        </div>
    )
}

export default Header;