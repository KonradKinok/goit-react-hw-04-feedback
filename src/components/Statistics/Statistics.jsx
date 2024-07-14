import PropTypes from "prop-types";
import * as globalFunctions from "../../globalFunctions/functions"

export const Statistics = ({ total, positivePercentage, rating }) => (
    <div >
        <h3>Statistics</h3>
        {Object.keys(rating).map((key) => (
            <p key={key}>{globalFunctions.capitalizeFirstLetter(key)}: {rating[key]}</p>
        ))}
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
    </div>
);

Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    rating: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
};

