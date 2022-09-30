import React from 'react';
import './Card.css'

const Card = ({imoji,title,detail}) => {
    return (
        <div className='card'>
            <img src={imoji} alt="" />
            <span>{title}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    );
};

export default Card;