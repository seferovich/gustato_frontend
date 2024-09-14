import { Link, useNavigate } from "react-router-dom"


const AboutSection = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/about")
    }
    return(
        <div className="flex justify-center items-center flex-col">
            <h1 className="font-sans-serif text-center font-extrabold mb-8 mt-12 text-4xl md:text-5xl">About Us</h1>
            <h1 className="font-sans-serif text-center font-normal text-xl md:text-2xl w-[80%]">At Gustato, we believe every burger should be an experience worth savoring. With fresh ingredients, bold flavors, and a passion for quality, we’ve crafted a menu that satisfies every craving. Whether you’re in the mood for a classic or something adventurous, we’ve got the perfect bite waiting for you.</h1>
            <button onClick={handleNavigate} className="bg-yellow text-black py-3 px-4  hover:bg-black hover:text-yellow transition duration-300 w-[70%] md:w-[25%] text-3xl md:text-4xl font-sans-serif text-center mt-16 mb-5  font-bold">{"Learn More >"}</button>
        </div>
    )
}


export default AboutSection