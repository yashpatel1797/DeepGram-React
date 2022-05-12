import { SideBar, PostCard, WhoToFollow, BottomNav } from 'components'
import React from 'react'

const Notification = () => {
    const arr = [1, 2, 3]
    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main>
                {arr.map(item =>
                    <div className='bg-sky-500 my-4'>
                        <div className='flex pt-4'>
                            <img
                                alt="profile"
                                loading="lazy"
                                src="https://i.pravatar.cc/1000"
                                className='mr-4 w-12 h-12  rounded-full bg-gray-200 ml-5' />
                            <div className='flex flex-col mr-auto'>
                                <p>Yash Patel</p>
                                <p>Like your post</p>
                            </div>
                        </div>
                        <div className='p-4'>
                            <PostCard />
                        </div>
                    </div>
                )}
            </main>
            <WhoToFollow />
        </div>
    )
}

export { Notification }