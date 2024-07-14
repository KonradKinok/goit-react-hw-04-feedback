import PropTypes from "prop-types";
import scss from "./FeedbackOptions.module.scss";
import buttonScss from "../../globalStyles/buttonStyles.module.scss";
import { ButtonControl } from "../ButtonControl/ButtonControl";
import * as globalFunctions from "../../globalFunctions/functions"

export const FeedbackOptions = ({ scssClass, onLeaveFeedback, rating }) => {
    return (
        <div className={scss.buttons}>
            {Object.keys(rating).map((key) => (
                <ButtonControl
                    key={key}
                    style={buttonScss[scssClass]}
                    name={key}
                    label={globalFunctions.capitalizeFirstLetter(key)}
                    onClick={() => onLeaveFeedback(key)}
                />
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    scssClass: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    rating: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
};