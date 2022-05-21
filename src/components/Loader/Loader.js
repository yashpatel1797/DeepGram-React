import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center align-center'>
            <TailSpin ariaLabel="loading-indicator" color='#0EA5E9' height={50} width={50} />
        </div>
    )
}

export { Loader }