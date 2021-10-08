import { modules } from "../../data/modules";



const initialState = modules;

export default function reducer(state = initialState,action){
    switch(action.type){
        default:
            return state;
    }
}