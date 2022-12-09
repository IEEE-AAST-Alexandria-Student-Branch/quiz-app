import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInputRegister,  hanldeSubmitRegister } from "../Store/questionsSlice"
import { Navigate, Link } from "react-router-dom"
import { UilSpinnerAlt } from '@iconscout/react-unicons'
import lamp from "../imgs/lamp.png"
import "./Form.scss"
const Register = () => {

    let reduxData = useSelector(state => state.questions)
    let dispatch = useDispatch()

    return (
        <>
            {reduxData.successSignUp === true ? <Navigate to="/SignIn" /> : (
                <div className="Register">
                    <div className="Register_data">
                        <h1>Register</h1>
                        <form className="formContainer" onSubmit={(e) => dispatch(hanldeSubmitRegister(e))}>
                            <div>
                                <label>User Name</label>
                                <input onChange={(e) => dispatch(handleInputRegister(e))} type="text" name="userName" placeholder='Enter Your UserName' />
                                <small className="inputError">{reduxData?.joiErrors?.userName || reduxData?.registeredName}</small>
                            </div>
                            <div>
                                <label>Age</label>
                                <input onChange={(e) => dispatch(handleInputRegister(e))} type="number" name="age" placeholder='Enter Your Age' />
                                <small className="inputError">{reduxData?.joiErrors?.age}</small>
                            </div>
                            <div>
                                <label>Email</label>
                                <input onChange={(e) => dispatch(handleInputRegister(e))} type="email" name="email" placeholder='Enter Your Email' />
                                <small className="inputError">{reduxData?.registeredEmail}</small>
                            </div>
                            <div>
                                <label>Password</label>
                                <input onChange={(e) => dispatch(handleInputRegister(e))} type="password" name="password" placeholder='Enter Your Password' />
                                {/* <p className="inputError">{reduxData.joiErrors.password}</p> */}
                            </div>

                            <button className="FormBtn">{reduxData.isLoading ? <UilSpinnerAlt color="blue" size="sm" /> : `Confirm`}</button>
                            {reduxData.registered && <h3 className="registeredError" style={{ color: "#ff0808d1" }}>{reduxData.registered}</h3>}
                            <p className="have">You have an account? <Link to="/SignIn">Sign In</Link></p>
                        </form>
                    </div>
                    <div className="Register_logo">
                        <img src={lamp} alt="" />
                    </div>
                </div>
            )}

        </>

    )
}

export default Register