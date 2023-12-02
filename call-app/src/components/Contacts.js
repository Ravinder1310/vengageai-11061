import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../Redux/action';
import { Link } from "react-router-dom"
import "../styles/contacts.css"

const Contacts = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((store)=>store.contactsReducer.contacts);
 

  useEffect(()=>{
    dispatch(getContacts());
  },[])

  return (
    <div className='contacts'>
    <div className='contactHeading'>
      <h1>Contacts</h1>
      <Link to={'/contact/create'}>
        <img className='addContact' src='/images/add.png' alt='error' />
      </Link>
    </div>
    {contacts.length > 0 ? (
      contacts.map((el) => (
        <div className='contactCard' key={el.id}>
          <div>
            <a href={`tel://${el.phone}`}>
              <h1>{el.name}</h1>
            </a>
            <a href={`tel://${el.phone}`}>
              <h3>{el.phone}</h3>
            </a>
          </div>
          <Link to={`/contact/${el.id}/edit`}>
            <img className='editImage' src='/images/editing.png' alt='error' />
          </Link>
        </div>
      ))
    ) : (
      <p>No contacts available</p>
    )}
  </div>
  )
}

export default Contacts