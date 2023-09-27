import React from 'react';
import classes from "../styles/Summary.module.css"
import image from "../assets/success.png"

const Summary = () => {
    return (
        <div classNames={classes.summary}>
            <div classNames={classes.point}>
                <p classNames={classes.score}>
                    Your score is <br />
                    5 out of 10
                </p>
            </div>
            <div classNames={classes.badge}>
                <img src={image} alt="Success" />
            </div>
        </div>
    );
};

export default Summary;