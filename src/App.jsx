import { useContext } from "react"
import { Context } from "./context/ContextAPI"
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutInnerPage from "./pages/AboutInnerPage";
import RootLayout from "./layout/RootLayout";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />,
                    children: [
                        {
                            path: "about-inner",
                            element: <AboutInnerPage />
                        }
                    ]
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App