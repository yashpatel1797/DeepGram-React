import { PostCard, PostModal, SideBar, WhoToFollow, BottomNav } from 'components'
import React from 'react'

const Feed = () => {
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

export { Feed }