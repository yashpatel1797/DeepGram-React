import React, { useEffect } from 'react'
import { SideBar, PostCard, WhoToFollow, BottomNav, Loader } from 'components'
import { useAuth, usePost, useProfile } from 'hooks/selectors'
import { useDispatch } from 'react-redux';
import { getExploreFeed } from 'utilites/utilites';
import { getPost } from 'store/feature/postSlice';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
const Explore = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const { posts, isLoading } = usePost();
    const { userFollowing } = useProfile();
    const exploreFeed = getExploreFeed(user, posts, userFollowing)
    const { feed, hasMorePosts, setObserverRef } = useInfiniteScroll(exploreFeed);
    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);
    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main>
                {isLoading ? (
                    <Loader />
                ) :
                    feed.length > 0 ? (
                        <>
                            {feed.map((post) => (<PostCard key={post._id} post={post} />))}
                            {hasMorePosts ? (
                                <span ref={setObserverRef}>
                                    <Loader />
                                </span>
                            ) : (
                                <p className="text-center text-gray-500 mt-8 text-sm">
                                    You have reached the end.
                                </p>
                            )}
                        </>) : (
                        <p className='text-center font-semibold mt-8'>No Post to show.</p>
                    )}
            </main>
            <WhoToFollow />
        </div>
    )
}

export { Explore }