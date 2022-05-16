import { SideBar, ProfileCard, BottomNav } from 'components'
import React from 'react'

const Profile = () => {
    return (
        <div className='grid lg:grid-cols-3 mt-16 grid-cols-1 md:grid-cols-2'>
            <SideBar />
            <BottomNav />
            <div className=' max-w-[50rem]  lg:col-span-2 col-span-1 w-full bg-neutral-50'>
                <ProfileCard />
            </div>
        </div>
    )
}

export { Profile }