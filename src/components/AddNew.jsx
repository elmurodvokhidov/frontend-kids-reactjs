import { useContext } from 'react'
import { Context } from '../context/Context';
import { IoIosCloseCircle } from "react-icons/io";

const AddNew = () => {
  const {
    navigate,
    yangiMahsulot,
    setYangiMahsulot,
    inputdanQiymatOlish,
    inputdanRasmOlish,
    mahsulotOlish,
  } = useContext(Context);

  const handleSend = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/store", { method: "POST", body: JSON.stringify(yangiMahsulot) });
    mahsulotOlish();
    // store.push({ ...yangiMahsulot, id: generateNewId });
    navigate('/');
  }

  return (
    <form className='w-[50%] m-auto py-12'>
      <div className="space-y-12">
        <div className="border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Mahsulot Nomi</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input value={yangiMahsulot.nom} onChange={inputdanQiymatOlish} type="text" name="nom" id="nom" autoComplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Mahsulot Haqida</label>
              <div className="mt-2">
                <textarea value={yangiMahsulot.haqida} onChange={inputdanQiymatOlish} id="haqida" name="haqida" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {
                    yangiMahsulot.rasm === "" ? (
                      <>
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                        </svg>
                      </>
                    ) : (
                      <div className='w-fit m-auto relative'>
                        <img width={100} src={yangiMahsulot.rasm} alt="yuklangan rasm" />
                        <IoIosCloseCircle onClick={() => setYangiMahsulot({ ...yangiMahsulot, rasm: "" })} className='absolute -top-3 -right-3 z-10 cursor-pointer text-red-500' />
                      </div>
                    )
                  }
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input onChange={inputdanRasmOlish} id="file-upload" name="rasm" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <button onClick={handleSend} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Qo'shish</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddNew