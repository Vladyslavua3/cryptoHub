import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";


interface IFormInput{
    firstName: string;
    lastName: string;
    age: number
}


export const Login = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit:SubmitHandler<IFormInput> = data => setUserData(data);
    const [userData,setUserData] = useState<IFormInput>({
        firstName:'',
        lastName:'',
        age:0
    })

    console.log(userData)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
        </form>
    );
};
