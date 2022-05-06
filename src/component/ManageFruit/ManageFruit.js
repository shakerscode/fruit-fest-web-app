import React from 'react';
import './ManageFruit.css'
import { XCircleIcon } from '@heroicons/react/solid';

const ManageFruit = ({fruit, handleItemDelete}) => {
    const {_id, name, price, quantity, supplierName, image } = fruit;
    return (
        <div className='manage-all-fruits'>
            <img src={image} alt="" width={'60px'}/>
            <h6>{_id}</h6>
            <p>{name}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{supplierName}</p>
            <XCircleIcon onClick={()=> handleItemDelete(_id)} className='x-icon'></XCircleIcon>
        </div>
    );
};

export default ManageFruit;