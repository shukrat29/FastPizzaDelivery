import PropTypes from "prop-types";

const Button = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="bg-yellow-400 uppercase font-semibold py-2 px-2 inline-block tracking-wide rounded-full hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
