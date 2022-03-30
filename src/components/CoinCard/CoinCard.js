import React from 'react';

const CoinCard = ({coin}) => {
    const {id,name} = coin;
    return (
        <div>
           <p>{id}</p> 
           <p>{name}</p>
        </div>
    );
};

export default CoinCard;