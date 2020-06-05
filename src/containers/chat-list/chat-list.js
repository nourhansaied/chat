import React from "react";
import "./chat-list.scss";
import PreviewConversationItem from "../../components/preview-conversation-chat/preview-conversation-chat";
const data = [
  {
    conImg: "sk.png",
    name: "Mom’s Discharge Plan",
    nickname: "Karen Becker",
    descript: "Sed mollis mi iaculis tincidu...",
  },
  {
    conImg: "sk.png",
    name: "Mom’s Diet",
    nickname: "Karen Becker",
    descript: "Sed mollis mi iaculis tincidu...",
    notify: 2,
    date: "Oct 12",
  },
  {
    conImg: "sk.png",
    name: "asdas",
    nickname: "tested Becker",
    descript: "asdasd",
    date: "Oct 19",
  },
  {
    conImg: "sk.png",
    name: "Stephanie Kim",
    nickname: "asdasd",
    descript: "asdasd",
    date: "Oct 1",
  },
  {
    conImg: "sk.png",
    name: "Mom’s Discharge Plan",
    nickname: "Karen Becker",
    descript: "Sed mollis mi iaculis tincidu...",
  },
  {
    conImg: "sk.png",
    name: "Mom’s Diet",
    nickname: "Karen Becker",
    descript: "Sed mollis mi iaculis tincidu...",
    notify: 2,
  },
  {
    conImg: "sk.png",
    name: "asdas",
    nickname: "tested Becker",
    descript: "asdasd",
  },
  {
    conImg: "sk.png",
    name: "Stephanie Kim",
    nickname: "asdasd",
    descript: "asdasd",
  },
  {
    conImg: "sk.png",
    name: "Mom’s Discharge Plan",
    nickname: "Karen Becker",
    descript: "Sed mollis mi iaculis tincidu...",
  },
  {
    conImg: "sk.png",
    name: "Mom’s Diet",
    nickname: "Karen Becker",
    descript: "Sed mollis mi iaculis tincidu...",
    notify: 2,
  },
  {
    conImg: "sk.png",
    name: "asdas",
    nickname: "tested Becker",
    descript: "asdasd",
  },
  {
    conImg: "sk.png",
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
            date={item.date}
          />
        );
      })}
    </>
  );
};

export default ChatList;
