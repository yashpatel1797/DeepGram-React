import React, { useEffect } from 'react'
import { SideBar, PostCard, WhoToFollow, BottomNav } from 'components'
import { useAuth, usePost, useProfile } from 'hooks/selectors'
import { useDispatch } from 'react-redux';
import { getExploreFeed } from 'utilites/utilites';
import { getPost } from 'store/feature/postSlice';
const Explore = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const { posts } = usePost();
    const { userFollowing } = useProfile();
    const exploreFeed = getExploreFeed(user, posts, userFollowing)
    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);
    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main className=''>
                {exploreFeed.length > 0 ? (
                    exploreFeed.map(post => <PostCard key={post._id} post={post} />)) : (
                    <p className='text-center font-semibold mt-8'>No Post to show.</p>
                )}
            </main>
            <WhoToFollow />
        </div>
    )
}

export { Explore }