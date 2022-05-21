import React, { useState } from 'react'
import { BottomNav, Comments, PostCard, SideBar } from 'components'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useAuth, usePost } from 'hooks/selectors';
import { postComment } from 'store/feature/postSlice';
const SinglePost = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { user } = useAuth();
    const { firstName } = user;
    const { posts } = usePost();
    const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const post = posts.find(post => post._id === postId)
    const commentSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(postComment({ postId, comment }))
        setComment("")
    }
    return (
        <div className='grid lg:grid-cols-3 mt-16 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <main>
                <PostCard post={post} />
                {post && <form
                    onSubmit={commentSubmitHandler}
                    className='flex items-center'
                >
                    <Link to="/">
                        {user?.profileImage ? (<img
                            alt={user?.profileImage?.original_name}
                            loading="lazy"
                            src={user?.profileImage?.url}
                            className='w-12 h-12 border rounded-full bg-gray-200 mx-3' />) : (
                            <div className='w-12 h-12 flex items-center justify-center font-semibold text-xl border rounded-full bg-sky-200 mx-5'>
                                {firstName[0].toUpperCase()}
                            </div>
                        )}
                    </Link>
                    <input className='w-full h-10 border-1 border-sky-500 border-solid rounded p-2 ml-2 shadow-md resize-none dark:text-white dark:bg-slate-700 focus:outline-none'
                        type="text"
                        placeholder='Add your comments here'
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} />
                    <button
                        disabled={!comment}
                        className={`${comment ? "bg-sky-500" : "bg-sky-500/25"}  text-white mx-2  px-4 py-2 rounded`}>Post</button>
                </form>}
                {post.comments.length > 0 &&
                    post.comments.map((comment) => (
                        <Comments key={comment._id} {...comment} />
                    ))
                }
            </main>
        </div>
    )
}

export { SinglePost }