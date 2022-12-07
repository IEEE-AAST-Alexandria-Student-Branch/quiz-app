import React from 'react'
import PrimaryButton from '../components/Form/PrimaryButton'
import Input from '../components/Form/Input';
import { useForm } from "react-hook-form";
import '../styles/Signin.style.css'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signin() {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginErrMsg, setLoginErrMsg] = useState()

    const onSubmit = async ({ email, password }) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/start')
        } catch (error) {
            setLoginErrMsg(error.message)
        }
    }

    const registerOptions = {
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
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
                    
                    {loginErrMsg === 'Firebase: Error (auth/wrong-password).' ? 'Worng Password' : null}
                    <PrimaryButton content={'Sign in'} />
                </form>
            </div>
            <div>
                <img src={'/lamp.png'} alt={'logo'} />
            </div>
        </section>
    )
}
