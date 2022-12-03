import React, { useState } from "react";
import ViewUserDetails from "./ViewUserDetails";
import axios from "axios";
import hosturl from "../hosturl.js";
import { useAuth } from "../contexts/authContext.js";

const TestHome = () => {
  const auth = useAuth();
  const user_ID = auth.user_ID;
  const token = auth.token;
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  async function getUserDetails() {
    try {
      const response = await axios.get(hosturl + "/user/userId");
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  }
  getUserDetails();
  return (
    <div>
      <p>Personal Particular</p>
      <ViewUserDetails></ViewUserDetails>
    </div>
  );
};

export default TestHome;
