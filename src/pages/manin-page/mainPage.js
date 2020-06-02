import React from "react";
import "./mainPage.scss";
import MinHeader from "../../components/min-header/min-header";
import MainPages from "../../components/main-pages/main-pages";
import HeaderComponent from "../../components/header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Converstion from "../../components/coversations/conversation";
import ChatList from "../../containers/chat-list/chat-list";
const MainPage = () => {
  return (
    <div className="content">
      <Container>
        <Row>
          <div className="aside">
            <MainPages />
          </div>
          <div className="conversations ">
            <MinHeader />
            <div className="conversition__container">
              <ChatList />
            </div>
          </div>
          <div className="conversation__data">
            <HeaderComponent />
            <Converstion />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
