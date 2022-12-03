import React from "react";
import { Card } from "antd";
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
    </Card>
  );
}

export default AccountCard;
