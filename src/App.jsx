import { useReducer } from "react";

function App() {
  const initialState = 0;
  const [count, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.tur) {
      case "handleInc": return state + 1;
      case "handleDec": return state - 1;

      default: return state;
    }
  }

  return (
    <div className="app h-screen flex items-center justify-center">
      <div className="flex items-center gap-6">
        <button onClick={() => dispatch({ tur: "handleInc" })} className="text-3xl border border-green-500 text-green-500 rounded px-6 py-1 hover:text-white hover:bg-green-500">plus</button>
        <h1 className="text-6xl">{count}</h1>
        <button onClick={() => dispatch({ tur: "handleDec" })} className="text-3xl border border-red-500 text-red-500 rounded px-6 py-1 hover:text-white hover:bg-red-500">minus</button>
      </div>
    </div>
  )
}

export default App