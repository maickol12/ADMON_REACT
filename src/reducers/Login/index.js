const SET_USER              = "LOGIN/SETUSER";
const SET_LOGIN_START       = "LOGIN/SET_LOGIN_START";
const SET_LOGGIN_LOGOUT     = "LOGIN/SET_LOGOUT";



const initialState = {
    login_start:false,
    logged: false,
    user:{}
};



export default function reduxer(state = initialState,action){
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                logged:true,
                user:action.payload
            }
        case SET_LOGIN_START:
            return {
                ...state,
                login_start:action.payload
            }
        case SET_LOGGIN_LOGOUT:
           
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
} 


export const loggout = () => {
    // alert("sddd")
    return({
    type: SET_LOGGIN_LOGOUT
    })
};


export const loginThunk = payload => async(dispatch) => {
    try{
        console.log(payload);
        dispatch({
            type:SET_LOGIN_START,
            payload:true
        });
        
        const url               = 'https://jsonplaceholder.typicode.com/users';
        const fetchResult       = await fetch(url);
        const json              = await fetchResult.json();
        var result             = json.filter(
                                                value =>
                                                value.username.toLowerCase() === payload.username.toLowerCase()
                                            );
        setTimeout(() => {
            if(result){
                dispatch({
                    type:SET_USER,
                    payload:result
                });
            }else{
                dispatch({
                    type:SET_USER,
                    payload:{
                        logged:false
                    }
                });
            }
            dispatch({
                type:SET_LOGIN_START,
                paload:false
            });
        }, 2000);
       
    }catch(error){
      console.log(error);
    }
}