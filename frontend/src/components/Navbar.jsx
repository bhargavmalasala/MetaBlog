import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(StoreContext);

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="flex container mx-auto justify-between items-center px-4">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Link to={"/"}>
            <img src={assets.logo} alt="logo" className="h-15 w-15 scale-100" />
          </Link>
          <p className="hidden sm:block text-2xl font-semibold text-[#4B6BFB] tracking-tight">
            Meta <span className="font-bold text-white">Blog</span>
          </p>
        </div>

        <ul className="hidden sm:flex gap-6 text-lg font-medium text-white">
          <Link
            to="/"
            className="hover:text-[#4B6BFB] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="hover:text-[#4B6BFB] transition-all duration-300"
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className="hover:text-[#4B6BFB] transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#4B6BFB] transition-all duration-300"
          >
            Contact
          </Link>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden sm:flex gap-3 items-center">
          {user ? (
            <div className="flex gap-2">
              <Link
                to={"/dashboard"}
                className="bg-black px-6 py-2 rounded-full text-white border border-white hover:opacity-90 transition"
              >
                Dashboard
              </Link>
              <button
                onClick={logoutUser}
                className="bg-blue-500 hover:bg-white text-white px-6 py-2 rounded-full cursor-pointer   duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="bg-blue-500 text-white px-8 py-2 rounded-full cursor-pointer hover:bg-orange-600 duration-300"
            >
              Signin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
