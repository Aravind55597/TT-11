import React from "react";

import { Card } from "antd";
import "./TestHome.css";

function ViewUserDetails(props) {
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
    <div className="card-container ">
      <Card
        title="User Details"
        bordered
        style={{
          width: 500,
          border: "2px solid black",
          justifyContent: "flex-start",
        }}
      >
        <div className="line-container">
          <div className="text-container">
            <p>UserId: </p>
          </div>
          <div className="text-container">
            <p>{props.userid}</p>
          </div>
          <div className="empty_action"> </div>
        </div>

        <div className="line-container">
          <div className="text-container">
            <p>UserName: </p>
          </div>
          <div className="text-container">
            <p>{props.username}</p>
          </div>
          <div className="empty_action"> </div>
        </div>

        <div className="line-container">
          <div className="text-container">
            <p>Password: </p>
          </div>
          <div className="text-container">
            <p>{"*".repeat(props.password.length)}</p>
          </div>
          <div className="action_button">Change Password</div>
        </div>
      </Card>
    </div>
  );
}

export default ViewUserDetails;
