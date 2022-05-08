import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import './AddItems.css'

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        if(data){
            const url = `https://agile-fortress-99835.herokuapp.com/fruit`;
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
        }
        e.target.reset()
        toast.success('Successfully added item', {id: 'Successfully added'})
    };
    return (
        <div className='add-item-sec'>
            <h1 className='about-header'>Add new items</h1>
            <form className='add-item-forum' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder='Fruit name'/>
                <input {...register("email", { required: true})} value={user.email} />
                <input {...register("supplierName", { required: true})} placeholder='Supplier name'/>
                <textarea {...register("shortDisc", { required: true})} placeholder='Short description'/>
                <input type="number" {...register("price", { required: true})} placeholder='Price'/>
                <input type="number" {...register("quantity", { required: true})} placeholder='Quantity'/>
                <input type="text" {...register("image", { required: true})} placeholder='Image url'/>
                <input id='submit-add-item' type="submit" />
            </form>
        </div>
    );
};

export default AddItems;