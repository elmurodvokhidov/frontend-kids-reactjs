import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Context = createContext();

export default function ContextFunction({ children }) {
    const [store, setStore] = useState([]);
    const [wishlistStore, setWishlistStore] = useState([]);
    const [yangiMahsulot, setYangiMahsulot] = useState({
        nom: "",
        haqida: "",
        rasm: "",
    });

    const navigate = useNavigate();

    function mahsulotOlish() {
        fetch("http://localhost:3000/store")
            .then(res => res.json())
            .then(data => setStore(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        mahsulotOlish();
    }, []);

    console.log(store);

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
                fetch(`http://localhost:3000/store/${id}`, { method: "DELETE" });
                mahsulotOlish();
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
            yangiMahsulot,
            setYangiMahsulot,
            inputdanQiymatOlish,
            inputdanRasmOlish,
            deleteItem,
            wishlistStore,
            setWishlistStore,
            likeFunction,
            mahsulotOlish,
        }}>
            {children}
        </Context.Provider>
    )
}