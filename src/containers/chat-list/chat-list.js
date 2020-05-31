import React from "react";
import "./chat-list.scss";
import PreviewConversationItem from "../../components/preview-conversation-chat/preview-conversation-chat";
const data = [
  {
    conImg: "../../images/4.png",
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
    nickname: "tested Becker",
    descript: "asdasd",
  },
  {
    // img: "sk.png",
    name: "Stephanie Kim",
    nickname: "asdasd",
    descript: "asdasd",
  },
  {
    conImg: "3.png",
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
    nickname: "tested Becker",
    descript: "asdasd",
  },
  {
    // img: "sk.png",
    name: "Stephanie Kim",
    nickname: "asdasd",
    descript: "asdasd",
  },
  {
    conImg: "3.png",
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
    nickname: "tested Becker",
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
      {data.map((item, i) => {
        return (
          <PreviewConversationItem
            key={i}
            name={item.name}
            descript={item.descript}
            nickname={item.nickname}
            convImg={item.conImg}
            notify={item.notify}
          />
        );
      })}
    </>
  );
};

export default ChatList;
