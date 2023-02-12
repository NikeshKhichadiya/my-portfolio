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
                            <a href="#about" className="nb_text_white_color">
                                <span>I.</span>&nbsp; About
                            </a>
                        </li>
                        <li className="nb_listitem">
                            <a href="#experience" className="nb_text_white_color">
                                <span>II.</span>&nbsp; Experience
                            </a>
                        </li>
                        <li className="nb_listitem">
                            <a href="#work" className="nb_text_white_color">
                                <span>III.</span>&nbsp; Work
                            </a>
                        </li>
                        <li className="nb_listitem">
                            <a href="#contact_me" className="nb_text_white_color">
                                <span>IV.</span>&nbsp; Contact Me
                            </a>
                        </li>
                        <li className="nb_listitem">
                            <a className="button button_sky" href={'/Resume.pdf'} target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
                    </ul>

                </div>

            </nav>

        </Fragment>

    )

}

export default Navbar;