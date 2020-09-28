import React, { useEffect } from 'react';

const IMOJIS = {
    heart: '&#x1F9E1;'
}


const Hello = (props) => {
 const text = 'Bonjour à tous';
 const {isHeartShow} = props

    const heartIcon =  IMOJIS.heart;


    return (
        <>
            <h1>{text} {isHeartShow && <span>&#x1F9E1;</span>} </h1>
        </>

    );
};

export default Hello;
