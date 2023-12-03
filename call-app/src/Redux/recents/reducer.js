import { ADD_RECENT_CONTACTS_SUCCESS, DELETE_RECENT_CONTACTS_SUCCESS, GET_RECENT_CONTACTS_FAILURE, GET_RECENT_CONTACTS_REQUEST, GET_RECENT_CONTACTS_SUCCESS } from "./actionTypes";


const initialState = {
    recents:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
 switch(type){
    case GET_RECENT_CONTACTS_REQUEST:
        return {...state,isLoading:true};
    case GET_RECENT_CONTACTS_SUCCESS:
        return {...state,isLoading:false,RECENTS:payload}
    case GET_RECENT_CONTACTS_FAILURE:
        return {...state,isError:true}
    case DELETE_RECENT_CONTACTS_SUCCESS:
            return {...state,isLoading:false}
    case ADD_RECENT_CONTACTS_SUCCESS:
            return {...state,isLoading:false}
    default :
        return state;
 }
}
