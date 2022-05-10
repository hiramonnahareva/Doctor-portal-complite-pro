import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn btn-secondary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">{children}</button>
    );
};

export default Button;