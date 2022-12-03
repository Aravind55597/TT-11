import React, { useEffect, useState } from "react";
import { Card } from "antd";
import AccountCard from "./AccountCard";
import data from "../data/BankAccount.json";
import userData from "../data/User.json";
import { getAccountDetails } from "../routes/account.js";

function AccountInfo() {
  const [userAccounts, setUserAccounts] = useState({});
  const UserAccounts = data.filter((account) => account.UserID === 1);
  useEffect(() => {
    setUserAccounts(getAccountDetails());
  }, []);

  const Username = userData.filter((user) => user.UserID === 1)[0].Username;
  console.log(userAccounts);
  return (
    <Card title={Username}>
      {UserAccounts.length &&
        UserAccounts.map((account) => <AccountCard account={account} />)}
    </Card>
  );
}

export default AccountInfo;
