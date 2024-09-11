const MostPopularItem = ({image, name, description, price}) => {
    return(
        <div className="flex flex-col items-center text-center font-sans-serif align-top ">
            <img src={image} className="h-[16rem] w-[16rem] md:h-[18rem] md:w-[18rem] lg:h-[20rem] lg:w-[20rem] object-contain" />
            <h1 className=" font-bold text-2xl lg:text-2xl mb-2">{name}</h1>
            <h3 className=" font-normal w-[70%] text-[1rem] lg:text-[1.2rem] mb-3">{description}</h3>
            <h1 className="font-extrabold text-2xl lg:text-2xl">${price}</h1>
        </div>
    )
}


export default MostPopularItem