import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ fruit }) => {
    const navigate = useNavigate();
    const {id, name, price, quantity, supplierName, shortDisc, image } = fruit;
    return (
        <div className='fruit-info'>
            <img src={image} alt="" width={'250px'}/>
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{supplierName}</p>
            <p>{shortDisc}</p>
            <button className='btn' onClick={() => navigate(`/inventory/${id}`)}>click here</button>
        </div>
    );
};

export default Inventory;