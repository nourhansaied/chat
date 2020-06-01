import React from "react";
import Media from "react-bootstrap/Media";

import "./preview-conversation-chat.scss";

const PreviewConversationItem = (props) => {
  return (
    <Media>
      <img
        width={45}
        height={45}
        className="mr-3 image__chat"
        alt="jkh"
        src={props.convImg}
      />

      <Media.Body>
        <h5 className="title">{props.name}</h5>
        {props.nickname ? <p className="sub_title">{props.nickname}</p> : null}
        <p className="desc">{props.descript}</p>
      </Media.Body>
    </Media>
  );
};

export default PreviewConversationItem;
