import React, { useEffect, useState } from "react";
import { Card } from "antd";
import AccountCard from "./AccountCard";
import data from "../data/BankAccount.json";
import userData from "../data/User.json";
import axios from "axios";
import hosturl from "../hosturl.js";

function AccountInfo() {
  const UserAccounts = data.filter((account) => account.UserID === 1);
  const Username = userData.filter((user) => user.UserID === 1)[0].Username;
  const [userAccounts, setUserAccounts] = useState({});
  useEffect(() => {
    async function getAccountDetails(userData) {
      try {
        const userID = userData.userID;
        const response = await axios.get(hosturl + `/account/` + userID);
        const data = response.data.data;
        setUserAccounts(data);
        return data;
      } catch (error) {
        console.error(error.response.data);
      }
    }
    const formData = {
      userID: 1,
    };
    getAccountDetails(formData);
  }, []);

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
