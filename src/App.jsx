import { Outlet } from "react-router-dom"
import Navbar from "./pages/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App