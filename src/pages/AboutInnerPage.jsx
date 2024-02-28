import { useContext } from "react"
import { Context } from "../context/ContextAPI"

const AboutInnerPage = () => {
    const { count } = useContext(Context);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default AboutInnerPage