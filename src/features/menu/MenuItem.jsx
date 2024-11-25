import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24  ${soldOut ? "grayscale opacity-70" : ""} rounded-sm`}
      />
      <div className="flex flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-stone-500">Sold out</p>
          )}
          {!soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
