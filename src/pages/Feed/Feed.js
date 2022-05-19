import { PostCard, PostModal, SideBar, WhoToFollow, BottomNav } from 'components'
import { usePost } from 'hooks/selectors'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPost } from 'store/feature/postSlice'

const Feed = () => {
    const { posts } = usePost();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost());
    }, [])

    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main>
                {posts.map(post => <PostCard key={post._id} post={post} />)}
            </main>
            <WhoToFollow />
        </div>
    )
}

export { Feed }