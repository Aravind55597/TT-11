import React, { useState } from "react";

import { Button, Card, Input } from "antd";
import "./TestHome.css";
import Search from "antd/es/transfer/search";

function ViewUserDetails(props) {
  const [changePassword, SetChangePassword] = useState(false);

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
          <div
            className="action_button"
            onClick={() => {
              SetChangePassword(true);
            }}
          >
            Change Password
          </div>
        </div>
        {changePassword ? (
          <div>
            <div className="line-container">
              <div
                className="action_button"
                onClick={() => {
                  SetChangePassword(true);
                }}
              >
                <Input
                  placeholder="Enter new Password"
                  onSearch={(value) => console.log(value)}
                  style={{ width: 200 }}
                />
                <Button
                  onClick={() => {
                    SetChangePassword(false);
                    console.log("Close");
                  }}
                >
                  Change
                </Button>
              </div>
              ;
            </div>
          </div>
        ) : (
          <br></br>
        )}
      </Card>
    </div>
  );
}

export default ViewUserDetails;
