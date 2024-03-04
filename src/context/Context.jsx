import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import getUID from "uid-generator-package";

export const Context = createContext();

export default function ContextFunction({ children }) {
    const [store, setStore] = useState([
        {
            id: "NzA5OG12RzUyMTcx7098mvG52171",
            nom: "Nike sumka",
            rasm: "example",
            // narx: 20,
            // chegirma: 10,
            haqida: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet exercitationem suscipit, soluta hic mollitia qui totam voluptatibus voluptates. Exercitationem unde magnam quisquam quam suscipit reiciendis facere recusandae? Corrupti, mollitia. Facilis?"
        },
        {
            id: "MzA5NFRFbTM1Nzky3094TEm35792",
            nom: "Nokia 1200",
            rasm: "example",
            // narx: 30,
            // chegirma: 5,
            haqida: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet exercitationem suscipit, soluta hic mollitia qui totam voluptatibus voluptates. Exercitationem unde magnam quisquam quam suscipit reiciendis facere recusandae? Corrupti, mollitia. Facilis?"
        },
        {
            id: "NDY0NVJSRjIwMzAz4645RRF20303",
            nom: "Kalonka jbl",
            rasm: "example",
            // narx: 10,
            // chegirma: 8,
            haqida: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet exercitationem suscipit, soluta hic mollitia qui totam voluptatibus voluptates. Exercitationem unde magnam quisquam quam suscipit reiciendis facere recusandae? Corrupti, mollitia. Facilis?"
        },
    ]);
    const [yangiMahsulot, setYangiMahsulot] = useState({
        id: "",
        nom: "",
        haqida: "",
        rasm: "",
    });

    const navigate = useNavigate();
    const uniqueID = getUID();


    const inputdanQiymatOlish = (e) => {
        setYangiMahsulot({
            ...yangiMahsulot,
            [e.target.name]: e.target.value
        });
    }

    const inputdanRasmOlish = (e) => {
        setYangiMahsulot({
            ...yangiMahsulot,
            rasm: URL.createObjectURL(e.target.files[0])
        })
    }

    const deleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setStore(store.filter(mahsulot => mahsulot.id !== id));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <Context.Provider value={{
            store,
            setStore,
            navigate,
            uniqueID,
            yangiMahsulot,
            setYangiMahsulot,
            inputdanQiymatOlish,
            inputdanRasmOlish,
            deleteItem,
        }}>
            {children}
        </Context.Provider>
    )
}