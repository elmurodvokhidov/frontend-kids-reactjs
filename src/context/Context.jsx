import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextFunction({ children }) {
    const [store, setStore] = useState([
        {
            id: "1",
            nom: "Nike sumka",
            rasm: "example",
            // narx: 20,
            // chegirma: 10,
            haqida: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet exercitationem suscipit, soluta hic mollitia qui totam voluptatibus voluptates. Exercitationem unde magnam quisquam quam suscipit reiciendis facere recusandae? Corrupti, mollitia. Facilis?"
        },
        {
            id: "2",
            nom: "Nokia 1200",
            rasm: "example",
            // narx: 30,
            // chegirma: 5,
            haqida: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet exercitationem suscipit, soluta hic mollitia qui totam voluptatibus voluptates. Exercitationem unde magnam quisquam quam suscipit reiciendis facere recusandae? Corrupti, mollitia. Facilis?"
        },
        {
            id: "3",
            nom: "Kalonka jbl",
            rasm: "example",
            // narx: 10,
            // chegirma: 8,
            haqida: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet exercitationem suscipit, soluta hic mollitia qui totam voluptatibus voluptates. Exercitationem unde magnam quisquam quam suscipit reiciendis facere recusandae? Corrupti, mollitia. Facilis?"
        },
    ]);
    
    return (
        <Context.Provider value={{
            store,
            setStore,
        }}>
            {children}
        </Context.Provider>
    )
}