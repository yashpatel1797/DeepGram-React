import React from 'react'
import { Link } from 'react-router-dom';

const Comments = ({ comment,
    username,
    firstName,
    lastName,
    commentDate,
    profileImage, }) => {
    return (
        <div className='flex items-center border-2 rounded mx-4 my-4'>
            <Link to="/">
                {profileImage ? (<img
                    alt={profileImage?.original_name}
                    loading="lazy"
                    src={profileImage?.url}
                    className='w-12 h-12 border rounded-full bg-gray-200 mx-2' />) : (
                    <div className='w-12 h-12 flex items-center justify-center font-semibold text-xl border rounded-full bg-sky-200 mx-2'>
                        {firstName[0].toUpperCase()}
                    </div>
                )}
            </Link>
            <div>
                <div className='flex mr-auto'>
                    <span>{firstName} {lastName}</span>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    )
}

export { Comments }