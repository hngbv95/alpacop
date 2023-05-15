import Slideshow from "./Slideshow";
import "./header.scss";
import { motion } from "framer-motion";


export default function Header() {
    const imagesources = ["../assets/banner.png","../assets/banner2.png","../assets/banner3.png" ]

    return (
        <div className="header-container">
            <div className="header-section">
                <section className="header-content">
                    <img src={"../assets/logo-removebg.png"} alt="logoimage" />
                    <h2>Contact us</h2>
                </section>
                <section className="header-content">
                    <button><h2>Sign in</h2></button>
                    <button className="active"><h2>Create account</h2></button>
                    <a href="https://soundcloud.com/"><h2>For Artists</h2></a>
                </section>
            </div>
            <div className="banner">
                {imagesources.map((src,index)=><Slideshow key={index} src={src}/>)}
                {/* <img src={"../assets/banner.png"} alt="bannerimage" /> */}
                <h1 className="header-title"><strong>Experience</strong> the <strong>Power</strong> of <strong>Melodies</strong></h1>
                <h2>Enjoy now<motion.img animate={{y: 17}} transition={{ duration: 0.5 }} src={"../assets/fingerpointdown.png"} alt="handPointDown"/></h2>
            </div>

        </div>
    )

}
