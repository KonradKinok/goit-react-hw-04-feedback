import PropTypes from "prop-types";

export const ButtonControl = ({ onClick, label, style, name }) => (
    <button name={name} className={style} type="button" onClick={onClick}>
        {label}
    </button>
);

ButtonControl.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};