import { SideBar, ProfileCard, BottomNav, Loader } from 'components'
import { useAuth, useProfile } from 'hooks/selectors'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserData } from 'store/feature/profileSlice'

const Profile = () => {
    const dispatch = useDispatch();
    const { user, } = useAuth();
    const { userId } = useParams();
    const { isLoading } = useProfile();
    useEffect(() => {
        dispatch(getUserData(userId))
    }, [userId, dispatch, user])
    return (
        <div className='grid lg:grid-cols-3 mt-16 grid-cols-1 md:grid-cols-2'>
            <SideBar />
            <BottomNav />
            <div className='max-w-[50rem]  lg:col-span-2 col-span-1 w-full'>
                {isLoading ? <Loader /> : <ProfileCard />}
            </div>
        </div>
    )
}

export { Profile }