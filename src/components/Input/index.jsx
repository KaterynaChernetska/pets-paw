import PropTypes from "prop-types";
import "./input.css";

export const Input = ({
  placeholder,
  value,
  required,
  onChange = () => {},
}) => {
  return (
    <label>
      <input
        className="input"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
