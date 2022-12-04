import React from 'react'
import PrimaryButton from './components/form/PrimaryButton'
import Input from './components/form/Input';
import './styles/Signin.style.css'

export default function Signin() {
    return (
        <section className='Signin-Wrapper'>
        <div className='Signin'>
          <h1>Signin</h1>
  
          <form className='form'>
            <Input label={"Email"} />
            <Input label={"Password"} />
            <PrimaryButton content={'Sign in'} />
          </form>
        </div>
        <div>
          <img src={'/lamp.png'} alt={'logo'} />
        </div>
      </section>
    )
}
