import instagramLogo from "../imgs/svgs/instagram.svg"
import facebookLogo from "../imgs/svgs/facebook.svg"
import twitterLogo from "../imgs/svgs/twitter.svg"

const Footer = () => {
    
    return(
        <div className="mt-32 bg-black w-full flex flex-col items-center justify-center">
            <div className="flex items-center  bg-black h-[6rem] md:h-[12rem]  w-full justify-start justify-items-center ">

                <div className="flex md:ml-10 ml-4 mt-16">
                    <a href=""><img src={instagramLogo} className="w-[38px] md:w-[48px]" alt="" /></a>
                    <a href=""><img src={facebookLogo} className="w-[38px] md:w-[48px] mr-2 ml-2 md:mr-6 md:ml-6" alt="" /></a>
                    <a href=""><img src={twitterLogo} className="w-[38px] md:w-[48px]" alt="" /></a>
                </div>
                <div className="md:flex">
                    <h1 className="font-sans-serif text-[0.8rem] sm:text-[1rem] md:text-xl font-semibold text-yellow mt-16 md:mt-16 ml-10">Open everyday 10:00 - 23:00</h1>
                    <h1 className="font-sans-serif text-[0.8rem] sm:text-[1rem] md:text-xl font-semibold text-yellow mt-2 md:mt-16 ml-10">Call us: +387 061 123 456</h1>
                </div>
                
            </div>
            
            
            <a href="https://github.com/seferovich" className="font-sans-serif text-center font-semibold bg-black text-white text-1xl mt-16 w-[100%]">Isa Seferović 2024 © </a>
        </div>
    )
}


export default Footer