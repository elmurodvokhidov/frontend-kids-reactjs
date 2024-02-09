import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <ul className='fixed w-full top-0 flex justify-evenly items-center bg-gray-500 py-5 text-2xl text-slate-700'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
        </ul>
    )
}

export default Navbar