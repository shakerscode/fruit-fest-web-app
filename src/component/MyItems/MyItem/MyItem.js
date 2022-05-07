import { XCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import './MyItem.css'

const MyItem = ({userFruit, handleItemDelete}) => {
const {_id, name, image, price, quantity, shortDesc} = userFruit;
    return (
        <div className='my-item'>
            <img src={image} alt="" width={'50px'}/>
            <h5>{name}</h5>
            <p><b>{_id}</b></p>
            <p>{price}$</p>
            <p>{quantity}</p>
            <p>{shortDesc?.slice(0, 25)}...</p>
            <button className='btn' id='cancel-btn' onClick={()=> handleItemDelete(_id)}>Cancel Item<XCircleIcon className='cancel-x-icon'></XCircleIcon></button>
        </div>
    );
};

export default MyItem;