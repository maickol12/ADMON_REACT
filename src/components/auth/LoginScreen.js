import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { loginThunk } from './../../reducers/Login'

const LoginScreen = ({login,user,login_start}) => {
    const initialState = {
        fields:{
            password:'',username:''
        },
        errors:{
            password_error:'',username_error:''
        }
    };

    const [values, setValue] = useState(initialState);
    const { username,password} = values.fields;
    const { username_error,password_error } = values.errors;

  
    const handleSubmit = (e) => {
        e.preventDefault();

        const result = validateFields(values.fields);
        setValue({...values,errors:result});
        

        if(!Object.keys(values.errors)){
            login(values);
        }
    }

    const handleChange = (e) => {
        setValue({
            ...values,
            fields:{...values.fields,[e.target.name]:e.target.value}
        });
    }
    const errors = {};
    const validateFields = ( values ) => {

        if(!values.username){
            errors.username_error = 'Campo Vacío';
        }else{
            errors.username_error = '';
        }
        if(!values.password){
            errors.password_error = 'Campo Vacío';
        }
        return errors;
    }

    const handleRegister = () => {

    }
  
    return (
        
        <div className='col-md-4 h-50 align-self-center border-radius-5 color-white'>
            <form onSubmit={ handleSubmit }>
            <div className='container'>
                <h3 className='mt-5 ml-5 auth__title auth_font'>LOGIN</h3>
                <div className='mt-5 ml-5 mr-5'>
                        <input 
                            type='text'
                            className='form-control auth_font'
                            placeholder='User'
                            name='username'
                            value={username}
                            autoComplete="off"
                            onChange={handleChange} />
                            <p>{username_error}</p>
                        
                         <input 
                            type='text'
                            className='form-control mt-4 auth_font'
                            placeholder='Password' 
                            name='password'
                            value={password}
                            autoComplete="off"
                            onChange={handleChange}/>
                            <p>{password_error}</p>
           
                </div>
                <div className='mt-5'>
                    <h2 className='text-center auth__title auth__size auth_font'>Forgor your password</h2>
                </div>
                { login_start && 
                    <div className="loader">
                        <svg className="circular">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="5" stroke-miterlimit="10"></circle>
                        </svg>
                    </div>
                }
            </div>
            <div 
                className='row' 
                style={{position:'absolute',bottom:0,width:"100%"}}>
                    <button 
                        disabled={login_start}
                        className='col-6 text-left auth__buttons auth__register_button auth_font'
                        onClick={ handleRegister }>
                        Register
                    </button>
                    <input 
                        disabled={login_start}
                        type='submit'
                        value='Login'
                        className='col-6 text-right auth__buttons auth__login_button auth_font'>
                        
                    </input>
            </div>
            </form>
        </div>
    )
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(loginThunk(payload))
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);