import MenuItem from "./MenuItem"
import { useNavigate } from "react-router-dom"
import { ImSpinner2 } from "react-icons/im"

const MenuPage = ({menu, isLoading}) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/order")
    }
    
    return(
        isLoading ?  <div className="flex flex-col justify-center items-center mt-52 mb-96 "><ImSpinner2 className="text-4xl animate-spin text-yellow mt-50 mb-96" size={"100px"}/></div> :
        <div className="flex flex-col items-center justify-center content-center mt-24 ">

            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-5 mb-5 text-yellow opacity-0 animate-modern-fade-slide">Burgers</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 opacity-0 animate-modern-fade-slide delay-150">
                
                {Array.isArray(menu.burgers) ? menu.burgers.map((item) => {
                    return(
                        <div className="">
                            <MenuItem 
                                key={item.name} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image}
                            />
                            
                        </div>
                        
                        
                    )
                    
                }) : ""}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-5 mb-5 text-yellow opacity-0 animate-modern-fade-slide delay-300">Sides</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 pacity-0 animate-modern-fade-slide delay-450">
                
                {Array.isArray(menu.sides) ? menu.sides.map((item) => {
                    return(
                        <MenuItem 
                            key={item.name} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image}
                        />
                    )
                }) : ""}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-5 mb-5 text-yellow">Drinks</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
                
                {Array.isArray(menu.drinks) ? menu.drinks.map((item) => {
                    return(
                        <MenuItem 
                            key={item.name} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image}
                        />
                    )
                }) : ""}
            </div>
            <div className="w-full h-full mt-24 ">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-sans-serif mt-6 mb-2 text-center  font-bold text-2xl">Ready to order?</h1>
                <button onClick={handleNavigate} className=" bg-yellow w-[70%] md:w-[50%] lg:w-[30%]   py-5 font-sans-serif font-black text-2xl lg:text-3xl  hover:bg-black hover:text-yellow transition duration-300">ORDER NOW</button>
            </div>
        </div>
        </div>
    )
}


export default MenuPage