import { useState } from "react";
import style from "./login.module.css";

const Login = () => {
  let [loginUser, setLoginUser] = useState({
    useremail: "",
    userpassword: "",
  });
  let handleLoginuser = (e) => {
    let { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  let loginSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser);
  };
  return (
    <div id={style.login}>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter Email"
            name="useremail"
            value={loginUser.useremail}
            onChange={handleLoginuser}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter Password"
            name="userpassword"
            value={loginUser.userpassword}
            onChange={handleLoginuser}
          />
        </div>

        <div>
          <button onClick={loginSubmit}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
