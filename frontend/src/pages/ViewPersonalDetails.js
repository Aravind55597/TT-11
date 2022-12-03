import React from "react";

import { Card } from "antd";

function ViewPersonalDetails() {
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
    <div
      style={{
        display: "block",
        width: "100vh",
        padding: 30,
      }}
    >
      <>
        <Card
          title="PersonalDetails"
          bordered
          style={{
            width: 500,
            border: "2px solid black",
            justifyContent: "flex-start",
          }}
        >
          <p>UserId: {defaultdetails.Firstname}</p>
          <p>UserName: {defaultdetails.Lastname}</p>
          <p>UserName: {defaultdetails.Email}</p>
          <p>UserName: {defaultdetails.Address}</p>
        </Card>
      </>
    </div>
  );
}

export default ViewPersonalDetails;
