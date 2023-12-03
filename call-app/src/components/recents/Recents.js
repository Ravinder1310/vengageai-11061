import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRecentContacts, getRecentContacts } from "../../Redux/recents/action";
import "./recents.css"

const Recents = () => {
  const dispatch = useDispatch();
  const recents = useSelector((store) => store.recentsReducer.recents);

  const handleDelete = (id) => {
    dispatch(deleteRecentContacts(id));
  }

  useEffect(() => {
    dispatch(getRecentContacts());
  }, [recents.length]);

  return (
    <div className="recents">
      <div className="recentHeading">
        <h1>Recents</h1>
        <a href="/contact/create" className="float">
          <i className="fa fa-plus my-float"></i>
        </a>
        <a href="/contact" className="float2">
          <i className="fa fa-plus my-float2"></i>
        </a>
      </div>
      {recents.length > 0 ? (
        recents.map((el) => (
          <div className="recentCard" key={el._id}>
            <div>
              <a href={`tel://${el.phone}`}>
                <h1>{el.name}</h1>
              </a>
            </div>
            
              <img
              onClick={handleDelete(el._id)}
                className="deleteImage"
                src="/images/delete.png"
                alt="error"
              />
          </div>
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};

export default Recents;
