import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInputSignIn, hanldeSubmitSignIn } from "../Store/questionsSlice"
import { Navigate, Link } from "react-router-dom"
import { UilSpinnerAlt } from '@iconscout/react-unicons'
import lamp from "../imgs/lamp.png"
import "./Form.scss"
const Register = () => {

    let reduxData = useSelector(state => state.questions)
    let dispatch = useDispatch()

    return (
        <>
            {reduxData.successSignIn === true ? <Navigate to="/home" /> : (
                <div className="Register">
                    <div className="Register_data">
                        <h1>Sign In</h1>
                        <form className="formContainer" onSubmit={(e) => dispatch(hanldeSubmitSignIn(e))}>
                            <div>
                                <label>Email</label>
                                <input onChange={(e) => dispatch(handleInputSignIn(e))} type="email" name="email" placeholder='Enter Your Email' />
                                <small className="inputError">{reduxData?.registeredEmail || reduxData.joiErrors.email}</small>
                            </div>
                            <div>
                                <label>Password</label>
                                <input onChange={(e) => dispatch(handleInputSignIn(e))} type="password" name="password" placeholder='Enter Your Password' />
                                <small className="inputError">{reduxData.joiErrors.password || reduxData.wrongPassword}</small>
                            </div>

                            <button className="FormBtn">{reduxData.isLoading ? <UilSpinnerAlt color="blue" size="sm" /> : `Confirm`}</button>
                            {reduxData.registered && <h3 className="registeredError" style={{ color: "#ff0808d1" }}>{reduxData.registered}</h3>}
                            <p className="have">You don't have an account? <Link to="/Register">Register</Link></p>
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