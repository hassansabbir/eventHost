import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navOptions = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="">Event</Link>
    </li>
    <li>
      <Link to="">About Us</Link>
    </li>
    <li>
      <Link to="">Contact</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar navGradient rounded-2xl mt-2 text-white md:px-10 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">EventHost</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="ml-4">
          <FaCartShopping className="w-8 h-8 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
