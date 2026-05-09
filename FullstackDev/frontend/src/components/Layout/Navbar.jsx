
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const activeStyle = ({ isActive }) =>
        isActive
            ? "relative text-emerald-600 font-semibold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-emerald-600 after:-bottom-2 after:left-0 transition-all duration-300"
            : "relative text-gray-600 hover:text-emerald-600 font-medium transition-all duration-300 hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-0.5 hover:after:bg-emerald-200 hover:after:-bottom-2 hover:after:left-0";
    return (
        <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                            FaceHealth ID
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">

                            <NavLink
                                to="/"
                                className={activeStyle}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={activeStyle}
                            >
                                Tim Kami
                            </NavLink>

                            <NavLink
                                to="/analyze"
                                className={activeStyle}
                            >
                                Analisis Kulit
                            </NavLink>

                            {isLoggedIn ? (
                                <button
                                    onClick={() => setIsLoggedIn(false)}
                                    className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-full font-medium transition-all"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-2 rounded-full font-medium shadow-lg shadow-emerald-200 transition-all"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;