import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <>
            <ul className="flex justify-around h-[10%] items-center">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
        </>
    )
}