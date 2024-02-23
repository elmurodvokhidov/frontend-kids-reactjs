import { FiPlay } from "react-icons/fi";

function Home() {
    return (
        <div className="flex flex-col gap-9 px-14 pt-28 bg-[#FAFBFD] relative -z-20">
            <header className='flex justify-between items-center py-14'>
                <div className='w-[497px] flex flex-col items-start gap-4'>
                    <h1 className='font-bold text-5xl'>Take care of yours family's <span className='text-[#4285F4]'>health.</span></h1>
                    <p className='w-[300px] text-[#616161] text-[12px]'>All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns.</p>
                    <button className='text-white text-[10px] uppercase rounded px-10 py-2 bg-[#EC5863]'>get started</button>
                </div>

                <div>
                    <img src="./img/main_img.png" alt="main image" />
                    <img className='absolute top-0 right-0 -z-10' src="./img/right_corner.png" alt="right corner" />
                </div>
            </header>

            <footer className="flex items-center gap-3 relative bottom-8">
                <span className="w-12 h-12 flex justify-center items-center rounded-full border-2 border-[#4285F4]"><FiPlay className="text-[16px] font-thin text-[#4285F4]" /></span>
                <div>
                    <h1 className="text-[13px] text-[#B0B0B0]">Stay safe with GoCorona</h1>
                    <h2 className="text-[9px]">Watch Video</h2>
                </div>
            </footer>
        </div>
    )
}

export default Home