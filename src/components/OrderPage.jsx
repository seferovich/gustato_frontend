import { FaPhone } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"


const OrderPage = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/menu")
    }

    return(
        <div className="w-full h-full mt-24 mb-[20rem]">
            <div className="flex flex-col items-center justify-center opacity-0 animate-modern-fade-slide delay-200">
                <h1 className="font-sans-serif mt-16 mb-16 text-center font-bold text-4xl">Ready to order?</h1>
                <FaPhone size={"256px"} color="#ffc703"/>
                <a href="tel:+38761123456" className="font-sans-serif  text-center font-bold text-[2.5rem] text-black mt-8  ">Call us at <br /> +387 061-123-456 !</a>
                <h1 className="font-sans-serif mt-6 mb-2 text-center  font-bold text-2xl">Not sure?</h1>
                <button onClick={handleNavigate} className=" bg-yellow w-[70%] md:w-[50%] lg:w-[30%]   py-5 font-sans-serif font-black text-2xl lg:text-3xl  hover:bg-black hover:text-yellow transition duration-300">CHECK OUR MENU</button>
            </div>
        </div>
    )
}


export default OrderPage