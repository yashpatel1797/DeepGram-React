import { useAuth, usePost } from 'hooks/selectors';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { showModal } from 'store/feature/modalSlice';
import { addBookMarkPost, deletePost, disLikePost, editPost, likePost, removeBookMarkPost } from 'store/feature/postSlice';
import { getDate, getPostBookmarkStatus, getPostLikedStatus } from 'utilites/utilites';

const PostCard = ({ post }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const { user } = useAuth();
    const { bookmarks } = usePost();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { _id, content, userId, firstName, lastName, username, profileImage, mediaContent, likes, updatedAt } = post;
    const isPostLiked = getPostLikedStatus(user, likes);
    const isBookmarked = getPostBookmarkStatus(_id, bookmarks);
    const likePostHandler = () => {
        if (!isPostLiked) {
            dispatch(likePost(_id));
        } else {
            dispatch(disLikePost(_id));
        }
    }
    const bookmarkHandler = () => {
        if (!isBookmarked) {
            dispatch(addBookMarkPost(_id));
        } else {
            dispatch(removeBookMarkPost(_id));
        }
    };
    const editPostHandler = () => {
        dispatch(showModal({ type: "post", post }));
        setShowDropDown(false)
    }
    const deletePostHandler = () => {
        dispatch(deletePost(_id))
    }
    return (
        <article className='bg-neutral-50 rounded mb-5 shadow-blue-500 mx-4 lg:mx-0 md:mr-6'>
            <section className='flex py-2'>
                <Link
                    to={`/profile/${userId}`}
                    className="flex items-center mr-auto">
                    {profileImage ? (<img
                        alt={profileImage.original_filename}
                        loading="lazy"
                        src={profileImage.url}
                        className='w-12 h-12 border rounded-full bg-gray-200 mx-5' />) : (
                        <div className='w-12 h-12 flex items-center justify-center font-semibold text-xl border rounded-full bg-sky-200 mx-5'>
                            {firstName[0].toUpperCase()}
                        </div>
                    )}

                    <div className='flex flex-col mr-auto'>
                        <span>{firstName} {lastName}</span>
                        <div className='flex'>
                            <span className='mr-2'>@{username}</span>
                            <span>{getDate(updatedAt)}</span>
                        </div>
                    </div>
                </Link>
                {username === user?.username && <div className='relative'>
                    <button
                        className='mr-3 w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'
                        onClick={() => setShowDropDown(pre => !pre)}>
                        <span className="material-icons">
                            more_horiz
                        </span>
                    </button>
                    {showDropDown && (
                        <div className='absolute right-0 mx-2 bg-slate-50 px-4 py-2 rounded min-w-max w-32'>
                            <button
                                className='w-full py-1 rounded hover:text-sky-500'
                                onClick={editPostHandler}>Edit</button>
                            <button
                                className='w-full py-1 rounded hover:text-sky-500'
                                onClick={deletePostHandler}>Delete</button>
                        </div>
                    )}
                </div>}
            </section>
            <div className='my-2'>
                {mediaContent &&
                    <Link to="/">
                        <img
                            loading="lazy"
                            src={mediaContent.url}
                            alt={mediaContent.name}
                            className='w-full border bg-gray-200' />
                    </Link>}
            </div>

            <p className="py-2 px-5 text-sm lg:text-base cursor-pointer mb-2">
                {content}
            </p>
            <div className='flex justify-between py-4 mx-5'>
                <div className=''>

                    <button
                        className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'
                        onClick={likePostHandler}>
                        {isPostLiked ? (<span className="material-icons">
                            favorite
                        </span>
                        ) : (
                            <span className="material-icons">
                                favorite_border
                            </span>)}
                    </button>
                </div>
                <div>
                    <button
                        className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'
                        onClick={() => { navigate(`/post/${post._id}`); }}>
                        <span className="material-icons">
                            chat_bubble_outline
                        </span>
                    </button>
                </div>
                <button className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'
                    onClick={bookmarkHandler}>
                    {isBookmarked ? (
                        <span className="material-icons">
                            bookmark
                        </span>
                    ) : (<span className="material-icons">
                        bookmark_border
                    </span>)}

                </button>

            </div>
        </article >
    )
}

export { PostCard }