import React from 'react'
import { sidebarData } from 'data/sidebarData'
import { NavLink } from "react-router-dom";
import { useAuth } from 'hooks/selectors';

const BottomNav = () => {
    const { user } = useAuth();
    return (
        <div className='fixed bg-white bottom-0 left-0 right-0 md:hidden'>
            <ul className='flex justify-around'>
                {sidebarData.map(({ name, icon, path }) =>
                (<li className='px-2 py-3 flex'
                    key={name}>
                    <NavLink
                        to={name === "Profile" ? `/profile/${user?._id}` : path}
                        title={name}
                        className={({ isActive }) =>
                            `${isActive ? "bg-sky-500/70 text-sky-50" : "bg-neutral-50"
                            } flex w-full items-center rounded hover:text-sky-50 hover:bg-sky-500 rounded`
                        }
                    >
                        <span className='material-icons'>
                            {icon}
                        </span>
                    </NavLink>


                </li>)
                )}
            </ul>
        </div>
    )
}

export { BottomNav }