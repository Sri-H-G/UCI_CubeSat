import Navbar from "../comps/Navbar";
import "../home/home.css"
import Image from 'next/image';

export default function Home(){
    return(
        <>
            <title>CubeSat - Home</title>
            <Navbar/>
            <div className = "welcome-fragment">
                <div className = "welcome-description">
                    <h1>UCI CUBESAT</h1>
                    <h2>Pioneering Next-Gen Thermal Control Technology</h2>
                    <h2>For Space Exploration</h2>
                    <p>
                        Our mission is to design, test, and launch a modular nanosattelite
                        into low-Earth orbit. By working with cutting-edge thermal control
                        technology with the ASPIN lab at UCI, we aim to set a standard for
                        future student-led space mission and research at UCI.
                    </p>
                </div>
            </div>
            <div className = "stat-fragment">
                <div id = "left-card" className = "card">
                    <h1>10+</h1>
                    <h2>Years In Progress</h2>
                </div>
                <div id = "mid-card" className = "card">
                    <h1>2028</h1>
                    <h2>Anticipated Launch</h2>
                </div>
                <div id = "right-card" className = "card">
                    <h1>200+</h1>
                    <h2>Members</h2>
                </div>
            </div>
            <div className = "about-fragment">
                <div id = "WWA-image-box" className = "card">
                    <h1>Image goes here</h1>
                </div>
                <div id = "WWA-description-box" className = "card">
                 <h1>Who We Are</h1>
                    <div id = "WWA-description">
                        <p>We are an interdiscipinary team of undergraduate studetns at UCI dedicated to 
                            building and launching a 2U nanosatellite. The satellite operates with six 
                            main engineering subsystems: Avionics, Communications, Structures, Power, 
                            Developer Operations, and SYstems, in addition to housing our research payload. 
                        </p>
                        <p>Our mission is to test innovative thermal management technology in space, while 
                            providing hands-on experience to future leaders in aerospace engineering.
                        </p>
                        <a href='/aboutus'>
                            <button>Meet The Team</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className = "sponsors-fragment card">
                <h1 id = "sponsors-header">Our Sponsors</h1>
                <div className = "sponsor-row">
                    <div className = "card">
                        <Image
                            src = "/images/NG_logo.jpeg"
                            alt = "CubeSat logo"
                            width = {400}
                            height = {120}
                        />
                    </div>
                    <div className = "card">
                        <Image
                            src = "/images/TO_logo.png"
                            alt = "CubeSat logo"
                            width = {470}
                            height = {120}
                        />
                    </div>
                </div>
                <div className = "sponsor-row">
                    <div className = "card">
                        <Image
                            src = "/images/GA_logo.png"
                            alt = "CubeSat logo"
                            width = {400}
                            height = {60}
                        />
                    </div>
                    <div className = "card">
                        <Image
                            src = "/images/ANSYS_logo.png"
                            alt = "CubeSat logo"
                            width = {330}
                            height = {85}
                        />
                    </div>
                </div>
            </div>
            <div className = "connect-fragment">
                <h1>Stay Connected</h1>
            </div>
        </>
    )
}