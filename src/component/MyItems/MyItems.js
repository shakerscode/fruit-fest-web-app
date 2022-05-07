import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useFruits from '../hooks/useFruits';
import MyItem from './MyItem/MyItem';
import './MyItems.css';

const MyItems = () => {
const [fruits, setFruits] = useFruits();
const [user] = useAuthState(auth);
const navigate = useNavigate()

const userFruits = fruits.filter(fruit => fruit.email === user.email)

const handleItemDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete this item?');
    if(proceed){
        const url = `https://agile-fortress-99835.herokuapp.com/fruit/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            const remain = fruits.filter(fruit=> fruit._id !== id);
            setFruits(remain)
        })
    }

}

    return (
        <div className='my-items'>
            <h1 className='about-header'>My items</h1>
            {
                userFruits.length === 0 &&<div className='no-items-sec'> 
                <p className='no-items'>You have no items. Add some...</p>
                <button onClick={()=>navigate('/add-item')} className='btn'>Add Items</button>
                </div>
            }
            {
                userFruits.map(userFruit => <MyItem key={userFruit._id} userFruit={userFruit} handleItemDelete={handleItemDelete}></MyItem>)
            }
        </div>
    );
};

export default MyItems;