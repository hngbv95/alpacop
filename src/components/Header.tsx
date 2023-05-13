import "./header.scss";



export default function Header() {
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
                <img src={"../assets/banner.png"} alt="bannerimage" />
                <h1  className="header-title"><strong>Experience</strong> the <strong>Power</strong> of <strong>Melodies</strong></h1>
            </div>

        </div>
    )

}
