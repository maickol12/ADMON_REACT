import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { loginThunk } from './../../reducers/Login';
import { reduxForm,Field  } from 'redux-form';
import { Redirect } from 'react-router';


const handleRegister = (e) => {
 
}
const required = value => {
    return value ? undefined : 'Campo requerido';
} 
const emptyfield = value => ( value.trim().length )? undefined : 'Campo Vacío';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => 
{
    return(
        <div>
            <input 
                {...input} 
                placeholder={label} 
                autoComplete="off"
                type={type} 
                className='form-control mt-4 auth_font'/>
            {
                touched && ((error && <span style={{margin:0}} className='badge badge-info'>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

const LoginScreen = (props) => {
 
    const { loginThunk,submitting, form,handleSubmit, LoginInfo:{ login_start,user,logged} } = props;
    const handleLogin = () => {
        const { login: { values } } = form;
        loginThunk(values);
    }



    useEffect(() => {
        if(Object.keys(user).length){
            sessionStorage.setItem("user",JSON.stringify(user));
        }
    }, [user]);


    return (
        <div className='col-md-4 h-50 align-self-center border-radius-5 color-white'>
            <pre>
                { sessionStorage.getItem("user") }
            </pre>
            <form onSubmit={ handleSubmit( handleLogin ) }>
            <div className='container'>
                <h3 className='mt-5 ml-5 auth__title auth_font'>INICIO DE SESIÓN</h3>
                <div className='mt-5 ml-5 mr-5'>
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        label="Nombre de usuario"
                        validate={[required,emptyfield]}
                    />
                    <Field
                        name="password"
                        type="text"
                        component={renderField}
                        label="Contraseña"
                        validate={[required,emptyfield]}
                        login_start
                    />
           
                </div>
                <div className='mt-5'>
                    <h2 className='text-center auth__title auth__size auth_font'>
                        ¿Olvidaste tu contraseña?
                    </h2>
                </div>
                { login_start && 
                    <div className="loader">
                        <svg className="circular">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10"></circle>
                        </svg>
                    </div>
                }
            </div>
            <div 
                className='row' 
                style={{position:'absolute',bottom:0,width:"100%"}}>
                    <button 
                        className='col-6 text-left auth__buttons auth__register_button auth_font'
                        onClick={ handleRegister }>
                        Registrar
                    </button>
                    <input 
                        disabled={submitting}
                        type='submit'
                        value='Iniciar'
                        className='col-6 text-right auth__buttons auth__login_button auth_font'>
                    </input>
               </div>
            </form>

            { logged && <Redirect to='/admin/dash' /> }
        </div>
    )
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    loginThunk: payload => dispatch(loginThunk(payload))
});

const decorateComponent = connect(mapStateToProps,mapDispatchToProps)(LoginScreen);

export default reduxForm({
    form:'login'
})(decorateComponent);