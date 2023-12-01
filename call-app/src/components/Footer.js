import React from 'react';
import "../styles/footer.css"

const Footer = ({setToggle}) => {
  return (
    <div className='footer'>
    <div className='card' onClick={() => setToggle(true)}>
        <img src='/images/recents.png' alt='error'/>
        <p>Recents</p>
    </div>
    <div className='card' onClick={() => setToggle(false)}>
        <img src='/images/contacts.png' alt='error'/>
        <p>Contacts</p>
    </div>
  </div>
  )
}

export default Footer