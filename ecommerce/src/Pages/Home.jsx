import React from 'react'
import ProductBar from '../Components/ProductBar'
import Hero from '../Components/Hero'
import DetailsBar from '../Components/DetailsBar'
import CategoryBar from '../Components/CategoryBar'
import Offer from '../Components/Offer'
import DealBar from '../Components/DealBar'
import DiscountBar from '../Components/DiscountBar'
import Newsletter from '../Components/Newsletter'

const Home = () => {
    return (
        <>
            <Hero />
            <DetailsBar />
            <CategoryBar />
            <ProductBar /> 
            <Offer />
            <DealBar />
            <DiscountBar />
            <Newsletter />
        </>
    )
}

export default Home
