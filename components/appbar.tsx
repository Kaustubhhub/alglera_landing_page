import React from 'react'

const Appbar = () => {
    return (
        <div className='flex justify-between p-4 bg-black/50 backdrop-blur-sm rounded-lg'>
            <div className='pl-20 cursor-pointer flex justify-center items-center'>
                <img src="https://cdn.prod.website-files.com/6696c350570bd6766b255238/66a8775e8bb1b0c78fad9828_White%20logo%20-%20no%20background.svg" height={150} width={150} alt="" />
            </div>
            <div className='pr-20 gap-3 cursor-pointer flex justify-center items-center'>
                <button className="w-40 h-12 p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="w-full h-full flex justify-center items-center bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                        sign up
                    </div>
                </button>
                <button className="w-40 h-12 inline-flex items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors animate-shimmer">
                    Book a demo
                </button>
            </div>

        </div>

    )
}

export default Appbar
