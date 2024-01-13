import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function incFunc() {
    setCount(count + 1);
  };

  function decFunc() {
    setCount(count - 1);
  };


  return (
    <div className="App container text-center pt-5">
      <h1>{count}</h1>
      <div className="btn-group">
        <button onClick={incFunc} className="btn btn-success">Inc.</button>
        <button onClick={() => decFunc()} className="btn btn-danger">Dec.</button>
      </div>
    </div>
  );
}

export default App;