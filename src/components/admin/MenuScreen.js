import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { loggout } from '../../reducers/Login';
import { MenuItem } from './MenuItem'

const MenuScreen = ({ MenuReducer,logout }) => {
    const history = useHistory();
    const handleLogout = (e) => {
        logout();
        sessionStorage.removeItem('user');
        history.push("/auth/login");
    
        console.log(logout)
     
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand" href="#">Inicio</div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav w-100">
                    {
                        MenuReducer.map((value,index) =>{
                            
                            return (
                            <MenuItem 
                                key={`idMenu${value.idMenu}`}
                                idMenu={value.idMenu}
                                description={value.Name} 
                                hasSubmenu={value.submodules}
                                submenus={value.submodules}
                                Route={value.Route}
                                />
                            )
                        })
                    }
                    <li className="nav-item dropdown ml-auto">
                        <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            maickol
                            <span className="caret"></span>
                        </div>
                        <div 
                            className="dropdown-menu dropdown-menu-right" 
                            aria-labelledby="navbarDropdown">
                                <button className='dropdown-item' onClick={ (e) => handleLogout(e) }>logout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps       = state => {
    const { MenuReducer } = state;
    console.log(state);
    return {
        MenuReducer: MenuReducer
    };
};
const mapDispatchToProps    = dispatch => ({
    logout: payload => dispatch(loggout()) 
});

const decorate = connect(mapStateToProps,mapDispatchToProps)(MenuScreen);

export default decorate;