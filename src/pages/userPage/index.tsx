import React from "react";
import { Avatar } from "@mui/material";
import { useAuthContext } from "../../context/authContext";

const UserPage = () => {
  const { currentUser } = useAuthContext();
  return (
    <div className="user">
      <div className="user__container">
        <Avatar src="/broken-image.jpg" />
        <h1>{currentUser}</h1>
      </div>
    </div>
  );
};

export default UserPage;
