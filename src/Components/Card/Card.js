import React from 'react';
import './Card.css';

const Card=(props)=>{
    return(
            <img src={props.image} alt='cards' className="Card"/>
    );
}

export default Card;