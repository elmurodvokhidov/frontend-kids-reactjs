import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import getUID from "uid-generator-package";

export const Context = createContext();

export default function ContextFunction({ children }) {
    const [store, setStore] = useState(JSON.parse(localStorage.getItem("store")) || []);
    const [wishlistStore, setWishlistStore] = useState([]);
    const [yangiMahsulot, setYangiMahsulot] = useState({
        id: "",
        nom: "",
        haqida: "",
        rasm: "",
    });

    const navigate = useNavigate();
    const uniqueID = getUID();

    function storagedanQaytaMahsulotOlish() {
        setStore(JSON.parse(localStorage.getItem("store")) || [])
    }

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

    function likeFunction(x) {
        setWishlistStore([...wishlistStore, x]);
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
                setStore(localStorage.setItem("store", JSON.stringify(
                    store.filter(mahsulot => mahsulot.id !== id)
                )));
                storagedanQaytaMahsulotOlish();
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
            wishlistStore,
            setWishlistStore,
            likeFunction,
            storagedanQaytaMahsulotOlish,
        }}>
            {children}
        </Context.Provider>
    )
}