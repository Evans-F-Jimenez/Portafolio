import React from 'react'
import { navList } from '../data/navbar.js'
import { Link } from 'react-router-dom';

const Header = () => {
    // const handleNavClick = (id) => {
    //     const section = document.getElementById(id);
    //     if (section) {
    //         const offset = 80;
    //         const top = section.offsetTop - offset;
    //         window.scrollTo({ top, behavior: "smooth" });
    //     }
    // };

    return (
        <header className='fixed w-full flex justify-between items-center p-4 z-50 bg-black'>
            <Link to={"/"}>
                <a className='text-3xl font-extrabold text-red-500 hover:scale-110 transition duration-300'>
                    EJ
                </a>
            </Link>
            <nav>
                {navList.map((item) => (
                    <Link to={item.link}>
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className='ml-8 text-lg font-medium text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500'
                        >
                            {item.data}
                        </a>
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
