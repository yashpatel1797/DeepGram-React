import React from 'react'
import { SideBar, PostCard, WhoToFollow, BottomNav } from 'components'
import { useDispatch } from 'react-redux'
import { usePost } from 'hooks/selectors';

const BookMark = () => {
    const dispatch = useDispatch();
    const { posts, bookmarks } = usePost();

    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main className=''>
                {bookmarks.map(item => <PostCard key={item._id} post={item} />)}
            </main>
            <WhoToFollow />
        </div>
    )
}

export { BookMark }