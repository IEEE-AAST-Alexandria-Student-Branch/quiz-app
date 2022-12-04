import React from 'react'
import Input from './components/form/Input'
import PrimaryButton from './components/form/PrimaryButton'
import { useForm } from "react-hook-form";
import './styles/Register.style.css'



export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)

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
          <PrimaryButton content={'Register'} />
        </form>
      </div>
      <div>
        <img src={'/lamp.png'} alt={'logo'} />
      </div>
    </section >
  )
}
