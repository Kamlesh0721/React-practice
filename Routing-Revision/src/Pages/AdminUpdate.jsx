import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const AdminUpdate = () => {
  let [updatedUser, setUpdatedUser] = useState(null);

  let { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserDetail() {
      const { data } = await axios.get(`http://localhost:5000/users/${id}`);
      console.log(data);
      setUpdatedUser(data);
    }
    fetchUserDetail();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/users/${id}`, updatedUser)
      .then(() => {
        toast.success("User Updated");
        navigate("/admin");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };
  return (
    <>
      <h1>Admin Update</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name </label>
          <input
            type="text"
            required
            placeholder="Enter you name"
            name="username"
            id="username"
            value={updatedUser?.username}
            onChange={handleChange}
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
            value={updatedUser?.useremail}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="userpassword">Password </label>
          <input
            type="password"
            required
            placeholder="Enter your Password"
            name="userpassword"
            id="userpassword"
            value={updatedUser?.userpassword}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="userPhoneNo">Phone No. </label>
          <input
            type="tel"
            placeholder="Enter Phone No."
            name="userPhoneNo"
            id="userPhoneNo"
            value={updatedUser?.userPhoneNo}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default AdminUpdate;
