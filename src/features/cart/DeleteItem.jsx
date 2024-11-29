import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Remove
    </Button>
  );
};

DeleteItem.propTypes = {
  pizzaId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Added PropTypes validation
};

export default DeleteItem;
