import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

const OrderItem = ({ item, ingredients }) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>{ingredients}</p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  ingredients: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default OrderItem;
