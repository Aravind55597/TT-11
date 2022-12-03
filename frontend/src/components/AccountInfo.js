import React from "react";
import { Card } from "antd";
import AccountCard from "./AccountCard";
import data from "../data/BankAccount.json";
import userData from "../data/User.json";

function AccountInfo() {
  const UserAccounts = data.filter((account) => account.UserID === 1);
  const Username = userData.filter((user) => user.UserID === 1)[0].Username;

  return (
    <Card title={Username}>
      {UserAccounts.length &&
        UserAccounts.map((account, index) => (
          <AccountCard key={index} account={account} />
        ))}
    </Card>
  );
}

export default AccountInfo;
