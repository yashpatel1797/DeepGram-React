import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='fixed w-full lg:px-80 md:px-40 px-20 flex flex-row top-0 h-13 items-center border bg-neutral-50'>
            <div className='mr-auto'>
                <Link to="/">
                    <span>
                        Deepgram
                    </span>
                </Link>
            </div>
            <div className='flex'>
                <button
                    className='px-2 hover:text-sky-50 hover:bg-sky-500/25 rounded'
                >
                    <span className="material-icons">
                        add_circle_outline
                    </span>
                </button>
                <Link to="/profile">
                    <img
                        alt="profile"
                        loading="lazy"
                        src="https://i.pravatar.cc/300"
                        className='w-11 h-11 border rounded-full bg-gray-200 ml-5' />
                </Link>
            </div>
        </nav>
    )
}

export { Navbar }