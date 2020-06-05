import React from "react";
import "./main-pages.scss";
const MainPages = () => {
  return (
    <div className="total__icons">
      <div className="actions">
        <img src={"/logo.png"} alt="" />
        <img src={"/ico_conversation.png"} alt="" />
        <img className="img__size" src={"/profile.png"} alt="" />
        <img className="img__size" src={"/cog.png"} alt="" />
      </div>
      <div className="d-flex align-content-center justify-content-center logo">
        <img src={"/logout.png"} alt="" />
      </div>
    </div>
  );
};

export default MainPages;
