import React from 'react'
import Input from '../components/Form/Input'
import PrimaryButton from '../components/Form/PrimaryButton'
import { useForm } from "react-hook-form";
import '../styles/Register.style.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [registertionErrMsg, setregistertionErrMsg] = useState()

  const onSubmit = async ({ email, password, firstName }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          await updateProfile(auth.currentUser, {
            displayName: firstName,
          })
        })
      navigate('/signin')
    }
    catch (error) {
      setregistertionErrMsg(error.message)
    }
  }

  const registerOptions = {
    firstName: { required: "First name is required" },
    lastName: { required: "Last name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    },
    confirmPassword: {
      required: "Confirmed password is required",
      validate: (val) => {
        if (watch('password') !== val) {
          return "Your passwords do no match";
        }
      }
    }
  };

  return (
    <section className='Register-Wrapper'>
      <div className='Register'>
        <h1>Register</h1>

        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <Input label={"First Name"} props={{ ...register('firstName', registerOptions.firstName) }} />
          {errors?.firstName && errors.firstName.message}
          <Input label={"Last Name"} props={{ ...register('lastName', registerOptions.lastName) }} />
          {errors?.lastName && errors.lastName.message}
          <Input label={"Email"} type={'email'} props={{ ...register('email', registerOptions.email) }} />
          {errors?.email && errors.email.message}
          <Input label={"Password"} type={'password'} props={{ ...register('password', registerOptions.password) }} />
          {errors?.password && errors.password.message}
          <Input label={"Confirm Password"} type={'password'} props={{ ...register('confirmPassword', registerOptions.confirmPassword) }} placeholder={"Re-type Your Password"} />
          {errors?.confirmPassword && errors.confirmPassword.message}
          {registertionErrMsg === 'Firebase: Error (auth/email-already-in-use).' ? 'Email already exists' : registertionErrMsg}
          <PrimaryButton content={'Register'} />
        </form>
      </div>
      <div>
        <img src={'/lamp.png'} alt={'logo'} />
      </div>
    </section >
  )
}
