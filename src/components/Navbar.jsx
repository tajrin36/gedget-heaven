import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {


    const quantityCart = localStorage.getItem('read-list');
    const cartLength = JSON.parse(quantityCart);
    const quantityWish = localStorage.getItem('wish-list');
    const wishLength = JSON.parse(quantityWish);



    // Get the lengths of each array
    

    const location = useLocation();

    // Check if we are on the home or category page to set navbar styles
    const isHomeOrCategoryPage = location.pathname === '/' || location.pathname.startsWith('/category/');

    return (
        <div>
            <div
                style={{
                    backgroundColor: isHomeOrCategoryPage ? '#9538E2' : 'white',
                    color: isHomeOrCategoryPage ? 'white' : '#9538E2'
                }}
                className="navbar md:pr-9 md:container md:mx-auto rounded-t-xl mt-5 pt-5"
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow gap-6"
                            style={{
                                backgroundColor: isHomeOrCategoryPage ? '#9538E2' : 'white'
                            }}
                        >
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-black text-white text-base font-bold p-2 rounded"
                                        : isHomeOrCategoryPage
                                            ? "text-white text-base font-bold p-2"
                                            : "text-[#9538E2] text-base font-bold p-2"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/statistics'
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-black text-white text-base font-bold p-2 rounded"
                                        : isHomeOrCategoryPage
                                            ? "text-white text-base font-bold p-2"
                                            : "text-[#9538E2] text-base font-bold p-2"
                                }
                            >
                                Statistics
                            </NavLink>
                            <NavLink
                                to='/dashboard'
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-black text-white text-base font-bold p-2 rounded"
                                        : isHomeOrCategoryPage
                                            ? "text-white text-base font-bold p-2"
                                            : "text-[#9538E2] text-base font-bold p-2"
                                }
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                to='/faq'
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-black text-white text-base font-bold p-2 rounded"
                                        : isHomeOrCategoryPage
                                            ? "text-white text-base font-bold p-2"
                                            : "text-[#9538E2] text-base font-bold p-2"
                                }
                            >
                                FAQ
                            </NavLink>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl font-bold">
                        Gadget Heaven
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-black text-white text-base font-bold p-2 rounded"
                                    : isHomeOrCategoryPage
                                        ? "text-white text-base font-bold p-2"
                                        : "text-[#9538E2] text-base font-bold p-2"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/statistics'
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-black text-white text-base font-bold p-2 rounded"
                                    : isHomeOrCategoryPage
                                        ? "text-white text-base font-bold p-2"
                                        : "text-[#9538E2] text-base font-bold p-2"
                            }
                        >
                            Statistics
                        </NavLink>
                        <NavLink
                            to='/dashboard'
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-black text-white text-base font-bold p-2 rounded"
                                    : isHomeOrCategoryPage
                                        ? "text-white text-base font-bold p-2"
                                        : "text-[#9538E2] text-base font-bold p-2"
                            }
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to='/faq'
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-black text-white text-base font-bold p-2 rounded"
                                    : isHomeOrCategoryPage
                                        ? "text-white text-base font-bold p-2"
                                        : "text-[#9538E2] text-base font-bold p-2"
                            }
                        >
                            FAQ
                        </NavLink>
                    </ul>
                </div>
                {/* cart and wishlist btn */}
                <div className="navbar-end flex items-center gap-3 pr-3">
                    <div className="indicator">
                        {/* {quantityCart ?.length > 0 ? quantityCart.length : } */}
                        {/* {myWishLength?.length > 0 ? myWishLength.length : 0} */}
                        <span className="indicator-item badge bg-white ">{cartLength?.length > 0 ? cartLength.length : 0}</span>
                        <button className="text-[#9538E2] border p-2 border-black/50 bg-white rounded-full"><BsCart3 className="text-xl" /></button>
                    </div>
                    <div className="indicator">
                        <span className="indicator-item badge bg-white">{wishLength?.length > 0 ? wishLength.length : 0}</span>
                        <button className="text-[#9538E2] border p-2 border-black/50 bg-white rounded-full"><IoHeartOutline className="text-xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
