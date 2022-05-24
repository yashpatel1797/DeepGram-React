import { BottomNav, Loader, SideBar, UserCard, WhoToFollow } from 'components'
import { useUser } from 'hooks/selectors';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSearchedUser } from 'store/feature/usersSlice';

const Search = () => {
    const dispatch = useDispatch();
    const { userlist, isLoading } = useUser();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(getSearchedUser.pending());
        let timer = setTimeout(() => {
            dispatch(getSearchedUser(searchQuery));
        }, 1000)

        return () => timer && clearTimeout(timer)
    }, [dispatch, searchQuery]);
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main>
                <input
                    type="text"
                    id="search"
                    value={searchQuery}
                    placeholder="search"
                    onChange={handleSearchQuery}
                    className="w-full className='w-full h-10 border-1 border-sky-500 border-solid rounded p-2 ml-2 shadow-md resize-none dark:text-white dark:bg-slate-700 focus:outline-none"
                />
                {isLoading ? (
                    <Loader />
                ) :
                    searchQuery.length > 0 ? (
                        userlist.map((user) => <UserCard key={user._id} user={user} />)) :
                        (<p className="text-center font-semibold mt-8">
                            No user found in database.
                        </p>)
                }
            </main>
            <WhoToFollow />
        </div>
    )
}

export { Search }