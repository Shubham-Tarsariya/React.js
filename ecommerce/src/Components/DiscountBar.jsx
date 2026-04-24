import { ArrowRight } from 'lucide-react'
import React from 'react'

const DiscountBar = () => {
    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto px-4 py-6'>
                {/* left */}
                <div className='bg-gray-100 relative overflow-hidden p-8'>
                    <h4 className='text-xl text-[#ff9500] font-semibold'>Flat 20% Discount</h4>
                    <h1 className='text-5xl font-medium leading-normal py-5'>Men's Latest <br/> Collection</h1>
                    <p className='py-4 leading-normal text-gray-500'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Temporibus nobis, sit <br /> possimus aperiam error  veritatis.</p>
                    <button className='bg-[#ff9500]/90 py-4 px-8 flex gap-4 text-lg items-center mt-10'>
                        Show Now <ArrowRight />
                    </button>

                    <img src="/images/01.png" alt="men's image" className='rotate-y-180 absolute bottom-15 -right-15 scale-130'/>
                </div>

                {/* right */}
                <div className='bg-[#ff9500] relative overflow-hidden p-8'>
                    <h4 className='text-xl text-black font-semibold'>Flat 20% Discount</h4>
                    <h1 className='text-5xl font-medium leading-normal py-5'>Women's Latest <br/> Collection</h1>
                    <p className='py-4 leading-normal text-gray-500'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Temporibus nobis, sit <br /> possimus aperiam error  veritatis.</p>
                    <button className='bg-[#582f0e] py-4 px-8 flex gap-4 text-lg items-center mt-10'>
                        Show Now <ArrowRight />
                    </button>

                    <img src="/images/02.png" alt="women's image" className='absolute bottom-15 -right-60 scale-140'/>
                </div>
            </section>
        </>
    )
}

export default DiscountBar
