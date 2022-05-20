import React from 'react'
import { SideBar, PostCard, WhoToFollow, BottomNav } from 'components'
import { useDispatch } from 'react-redux'
import { usePost } from 'hooks/selectors';
import { Link } from 'react-router-dom';

const BookMark = () => {
    const dispatch = useDispatch();
    const { posts, bookmarks } = usePost();

    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main className=''>
                {bookmarks.length > 0 ? (
                    bookmarks.map(item => <PostCard key={item._id} post={item} />)) :
                    (<p className="text-center font-semibold mt-8">
                        You don't have any bookmarks
                        <Link to="/explore" className="text-sky-500 hover:underline ml-1">
                            Explore
                        </Link>
                    </p>)
                }
            </main>
            <WhoToFollow />
        </div>
    )
}

export { BookMark }