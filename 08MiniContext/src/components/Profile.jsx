import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h3>Please login first</h3>;
  } else {
    return <h3>Welcom user: {user.username}</h3>;
  }
}

export default Profile;
