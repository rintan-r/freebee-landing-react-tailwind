import IconCheckCircle from "../Assets/check_circle.svg?react";

function Chip({ label }) {
    return (
        <div className="typography flex flex-row bg-white justify-center items-center
        py-2.5 md:py-3 2xl:py-5 [@media(min-width:2560px)]:py-7 [@media(min-width:3840px)]:py-10
        pl-4 md:pl-4.5 2xl:pl-6 [@media(min-width:2560px)]:pl-6 [@media(min-width:3840px)]:pl-9
        pr-8 md:pr-8.5 2xl:pr-10 [@media(min-width:2560px)]:pr-11 [@media(min-width:3840px)]:pr-12
        rounded-full
        gap-1.5">
            <IconCheckCircle className="w-6 h-6 sm:w-6 sm:h-6 md:w-9 md:h-9 lg:w-10 lg:h-10 [@media(min-width:2560px)]:w-16 [@media(min-width:2560px)]:h-16 [@media(min-width:3840px)]:w-20 [@media(min-width:3840px)]:h-20"/>
            <h5 className="text-dark">{label}</h5>
        </div>

    )
}

export default Chip;


