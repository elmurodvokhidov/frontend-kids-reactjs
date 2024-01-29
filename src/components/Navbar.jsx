import React from 'react'

function Navbar() {
    return (
        <div className="flex items-center justify-around bg-gray-200 py-2">
            <img src="./img/615px-Food_Network_New_Logo 2.png" alt="logo" />
            <ul className="flex gap-14 text-xl">
                <li><a href="/">Home</a></li>
                <li><a href="/">Galery</a></li>
                <li><a href="/">Subjects</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Contact us</a></li>
            </ul>
        </div>
    )
}

export default Navbar