import React from 'react'

const PostModal = () => {
    return (
        <aside className='mt-16 mx-auto p-4 sticky bg-neutral-50 w-full max-w-[15rem] top-[10vh] h-[85vh] rounded'>
            <form>
                <textarea placeholder="What's on your mind"
                    className='"w-full h-36 p-3 resize-none rounded border focus:outline-2 focus:outline-sky-500'></textarea>
                <button className='px-2 py-1 mx-2 text-sky-500 border border-sky-500 bg-white hover:bg-sky-500 hover:text-white rounded hover:transition-all'>Cancel</button>
                <button className='px-2 py-1 bg-sky-500 text-white hover:bg-sky-500/25 rounded hover:transition-all'>Add Post</button>
            </form>
        </aside>
    )
}

export { PostModal }