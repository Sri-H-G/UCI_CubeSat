import Navbar from "../comps/Navbar";
import "../home/home.css"
import Image from 'next/image';

export default function Home(){
    return(
        <>
            <title>CubeSat - Home</title>
            <Navbar/>
            <div className = "top-fragment">
                <div className = "description">
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
        </>
    )
}