const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-red-100 to-indigo-50 py-10 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-light text-gray-600">
                    Your Ultimate Online
                </h1>

                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mt-6">
                    Tech Store
                </h2>
                <p className="text-lg text-gray-500 md-8 mx-auto mt-6 max-w-2xl">
                    Discover premium tech products and cutting-edge accesories
                </p>
                <button className="bg-blue-600 hover:bg-blue-500 hover:cursor-pointer text-white px-8 py-3 rounded-md text-2xl mt-6">
                    Shop Now
                </button>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-100 p-6 rounded-full mb-3">
                            <svg
                                className="w-7 h-7 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 7 17l-5-5" />
                                <path d="m22 10-7.5 7.5L13 16" />
                            </svg>
                        </div>
                        <p className="text-gray-600text-lg font-serif ">Free Shipping</p>
                    </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-blue-100 p-6 rounded-full mb-3">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 
                                    1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 
                                    1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 
                                    2h-1C9.716 21 3 14.284 
                                    3 6V5z" />
                                </svg>
                            </div>
                            <p className="text-gray-600 text-lg font-serif">24/7 Support</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-100 p-6 rounded-full mb-3">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-600 text-lg font-serif">Fast Delivery</p>

                        </div>
                    </div>
                </div>

        </section >
    )
}

export default Hero;