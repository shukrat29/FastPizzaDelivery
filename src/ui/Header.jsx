import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = useSelector((state) => state.user.username);
  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-yellow-400 border-b border-stone-200 py-4 px-4 flex items-center justify-between font-bold relative">
      {/* Title */}
      <Link to="/" className="tracking-widest text-lg md:text-xl">
        FastPizzaDelivery
      </Link>

      {/* Hamburger Menu Icon */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-3xl focus:outline-none"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Desktop Search and Cart */}
      <div className="hidden md:flex md:items-center md:gap-6">
        <SearchOrder />
        <div className="flex items-center gap-2 relative">
          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart">
              <FaShoppingCart className="text-3xl text-gray-800" />
            </Link>
            {/* Total Quantity */}
            {totalCartQuantity > 0 && (
              <span className="absolute flex items-center justify-center bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 -top-2 -right-2">
                {totalCartQuantity}
              </span>
            )}
          </div>
        </div>
        <p>{username}</p>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-yellow-300 flex flex-col items-center gap-4 py-4 shadow-lg md:hidden z-50">
          <SearchOrder />
          <Link to="/cart">
            <div className="flex items-center gap-2 relative">
              <FaShoppingCart className="text-3xl text-gray-800" />
              {totalCartQuantity > 0 && (
                <span className="absolute flex items-center justify-center bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 -top-2 -right-2">
                  {totalCartQuantity}
                </span>
              )}
            </div>
          </Link>
          <p>{username}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
