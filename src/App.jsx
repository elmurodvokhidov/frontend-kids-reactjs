import { useDispatch, useSelector } from "react-redux"
import { handleDec, handleInc } from "./redux/slice/CountSlice";

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="app h-screen flex items-center justify-center">
      <div className="flex items-center gap-6">
        <button onClick={() => dispatch(handleInc(10))} className="text-3xl border border-green-500 text-green-500 rounded px-6 py-1 hover:text-white hover:bg-green-500">plus</button>
        <h1 className="text-6xl">{count}</h1>
        <button onClick={() => dispatch(handleDec(5))} className="text-3xl border border-red-500 text-red-500 rounded px-6 py-1 hover:text-white hover:bg-red-500">minus</button>
      </div>
    </div>
  )
}

export default App