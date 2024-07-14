import { useState } from "react";
import { Notification } from "../Notification/Notification";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";
import { Section } from "../Section/Section";

export function Feedback() {
    const [rating, setRating] = useState({ good: 0, neutral: 0, bad: 0 });
    const { good, neutral, bad } = rating;

    const handleRating = (buttonName) => {
        setRating((prevValue) => ({
            ...prevValue,
            [buttonName]: prevValue[buttonName] + 1
        }));
    };

    const totalValue = good + neutral + bad;
    const percentageValue = totalValue ? Math.round((good / totalValue) * 100) : 0;

    return (
        <>
            <Section title="Please leave feedback" >
                <FeedbackOptions scssClass={"button-30"} onLeaveFeedback={handleRating} rating={rating} />
                {totalValue === 0 ?
                    <Notification message="There is no feedback" /> :
                    <Statistics rating={rating} total={totalValue} positivePercentage={percentageValue} />
                }
            </Section >
        </>
    );
}