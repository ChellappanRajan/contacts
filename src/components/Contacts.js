import React, { useState, Fragment } from "react";
import Contact from "./Contact";
import LayoutType from "./LayoutType";

export default function Contacts({
  match: {
    params: { layout },
  },
}) {
  const [lists] = useState([
    { _Id: 1, img: "", name: "Chellappan" },
    { _Id: 2, img: "", name: "Test" },
    { _Id: 3222, img: "", name: "Test1" },
    { _Id: 3, img: "", name: "Test1" },
    { _Id: 223, img: "", name: "Test1" },
    { _Id: 4, img: "", name: "Test1" },
    { _Id: 55, img: "", name: "Test1" },
    { _Id: 5, img: "", name: "Test1" },
    { _Id: 9, img: "", name: "Test1" },
  ]);
  return (
    <Fragment>
      <div className="layouttype__row">
        <LayoutType />
      </div>
      <ul className="contacts">
        {lists.map((list) => (
          <Contact layoutType={layout} key={list._Id} />
        ))}
      </ul>
    </Fragment>
  );
}
