import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
// import { AiOutlineHeart } from 'react-icons/ai';
// import { BsHeart } from "react-icons/bs";

const Navbar = () => {
  const { user, handleSignOutWithGoogle } = useContext(AuthContext);
  const handleLogOut = () => {
    handleSignOutWithGoogle();
  };
  return (
    <>
      <div className="navbar bg-base-100 w-full lg:w-[90%] mx-auto">
        <div className="navbar-start">
          <ul tabIndex={0} className="hidden  md:inline-flex ">
            <li className="mr-5 text-base">
              <Link>Home</Link>
            </li>
            <li className="mr-5 text-base">
              <Link>Menu</Link>
            </li>
            <li className="mr-5 text-base">
              <Link>Services</Link>
            </li>
            <li className="mr-5 text-base">
              <Link>Contact Us</Link>
            </li>
            <li className="mr-5 text-base">
              <Link>About Us</Link>
            </li>
          </ul>
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mr-5 text-base">
                <Link>Home</Link>
              </li>
              <li className="mr-5 text-base">
                <Link>Menu</Link>
              </li>
              <li className="mr-5 text-base">
                <Link>Services</Link>
              </li>
              <li className="mr-5 text-base">
                <Link>Contact Us</Link>
              </li>
              <li className="mr-5 text-base">
                <Link>About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">DIU CANTEEN</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              {/* <BsHeart /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>

              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </button>

          <li className="text-base list-none">
            <Link>Menu</Link>
          </li>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </button>
        </div>
      </div>
      {/* <div className="opacity-100 sticky top-0 min-w-full z-[100] bg-black">
      <div className="navbar px-32 py-6">
        <div className="flex-1">
          <Link to="/login" onAuxClick={
            window.scrollTo({top:0, behavior:"smooth"})
          } className="normal-case text-mainColor text-3xl font-bold">
            DIU.CANTEEN
          </Link>
        </div>
        <div className="flex-none  gap-2">
          <div className="">
            <ul className="flex gap-10 px-1">
              <li className=" text-white transition duration-300 ease-in-out hover:text-mainColor">
                <Link>Home</Link>
              </li>
              <li className="text-white transition duration-300 ease-in-out hover:text-mainColor">
                <Link>About</Link>
              </li>
              <li className="text-white transition duration-300 ease-in-out hover:text-mainColor">
                <Link>Menu</Link>
              </li>
              <li className="text-white transition duration-300 ease-in-out hover:text-mainColor">
                <Link>Services</Link>
              </li>
              <li className="text-white transition duration-300 ease-in-out hover:text-mainColor">
                <Link>Contact us</Link>
              </li>
            </ul>
          </div>



          <div className="dropdown dropdown-end">
            {user ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            ) : (
              <></>
            )}
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Navbar;
