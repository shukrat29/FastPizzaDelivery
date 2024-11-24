import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="bg-yellow-400 border-b border-stone-200 py-4 px-4 flex justify-between font-bold ">
      <Link to="/" className="tracking-widest">
        FastPizzaDelivery
      </Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
