import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired, // React nodes like strings or JSX
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // String for paths or number for navigation steps
};

export default LinkButton;
