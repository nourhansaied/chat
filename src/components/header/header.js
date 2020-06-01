import React from "react";
import "./header.scss";
const HeaderComponent = (props) => {
  return (
    <div className="header-section d-flex justify-content-between align-items-center">
      <p>Mom’s Discharge Plan</p>
      <div className="actions">
        <img src={"/group.png"} alt="" />
        <img src={"/filter.png"} alt="" />
        <img src={"/search.png"} alt="" />
      </div>
    </div>
  );
};

export default HeaderComponent;
