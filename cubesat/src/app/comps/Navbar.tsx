'use client';
import "../comps/NavbarStyle.css";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="navbar">
            <div id="cubesat-logo">
                <a href="/home">
                    <Image
                        src="/images/CubeSat_logo.png"
                        alt="CubeSat logo"
                        width={120}
                        height={120}
                    />
                </a>
            </div>
            <div className="btnbox">
                <a href="/home">
                    <button className="navbtn">Home</button>
                </a>

                <div
                    className="dropdown"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button className="navbtn">About Us</button>
                    {isHovered && (
                        <div className="dropdown-content">
                            <a href="/aboutus/what-we-do" className="dropdown-item">
                                What We Do
                            </a>
                            <a href="/aboutus/meet-the-team" className="dropdown-item">
                                Meet the Team
                            </a>
                        </div>
                    )}
                </div>

                <a href="/contact">
                    <button className="navbtn">Contact</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
