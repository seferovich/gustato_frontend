const AboutComponent = ({img, title, description, flip = false}) => {
    return(
        <div className={`flex justify-center flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-center mt-12 md:mt-12`}>
                
            <img src={img} alt="" className="h-[15rem] w-[30rem] md:h-[20rem] lg:mr-4 lg:ml-4 md:w-[40rem] lg:h-[30rem] lg:w-[40rem] mb-6 object-contain opacity-0 animate-modern-fade-slide" />
            <div className="">
                <h1 className="font-sans-serif font-bold text-black ml-2  text-3xl lg:text-4xl text-left md:text-center opacity-0 animate-modern-fade-slide delay-[200]">{title}</h1>
                <h4 className={`font-sans-serif font-regular mb-6 md:mb-0 mt-2 ml-2 mr-2 md:ml-8 md:mr-8 text-xl md:text-2xl text-left md:text-center opacity-0 animate-modern-fade-slide delay-[400] `}>{description}</h4>
            </div>
        </div>
    )
}



export default AboutComponent