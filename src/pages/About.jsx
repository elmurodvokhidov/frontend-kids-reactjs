import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div className='flex justify-start items-center pt-36 flex-col h-[100vh]'>
            <h1 className='text-8xl'>About Us</h1>
            <div className="flex gap-10 mt-3 text-2xl text-violet-600 underline">
                <Link to="/about">About 1</Link>
                <Link to="two">About 2</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default About