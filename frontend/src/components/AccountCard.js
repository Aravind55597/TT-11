import React from "react";
import {Card, Button} from "antd";
import Table from "../components/Table.js";
function AccountCard({ account }) {
  console.log(account);
  return (
    <Card
      style={{
        marginTop: 16,
      }}
      type="inner"
      title={`AccountID: ${account.AccountID} [${account.AccountType}]`}
      extra={<a href="#">More</a>}
    >
      Balance: {account.AccountBalance}
      <Table></Table>
      <Button> Add Transaction </Button>
    </Card>
  );
}

export default AccountCard;
