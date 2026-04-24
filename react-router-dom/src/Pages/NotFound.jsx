import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <section className='flex items-center justify-center flex-col h-screen w-full'>
                <h1 className='text-9xl font-bold'>404</h1>
                <h2 className='text-5xl font-bold'>Page Not Found</h2>
                <Link to="/">
                    <button className='bg-black text-white px-4 py-2 font-semibold'>
                        Go to Homepage
                    </button>
                </Link>
            </section>
        </>
    )
}

export default NotFound
