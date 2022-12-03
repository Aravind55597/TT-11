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
      }}
    >
      <div className="line-container">
        <div className="text-container">
          <p>First Name: </p>
        </div>
        <div className="text-container">
          <p>{defaultdetails.Firstname}</p>
        </div>
      </div>

      <div className="line-container">
        <div className="text-container">
          <p>Last Name: </p>
        </div>
        <div className="text-container">
          <p>{defaultdetails.Lastname}</p>
        </div>
      </div>

      <div className="line-container">
        <div className="text-container">
          <p>Email: </p>
        </div>
        <div className="text-container">
          <p>{defaultdetails.Email}</p>
        </div>
      </div>

      <div className="line-container">
        <div className="text-container">
          <p>Address: </p>
        </div>
        <div className="text-container">
          <p>{defaultdetails.Address}</p>
        </div>
      </div>
    </Card>
  );
}

export default ViewPersonalDetails;
