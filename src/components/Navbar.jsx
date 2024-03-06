import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from "../context/Context"

const Navbar = () => {
    const { wishlistStore } = useContext(Context);
    
    return (
        <ul className="w-full flex justify-between py-4 px-10 bg-slate-400">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="wishlist" className="mr-5">wishlist <sup className="text-white">{wishlistStore.length}</sup></NavLink>
                <NavLink to="add" className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Add New</NavLink>
            </li>
        </ul>
    )
}

export default Navbar