import {InjectedFormikProps, useFormik} from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/auth-reducer'
import {AppStateType} from "../../redux/redux-store";



const Login  = (props) => {

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: ''
    }

    const onSubmit = values => {
        props.login (formik.values.email, formik.values.password, formik.values.rememberMe,formik.values.captcha)
    }

    const formik = useFormik({
        initialValues,
        onSubmit,

    })




    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }


    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={formik.handleSubmit}>



            <div>
                <input value={formik.values.email} onChange={formik.handleChange} type = 'email' name='email' placeholder='Email'/><label>login</label>

            </div>
            <div>
                <input value={formik.values.password} onChange={formik.handleChange} type = 'password' name='password' placeholder='Password'/><label>password</label>
            </div>
            <div>
                <input value={formik.values.rememberMe} onChange={formik.handleChange} name='rememberMe' type="checkbox"/>remember me
            </div>
            <img src={props.captchaUrl}/>
            <div>
                <div>
                    <input value={formik.values.captcha} onChange={formik.handleChange} name='captcha' type="text"/>captcha
                </div>
                <button type='submit'>Login</button>
            </div>
        </form>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)
