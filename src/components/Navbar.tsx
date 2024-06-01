import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { MdGpsFixed, MdSunny } from 'react-icons/md'
import SearchBox from './SearchBox'
import { TiWeatherPartlySunny } from 'react-icons/ti'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
        <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
            <div className='flex items-center justify-center gap-2'>
                <h2 className='text-blue-800 text-3xl font-bold'>
                    SkySense
                </h2>
                <TiWeatherPartlySunny className='text-3xl mt-1 text-orange-500'/>
            </div>
            
            <section className='flex gap-2 items-center'>
                <MdGpsFixed className='text-2xl text-gray-500 hover:opacity-80 cursor-pointer'/>
                <GrLocation className='text-3xl text-black cursor-pointer'/>
                <p className="text-slate-900/80 text-sm">
                    Nagpur
                </p>

                <div>
                    <SearchBox value={''} onChange={undefined} onSubmit={undefined} />
                </div>
            </section>
        </div>
    </nav>
  )
}