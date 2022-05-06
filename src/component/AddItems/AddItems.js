import React from 'react';
import { useForm } from "react-hook-form";
import './AddItems.css'

const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/fruit`;
        fetch(url, {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    };
    return (
        <div className='add-item-sec'>
            <h1 className='about-header'>Add new items</h1>
            <form className='add-item-forum' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder='Fruit name'/>
                <input {...register("supplierName")} placeholder='Supplier name'/>
                <textarea {...register("shortDisc")} placeholder='Short description'/>
                <input type="number" {...register("price")} placeholder='Price'/>
                <input type="number" {...register("quantity")} placeholder='Quantity'/>
                <input type="text" {...register("image")} placeholder='Image url'/>
                <input id='submit-add-item' type="submit" />
            </form>
        </div>
    );
};

export default AddItems;