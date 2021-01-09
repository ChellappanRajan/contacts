import React from "react";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <div className="form-control">
          <label htmlFor="email">Name</label>
          <input
            placeholder="Email"
            className="text-control rounded-radius"
            id="email"
            type="email"
            name="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            className="text-control rounded-radius"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
