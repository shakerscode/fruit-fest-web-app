import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleInven.css'


const SingleInven = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [fruit, setfruit] = useState([]);
    const [getQuantity, setGetQuantity] = useState('')
    const { _id, image, name, price, quantity, supplierName, shortDisc } = fruit;

    useEffect(() => {
        const url = `http://localhost:5000/fruit/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setfruit(data));
    }, [id])
    
    //remove quantity
    let fruitQuantity = 0;
    const removeQuantity = () =>{
        const removedQuantity = quantity - 1;
        console.log(removedQuantity);
    }

    //set quantity
    const handleQuantity = ()=> {
        console.log('connected');
        const userQuantity = parseInt(getQuantity);
        console.log(userQuantity + quantity);
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
                <button onClick={removeQuantity} className='btn'>Deliver</button>
            </div>
            <div className='restore-sec'>
                <h1 className='restore-header'>Restock</h1>
                <label id='input-label'>Quantity:</label>
                <input onChange={(e) => setGetQuantity(e.target.value)} type='number' name="quantity" placeholder='Enter quantity' />
                <button onClick={handleQuantity} className="btn">Restock</button>
            </div>
            <button onClick={()=> navigate('/manage-inventory')} className='btn'>Manage Inventories</button>
        </div>
    );
};

export default SingleInven;