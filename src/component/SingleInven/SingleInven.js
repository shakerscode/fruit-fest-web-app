import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleInven.css'


const SingleInven = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [error, setError] = useState('')
    const [fruit, setFruit] = useState([]);
    const [getQuantity, setGetQuantity] = useState(0)
    const { image, name, price, quantity, supplierName, shortDesc } = fruit;

    useEffect(() => {
        const url = `https://agile-fortress-99835.herokuapp.com/fruit/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFruit(data));
    }, [id, fruit])
    
    //remove quantity

    const removeQuantity = () =>{
        const removedQuantity = quantity - 1;
        console.log(removedQuantity);
        const url = `https://agile-fortress-99835.herokuapp.com/fruit/${id}`;
        fetch(url, {
            method: 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({removedQuantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    //set quantity
    const handleAddQuantity = ()=> {
        if( getQuantity > 0){
            const newQuantity  = parseInt(getQuantity) + parseInt(quantity);
        const url = `https://agile-fortress-99835.herokuapp.com/fruit/${id}`;
        fetch(url, {
            method: 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({newQuantity})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        setError('')
        }else{
            setError('Please enter a valid number')
        }
        

 
    }
    return (
        <div>
            <h1 className='about-header'>Inventory</h1>
            <div className='single-inventory'>
            <div className='inventory-fruit'>
                <img src={image} alt="" width={'250px'} />
                <h4>Name: {name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Supplier: {supplierName}</p>
                <p>{shortDesc}</p>
                <button onClick={removeQuantity} className='btn'>Deliver</button>
            </div>
            <div className='restore-sec'>
                <h1 className='restore-header'>Restock</h1>
                <label id='input-label'>Quantity:</label>
                <input onChange={(e) => setGetQuantity(e.target.value)} type='number' name="quantity" placeholder='Enter quantity' />
                {
                        error ? <p className='errors'>{error}</p> : ''
                    }
                <button onClick={handleAddQuantity} className="btn">Restock</button>
            </div>
            <button onClick={()=> navigate('/manage-inventory')} className='btn'>Manage Inventories</button>
        </div>
        </div>
    );
};

export default SingleInven;