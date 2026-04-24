import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <section className="flex justify-center">
                <nav className="bg-black/60 backdrop-blur-sm shadow-2xl fixed text-white px-6 py-4 flex items-center justify-between mt-5 w-[80%] rounded-full ">
                    <h1 className="text-lg font-bold">Company Name</h1>

                    <ul className="flex items-center justify-evenly text-md font-semibold gap-x-4">
                        <li>
                            <Link to ='/'>Home</Link>
                        </li>
                        <li>
                            <Link to ='/product'>Product</Link>
                        </li>
                        <li>
                            <Link to ='/about'>About</Link>
                        </li>
                        <li>
                            <Link to ='/contact'>Contact</Link>
                        </li>
                    </ul>
          </nav> 
            </section> 
        </>
    )
}

export default Navbar
