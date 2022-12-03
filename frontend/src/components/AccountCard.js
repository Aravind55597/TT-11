import React from "react";
import { Card, Button } from "antd";
import { Space, Typography } from "antd";
import Table from "../components/Table.js";

const { Text, Link } = Typography;

function AccountCard({ account }) {
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
        <Text italic>{`Account Balance: $${account.AccountBalance}`}</Text>
      </div>
      <Table></Table>
      <Button> Add Transaction </Button>
    </Card>
  );
}

export default AccountCard;
