import axios from "axios"
import { ADD_RECENT_CONTACTS_SUCCESS, DELETE_RECENT_CONTACTS_SUCCESS, GET_RECENT_CONTACTS_FAILURE, GET_RECENT_CONTACTS_REQUEST, GET_RECENT_CONTACTS_SUCCESS } from "./actionTypes";


const getRecentContactsRequestAction = () => {
    return {type:GET_RECENT_CONTACTS_REQUEST};
}
const getRecetContactsSuccessAction = (payload) => {
    return {type:GET_RECENT_CONTACTS_SUCCESS,payload};
}
const getRecentContactsFailureAction = () => {
    return {type:GET_RECENT_CONTACTS_FAILURE};
}
const addRecentContactsAction = () => {
    return {type:ADD_RECENT_CONTACTS_SUCCESS};
}
const deleteRecentContactsAction = () => {
    return {type:DELETE_RECENT_CONTACTS_SUCCESS};
}

export const getRecentContacts = () => (dispatch) => {
    dispatch(getRecentContactsRequestAction());

    axios.get(`https://motionless-bass-tam.cyclic.app/api/v1/contacts/get-contact`).then((res)=>{
        console.log("API Response:", res.data);
        dispatch(getRecetContactsSuccessAction(res.data));
    }).catch((error)=>{
        console.error("API Error:", error);
        dispatch(getRecentContactsFailureAction(error));
    })
}


export const addRecentContacts = (contact) => (dispatch) => {
    return  axios.post(`https://motionless-bass-tam.cyclic.app/api/v1/recents/add-contact`,contact).then(()=>{
          dispatch(addRecentContactsAction());
      })
}

export const deleteRecentContacts = (id) => (dispatch) => {
    return  axios.patch(`https://motionless-bass-tam.cyclic.app/api/v1/recents/delete-contact/${id}`).then(()=>{
          dispatch(deleteRecentContactsAction());
      })
  }