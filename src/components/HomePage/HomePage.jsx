import { useNavigate } from "react-router-dom"
import mobileHero from "../../imgs/mobileHero.png"
import desktopHero from "../../imgs/desktopHero.png"
import AboutSection from "./AboutSection"
import MostPopularSection from "./MostPopularSection"


const HomePage = ({menu, isLoading}) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/order")
    }

    return(
        <div className="mb-12">
            <div className="flex  flex-col relative lg:flex-row lg:justify-start items-center mt-24  ">
                <div className="font-sans-serif opacity-0 animate-modern-fade-slide  text-center lg:text-start leading-[3.75rem] xl:leading-[4.5rem] mt-10 md:ml-10 lg:items-start ">
                    <h1 className="font-medium text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] lg:mt-[15%]">TASTY,</h1>
                    <h1 className="font-medium text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]">SAVORY,</h1>
                    <h1 className="text-yellow font-black text-[3.5rem] sm:text-[4.25rem] lg:text-[5rem] xl:text-[5.5rem]">GUSTATO!</h1>
                    
                    <div className="flex items-center justify-center lg:items-start lg:justify-start ">
                        <h1 className="font-sans-serif w-[80%] lg:w-[60%] text-center lg:text-start text-xl lg:text-2xl font-light leading-6 mt-3 ">Discover mouthwatering, handcrafted burgers made fresh with the best ingredients. Craving satisfaction starts here!</h1>
                    </div>
                    <button onClick={handleNavigate} className="hidden lg:block bg-yellow w-[50%] mt-10 py-5 font-sans-serif font-black text-2xl hover:bg-black hover:text-yellow transition duration-300">ORDER NOW!</button>
                </div>
                
                <div className="w-full lg:hidden flex justify-center flex-col items-center">
                    <img src={mobileHero}  className="z-10 mt-6 w-[30rem] lg:hidden 0pacity-0 animate-modern-fade-slide delay-250" />
                    <button onClick={handleNavigate} className=" bg-yellow w-[50%]  mt-10 py-5 font-sans-serif font-black text-2xl lg:text-3xl lg:hidden hover:bg-black hover:text-yellow transition duration-300">ORDER NOW!</button>
                </div>
                
                <img src={desktopHero} alt="" className="z-10 hidden lg:block lg:absolute lg:mt-[20%] xl:mt-[20%] lg:w-[58rem] xl:w-[64rem] xl:h-auto ml-[67%]  " />
                
            </div>
            <MostPopularSection menu={menu} isLoading={isLoading} />
            <AboutSection />
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-4xl md:text-5xl font-sans-serif text-center mt-20 mb-10 md:mt-36 font-bold text-black">FIND US HERE:</h1>

                <iframe title="Bugojno" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29507.310120810107!2d17.443285!3d44.060496199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475fa6904379d011%3A0x7edc0965a8f3afb5!2sBugojno!5e1!3m2!1sen!2sba!4v1726012896947!5m2!1sen!2sba" className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[900px] h-[450px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            </div>
    )
}

export default HomePage