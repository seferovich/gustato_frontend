import { Link } from "react-router-dom"


const AboutSection = () => {
    return(
        <div className="flex justify-center items-center flex-col">
            <h1 className="font-sans-serif text-center font-extrabold mb-8 mt-12 text-4xl md:text-5xl">About Us</h1>
            <h1 className="font-sans-serif text-center font-normal text-xl md:text-2xl w-[80%]">At Gustato, we believe every burger should be an experience worth savoring. With fresh ingredients, bold flavors, and a passion for quality, we’ve crafted a menu that satisfies every craving. Whether you’re in the mood for a classic or something adventurous, we’ve got the perfect bite waiting for you.</h1>
            <Link to="/about"><h1 className="font-sans-serif text-yellow text-center font-extrabold  mt-12 text-4xl md:text-5xl hover:text-black transition duration-300">{"Learn more >"}</h1></Link>
        </div>
    )
}


export default AboutSection