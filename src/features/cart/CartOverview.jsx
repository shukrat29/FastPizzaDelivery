import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-4">
      <p className="text-stone-300 uppercase sm:space-x-6 space-x-3">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
