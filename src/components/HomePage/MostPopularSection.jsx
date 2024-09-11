import { useNavigate } from "react-router-dom";
import MostPopularItem from "./MostPopularItem"
import { ImSpinner2 } from "react-icons/im";

const MostPopularSection = ({menu, isLoading}) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/menu")
    }
    return(
        <div className="bg-yellow w-full h-[70rem] md:h-[60rem] mt-32 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-sans-serif text-center mt-20 mb-5 md:mt-36 font-bold">OUR MOST POPULAR:</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    isLoading ? 
                    <ImSpinner2 className="text-4xl animate-spin text-black" size={"100px"}/> :
                    Array.isArray(menu.burgers) ? menu.burgers.slice(0, 2).map((item) => {
                        return(
                            <div className="">
                                <MostPopularItem 
                                    key={item.name} 
                                    name={item.name} 
                                    description={item.description} 
                                    price={item.price} 
                                    image={item.image}
                                />
                                
                            </div>
                            
                            
                        )
                    }) : ""
                }
                
            </div>
            <button onClick={handleNavigate} className="border-4 border-black text-black py-3 px-4  hover:bg-black hover:text-yellow transition duration-300 w-[70%] md:w-[40%] text-3xl md:text-5xl font-sans-serif text-center mt-20 mb-5 md:mt-36 font-bold">SEE MORE</button>
        </div>
    )
}


export default MostPopularSection