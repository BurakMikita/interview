import React from 'react';
import { Field, Form, Formik } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {selectIsAuth} from "../../redux/auth-selectors";

const FormBackLogin = ()=>{

    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    const logoutCollBack = (values)=>{
        let{email,password,rememberMe} = values
        dispatch(login(email,password,rememberMe))
    }
    return(
        <LoginPage isAuth={isAuth} logoutCollBack={logoutCollBack}/>
    )
}



const LoginPage = ({logoutCollBack,isAuth}) => {

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false, captcha: ''}}
            onSubmit={(values, actions) => {
                logoutCollBack(values)
            }}
        >
            {(props) => (
                <Form>
                   <div>
                       <p>Логин</p>
                       <Field name="email" placeholder="email"/>
                   </div>
                    <br/>
                    <div>
                        <p>Пароль</p>
                        <Field name="password" type="password" placeholder="password"/>
                    </div>
                    <br/>
                    <div>
                      <b>Запомнить</b>  <Field name="rememberMe" type="checkbox"/>
                    </div>
                    <br/>
                    <div>
                        <button type="submit">Submit</button>
                    </div>

                </Form>
            )}
        </Formik>
    </div>
};



export default FormBackLogin









