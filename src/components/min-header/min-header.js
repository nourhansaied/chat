import React from "react";
import "./min-header.scss";
const MinHeader = () => {
  return (
    <div className="min__header">
      <p>Conversations</p>
      <img src={require("../../images/new_conversation.png")} />
    </div>
  );
};

export default MinHeader;
