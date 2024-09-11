import abt1 from "../../imgs/abt1.jpg"
import abt2 from "../../imgs/abt2.jpg"
import abt3 from "../../imgs/abt3.jpeg"
import abt4 from "../../imgs/abt4.jpg"
import abt5 from "../../imgs/abt5.webp"
import abt6 from "../../imgs/abt6.webp"
import AboutComponent from "./AboutComponent"


const AboutPage = () => {
    return(
        <div className="flex flex-col justify-center items-center relative mt-8">
             
            <AboutComponent img={abt1} title={"About Us"} description={"Welcome to Gustato, where every bite is crafted with passion and flavor. At Gustato, we believe that a burger is more than just food—it's an experience. That’s why we’re dedicated to using the freshest ingredients, innovative recipes, and authentic techniques to create burgers that leave a lasting impression."}/>
            <AboutComponent flip img={abt2} title={"Our Story"} description={"Gustato was born out of a love for bold, unforgettable flavors. What started as a small dream has grown into a full-fledged culinary adventure, thanks to our founder’s dedication to quality and creativity. We wanted to create a place where people can gather, share great food, and create lasting memories."}/>   
            <AboutComponent img={abt3} title={"The Gustato Difference"} description={"At Gustato, we don't just serve burgers; we serve an experience. Each of our burgers is made to order, ensuring that your meal is always fresh, hot, and full of flavor. From our signature sauces to our handpicked, locally-sourced produce, we ensure every ingredient brings something special to your plate."}/>   
            <AboutComponent flip img={abt4} title={"Our Menu"} description={"Whether you’re a classic cheeseburger lover or looking to try something a little more adventurous, we’ve got you covered. From juicy beef patties to mouthwatering plant-based options, every burger at Gustato is carefully designed to satisfy. Pair your burger with our crispy sides and refreshing drinks for the ultimate meal."}/>   
            <AboutComponent img={abt5} title={"Our Commitmnet"} description={"We’re committed to sustainability and supporting local businesses. By sourcing our ingredients locally and responsibly, we ensure that we not only serve great-tasting food but also do our part for the community and the environment."}/>   
            <AboutComponent flip img={abt6} title={"Join the Gustato Family!"} description={"At Gustato, we’re more than just a restaurant—we’re a community. Whether you're dining in, taking out, or ordering delivery, we invite you to become part of the Gustato family. Come in today and discover why our customers keep coming back for more."}/>   
            
        </div>
    )
}


export default AboutPage