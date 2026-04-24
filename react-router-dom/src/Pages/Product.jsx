import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <>
            <section className='flex items-center justify-center flex-col h-screen w-full' id='product'>
                <h1 className='text-9xl font-bold'>Product Page</h1>
                <Link to ="/product/collection">
                    <button className='bg-black text-white px-4 py-2 font-semibold'>
                        Show Collections
                    </button>
                </Link>
            </section>
        </>
    )
}

export default Product
