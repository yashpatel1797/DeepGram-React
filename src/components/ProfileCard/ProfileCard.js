import { PostCard } from 'components/PostCard/PostCard'
import React from 'react'

const ProfileCard = () => {
    return (
        <>
            <div>
                <img
                    alt="profile"
                    loading="lazy"
                    src="https://i.pravatar.cc/1000"
                    className='w-full h-60 object-center bg-gray-200' />
            </div>
            <div className='flex items-center'>

                <img
                    alt="profile"
                    loading="lazy"
                    src="https://i.pravatar.cc/1000"
                    className='mr-4 w-32 h-32 border-2 border-sky-500  rounded-full bg-gray-200 ml-5' />

                <div className='flex flex-col py-4 m-2'>
                    <div className='flex items-center'>
                        <p className='mr-4'>Yash Patel</p>
                        <button className='py-2 px-4 mr-4 bg-sky-500 text-white rounded hover:bg-sky-500/50'>Edit</button>
                        <button className='py-2 px-4 text-sky-500 border border-sky-500 bg-white rounded hover:text-white hover:bg-sky-500/50'>Logout</button>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div>
                            <span>3</span>
                            <span className='ml-1'>posts</span>
                        </div>
                        <div className='ml-6'>
                            <span>3</span>
                            <span className='ml-1'>followers</span>
                        </div>
                        <div className='ml-6'>
                            <span>3</span>
                            <span className='ml-1'>following</span>
                        </div>

                    </div>
                    <div className='mt-3'>
                        <p>status</p>
                        <p>more details</p>
                        <p>more details</p>
                    </div>
                </div>


            </div>
            {/* </div> */}
            <div><PostCard /></div>
        </>
    )
}

export { ProfileCard }