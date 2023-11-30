import React, { useState } from 'react';
import "../styles/home.css"
import Footer from './Footer';
import Recents from './Recents';
import Contacts from './Contacts';

const HomePage = () => {

    const [toggle,setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
      };

  return (
    <div className='container'>
     {toggle? <Recents/>:<Contacts/>}
     <Footer toggle={toggle} setToggle={handleToggle} />
    </div>
  )
}

export default HomePage