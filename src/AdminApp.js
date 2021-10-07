import React from 'react'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import { AuthRouter } from './components/routers/AuthRouter';

export const AdminApp = () => {
    return (
       <Router>
           <div>
               <Switch>
                   <Route path='/auth/' component={ AuthRouter } />
                   <Redirect to='/auth/login' />
               </Switch>
           </div>
       </Router>
    )
}
