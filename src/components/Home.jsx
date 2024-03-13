import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { GoHeart, GoHeartFill } from "react-icons/go";

const Home = () => {
  const { store, navigate, deleteItem, wishlistStore, likeFunction, loading, } = useContext(Context);

  return (
    <div className='w-full grid grid-cols-3 gap-8 py-6 px-8'>
      {
        loading ?
          <div className="loader"></div>
          : store.length > 0 ?
            store.map((item, index) => (
              <div className='relative flex flex-col gap-4 py-2 px-4 bg-slate-300' key={index}>
                <button onClick={() => likeFunction(item)} className='absolute top-5 right-6 text-3xl text-red-500'>
                  {
                    wishlistStore.find(i => i.id === item.id) ?
                      <GoHeartFill /> : <GoHeart />
                  }
                </button>

                <figure>
                  <img src={item.rasm} alt={item.nom} />
                </figure>

                <div className='flex justify-between'>
                  <h1 className='text-4xl'>{item.nom}</h1>
                  {/* <h1 className='text-2xl'><sub>{item.narx - ((item.narx * item.chegirma) / 100)}</sub><sup><del>{item.narx}</del></sup></h1> */}
                </div>

                <p>{item.haqida}</p>

                <div className='flex justify-between'>
                  <button onClick={() => navigate(`/edit/${item.id}`)} className='text-2xl text-green-500'>edit</button>
                  <button onClick={() => deleteItem(item.id)} className='text-2xl text-red-500'>delete</button>
                </div>
              </div>
            )) : <h1 className='text-center w-full text-5xl text-red-500'>Hech qanday mahsulot topilmadi!</h1>
      }
    </div>
  )
}

export default Home