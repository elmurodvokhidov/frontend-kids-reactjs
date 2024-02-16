import { useState } from "react"

function App() {
  // const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([
    {
      id: "1",
      ism: "elmurod",
      telefon: "+998330040804",
      modal: false
    },
    {
      id: "2",
      ism: "tim",
      telefon: "+998990000120",
      modal: false
    },
    {
      id: "3",
      ism: "jim",
      telefon: "+998945612345",
      modal: false
    },
    {
      id: "4",
      ism: "tom",
      telefon: "+998917894554",
      modal: false
    },
  ]);

  function modalToggle(id) {
    setUsers(users.map(user => user.id === id ? { ...user, modal: !user.modal } : user));
  };

  return (
    <div className="app grid grid-cols-2 pt-20 gap-8">
      {
        users.map((user, index) => (
          <div className="w-1/2 m-auto py-4 px-6 relative rounded flex items-center justify-between bg-slate-400" key={index}>
            <h1 className="capitalize">{user.ism}</h1>
            <h1>{user.telefon}</h1>
            <button onClick={(e) => modalToggle(user.id)} className="flex flex-col gap-[2px] p-2">
              <span className="w-1 h-1 rounded-[50%] inline-block bg-black"></span>
              <span className="w-1 h-1 rounded-[50%] inline-block bg-black"></span>
              <span className="w-1 h-1 rounded-[50%] inline-block bg-black"></span>
            </button>
            <div className={`${user.modal ? 'flex' : 'hidden'} modal w-20 h-20 absolute top-8 right-[-65px] z-10 rounded-lg bg-cyan-600`}></div>
          </div>
        ))
      }
    </div>
  )
}

export default App