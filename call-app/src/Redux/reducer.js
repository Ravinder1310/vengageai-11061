import { CREATE_CONTACTS_SUCCESS, DELETE_CONTACTS_SUCCESS, EDIT_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "./actionTypes";


const initialState = {
    contacts:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
 switch(type){
    case GET_CONTACTS_REQUEST:
        return {...state,isLoading:true};
    case GET_CONTACTS_SUCCESS:
        return {...state,isLoading:false,contacts:payload}
    case GET_CONTACTS_FAILURE:
        return {...state,isError:true}
    case EDIT_CONTACTS_SUCCESS:
        return {...state,isLoading:false}
    case DELETE_CONTACTS_SUCCESS:
            return {...state,isLoading:false}
    case CREATE_CONTACTS_SUCCESS:
            return {...state,isLoading:false}
    default :
        return state;
 }
}
