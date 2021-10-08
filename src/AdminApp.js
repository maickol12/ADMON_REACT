import React from 'react'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import { AdminRouter } from './routers/AdminRouter';
import { AuthRouter } from './routers/AuthRouter';



export const AdminApp = () => {
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
