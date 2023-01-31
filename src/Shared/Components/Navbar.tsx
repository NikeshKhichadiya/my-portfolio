import { Fragment } from "react";


const Navbar = ({ isScrolled }: any) => {

    return (

        <Fragment>

            <div className="nb_margin_box"></div>
            <nav className={`nb_box ${isScrolled ? 'nb_scrolled' : ''}`}>

                <div className="nb_right_box">

                    <div className="logo"><span>N K</span></div>

                </div>

                <div className="nb_left_box">

                    <ul className="nb_navlist">
                        <li className="nb_listitem">
                            <p className="nb_text_white_color">
                                <span>01.</span>&nbsp; About
                            </p>
                        </li>
                        <li className="nb_listitem">
                            <p className="nb_text_white_color">
                                <span>02.</span>&nbsp; Experience
                            </p>
                        </li>
                        <li className="nb_listitem">
                            <p className="nb_text_white_color">
                                <span>03.</span>&nbsp; Work
                            </p>
                        </li>
                        <li className="nb_listitem">
                            <p className="nb_text_white_color">
                                <span>04.</span>&nbsp; Contact Me
                            </p>
                        </li>
                        <li className="nb_listitem">
                            <button className="button button_sky">Resume</button>
                        </li>
                    </ul>

                </div>

            </nav>

        </Fragment>

    )

}

export default Navbar;