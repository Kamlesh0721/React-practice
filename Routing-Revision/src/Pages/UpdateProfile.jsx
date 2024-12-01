import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  let userID = localStorage.getItem("userID");

  let [userDetails, setUserDetails] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      let { data } = await axios.get(`http://localhost:5001/users/${userID}`);
      console.log(data);
      setUserDetails(data);
    }
    fetchUser();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const updateFormSubmit = (e) => {
    e.preventDefault();
    console.log("Updated value ", userDetails);
    axios
      .put(`http://localhost:5001/users/${userID}`, userDetails)
      .then(() => {
        toast.success("Profile Updated");
        navigate("/profile");
      })
      .catch(() => {
        toast.error("Failed !!! Try again");
      });
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={updateFormSubmit}>
        <div>
          <label htmlFor="username">Name </label>
          <input
            type="text"
            readOnly
            placeholder="Enter you name"
            name="username"
            id="username"
            value={userDetails?.username}
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
            value={userDetails?.useremail}
            onChange={handleChange}
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
            value={userDetails?.userpassword}
            onChange={handleChange}
            autoComplete="current-password"
          />{" "}
        </div>
        <div>
          <label htmlFor="userPhoneNo">Phone No. </label>
          <input
            type="tel"
            readOnly
            placeholder="Enter Phone No."
            name="userPhoneNo"
            id="userPhoneNo"
            value={userDetails?.userPhoneNo}
            autoComplete="tel"
          />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};
export default UpdateProfile;
