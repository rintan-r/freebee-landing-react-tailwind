import TypingTextLoop from "../Components/TypingTextLoop";
import draw from "../Assets/draw.svg";
import Chip from "../Components/Chip";
import CTAbutton from "../Components/CTAbutton";

function Hero() {
    const checkItem = [
        "Cursus Integer", "Integer Consequat", "Tellus Euismod Pellentesque", "Aliquot Tristique", "Pellentesque Tempus", "Mauris Fermentum Praesent",
    ];

    return (
        <div className="typography flex flex-col-reverse xl:flex-row xl:mt-15 md:justify-center md:mx-12 [@media(min-width:1920px)]:mx-24">
            <div className="flex flex-col text-left px-5 xl:pl-14 [@media(min-width:2560px)]:pl-34 [@media(min-width:3840px)]:pl-54 gap-10 xl:gap-6 [@media(min-width:2560px)]:gap-12 [@media(min-width:3840px)]:gap-16 2xl:justify-center">
                <h5 className="text-yellow-600 font-bold">RISUS PRAESENT VULPUTATE.</h5>
                <h1>
                    Cursus Integer <br />
                    Consequat {" "}
                    <TypingTextLoop
                        text="Tristique."
                        speed={100} // kecepatan ketik
                        deleteSpeed={50} // kecepatan hapus
                        pause={1000} // jeda sebelum hapus
                        className="typography h1"
                    />
                </h1>
                <div className="flex flex-wrap justify-start gap-3 md:gap-4 [@media(min-width:2560px)]:gap-6 [@media(min-width:3840px)]:gap-8">
                    {checkItem.map((item, index) => (
                        <Chip key={index} label={item} />
                    ))}
                </div>
                <Button
                    variant="primary"
                    size="lg"
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Custom Hover
                </Button>
            </div>
            <div className="w-full pl-2.5 pr-4 justify-center">
                <img src={draw} alt="Hero Illustration" className="w-full h-auto" />
            </div>
        </div>

    )
}

export default Hero;


