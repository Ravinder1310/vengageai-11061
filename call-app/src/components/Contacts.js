import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, getContacts } from "../Redux/action";
import { Link } from "react-router-dom";
import "../styles/contacts.css";
import { addRecentContacts } from "../Redux/recents/action";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.contactsReducer.contacts);
  const [data,setData] = useState([]);
// console.log(contacts);
  const handleRecents = (el) => {
    dispatch(addRecentContacts(el))
  }
  
  const handleDelete = (id) => {
    dispatch(deleteContacts(id))
  }

  useEffect(() => {
    dispatch(getContacts());
    if(contacts.length>0){
      setData(contacts.contacts)
    }
    console.log(contacts);
  }, [contacts.length]);

  return (
    <div className="contacts">
      <div className="contactHeading">
        <h1>Contacts</h1>
        <a href="/" className="float">
          <i className="fa fa-watch my-float"></i>
        </a>
        <a href="/contact/create" className="float2">
          <i className="fa fa-plus my-float2"></i>
        </a>
      </div>
      {contacts.length > 0 ? (
        contacts.map((el) => (
          <div className="contactCard" key={el._id}>
            <div onClick={() => handleRecents(el)}>
              <a href={`tel://${el.phone}`}>
                <h1>{el.name}</h1>
              </a>
              <a href={`tel://${el.phone}`}>
                <h3>{el.phone}</h3>
              </a>
            </div>
            <img
            onClick={() => handleDelete(el._id)}  
                className="editImage"
                src="/images/delete.png"
                alt="error"
              />
            <Link to={`/contact/edit/${el._id}`}>
              <img
                className="editImage"
                src="/images/editing.png"
                alt="error"
              />
            </Link>
          </div>
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};

export default Contacts;
