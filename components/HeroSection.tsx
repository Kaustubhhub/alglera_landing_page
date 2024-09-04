import React from 'react'
import { Cover } from './ui/cover'

const HeroSection = () => {
    return (
        <div className='flex flex-col  items-center w-full h-screen pt-20'>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>{`Backed by`}</span>
                    <img src="https://cdn.prod.website-files.com/6696c350570bd6766b255238/6696d003f23ee26ee672141e_Y_Combinator_logo_text_wordmark-p-500.webp" height={100} width={100} alt="" />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
            <div className="max-w-4xl bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                Your Source for
            </div>
            <div className="max-w-4xl bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                Product Data
            </div>
            <p className="my-4 max-w-xl text-center text-base leading-relaxed text-gray-500 dark:text-gray-200 md:text-lg md:leading-relaxed">
                Instantly access product information<br />
                from any e-commerce site.
            </p>
            <div className='flex justify-between gap-4'>
                <button className="w-36 px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                    Sign up
                </button>
                <button className="w-36 px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                    Book a demo
                </button>
            </div>

        </div>
    )
}

export default HeroSection
