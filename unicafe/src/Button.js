import React from 'react';

const Button = ({name, handleClick})=> {
    return <button type="button" className="btn btn-primary btn-lg" onClick={handleClick}>{name}</button>;
};

export default Button;