import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleInven.css'


const SingleInven = () => {
    const { id } = useParams();
    const [fruit, setfruit] = useState([]);
    const { _id, image, name, price, quantity, supplierName, shortDisc } = fruit;

    useEffect(() => {
        const url = `http://localhost:5000/fruit/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setfruit(data));
    }, [id])

    const handleQuantity = e =>{
        console.log('connected');
        const userQuantity = e.target.quantity.value;
        console.log(userQuantity);
    }
    return (
        <div className='single-inventory'>
            <div className='inventory-fruit'>
                <img src={image} alt="" width={'250px'} />
                <h4>Name: {name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplierName}</p>
                <p>{shortDisc}</p>
                <button className='btn'>Deliver</button>
            </div>
            <div className='restore-sec'>
                <h1 className='restore-header'>Restock</h1>
                <label id='input-label'>Quantity:</label>
                <input type='number' name="quantity" id="" placeholder='Enter quantity' />
                <button onClick={handleQuantity} className="btn">Restock</button>
            </div>
        </div>
    );
};

export default SingleInven;