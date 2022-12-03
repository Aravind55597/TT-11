import React from "react";
import { Card } from "antd";
import Table from "../components/Table.js";
function AccountCard({ account }) {
  console.log(account);
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
        <p>{`Account Type: ${account.AccountType}`}</p>
        <p>{`Account Balance: ${account.AccountBalance}`}</p>
      </div>
      <Table></Table>
    </Card>
  );
}

export default AccountCard;
