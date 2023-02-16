import React, { useEffect, useState } from "react";
import { Card } from "antd";
import AccountCard from "./AccountCard";
import data from "../data/BankAccount.json";
import userData from "../data/User.json";
import axios from "axios";
import hosturl from "../hosturl.js";
import { useAuth } from "../contexts/authContext.js";
import { useNavigate } from "react-router-dom";

function AccountInfo() {
  //   const UserAccounts = data.filter((account) => account.UserID === 1);
  const navigate = useNavigate();
  const auth = useAuth();

  console.log(auth.user); 
  const [name, setName] = useState(
    auth.user == null
      ? ""
      : `${auth.user.info.Firstname} ${auth.user.info.Lastname}`
  );
  const [userAccounts, setUserAccounts] = useState({});
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
        userID: 1,
      };
      getAccountDetails(formData);
    }
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
  }, []);
  return (
    <Card title={name}>
      {userAccounts.length &&
        userAccounts.map((account, index) => (
          <AccountCard key={index} account={account} />
        ))}
    </Card>
  );
}

export default AccountInfo;
