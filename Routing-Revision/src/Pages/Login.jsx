import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginUser, setLoginUser] = useState({
    useremail: "",
    userpassword: "",
  });

  const [allRegistredUser, setAllRegistredUser] = useState(null);

  const handleLoginuser = (e) => {
    let { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  // Fetching Registered User from server
  useEffect(() => {
    async function fetchRegistredUser() {
      let { data } = await axios.get("http://localhost:5000/users");
      setAllRegistredUser(data);
      console.log(data);
    }
    fetchRegistredUser();
  }, []);

  const navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();
    let authUser = allRegistredUser?.find((user) => {
      return (
        user.useremail === loginUser.useremail &&
        user.userpassword === loginUser.userpassword
      );
    });

    console.log(authUser);

    const isAdmin = () => {
      if (
        authUser.useremail === "admin@gmail.com" &&
        authUser.userpassword === "admin123"
      ) {
        return true;
      } else {
        return false;
      }
    };

    if (isAdmin()) {
      toast.success(`Welcome `);
      localStorage.setItem("userID", authUser.id);
      navigate("/admin");
    } else if (authUser) {
      toast.success(`Welcome ${authUser.username}`);
      localStorage.setItem("userID", authUser.id);
      navigate("/profile");
    } else {
      toast.error("Access Denied");
      navigate("/register");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter Email"
            name="useremail"
            value={loginUser.useremail}
            onChange={handleLoginuser}
            autoComplete="email"
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
            autoComplete="current-password"
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
