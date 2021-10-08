import React from 'react'
import { Redirect, Route } from 'react-router'
import DashboardScreen  from '../components/admin/DashboardScreen'

const checkSession = () => {    
    return ( sessionStorage.getItem('user') === null )
        ?<Redirect to='/auth/login' />
        : <DashboardScreen /> 
}

export const AdminRouter = () => {
    return (
        <div>
            <Route
                path='/admin/dash/'
                component={ checkSession }
            />
        </div>
    )
}
