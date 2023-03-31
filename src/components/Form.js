import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

const Form = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const API_URL = 'http://localhost:8080/api/v1/person';

    const saveData = (data) => {
        axios.post(API_URL, data).then(response => {
            if(response.status === 201){props.setReload(!props.reload);}
        })
    }


    return (
            <form className='form-control mt-3 bg-light' onSubmit={handleSubmit(saveData)}>
                <h3>Registration form</h3>
                <div className="row">
                    <div className="col">
                <input type='text' {...register("firstName", {required: true, maxLength: 40})} className='form-control ms-1' id='firstName' name='firstName' placeholder='Enter First Name' />
                {errors.firstName && errors.firstName.type === "required" && (<span className='text-danger'>First Name is Required!</span>)}
                {errors.firstName && errors.firstName.type === "maxLength" && (<span className='text-danger'>Max Length is exceeded!</span>)}
                    </div>
                    <div className="col">
                <input type='text' {...register("lastName", {required: true, maxLength: 40})} className='form-control' id='lastName' name='lastName' placeholder='Enter Last Name' />
                {errors.lastName && errors.lastName.type === "required" && (<span className='text-danger'>Last Name is Required!</span>)}
                {errors.lastName && errors.lastName.type === "maxLength" && (<span className='text-danger'>Max Length is exceeded!</span>)}
                    </div>
                </div>
                <div className="row m-1">
                <input type='text' {...register("email", {required: true, maxLength: 100})} id='email' className='form-control' name='email' placeholder='Enter Email' />
                {errors.email && errors.email.type === "required" && (<span className='text-danger'>Email is Required!</span>)}
                {errors.email && errors.email.type === "maxLength" && (<span className='text-danger'>Max Length is exceeded!</span>)}
                </div>
                <div className="row m-1">
                <input type='text' {...register("title", {required: true, maxLength: 50})} id='title' className='form-control' name='title' placeholder='Enter Title' />
                {errors.title && errors.title.type === "required" && (<span className='text-danger'>Title is Required!</span>)}
                {errors.email && errors.email.type === "maxLength" && (<span className='text-danger'>Max Length is exceeded!</span>)}
                </div>
                        <button type='submit' className='btn btn-success m-1'>Add</button>
                        <button type='button' className='btn btn-danger' >Reset</button>
            </form>
    );
};

export default Form;