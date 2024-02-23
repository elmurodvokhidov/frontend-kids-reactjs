import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-between gap-32 items-center fixed left-0 right-0 top-0 px-10 py-5'>
            <NavLink to={"/"}><img src='./img/logo.png' alt='logo' /></NavLink>

            <div className='flex items-center gap-40'>
                <ul className='flex gap-20 text-[10px] uppercase font-bold'>
                    <li>
                        <NavLink to={"/"}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/features"}>features</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/support"}>support</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>contact us</NavLink>
                    </li>
                </ul>

                <button className='text-white text-[10px] rounded px-10 py-2 bg-[#4285F4]'>DOWNLOAD</button>
            </div>
        </div>
    )
}

export default Navbar