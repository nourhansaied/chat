import React from "react";
import "./main-pages.scss";
const MainPages = () => {
  return (
    <div className="total__icons">
      <div className="actions">
        <img src={require("../../images/logo.png")} alt="" />
        <img src={require("../../images/ico_conversation.png")} alt="" />
        <img
          className="img__size"
          src={require("../../images/profile.png")}
          alt=""
        />
        <img
          className="img__size"
          src={require("../../images/cog.png")}
          alt=""
        />
      </div>
      <div className="d-flex align-content-center justify-content-center">
        <img src={require("../../images/logout.png")} alt="" />
      </div>
    </div>
  );
};

export default MainPages;
