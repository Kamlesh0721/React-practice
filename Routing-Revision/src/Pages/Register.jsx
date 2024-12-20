import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    userPhoneNo: "",
  });

  const registerHandle = (e) => {
    let { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const navigate = useNavigate();

  const registerSubmit = (e) => {
    e.preventDefault();
    console.log(registerUser);
    axios
      .post("http://localhost:5000/users", registerUser)
      .then(() => {
        toast.success("Registration Successful");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Registration Failed !");
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerSubmit}>
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
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="useremail">Email </label>
          <input
            type="email"
            required
            placeholder="Enter you Email Id"
            name="useremail"
            id="useremail"
            value={registerUser.useremail}
            onChange={registerHandle}
            autoComplete="email"
          />{" "}
        </div>
        <div>
          <label htmlFor="userpassword">Password </label>
          <input
            type="password"
            required
            placeholder="Enter your Password"
            name="userpassword"
            id="userpassword"
            value={registerUser.userpassword}
            onChange={registerHandle}
            autoComplete="current-password"
          />{" "}
        </div>
        <div>
          <label htmlFor="userPhoneNo">Phone No. </label>
          <input
            type="tel"
            required
            placeholder="Enter Phone No."
            name="userPhoneNo"
            id="userPhoneNo"
            value={registerUser.userPhoneNo}
            onChange={registerHandle}
            autoComplete="tel"
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
