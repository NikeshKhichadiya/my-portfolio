import { useEffect, useState } from "react";
import Home from "../../Pages/Home";
import Navbar from "../Components/Navbar";

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
            <div className="lo_page_layout">
                <Home />
            </div>
        </div>

    )

}

export default Layout;