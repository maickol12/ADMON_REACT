import React from 'react'
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import { AuthRouter } from './AuthRouter';
import { AdminRouter } from './AdminRouter';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/auth/' component={ AuthRouter } />
                    <Route path='/admin/' component={ AdminRouter } />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
