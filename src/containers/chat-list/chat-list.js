import React from "react";
import "./chat-list.scss";
import PreviewConversationItem from "../../components/preview-conversation-chat/preview-conversation-chat";
const data = [
  {
    img: "../../images/sk.png",
    name: "Mom’s Discharge Plan",
    nickname: "Karen Becker",
    descript: "Sed mollis mi iaculis tincidu...",
  },
  {
    // img: "sk.png",
    name: "Mom’s Diet",
    nickname: "Karen Becker",
    descript: "Sed mollis mi iaculis tincidu...",
    notify: 2,
  },
  {
    // img: "sk.png",
    name: "asdas",
    descript: "asdasd",
  },
  {
    // img: "sk.png",
    name: "Stephanie Kim",
    nickname: "asdasd",
    descript: "asdasd",
  },
];

const ChatList = (prop) => {
  return (
    <>
      {data.map((item) => {
        return <PreviewConversationItem name={item.name} />;
      })}
    </>
  );
};

export default ChatList;
