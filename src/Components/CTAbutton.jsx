import arrow_right from "../Assets/arrow_right.svg"

function CTAbutton() {
    return (
        <>
        <button className="typography w-full md:w-1/2 bg-yellow flex flex-row justify-between 
        pb-4.5 md:pb-5 2xl:pb-7 [@media(min-width:2560px)]:pb-8 [@media(min-width:3840px)]:pb-12
        pt-4 md:pt-5 2xl:pt-6 [@media(min-width:2560px)]:pt-7 [@media(min-width:3840px)]:pt-14
        px-9.5 md:px-10 2xl:px-11 [@media(min-width:2560px)]:px-12 [@media(min-width:3840px)]:px-24
        rounded-full">
            <h4 className="text-dark font-bold">Lorem Ipsum</h4>
            <img src={arrow_right} alt="click button" />
        </button>
        </>
        

    )
}

export default CTAbutton;


