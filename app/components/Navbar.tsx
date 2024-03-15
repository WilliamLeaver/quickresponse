import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './Modetoggle'

const Navbar = () => {
    return (
        <nav className="flex flex-row bg-sky-800">
            <div className='w-1/3'>

            </div>
            <div className='w-1/3 flex flex-col'>
                <h1 className='py-2 font-extrabold text-center text-4xl text-white'>Quick Response</h1>
            </div>
            <div className='w-1/3 flex place-content-end items-center p-2'>
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    )
}

export default Navbar