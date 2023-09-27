import React from 'react';
import classes from "../styles/MiniPlayer.module.css"
import image from '../assets/3.jpg'
const MiniPlayer = () => {
    return (
        <div class={`${classes.miniPlayer} ${classes.floatingBtn}`}>
            <span className={`material-icons-outlined ${classes.open}`}>
                {" "}
                play_circle_filled{" "}
            </span>
            <span className={`material-icons-outlined ${classes.close}`}>
                {" "}
                close{" "}
            </span>
            <img src={image} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default MiniPlayer;