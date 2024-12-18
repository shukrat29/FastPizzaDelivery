import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

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
    <div className="flex flex-col items-center gap-4 w-64 h-80 p-4 bg-white shadow-lg rounded-lg">
      {/* Pizza Image */}
      <div className="relative h-36 w-full">
        <img
          src={imageUrl}
          alt={name}
          className={`h-full w-full object-cover rounded ${
            soldOut ? "grayscale opacity-70" : ""
          }`}
        />
        {soldOut && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-md">
            Sold Out
          </span>
        )}
      </div>

      {/* Pizza Details */}
      <div className="flex flex-col items-center text-center">
        <p className="font-medium text-lg truncate">{name}</p>
        <p className="text-sm italic text-stone-500 whitespace-normal break-words overflow-hidden max-h-12">
          {ingredients.join(", ")}
        </p>
        <div className="mt-4 flex justify-between items-center w-full gap-1 ">
          {!soldOut ? (
            <p className="text-base font-semibold text-green-600">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm uppercase text-stone-500">Sold Out</p>
          )}
          {isInCart && (
            <div className="flex items-center gap-1 sm:gap-2">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// Adding `propTypes` for validation
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
