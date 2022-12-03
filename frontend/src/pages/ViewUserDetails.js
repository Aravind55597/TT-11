import React from "react";

import { Card } from "antd";

function ViewUserDetails() {
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
          title="User Details"
          bordered
          style={{
            width: 500,
            border: "2px solid black",
            "justify-content": "flex-start",
          }}
        >
          <p>UserId: {defaultdetails.UserID}</p>
          <p>UserName: {defaultdetails.Username}</p>
          <p>Password: {"*".repeat(defaultdetails.Password.length)}</p>
        </Card>
      </>
    </div>
  );
}

export default ViewUserDetails;
