import React from 'react';
import classes from "../styles/Question.module.css"

const Question = () => {
    return (
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <span class="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
            </div>

        </div>
    );
};

export default Question;