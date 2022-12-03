import React, { useState } from "react";
import { Modal } from "antd";
import { Card } from "antd";
import "./TestHome.css";

function ViewPersonalDetails(props) {
  const [emailOpen, setEmailOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const showEmailModal = () => {
    setEmailOpen(true);
  };
  const handleEmailOk = () => {
    setEmailOpen(false);
  };
  const handleEmailCancel = () => {
    setEmailOpen(false);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setNewEmail(email);
  };

  const [emailDeleteOpen, setEmailDeleteOpen] = useState(false);
  const showEmailDeleteModal = () => {
    setEmailDeleteOpen(true);
  };
  const handleEmailDeleteOk = () => {
    setEmailDeleteOpen(false);
  };
  const handleEmailDeleteCancel = () => {
    setEmailDeleteOpen(false);
  };

  const [addressOpen, setAddressOpen] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const showAddressModal = () => {
    setAddressOpen(true);
  };
  const handleAddressOk = () => {
    setAddressOpen(false);
  };
  const handleAddressCancel = () => {
    setAddressOpen(false);
  };

  const onChangeAddress = (e) => {
    const add = e.target.value;
    setNewAddress(add);
  };

  const [addressDeleteOpen, setAddressDeleteOpen] = useState(false);
  const showAddressDeleteModal = () => {
    setAddressDeleteOpen(true);
  };
  const handleAddressDeleteOk = () => {
    setAddressDeleteOpen(false);
  };
  const handleAddressDeleteCancel = () => {
    setAddressDeleteOpen(false);
  };
  return (
    <div>
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
          <div className="action_button" onClick={showEmailModal}>
            Change
          </div>
          <div className="action_button" onClick={showEmailDeleteModal}>
            Delete
          </div>
        </div>

        <div className="line-container">
          <div className="text-container">
            <p>Address: </p>
          </div>
          <div className="text-container">
            <p>{props.Address}</p>
          </div>
          <div className="action_button" onClick={showAddressModal}>
            Change
          </div>

          <div className="action_button" onClick={showAddressDeleteModal}>
            Delete
          </div>
        </div>
      </Card>
      <Modal
        title="Change Email"
        open={emailOpen}
        onOk={handleEmailOk}
        onCancel={handleEmailCancel}
      >
        <input
          placeholder="Type New Email"
          value={newEmail}
          onChange={onChangeEmail}
        ></input>
      </Modal>
      <Modal
        title="Delete Email"
        open={emailDeleteOpen}
        onOk={handleEmailDeleteOk}
        onCancel={handleEmailDeleteCancel}
      >
        <p>Confirm Delete Address?</p>
      </Modal>
      <Modal
        title="Change Address"
        open={addressOpen}
        onOk={handleAddressOk}
        onCancel={handleAddressCancel}
      >
        <input
          placeholder="Type New Address"
          value={newAddress}
          onChange={onChangeAddress}
        ></input>
      </Modal>
      <Modal
        title="Delete Address"
        open={addressDeleteOpen}
        onOk={handleAddressDeleteOk}
        onCancel={handleAddressDeleteCancel}
      >
        <p>Confirm Delete Address?</p>
      </Modal>
    </div>
  );
}

export default ViewPersonalDetails;
