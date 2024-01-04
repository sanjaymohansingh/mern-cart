import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <span className="text-slate-500">Cart</span>
            <span className="text-slate-700">App</span>
          </Link>
        </h1>
        <form
          className="bg-slate-100 
        p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent 
            focus:outline-none 
            w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li
              className="hidden sm:inline
          text-slate-700 hover:underline"
            >
              Home
            </li>
          </Link>

          <li
            className="hidden sm:inline
          text-slate-700 hover:underline"
          >
            About
          </li>
        </ul>
        {currentUser ? (
          <FaShoppingCart
            className="text-slate-600"
            style={{ fontSize: "34px" }}
          />
        ) : (
          <Link to="/sign-in">
            <li
              className="hidden sm:inline
          text-slate-700 hover:underline"
            >
              Signin
            </li>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
