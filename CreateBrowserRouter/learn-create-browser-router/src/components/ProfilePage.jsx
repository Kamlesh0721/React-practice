import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { profileId } = useParams();
  console.log(profileId);

  return (
    <div>
      <h1>ProfilePage</h1>
      <h2>Person {`${profileId}`}</h2>
    </div>
  );
}

export default ProfilePage;
