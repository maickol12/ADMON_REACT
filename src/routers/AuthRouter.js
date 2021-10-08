import React from 'react'
import { Route,Redirect } from 'react-router'
import LoginScreen from '../components/auth/LoginScreen'
import { PostsScreen } from '../components/jsonplaceholder/PostsScreen'

const checkSession = () => (
    ( sessionStorage.getItem('user') !== null )
        ? <Redirect to='/admin/dash' />
        : <LoginScreen />
)

export const AuthRouter = () => {
    return (
        <div className='auth__main'>
            <div className='auto__container col-md-12 d-flex justify-content-center'>
                <Route 
                    exact 
                    path='/auth/login/' 
                    component = { checkSession }/>

            </div>
        </div>
    )
}
