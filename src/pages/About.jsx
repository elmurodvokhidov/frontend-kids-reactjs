import { NavLink, Outlet } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <NavLink to="about-inner">See Inner Page...</NavLink>
            <Outlet />
        </div>
    )
}

export default About