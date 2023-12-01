import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContacts, getContacts } from "../Redux/action";
import { Dna } from "react-loader-spinner";
import "../styles/edit.css";

const EditContacts = () => {
  const { id } = useParams();
  const contact = useSelector((store) => store.contactsReducer.contacts);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const contactData = contact.find((el) => el.id === +id);
    if (contactData) {
      setName(contactData.name);
      setPhone(contactData.phone);
    }
  }, []);

  const handleEdits = () => {
    let newData = {
      name:name,
      phone:phone,
    };
    dispatch(editContacts(id, newData)).then(() => dispatch(getContacts()));
    navigate("/");
  };

  return (
    <div className="edit">
      <h1>Edit Contact {id}</h1>
      <div className="editArea">
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
        <div className="change">
          <button onClick={handleEdits}>Change</button>
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
  );
};

export default EditContacts;
