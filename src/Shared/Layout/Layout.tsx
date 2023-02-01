import { useEffect, useState } from "react";
import About from "../../Pages/About";
import Home from "../../Pages/Home";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Layout = () => {

    const [isScrolled, scrollHandler] = useState<boolean>(window.pageYOffset > 0);

    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.pageYOffset > 0) { scrollHandler(true) }
            else scrollHandler(false)

        });

    }, []);

    return (

        <div className="lo_box">
            <Navbar isScrolled={isScrolled} />
            <Sidebar />
            <div className="lo_page_layout">
                <Home />
                <About />
            </div>
        </div>

    )

}

export default Layout;