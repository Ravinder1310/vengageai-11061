import { DELETE_CONTACTS_SUCCESS, EDIT_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "./actionTypes"
import axios from "axios"


const getContactsRequestAction = () => {
    return {type:GET_CONTACTS_REQUEST};
}
const getContactsSuccessAction = (payload) => {
    return {type:GET_CONTACTS_SUCCESS,payload};
}
const getContactsFailureAction = () => {
    return {type:GET_CONTACTS_FAILURE};
}
const editContactsAction = () => {
    return {type:EDIT_CONTACTS_SUCCESS};
}
const createContactsAction = () => {
    return {type:EDIT_CONTACTS_SUCCESS};
}
const deleteContactsAction = () => {
    return {type:DELETE_CONTACTS_SUCCESS};
}

export const getContacts = () => (dispatch) => {
    dispatch(getContactsRequestAction());

    axios.get(`https://motionless-bass-tam.cyclic.app/api/v1/contacts/get-contact`).then((res)=>{
        console.log("API Response:", res.data);
        dispatch(getContactsSuccessAction(res.data));
    }).catch((error)=>{
        console.error("API Error:", error);
        dispatch(getContactsFailureAction(error));
    })
}

export const editContacts = (id,contact) => (dispatch) => {
  return  axios.patch(`https://motionless-bass-tam.cyclic.app/api/v1/contacts/update-contact/${id}`,contact).then(()=>{
        dispatch(editContactsAction());
    })
}

export const createContacts = (contact) => (dispatch) => {
    return  axios.post(`https://motionless-bass-tam.cyclic.app/api/v1/contacts/create-contact`,contact).then(()=>{
          dispatch(createContactsAction());
      })
}

export const deleteContacts = (id) => (dispatch) => {
    return  axios.patch(`https://motionless-bass-tam.cyclic.app/api/v1/contacts/delete-contact/${id}`).then(()=>{
          dispatch(deleteContactsAction());
      })
  }