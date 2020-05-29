import React from "react";
import Media from "react-bootstrap/Media";

import "./preview-conversation-chat.scss";
const PreviewConversationItem = (props) => {
  return (
    <Media>
      {props.img}
      <img
        width={64}
        height={64}
        className="mr-3"
        // src={require(`${props.img}`)}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{props.name}</h5>
        <p>{props.nickname}</p>
      </Media.Body>
    </Media>
  );
};

export default PreviewConversationItem;
