import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  let userID = localStorage.getItem("userID");
  let [profileUser, setProfileUser] = useState(null);
  let [APIUsers, setAPIUsers] = useState(null);
  const navigate = useNavigate();
  console.log(profileUser?.username);
  console.log(profileUser?.userpassword);

  // when clicking on profile from admin page it was opening user profile and also when updating value of admin
  if (
    profileUser?.useremail === "admin@gmail.com" &&
    profileUser?.userpassword === "admin123"
  ) {
    navigate("/admin");
  }

  useEffect(() => {
    async function fetchAuthUser() {
      let { data } = await axios.get(`http://localhost:5000/users/${userID}`);
      setProfileUser(data);
      console.log(data);
    }
    fetchAuthUser();
  }, []);

  useEffect(() => {
    async function fetchAPIUsers() {
      let { data } = await axios.get("https://api.github.com/users");
      setAPIUsers(data);
    }
    fetchAPIUsers();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <div>
        <h2>Welcome {profileUser?.username}</h2>
        {APIUsers?.map((user) => {
          let { login, avatar_url, html_url, type, id } = user;
          return (
            <section key={id}>
              <img src={avatar_url} height={100} width={100} />
              <div>
                <h1>{login}</h1>

                <p>Type: {type}</p>
                <p>
                  <a href={html_url}>view more</a>
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};
export default Profile;
