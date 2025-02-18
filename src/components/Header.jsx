import React from 'react'
import { navList } from '../data/navbar.js'

const Header = () => {
    return (
        <header className='fixed w-full flex justify-between items-center p-4 z-5 bg-black'>
            <a href={window.location.href = "#"} onClick={() => window.location.reload()} className='text-3xl font-extrabold text-red-500 hover:scale-110 transition duration-300'>EJ</a>
            <nav>
                {navList.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className='ml-8 text-lg font-medium text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500'>{item.data}</a>
                ))}
            </nav>
        </header>
    )
}

export default Header