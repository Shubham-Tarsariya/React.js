import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchIcon, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard'; // Tamaro ProductCard component path

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Initial data fetch
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=100');
                setProducts(response.data.products);
                setFilteredProducts(response.data.products);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Real-time filtering logic
    useEffect(() => {
        const results = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm, products]);

    return (
        <section className="min-h-screen bg-white">
            {/* Title Bar */}
            <div className='bg-gray-200 w-full py-16 text-center'>
                <h1 className='text-5xl font-semibold py-4'>Search</h1>
                <p className='text-lg font-medium text-gray-500'>Home / Search</p>
            </div>

            {/* Search Input Field */}
            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                        <SearchIcon className="h-6 w-6 text-gray-400 group-focus-within:text-red-950 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for products, categories..."
                        className="block w-full pl-16 pr-6 py-5 bg-white border-2 border-gray-100 rounded-full text-xl shadow-sm focus:outline-none focus:border-red-950 focus:ring-1 focus:ring-red-950 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                {/* Result Count */}
                {!loading && (
                    <p className="mt-4 text-gray-500 text-center">
                        Found {filteredProducts.length} products {searchTerm && `for "${searchTerm}"`}
                    </p>
                )}
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-950"></div>
                    </div>
                ) : filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <ProductCard product_data={product} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* Empty Search State */
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                            <ShoppingBag className="w-10 h-10 text-gray-300" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">No products found</h2>
                        <p className="text-gray-500 mb-8 max-w-xs">
                            We couldn't find anything matching your search. Try a different keyword.
                        </p>
                        <button 
                            onClick={() => setSearchTerm('')}
                            className="inline-flex items-center gap-2 bg-red-950 text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-colors duration-200"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Search;