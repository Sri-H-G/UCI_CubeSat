import "../comps/FooterStyle.css"
import Head from "next/head";
// import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                integrity = "sha384-OPgkDlG8t4fBv2fRVg4qbaR2F2x9E3d4gp1iLp5BmPbmbCf2Jo02Vv7IHxXtjV6J"
                crossOrigin="anonymous"/>
            </Head>
            <div>
                <h1 id = "connected-header">Stay Connected</h1>
                <div className = "socials-box">
                    <div className = "icons-box">
                        <i className = "fab fa-instagram"></i>
                        <i className = "fab fa-linkedin"></i>
                        <p>@ucicubesat</p>

                    </div>
                    <div className = "contact-info">
                        <p>Join Us <i className = "fas fa-arrow-right"></i></p>
                        <p>Based in Irvine, CA</p>
                        <p>team.ucicubesat@gmail..com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;