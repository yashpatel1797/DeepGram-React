import { PostCard, PostModal, SideBar, WhoToFollow, BottomNav } from 'components'
import { useAuth, usePost, useProfile } from 'hooks/selectors'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPost, setPostSortType } from 'store/feature/postSlice'
import { getHomeFeed, getPostsBySortType } from 'utilites/utilites'

const Feed = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const { userFollowing } = useProfile();
    const { posts, postSortType } = usePost();

    const homeFeed = getHomeFeed(user, posts, userFollowing);
    const sortedHomeFeed = getPostsBySortType(homeFeed, postSortType);
    console.log(sortedHomeFeed);
    useEffect(() => {
        dispatch(getPost());
    }, [])
    const filterHandler = (type) => {
        dispatch(setPostSortType(type))
    }
    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main>
                <div className='flex justify-center gap-4 my-2'>
                    <span>Sort by:</span>
                    <button
                        className='px-2 py-1 bg-sky-500 text-white hover:bg-sky-500/75 rounded hover:transition-all'
                        onClick={() => filterHandler("SORT_BY_RECENT")}
                    >Recent</button>
                    <button
                        className='px-2 py-1 bg-sky-500 text-white hover:bg-sky-500/75 rounded hover:transition-all'
                        onClick={() => filterHandler("SORT_BY_TRENDING")}
                    >Trending</button>
                </div>
                {sortedHomeFeed.length > 0 ? sortedHomeFeed.map(post => <PostCard key={post._id} post={post} />) : (
                    <p className="text-center font-semibold mt-8">
                        No Content available to show
                    </p>
                )}
            </main>
            <WhoToFollow />
        </div>
    )
}

export { Feed }