import React from 'react'
import {BrowserRouter as Router,Route,Redirect } from 'react-router-dom'
import LoginScreen from '../auth/LoginScreen'

export const AuthRouter = () => {
    return (
        <div className='auth__main'>
            <div className='auto__container col-md-12 d-flex justify-content-center'>
                <Route 
                    exact 
                    path='/auth/login' 
                    component = { LoginScreen }/>
                <Redirect to='/auth/login' />
            </div>
        </div>
    )
}
