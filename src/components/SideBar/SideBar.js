import React from 'react'
import { NavLink } from "react-router-dom";
import { sidebarData } from 'data/sidebarData'
import { useAuth } from 'hooks/selectors';
const SideBar = () => {
    const { user } = useAuth();
    return (
        <aside className='hidden justify-self-start mx-auto md:block  p-4 sticky w-full max-w-[15rem] top-[10vh] h-[85vh] rounded'>
            <ul className=''>
                {sidebarData.map(({ name, icon, path }) =>
                (<li className='px-2 py-3 flex items-center'
                    key={name}>
                    <NavLink
                        to={name === "Profile" ? `/profile/${user?._id}` : path}
                        title={name}
                        className={({ isActive }) =>
                            `${isActive ? "bg-sky-500/70 text-sky-50" : "bg-neutral-50"
                            } p-2 flex w-full items-center rounded hover:text-sky-50 hover:bg-sky-500 rounded `
                        }
                    >
                        <span className='material-icons'>
                            {icon}
                        </span>
                        <span className='ml-4'>{name}</span>
                    </NavLink>
                </li>)
                )}
            </ul>
        </aside>
    )
}

export { SideBar }