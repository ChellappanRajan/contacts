import React from "react";

export default function CreateContact() {
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
              name="phone"
            />
            <div className="form-control grouped-select">
              <select id="type">
                <option value="mobile">Mob</option>
                <option value="landline">Land</option>
              </select>
            </div>
          </div>
        </div>
      <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
