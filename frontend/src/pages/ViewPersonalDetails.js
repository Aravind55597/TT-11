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
      <p align="left">UserId: {defaultdetails.Firstname}</p>
      <p align="left">UserName: {defaultdetails.Lastname}</p>
      <p align="left">UserName: {defaultdetails.Email}</p>
      <p align="left">UserName: {defaultdetails.Address}</p>
    </Card>
  );
}

export default ViewPersonalDetails;
