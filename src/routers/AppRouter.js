import React from 'react'
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import { AuthRouter } from './AuthRouter';
import { AdminRouter } from './AdminRouter';
import { JsonPlaceHolderRouter } from './JsonPlaceHolderRouter';
import { PrivateRoute } from './PrivateRoute';
import { connect } from 'react-redux';



const AppRouter = ({logged}) => {
    
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path='/auth/' component={ AuthRouter } />
                        <Route path='/admin/' component={ AdminRouter } />
                        <PrivateRoute 
                            path='/jsonplaceholder/' 
                            component={ JsonPlaceHolderRouter }
                            isAuthenticated={ logged } />
                        
                        <Redirect to='/auth/login' />
                    </Switch>
                </div>
            </Router>
            

        </div>
    )
}

const mapStateToProps    = state => {
    const { LoginInfo :{ logged }} = state;

    return {
        logged
    };
}
const mapDispatchToProps = dispatch => ({

});


const decorate = connect(mapStateToProps,mapDispatchToProps)(AppRouter);

export default decorate;