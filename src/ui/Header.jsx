import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">PizzaHub</Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
