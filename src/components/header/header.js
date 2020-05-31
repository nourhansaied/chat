import React from "react";
import "./header.scss";
const HeaderComponent = (props) => {
  return (
    <div className="header-section d-flex justify-content-between align-items-center">
      <p>Mom’s Discharge Plan</p>
      <div className="actions">
        <img src={require("../../images/group.png")} alt="" />
        <img src={require("../../images/filter.png")} alt="" />
        <img src={require("../../images/search.png")} alt="" />
      </div>
    </div>
  );
};

export default HeaderComponent;
