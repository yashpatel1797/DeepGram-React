import React from 'react'
import { SideBar, PostCard, WhoToFollow, BottomNav } from 'components'

const BookMark = () => {
    const arr = [1, 2, 3]
    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main className=''>
                {arr.map(item => <PostCard />)}
            </main>
            <WhoToFollow />
        </div>
    )
}

export { BookMark }