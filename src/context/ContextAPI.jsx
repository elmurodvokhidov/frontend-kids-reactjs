import { createContext, useState } from "react";

export const Context = createContext();

export function ContextFunction({ children }) {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        if (count < 5) setCount(count + 1);
    };

    const handleMinus = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <Context.Provider value={{
            count,
            handlePlus,
            handleMinus,
        }}>
            {children}
        </Context.Provider>
    )
}