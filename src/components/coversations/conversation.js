import React from "react";
import "./converstion.scss";

const Converstion = (props) => {
  return (
    <>
      <div className="container">
        <p className="title__section bold">
          Starter Care Plan created + daily actions added
        </p>
        <div className="message__conainer handle__spaces">
          <div className="row sender">
            <div className="sinder">
              <p className="bold">Daily grooming assistance</p>
              <div className="time">
                <img src="/time_copy.png" alt="asd" />
                <div className="time__content">
                  <p>Dec</p>
                  <p>1 Daily</p>
                </div>
              </div>

              <p className="assist__title">
                assist with daily grooming activities such as bathing, teeth,
                hair
              </p>
              <div className="status">
                <div className="right__sign">
                  <img src="/right.png" alt="right option" />
                  Done
                </div>
                <div className="auth">
                  <div className="auth_data">
                    <p className="italic">Derek Smith completed</p>
                    <p className="italic">Mar 23 3:23p</p>
                  </div>
                  <img src="/sk.png" alt="" />
                </div>
              </div>
              <div className="info sender">
                <p>me</p>
                <p className="sender_info">
                  <span>12:20p</span>
                  <img src="/sk.png" alt="sender" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="message__conainer">
          <div className="row reciever">
            <div className="recieve">
              <p className="recieve__title bold">Chest Pain</p>
              <div className="time">
                <img src="/time_copy.png" alt="asd" />
                <div className="time__content">
                  <p>FRI Oct 12 4:27 PM</p>
                  <p>kbecker@gmail.com completed - THU Oct 11 3:29 PM</p>
                </div>
              </div>

              <p>
                <img src="/sad_img.png" alt="sad invalid name" />
                <div className="serve">
                  <p>Severe</p>
                  <p>
                    <img src="/history.png" alt="history" />
                    <span className="bold">View History</span>
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="message__conainer">
          <div className="row reciever_second">
            <div className="recieve">
              <p className="recieve__title">
                I moved Karen’s knitting kit from the study upstairs to the the
                living room.
              </p>
            </div>
          </div>
          <div className="info reciver">
            <p className="sender_info">
              <img src="/sk.png" alt="sender" />
              <span>12:20p</span>
            </p>
            <p>me</p>
          </div>
        </div>
        <div className="message__conainer">
          <div className="row sender_second">
            <p className="sender__title">
              That’s a good call. I’ll be stopping by later to have dinner with
              her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas a lorem enim. Praesent
              accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros
              dignissim tincidunt. Morbi id tortor egestas, feugiat massa
              viverra, posuere nisl.
            </p>
          </div>
          <div className="info sender">
            <p>me</p>
            <p className="sender_info">
              <span>12:20p</span>
              <img src="/sk.png" alt="sender" />
            </p>
          </div>
        </div>
      </div>
      <div className="wrap-message">
        <div className="addd_message">
          <img src="/plus.png" alt="add" />
        </div>
        <div className="message">
          <input
            type="text"
            className="input-message form-control"
            placeholder="message"
          />
        </div>
      </div>
    </>
  );
};

export default Converstion;
