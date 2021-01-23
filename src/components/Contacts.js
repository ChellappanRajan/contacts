import React, { useState, Fragment,useContext, useEffect } from "react";
import Contact from "./Contact";
import LayoutType from "./LayoutType";
import { ContactContext } from "../context/contact/contact.context";
import AuthContext from "../context/auth/auth.context";

export default function Contacts({
  match: {
    params: { layout },
  },
}) {

  const context = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const {contacts} = context;
  useEffect(() => {
      authContext.getUserInfo();
      context.loadContacts();
    // eslint-disable-next-line
  }, []);


 

  useEffect(() => {
    if(localStorage.contactAppToken){
      console.log(contacts);
    }
  }, [contacts])


  // const [lists] = useState([
  //   { _Id: 1, img: "", name: "Chellappan" },
  //   { _Id: 2, img: "", name: "Test" },
  //   { _Id: 3222, img: "", name: "Test1" },
  //   { _Id: 3, img: "", name: "Test1" },
  //   { _Id: 223, img: "", name: "Test1" },
  //   { _Id: 4, img: "", name: "Test1" },
  //   { _Id: 55, img: "", name: "Test1" },
  //   { _Id: 5, img: "", name: "Test1" },
  //   { _Id: 9, img: "", name: "Test1" },
  // ]);
  return (
    <Fragment>
      <div className="layouttype__row">
        <LayoutType />
      </div>
      <ul className="contacts">
        {contacts.map((contact) => (
          <Contact layoutType={layout} key={contact._id} />
        ))}
      </ul>
    </Fragment>
  );
}
