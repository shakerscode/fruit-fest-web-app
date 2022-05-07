import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ fruit }) => {
    const navigate = useNavigate();
    const {_id, name, price, quantity, supplierName, shortDesc, image } = fruit;
    return (
        <div className='fruit-info'>
            <img src={image} alt="" width={'250px'}/>
            <h4>Name: {name}</h4>
            <p>Price: {price}$</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplierName}</p>
            <p>{shortDesc}</p>
            <button className='btn' onClick={() => navigate(`/inventory/${_id}`)}>Manage</button>
        </div>
    );
};

export default Inventory;