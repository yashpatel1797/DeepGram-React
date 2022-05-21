import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from 'store/feature/modalSlice'
import reactDom from "react-dom";
import { addPost, editPost } from 'store/feature/postSlice';
import { useAuth, useModal } from 'hooks/selectors';

const PostModal = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const { currentPost } = useModal();
    const [content, setContent] = useState("");
    const [mediaContent, setMediaContent] = useState(null);
    const postLimit = 200;
    useEffect(() => {
        if (currentPost) {
            setContent(currentPost?.content);
            const url = currentPost?.mediaContent?.url;
            const name = currentPost?.mediaContent?.name;
            setMediaContent({ url, name });
        }
    }, [currentPost])
    const uploadImage = async (files) => {
        try {
            const formData = new FormData();
            formData.append("file", files[0])
            formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET_NAME)
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const { url, name } = await response.json();
            setMediaContent({ url, name })
        } catch (error) {
            toast.error("Image not uploaded.")
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (currentPost) {
            dispatch(editPost({
                _id: currentPost._id,
                content: content,
                mediaContent,
            }))
        } else {
            const { firstName, lastName } = user;
            const postDetails = {
                firstName,
                lastName,
                content: content,
                mediaContent,
            }
            dispatch(addPost(postDetails));
        }
        dispatch(closeModal())
    }
    return (
        <div className='flex flex-row justify-center fixed top-0 bottom-0 right-0 left-0 h-screen w-screen z-10 backdrop-blur-[1px] bg-black/40'>
            <aside className='flex flex-row justify-center fixed  w-screen z-10  fixed p-4 bg-neutral-50  top-[10vh] rounded max-w-sm'>
                <form
                    onSubmit={submitHandler}
                    className='w-full'>
                    <textarea
                        placeholder="What's on your mind"
                        className='w-full h-36 p-3 resize-none rounded border focus:outline-2 focus:outline-sky-500 mx-auto'
                        maxLength={postLimit}
                        onChange={(e) => setContent(e.target.value)}
                        value={content}></textarea>
                    {
                        mediaContent && (
                            <img
                                loading='lazy'
                                src={mediaContent.url}
                                alt={mediaContent.name}
                                className='w-64 mx-auto h-32 object-contain' />
                        )
                    }
                    <div className='flex items-center justify-between'>
                        <label
                            className="tooltip flex items-center"
                        >
                            <span className="material-icons select-none w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer text-2xl text-sky-500 hover:bg-sky-700">
                                add_photo_alternate
                            </span>
                            <input
                                type="file"

                                className="invisible w-0 p-0"
                                onChange={(e) => uploadImage(e.target.files)}
                            />
                        </label>
                        <span
                            className={`${content.length === postLimit
                                ? "text-blue-500"
                                : "text-gray-500"
                                } text-xs text-center self-center w-[5rem] md:text-sm font-semibold mx-1`}
                        >
                            {content.length} / {postLimit}
                        </span>
                        <button
                            className='px-2 py-1 mx-2 text-sky-500 border border-sky-500 bg-white hover:bg-sky-500 hover:text-white rounded hover:transition-all'
                            type="button"
                            onClick={() => dispatch(closeModal())}>
                            Cancel
                        </button>
                        <button
                            disabled={content.length === 0 && !mediaContent}
                            className={`${content.length === 0 && !mediaContent && "opacity-50"} px-2 py-1 bg-sky-500 text-white hover:bg-sky-500/25 rounded hover:transition-all`}>
                            {currentPost ? "Update" : "Add Post"}
                        </button>
                    </div>
                </form>
            </aside>
        </div>
    )
}

export { PostModal }