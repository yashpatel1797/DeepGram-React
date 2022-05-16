import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = () => {
    return (
        <article className='bg-neutral-50 rounded mb-5 shadow-blue-500 mx-4 lg:mx-0 md:mr-6'>
            <section className='flex py-2'>
                <Link to="/">
                    <img
                        alt="profile"
                        loading="lazy"
                        src="https://i.pravatar.cc/300"
                        className='w-12 h-12 border rounded-full bg-gray-200 mx-5' />
                </Link>
                <div className='flex flex-col mr-auto'>
                    <span>Yash Patel</span>
                    <span>10 days ago</span>
                </div>
                <button className='mr-3 w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
                    <span className="material-icons">
                        more_horiz
                    </span>
                </button>
            </section>
            <div className='my-2'>
                <Link to="/">
                    <img
                        alt="profile"
                        loading="lazy"
                        src="https://i.pravatar.cc/1000"
                        className='border bg-gray-200' />
                </Link>
            </div>

            <p className="py-2 px-5 text-sm lg:text-base cursor-pointer mb-2">
                happy or satisfied with what you have or do
            </p>
            <div className='flex justify-between py-4 mx-5'>
                <div className=''>
                    <button className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
                        <span className="material-icons">
                            favorite_border
                        </span>
                    </button>
                </div>
                <div>
                    <button className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
                        <span className="material-icons">
                            chat_bubble_outline
                        </span>
                    </button>
                </div>
                <button className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
                    <span className="material-icons">
                        bookmark_border
                    </span>
                </button>

            </div>
        </article >
    )
}

export { PostCard }