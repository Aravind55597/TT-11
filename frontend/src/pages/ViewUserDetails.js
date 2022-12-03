import React, { useState } from "react";

import { Button, Card, Input } from "antd";
import "./TestHome.css";
import Search from "antd/es/transfer/search";

function ViewUserDetails(props) {
  const [changePassword, SetChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const ChangePassword = (event) => {
    setNewPassword(event.target.value);
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
          <div
            className="action_button"
            onClick={() => {
              console.log("HIHIHI");
              SetChangePassword(true);
            }}
            type="button"
          >
            Change Password
          </div>
        </div>

        <div>
          <div className="line-container"></div>
        </div>
        {changePassword ? (
          <>
            <Input
              placeholder="Enter new Password"
              onSearch={(value) => console.log(value)}
              style={{ width: 200 }}
              onChange={ChangePassword}
              value={newPassword}
            />

            <Button
              onClick={() => {
                SetChangePassword(false);
                console.log("New Password:", newPassword);
                setNewPassword("");
              }}
            >
              Change
            </Button>
          </>
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
}

export default ViewUserDetails;
