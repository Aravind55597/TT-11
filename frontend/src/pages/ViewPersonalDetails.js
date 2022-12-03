import React from "react";

import { Card } from "antd";
import "./TestHome.css";

function ViewPersonalDetails(props) {
  const defaultdetails = {
    UserID: "1",
    Username: "qwer",
    Password: "monkeyisthebest",
    Firstname: "first",
    Lastname: "last",
    Email: "asd@a.com",
    Address: "123 street",
  };

  return (
    <Card
      title="PersonalDetails"
      bordered
      style={{
        width: 500,
        border: "2px solid black",
        justifyContent: "flex-start",
      }}
    >
      <div className="line-container">
        <div className="text-container">
          <p>First Name: </p>
        </div>
        <div className="text-container">
          <p>{props.Firstname}</p>
        </div>
        <div className="empty_action"> </div>
      </div>

      <div className="line-container">
        <div className="text-container">
          <p>Last Name: </p>
        </div>
        <div className="text-container">
          <p>{props.Lastname}</p>
        </div>
        <div className="empty_action"> </div>
      </div>

      <div className="line-container">
        <div className="text-container">
          <p>Email: </p>
        </div>
        <div className="text-container">
          <p>{props.Email}</p>
        </div>
        <div className="action_button">Change/Delete Email</div>
      </div>

      <div className="line-container">
        <div className="text-container">
          <p>Address: </p>
        </div>
        <div className="text-container">
          <p>{props.Address}</p>
        </div>
        <div className="action_button">Change/Remove Address</div>
      </div>
    </Card>
  );
}

export default ViewPersonalDetails;
