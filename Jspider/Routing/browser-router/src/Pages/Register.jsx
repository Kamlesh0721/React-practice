import React from "react";
import style from "./register.module.css";
import { useState } from "react";
const Register = () => {
  let [registerUser, setRegisterUser] = useState({
    username: " ",
    useremail: "",
    userpassword: "",
    userPhoneNo: "",
  });

  let RegisterHandle = (e) => {
    let { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  let registerSubmit = (e) => {
    e.preventDefault();
    console.log(registerUser);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            required
            placeholder="Enter Name"
            name="username"
            value={registerUser.username}
            onChange={RegisterHandle}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter Email"
            name="useremail"
            value={registerUser.useremail}
            onChange={RegisterHandle}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter Password"
            name="userPassword"
            value={registerUser.userpassword}
            onChange={RegisterHandle}
          />
        </div>
        <div>
          <label>Phone No</label>
          <input
            type="tel"
            min={10}
            max={10}
            required
            placeholder="Enter Phone no"
            name="userPhoneNo"
            value={registerUser.userPhoneNo}
            onChange={RegisterHandle}
          />
        </div>
        <div>
          <button onClick={registerSubmit}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
