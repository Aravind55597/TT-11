import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { Space, Typography } from "antd";
import Table from "../components/Table.js";
import axios from "axios";
import hosturl from "../hosturl.js";
import { useAuth } from "../contexts/authContext.js";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal.js";

const { Text } = Typography;

function AccountCard({ account }) {
  const navigate = useNavigate();
  const [accountDetails, setAccountDetails] = useState({});

  const auth = useAuth();

  useEffect(() => {
    if (auth.user === null) {
      navigate("/login");
    } else {
      var config = {};
      const bearer_token = `Bearer ${auth.user.token}`;
      config = {
        headers: {
          Authorization: bearer_token,
        },
      };

      const formData = {
        AccountID: account.AccountID,
      };
      fetchTransaction(formData);
    }

    async function fetchTransaction(userData) {
      try {
        const AccountID = userData.AccountID;
        const response = await axios.get(
          hosturl + `/transaction/` + AccountID,
          config
        );
        const data = response.data.data;
        setAccountDetails(data);
        return data;
      } catch (error) {
        console.error(error.response.data);
      }
    }
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
