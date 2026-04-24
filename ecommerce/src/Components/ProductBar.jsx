import { useEffect, useState } from 'react'
import ProductCard from '../ui/ProductCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductBar = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const FetchProduct = async () => {
            let response = await axios.get("https://dummyjson.com/products?limit=4");
            console.log( response.data.products);
            setProduct(response.data.products);
        }
        FetchProduct();
    },[])

  return (
    <>
    <section className='p-6 flex flex-col items-center justify-center px-24'>
        <div className="w-full my-4 md:my-8">
          <h3 className="text-lg md:text-xl text-gray-400 font-semibold max-md:text-center">Our Products</h3>
          <div className="max-md:flex-col flex items-center justify-between">
            <h1 className="text-2xl md:text-5xl font-semibold md:py-2 text-nowrap max-md:pb-4 max-md:text-center">Our Top Seller Products</h1>
            <div className="flex items-center justify-center gap-2">
              <div className="px-3 py-1 text-white bg-[#583101] font-medium text-md inline-block">All </div>
              <div className="px-3 py-1 border text-[#583101] font-medium text-md inline-block">Woman</div>
              <div className="px-3 py-1 border text-[#583101] font-medium text-md inline-block">Man</div>
              <div className="px-3 py-1 border text-[#583101] font-medium text-md inline-block">Accessories</div>
            </div>
          </div>
        </div>

        {/* product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full ">
            {product.map((data) => {
                return (
                    <Link key={data.id} to={`/product/${data.id}`}>
                        <ProductCard product_data={data} />
                    </Link>
                );
            })}     
        </div>
    </section>
    </>
  )
}

export default ProductBar