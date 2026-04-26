import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    const [details, setDetails] = useState({});

    const params = useParams();
    console.log(params.id);

    useEffect(() => {
        const getProduct = async () => {
            try {
                let response = await axios.get(`https://dummyjson.com/products/${params.id}`);
                console.log(response.data);
                setDetails(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [])
    return (
        <>
            <section className='w-full h-screen flex items-center justify-center p-24'>
                
                <div className='w-1/2 relative flex items-center justify-center'>
                    
                    <img
                        src={details.images?.[0]}
                        alt="product"
                        className='w-96 h-96 object-contain z-10' 
                    />

                    <div className='bg-[#6f4518]/20 w-125 h-125 rounded-full absolute'></div>
                </div>
                {/* contant */}
                <div className='w-1/2 p-6'>
                    <h1 className='text-7xl font-extrabold pt-4'>{details.title}</h1>
                    <h2 className='text-2xl font-bold text-[#6f4519]/30 pb-6'>{details.category}</h2>
                    <p className='text-6xl font-bold py-6'>${details.price}</p>
                    <p className='text-2xl py-8 '>{details.description}</p>
                    <div className='flex items-center justify-center gap-24'>
                        <button className="bg-[#6f4518] text-white w-1/2 px-6 py-3 text-xl font-semibold rounded-md active:scale-95 hover:text-[#6f4518] hover:bg-white/10 transition-all duration-300 border hover:border-[#6f4518]">
                            Add to Bag
                        </button>
                        <button className="text-[#6f4518] bg-white/15 border border-[#6f4518] w-1/2 px-6 py-3 text-xl font-semibold rounded-md active:scale-95 hover:bg-[#6f4518] hover:text-white transition-all duration-300">
                            Favourite
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
