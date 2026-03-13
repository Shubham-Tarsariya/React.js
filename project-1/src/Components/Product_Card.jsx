const Product_Card = ({ product }) => {
    console.log(product)
    return (
        <div className="min-h-screen  flex items-center justify-center bg-[#f3efe7] relative overflow-hidden">
                <div className="w-78 bg-[#f8f4ee] rounded-[40px] shadow-xl overflow-hidden">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover rounded-t-[40px]"
                    />

                    <div className="p-7">

                        <h2 className="text-2xl font-bold text-gray-800">
                            {product.name}
                        </h2>

                        <div className="flex gap-10 text-gray-500 text-[12px] mt-0.5">
                            {product?.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>

                        <p className="text-gray-500 mt-4 text-sm">
                            {product.description}
                        </p>

                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-gray-600 text-[10px]">Toppings</span>

                            {product?.toppings.map((topping, index) => (
                                <span
                                    key={index}
                                    className="border bg-[#f8f4ee] text-gray-600 text-[10px] px-3 rounded-full "
                                >
                                    {topping}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-6">

                            <div>
                                <p className="text-xl font-bold text-yellow-600">
                                    ${product.price.toFixed(2)}
                                </p>

                                <p className="text-[10px] text-gray-400">
                                    + ${product.deliveryFee} delivery
                                </p>
                            </div>

                            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-12 py-2 rounded-full font-semibold shadow-lg">
                                Add to cart
                            </button>

                        </div>

                    </div>

            </div>
        </div>
    );
};

export default Product_Card;