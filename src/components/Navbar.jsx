import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io"
import { useState } from "react"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
        console.log(isOpen)
    }

    return(
        <div>
            <nav className={`flex justify-between md:justify-start absolute items-center z-20 w-full h-[6rem]  md:h-[6.5rem] bg-black`}>
                <Link to="/">
                <div className="flex flex-col items-center justify-center ml-[18px] mb-1 md:ml-10 ">
                    <h1 className="text-yellow font-bold text-[2rem] md:text-[2.5rem] -mb-4">Gustato</h1>
                    <h1 className="text-yellow font-sans-serif font-light text-[1.5rem] md:text-[1.75rem]">burgers</h1>
                </div>
                </Link>
                <div className="mr-[18px] relative md:hidden">
                    <IoMdMenu onClick={handleOpen} color="#FFC703" className="relative md:hidden" size={"52px"}/>
                </div>
                <div className="hidden md:flex justify-around w-[20%] md:w-[40%] ml-10">
                    <Link to="/menu"><h1 className="text-yellow font-sans-serif font-bold text-[1.5rem] hover:text-white transition duration-300">Menu</h1></Link>
                    <Link to="/about"><h1 className="text-yellow font-sans-serif font-bold text-[1.5rem] hover:text-white transition duration-300">About</h1></Link>
                </div>
            </nav>
            <div className={`absolute md:hidden z-[19] top-0 left-0 w-full transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"} bg-black flex flex-col items-center justify-center h-[18rem]`}>
                    <Link onClick={handleOpen} to="/menu"><h1 className="text-yellow font-sans-serif font-bold mb-5 mt-16 text-[2rem] ">Menu</h1></Link >
                    <Link onClick={handleOpen} to="/about"><h1 className="text-yellow font-sans-serif font-bold mb-5 text-[2rem]">About</h1></Link >
            </div>
        </div>
    )
}

export default Navbar