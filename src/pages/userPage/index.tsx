import React from "react";
import { useAuthContext } from "../../context/authContext";
import "./style.css";
import UserAvatar from "../../img/user-avatar.svg";

const UserPage = () => {
  const { currentUser } = useAuthContext();
  return (
    <div className="user">
      <div className="user__container">
        <div className="user__window">
          <img className="user__avatar" src={UserAvatar} alt="avatar" />
          <h1 className="user__name">{currentUser}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
