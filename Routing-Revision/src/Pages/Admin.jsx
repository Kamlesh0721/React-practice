import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Admin = () => {
  let [allUsers, setAllUsers] = useState(null);
  let [toggle, setToggle] = useState(null);
  useEffect(() => {
    async function fetchAllUser() {
      let { data } = await axios.get("http://localhost:5000/users");
      console.log(data);

      setAllUsers(data);
    }
    fetchAllUser();
  }, [toggle]);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        toast.success("User Deleted");
        setToggle(!toggle);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };
  return (
    <div>
      <h1>Admin Page</h1>
      {allUsers?.map(
        ({ id, username, useremail, userpassword, userPhoneNo }) => {
          if (id === localStorage.getItem("userID")) return null;
          return (
            <section key={id}>
              <h1>Name : {username}</h1>
              <p>User Email : {useremail}</p>
              <p>user Password : {userpassword}</p>
              <p>userPhoneNo : {userPhoneNo}</p>
              <button>
                <Link to={`/adminUpdate/${id}`}>Update</Link>
              </button>
              <button
                onClick={() => {
                  deleteUser(id);
                }}
              >
                Delete
              </button>
            </section>
          );
        }
      )}
    </div>
  );
};
export default Admin;
