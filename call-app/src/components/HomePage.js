import React, { useState } from 'react';
import "../styles/home.css"
import Recents from './recents/Recents';

const HomePage = () => {

  return (
    <div className='container'>
      <Recents/>
    </div>
  )
}

export default HomePage