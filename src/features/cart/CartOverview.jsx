// import { Link } from "react-router-dom";
// import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
// import { useSelector } from "react-redux";
// import { formatCurrency } from "../../utils/helpers";

// const CartOverview = () => {
//   const totalCartQuantity = useSelector(getTotalCartQuantity);
//   const totalCartPrice = useSelector(getTotalCartPrice);

//   if (!totalCartQuantity) return null;

//   return (
//     <div className="bg-stone-800 text-stone-200 px-4 py-4">
//       <p className="text-stone-300 uppercase sm:space-x-6 space-x-3">
//         <span>{totalCartQuantity} pizzas</span>
//         <span> {formatCurrency(totalCartPrice)}</span>
//       </p>
//       <Link to="/cart">Open cart &rarr;</Link>
//     </div>
//   );
// };

// export default CartOverview;
