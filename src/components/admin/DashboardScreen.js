import React from 'react'
import { connect } from 'react-redux';
import { loggout } from './../../reducers/Login/index'


const DashboardScreen = (props) => {
    return (
        <div>
            <button onClick={ loggout }>
                Borrar
            </button>
        </div>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({

});
const decorate = connect(mapStateToProps,mapDispatchToProps)(DashboardScreen);

export default decorate;