import React from 'react';
import Checkbox from './Checkbox';
import classes from '../styles/Answers.module.css'

const Answers = () => {
    return (
        <div className={classes.answers}>
            <Checkbox className={classes.answer} text="Test answer"></Checkbox>
        </div>
    );
};

export default Answers;