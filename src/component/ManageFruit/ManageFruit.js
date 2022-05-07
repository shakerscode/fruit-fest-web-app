import React from 'react';
import './ManageFruit.css'
import { XCircleIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const ManageFruit = ({fruit, handleItemDelete}) => {
    const navigate = useNavigate()
    const {_id, name, price, quantity, supplierName, image } = fruit;
    return (
        <div onClick={()=>navigate(`/inventory/${_id}`)} className='manage-all-fruits'> 
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