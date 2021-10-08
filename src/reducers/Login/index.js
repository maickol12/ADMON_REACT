const SET_USER          = "LOGIN/SETUSER";
const SET_LOGIN_START   = "LOGIN/SET_LOGIN_START";



const initialState = {
    login_start:false,
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
        default:
            return state;
    }
} 



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
        }, 5000);
       
    }catch(error){
      console.log(error);
    }
}