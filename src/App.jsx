import { useReducer, useState, useId } from "react";

function App() {
  // const initialState = {
  //   todos: []
  // };
  const initialState = [];
  const [input, setInput] = useState({
    title: ""
  });

  const id = useId();

  const [todos, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD": return [...state, { ...action.payload, id }]

      default: return state;
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    setInput({ title: "" });
    if (input.title !== "") {
      dispatch({ type: "ADD", payload: input })
    }
    else {
      alert("Please fill in the all blanks!");
    }
  };

  console.log(todos);

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="flex flex-col gap-6 shadow-lg bg-white rounded-md w-2/5 pt-14 px-8 pb-10">
        <h1 className="text-4xl uppercase text-center font-bold">To Do List</h1>

        <div className="flex flex-col justify-center items-start gap-4">
          <input value={input.title} onChange={(e) => setInput({ ...input, title: e.target.value })} type="text" name="" id="" placeholder="Enter a task" className=" text-xl p-2 w-full rounded border border-gray-400" />
          <button onClick={handleCreate} className="bg-gray-100 border border-black rounded capitalize px-4 py-1">add task</button>
        </div>

        <div className="max-h-80 overflow-y-auto flex flex-col gap-2 pt-2">
          {
            todos.map((todo, index) => (
              <div key={index} className="w-full bg-gray-100 rounded-md flex items-center justify-between p-4">
                <h1 className="text-xl">{todo.title}</h1>
                <div className="flex gap-2">
                  <button className="rounded-md capitalize py-2 px-4 bg-blue-500 text-white">edit</button>
                  <button className="rounded-md capitalize py-2 px-4 bg-blue-500 text-white">delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App