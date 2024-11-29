import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import DeleteItem from "./DeleteItem";

const CartItem = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired, // Added pizzaId validation
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
