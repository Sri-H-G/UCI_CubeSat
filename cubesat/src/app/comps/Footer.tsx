import "../comps/FooterStyle.css"
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
// import Head from "next/head";
// import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div>
                <h1 id = "connected-header">Stay Connected</h1>
                <div className = "socials-box">
                    <div className = "icons-box">
                        <div id = "instagram-box">
                            <a href = "https://www.instagram.com/ucicubesat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <FaInstagram id = "instagram-logo"/>
                            </a>
                            <a href = "https://www.instagram.com/ucicubesat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <p>@ucicubesat</p>
                            </a>
                        </div>
                        <div id = "linkedin-box">
                            <a href = "https://www.linkedin.com/company/uci-cubesat/">
                                <FaLinkedin id = "linkedin-logo"/>
                            </a>
                        </div>

                    </div>
                    <div className = "contact-info">
                    <div id = "joinus-box"><p>Join Us</p><GoArrowUpRight id = "joinus-arrow"/></div>
                        <p>Based in Irvine, CA</p>
                        <p>team.ucicubesat@gmail..com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;