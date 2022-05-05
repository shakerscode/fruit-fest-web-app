import React, { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid'
import './ManageInv.css'
import ManageFruit from '../ManageFruit/ManageFruit';

const ManageInv = () => {
    const [fruits, setFruits] = useState([]);
    console.log(fruits);
    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [])

    return (
        <div className='manage-inventory'>
            <div className="manage-header">
                <div >
                    <h1 className='manage-heading'>Manage Inventory</h1>
                </div>
                <div className='add-new-btn'>
                    <button className='btn'>Add New <PlusIcon className='plus-icon'></PlusIcon></button>
                </div>
            </div>
           
            <div className='manage-fruits'>
                    {
                        fruits.map(fruit => <ManageFruit key={fruit._id} fruit={fruit}></ManageFruit>)
                    }
                </div>
            
        </div>
    );
};

export default ManageInv;