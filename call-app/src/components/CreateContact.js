import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createContacts, getContacts } from '../Redux/action';
import "../styles/newContact.css"
import { Dna } from "react-loader-spinner";

const CreateContact = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreate = () => {
        let newData = {
          name,
          phone,
        };
        dispatch(createContacts(newData)).then(() => dispatch(getContacts()));
        navigate("/contact");
      };

  return (
    <div className="createContact">
    <h1>Create Contact</h1>
    <div className="createArea">
      <h2>Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Phone</h2>
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <div className="create">
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
    <Dna
      visible={true}
      height="200"
      width="200"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
  )
}

export default CreateContact