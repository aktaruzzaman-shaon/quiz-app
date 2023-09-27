import React from 'react';

const Checkbox = ({ className, text, ...rest }) => {
    return (
        <label className={className}>
            <input type="checkbox" {...rest} />
            <span><span>{text}</span></span>
        </label>
    );
};

export default Checkbox;