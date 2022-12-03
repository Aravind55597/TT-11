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
            <p>{defaultdetails.UserID}</p>
          </div>
        </div>

        <div className="line-container">
          <div className="text-container">
            <p>UserName: </p>
          </div>
          <div className="text-container">
            <p>{defaultdetails.Username}</p>
          </div>
        </div>

        <div className="line-container">
          <div className="text-container">
            <p>Password: </p>
          </div>
          <div className="text-container">
            <p>{"*".repeat(defaultdetails.Password.length)}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ViewUserDetails;