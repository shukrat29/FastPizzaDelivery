import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const username = useSelector((state) => state.user.username);
  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  return (
    <header className="bg-yellow-400 border-b border-stone-200 py-4 px-4 flex justify-between font-bold ">
      <Link to="/" className="tracking-widest">
        FastPizzaDelivery
      </Link>
      <SearchOrder />
      <Link to="/cart">
        <div className="flex items-center justify-center gap-2 relative">
          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingCart className="text-3xl text-gray-800" />
            {/* Total Quantity */}
            {totalCartQuantity > 0 && (
              <span className="absolute flex items-center justify-center bg-red-500 text-white text-sm font-bold rounded-full h-5 w-5 -top-2 -right-2">
                {totalCartQuantity}
              </span>
            )}
          </div>
        </div>
      </Link>

      <p>{username}</p>
    </header>
  );
};

export default Header;
