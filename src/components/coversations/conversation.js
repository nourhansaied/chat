import React from "react";
import "./converstion.scss";

const Converstion = (props) => {
  return (
    <div className="container">
      <p className="title__section">
        Starter Care Plan created + daily actions added
      </p>
      <div className="row sender">
        <div className="sinder">
          <p>Daily grooming assistance</p>
          <div className="time">
            <img src="/timer.png" alt="asd" />
            <div className="time__content">
              <p>Dec</p>
              <p>1 Daily</p>
            </div>
          </div>

          <p className="assist__title">
            assist with daily grooming activities such as bathing, teeth, hair
          </p>
          <div className="status">
            <div className="right__sign">
              <img src="/right.png" alt="right option" />
              Done
            </div>
            <div className="auth">
              <div className="auth_data">
                <p>Derek Smith completed</p>
                <p>Mar 23 3:23p</p>
              </div>
              <img src="/sk.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converstion;
