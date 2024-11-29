import axios from "axios";
import { useEffect, useState } from "react";
const Admin = () => {
  let [allUsers, setAllUsers] = useState(null);
  useEffect(() => {
    async function fetchRegistredUser() {
      let { data } = await axios.get("http://localhost:5000/users");
      console.log(data);
      setAllUsers(data);
    }
    fetchRegistredUser();
  }, []);
  return (
    <>
      <h1>Admin Page</h1>
      {allUsers?.map(({id,username,useremail,userpassword,userPhoneNo})=>{
        return (
          <section key={id}>
            <h1>Name: {username}</h1>
            <p>Email : {useremail}</p>
            <p>Password : {userpassword}</p>
            <p>UserPhone NO: {userPhoneNo}</p>
            <button>Update</button>
            <button>Delete</button>
          </section>
        )
      });};
    </>
  );
};
export default Admin;
