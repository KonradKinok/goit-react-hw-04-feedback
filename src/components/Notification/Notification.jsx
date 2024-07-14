import PropTypes from "prop-types";

export const Notification = ({ message }) => (
    <div >
        <h3>Statistics</h3>
        <p>{message}</p>
    </div>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};