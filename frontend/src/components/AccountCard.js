import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { Space, Typography } from "antd";
import Table from "../components/Table.js";
import axios from "axios";
import hosturl from "../hosturl.js";
import Modal from "../components/Modal.js"

const { Text } = Typography;

function AccountCard({ account }) {
  const [accountDetails, setAccountDetails] = useState({});

  useEffect(() => {
    async function fetchTransaction(userData) {
      try {
        const AccountID = userData.AccountID;
        const response = await axios.get(hosturl + `/transaction/` + AccountID);
        const data = response.data.data;
        setAccountDetails(data);
        return data;
      } catch (error) {
        console.error(error.response.data);
      }
    }
    const formData = {
      AccountID: account.AccountID,
    };
    fetchTransaction(formData);
  }, [account]);

  return (
    <Card
      style={{
        marginTop: 16,
      }}
      type="inner"
      title={`AccountID: ${account.AccountID}`}
      extra={<a href="#">More</a>}
    >
      <div className="d-flex">
        <Text
          strong
          className="me-3"
        >{`Account Type: ${account.AccountType}`}</Text>

        <Text italic>{`Account Balance: ${account.AccountBalance}`}</Text>
      </div>
      <Table></Table>
      <Button> Add Transaction </Button>
    </Card>
  );
}

export default AccountCard;
