import React from 'react'

const WhoToFollow = () => {

    return (
        <aside className='hidden lg:block lg:right-aside sticky top-[10vh] bg-neutral-50 max-w-[20rem] mx-auto w-full rounded h-max py-3'>
            <div className='mt-2 ml-4 text-xl font-semibold'>
                Who to follow?
            </div>
            <div className='flex mt-4'>
                <img
                    alt="profile"
                    loading="lazy"
                    src="https://i.pravatar.cc/1000"
                    className='mr-4 w-12 h-12  rounded-full bg-gray-200 ml-5' />
                <div className='flex flex-col mr-auto'>
                    <p>Yash Patel</p>
                    <p>@yashpatel</p>
                </div>
                <button className='mr-4 text-sky-500 hover:text-sky-700'>Follow</button>
            </div>
            <div className='flex mt-4'>
                <img
                    alt="profile"
                    loading="lazy"
                    src="https://i.pravatar.cc/1000"
                    className='mr-4 w-12 h-12  rounded-full bg-gray-200 ml-5' />
                <div className='flex flex-col mr-auto'>
                    <p>Yash Patel</p>
                    <p>@yashpatel</p>
                </div>
                <button className='mr-4 text-sky-500 hover:text-sky-700'>Follow</button>
            </div>
        </aside>
    )
}

export { WhoToFollow }