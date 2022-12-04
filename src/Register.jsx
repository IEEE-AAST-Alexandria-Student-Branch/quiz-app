import React from 'react'
import Input from './components/form/Input'
import PrimaryButton from './components/form/PrimaryButton'
import './styles/Register.style.css'

export default function Register() {
  return (
    <section className='Register-Wrapper'>
      <div className='Register'>
        <h1>Register</h1>

        <form className='form'>
          <Input label={"First Name"} />
          <Input label={"Last Name"} />
          <Input label={"Email"} />
          <Input label={"Password"} />
          <Input label={"Re-type Password"} placeholder={"Re-type Your Password"} />
          <PrimaryButton content={'Register'} />
        </form>
      </div>
      <div>
        <img src={'/lamp.png'} alt={'logo'} />
      </div>
    </section>
  )
}
