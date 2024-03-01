import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className='w-full grid grid-cols-3 gap-8 py-6 px-8'>
      {
        store.map((item, index) => (
          <div className='flex flex-col gap-4 py-2 px-4 bg-slate-300' key={index}>
            <figure>
              <img src={item.rasm} alt={item.nom} />
            </figure>

            <div className='flex justify-between'>
              <h1 className='text-4xl'>{item.nom}</h1>
              {/* <h1 className='text-2xl'><sub>{item.narx - ((item.narx * item.chegirma) / 100)}</sub><sup><del>{item.narx}</del></sup></h1> */}
            </div>

            <p>{item.haqida}</p>

            <div className='flex justify-between'>
              <button className='text-2xl text-green-500'>edit</button>
              <button className='text-2xl text-red-500'>delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home