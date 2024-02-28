import { useContext } from 'react'
import { Context } from '../context/ContextAPI';

const Home = () => {
    const { count, handlePlus, handleMinus } = useContext(Context);

    return (
        <div className='flex h-screen justify-center items-center gap-4 text-red-500'>
            <button onClick={handlePlus} className="text-2xl">plus</button>
            <h1 className="text-4xl">{count}</h1>
            <button onClick={handleMinus} className="text-2xl">minus</button>
        </div>
    )
}

export default Home