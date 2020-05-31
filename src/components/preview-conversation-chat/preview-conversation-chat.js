import React from "react";
import Media from "react-bootstrap/Media";

import "./preview-conversation-chat.scss";

const PreviewConversationItem = (props) => {
  return (
    <Media>
      {/* <img
        width={64}
        height={64}
        className="mr-3"
        alt="jkh"
        src={require("../../images/${props.convImg}")}
      /> */}
      <div
        className="bgImg"
        style={{
          background: `center / cover no-repeat url('../../images/${props.convImg}') `,
        }}
      ></div>

      <Media.Body>
        <h5 className="title">{props.name}</h5>
        {props.nickname ? <p className="sub_title">{props.nickname}</p> : null}
        <p className="desc">{props.descript}</p>
      </Media.Body>
    </Media>
  );
};

export default PreviewConversationItem;
