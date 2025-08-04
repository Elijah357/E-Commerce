import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

    const Location = useLocation();
    const isShoppingPage = Location.pathname.startsWith('/shop');

    return (
        <nav className="shadow:sm top-0 z-50">
            <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-blue-600 text-[30px] font-bold">Store</Link>
                    </div>




                    <div className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex space-x-8">
                            {
                                isShoppingPage ? (
                                    <>

                                        <Link to="/shop/Bestsellers" className='text-blue-600 hover:text-green-500'>Best Sellers</Link>
                                        <Link to="/shop/Newarrivals" className='text-blue-600 hover:text-green-500'>New Arrivals</Link>
                                        <Link to="/shop/catalog" className='text-blue-600 hover:text-green-500'>Catalog</Link>
                                    </>

                                ) : (
                                    <>
                                        <Link to="/" className="text-blue-600 hover:text-green-500">Home</Link>
                                        <Link to="/shop" className="text-blue-600 hover:text-green-500">Shop</Link>
                                        <Link to="/contact" className="text-blue-600 hover:text-green-500" >Contact Us</Link>
                                    </>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-1 text-yellow-600 hover:text-green-500 cursor-pointer">
                            <FiSearch className="h-6 w-6" />
                        </button>

                        <button className='p-1 text-yellow-600 hover:text-green-500 cursor-pointer relative'>
                            <FiShoppingCart className='h-6 w-6' />
                            <span className='absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex itemsicenter justify-center'>
                                3
                            </span>
                        </button>


                        <button className='p-1 text-yellow-600 hover:text-green-500 cursor-pointer'>
                            <FiUser className='h-6 w-6' />
                        </button>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar