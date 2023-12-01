import { EDIT_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "./actionTypes"
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

export const getContacts = (dispatch) => {
    dispatch(getContactsRequestAction());

    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/contacts`).then((res)=>{
        dispatch(getContactsSuccessAction(res.data))
    }).catch((error)=>{
        dispatch(getContactsFailureAction(error))
    })
}

export const editContacts = (id,contact) => (dispatch) => {
  return  axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/contacts/${id}`,contact).then(()=>{
        dispatch(editContactsAction())
    })
}