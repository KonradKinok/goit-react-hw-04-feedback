import PropTypes from "prop-types";
import scss from "./Section.module.scss";

export const Section = ({ title, children }) => (
    <section className={scss.feedbackCard}>
        <h2 className={scss.title}>{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};