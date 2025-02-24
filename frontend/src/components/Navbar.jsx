
import { Link } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <section className="flex justify-center bg-white shadow-md padding-20">
            <div className=" w-full sm:w-[90vw] py-4 flex justify-around gap-[100px] sm:justify-between sm:gap-[0] items-center">
                {/* Logo */}
                <Link to="/" className='ml-2.5 focus-visible:border-none'>
                    <div className="text-2xl md:text-3xl flex items-center gap-2 font-bold">
                        {/* <p className="text-primary">Farm<span className="text-secondary">Ora</span></p> */}
                        <div style={{ backgroundImage: `url('/FarmOrad.png')` }} className="w-[180px] h-[55px] bg-contain bg-center bg-no-repeat scale-[1.2]">
                        </div>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-gray-600">
                        {['Home', 'Products', 'About', 'Contact'].map((item) => (//, 'Shop'
                            <li key={item}>
                                <Link
                                    to={`/${item != "Home" ? item.toLowerCase() : "#"}`}
                                    className="inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition duration-300 md:hidden">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </button>


                    </ul>
                </div>
                <div className='flex justify-between items-center mr-2.5'>
                    {user ?
                        <Link to="/profile" className="btn w-[90px] h-[45px] flex items-center justify-center ">
                            Profile
                        </Link> : <Link to="/login" className="btn w-[90px] h-[45px] flex items-center justify-center ">
                            Login
                        </Link>

                    }
                    <Link to="/cart">
                        <div className='size-14  hover:scale-[1.15] transition-all rounded-[50%] flex justify-center items-center relative'>
                            <BsCart3 className='size-10 ' />
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Navbar;
