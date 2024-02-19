import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* footer */}
        </>
    )
}