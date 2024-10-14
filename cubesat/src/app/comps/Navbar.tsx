import "../comps/NavbarStyle.css"
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className = "navbar">
            <div id = "cubesat-logo">
                <a href = '/home'>
                    <Image
                        src = "/images/CubeSat_logo.png"
                        alt = "CubeSat logo"
                        width = {120}
                        height = {120}
                    />
                </a>
            </div>
            <div className = "btnbox">
                <a href='/home'>
                    <button>Home</button>
                </a>
                <a href='/aboutus'>
                    <button>About Us</button>
                </a>
                <a href='/contact'>
                    <button>Contact</button>
                </a>
            </div>
        </div>
    )
}

export default Navbar;