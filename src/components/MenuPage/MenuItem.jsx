

const MenuItem = ({image, name, description, price}) => {
    return(
        <div className="flex flex-col items-center text-center font-sans-serif align-top ">
            <img src={image} className="h-[12rem] w-[12rem] md:h-[14rem] md:w-[14rem] lg:h-[16rem] lg:w-[16rem] object-contain" />
            <h1 className=" font-bold text-xl lg:text-2xl mb-2">{name}</h1>
            <h3 className=" font-normal w-[70%] text-[0.875rem] lg:text-[1.2rem] mb-3">{description}</h3>
            <h1 className="font-extrabold text-xl lg:text-2xl">${price}</h1>
        </div>
    )
}


export default MenuItem