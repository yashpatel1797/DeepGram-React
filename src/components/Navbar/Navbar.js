import { useAuth } from 'hooks/selectors'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { showModal } from 'store/feature/modalSlice';
const Navbar = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    return (
        <nav className='min-h-[3rem] fixed w-full lg:px-80 md:px-40 px-20 flex flex-row top-0 h-13 items-center border bg-neutral-50'>
            <div className='mr-auto'>
                <Link to="/">
                    <span className='text-2xl'>
                        Deepgram
                    </span>
                </Link>
            </div>
            <div className='flex'>
                {user && <button
                    className='px-2 hover:text-sky-50 hover:bg-sky-500/25 rounded'
                    onClick={() => dispatch(showModal({ type: "post" }))}
                >
                    <span className="material-icons">
                        add_circle_outline
                    </span>
                </button>}
                {user ? <Link to={`/profile/${user._id}`}>
                    <img
                        alt={user?.profileImage?.original_name}
                        loading="lazy"
                        src={user?.profileImage?.url}
                        className='w-11 h-11 border rounded-full bg-gray-200 ml-5' />
                </Link> : <Link to="/login">
                    <button>Login</button>
                </Link>}

            </div>
        </nav>
    )
}

export { Navbar }