import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="w-full flex justify-between py-4 px-10 bg-slate-400">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="add" className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Add New</NavLink>
            </li>
        </ul>
    )
}

export default Navbar