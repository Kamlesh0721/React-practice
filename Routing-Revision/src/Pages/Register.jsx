import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  let [registerUser, setRegisterUser] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    userPhoneNo: "",
  });

  let registerHandle = (e) => {
    console.log(e.target);
    let { name, value } = e.target;
    console.log(name, value);

    setRegisterUser({ ...registerUser, [name]: value });
  };

  let navigate = useNavigate();
  console.log(navigate);
  console.log(useNavigate);

  let registerSubmit = (e) => {
    e.preventDefault();
    console.log(registerUser);
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="username">Name </label>
          <input
            type="text"
            required
            placeholder="Enter you name"
            name="username"
            id="username"
            value={registerUser.username}
            onChange={registerHandle}
          />
          <label htmlFor="useremail">Email </label>
          <input
            type="email"
            required
            placeholder="Enter you Email Id"
            name="useremail"
            id="useremail"
            value={registerUser.useremail}
            onChange={registerHandle}
          />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            required
            placeholder="Enter your Password"
            name="userpassword"
            id="userpassword"
            value={registerUser.userpassword}
            onChange={registerHandle}
          />
          <label htmlFor="userPhoneNo">Phone No. </label>
          <input
            type="tel"
            required
            placeholder="Enter Phone No."
            name="userPhoneNo"
            id="userPhoneNo"
            value={registerUser.userPhoneNo}
            onChange={registerHandle}
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
