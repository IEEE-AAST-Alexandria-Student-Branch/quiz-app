import React from 'react'
import PrimaryButton from './components/form/PrimaryButton'
import Input from './components/form/Input';
import { useForm } from "react-hook-form";
import './styles/Signin.style.css'

export default function Signin() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)

    }

    const registerOptions = {
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        },
    };

    return (
        <section className='Signin-Wrapper'>
            <div className='Signin'>
                <h1>Signin</h1>

                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <Input label={"Email"} type={'email'} props={{ ...register('email', registerOptions.email) }} />
                    {errors?.email && errors.email.message}

                    <Input label={"Password"} type={'password'} props={{ ...register('password', registerOptions.password) }} />
                    {errors?.password && errors.password.message}

                    <PrimaryButton content={'Sign in'} />
                </form>
            </div>
            <div>
                <img src={'/lamp.png'} alt={'logo'} />
            </div>
        </section>
    )
}
