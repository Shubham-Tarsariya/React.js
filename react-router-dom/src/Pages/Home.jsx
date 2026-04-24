import React from 'react'

const Home = () => {
    return (
        <>
            <section className='flex items-center justify-center h-screen w-full' id='home'>
                <h1 className='text-9xl font-bold'>Homepage</h1>
                <p>1. Main.jsx == Wrap App into BrowserRouter</p>
                <p>2. App.jsx == create A Route</p>
                <p>3. App.jsx == wrap all Route into Routes</p>
            </section>  
        </>
    )
}

export default Home
