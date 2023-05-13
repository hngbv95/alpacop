import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Root = () => {
    return (
        <div>
            <Header />
            <section>
                <Outlet />
            </section>
            <Footer />
        </div>
    )
}

export default Root




