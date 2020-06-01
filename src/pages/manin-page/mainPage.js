import React from "react";
import "./mainPage.scss";
import MinHeader from "../../components/min-header/min-header";
import MainPages from "../../components/main-pages/main-pages";
import HeaderComponent from "../../components/header/header";
import ChatList from "../../containers/chat-list/chat-list";
const MainPage = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="aside">
            <MainPages />
          </div>
          <div className="conversations">
            <MinHeader />
            <ChatList />
          </div>
          <div className="conversation__data">
            <HeaderComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
