import React, {useState, useContext} from "react";

import {ContactContext} from '../context/contact/contact.context';


export default function CreateContact() {

  const [state, setLoginState] = useState({name:'',email:'', phone:'',type:''});


  const {createContact} = useContext(ContactContext)

  const addContact = (e)=>{
    e.preventDefault();
    createContact({...state,date:new Date().toString()});
  }

  const setContactDetails =(e)=>{
    setLoginState((previousState)=>({
      ...previousState,[e.target.name]:e.target.value
     }))
   }
  

  

  return (
    <div className="create__container">
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            className="text-control rounded-radius"
            id="name"
            type="text"
            name="name"
            value={state.name}
            onChange={setContactDetails}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            placeholder="email"
            className="text-control rounded-radius"
            id="email"
            type="text"
            value={state.email}
            onChange={setContactDetails}
            name="email"
          />
        </div>
        <div className="form-control select-phone">
          <label htmlFor="tel">Phone</label>
          <div className="grouped-input">
            <input
              placeholder="Mobile Number"
              className="rounded-radius"
              id="tel"
              type="tel"
              value={state.phone}
              onChange={setContactDetails}
              name="phone"
            />
            <div className="form-control grouped-select">
              <select id="type" name="type" value={state.type} onChange={setContactDetails}>
                <option value="mobile">Mob</option>
                <option value="landline">Land</option>
              </select>
            </div>
          </div>
        </div>
      <button className="submit" type="submit" onClick={addContact}>
          Submit
        </button>
      </form>
    </div>
  );
}
