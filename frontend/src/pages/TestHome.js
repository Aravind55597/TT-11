import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import axios from "axios";
import hosturl from "../hosturl";

import ViewUserDetails from "./ViewUserDetails";
import ViewPersonalDetails from "./ViewPersonalDetails";

function TestHome() {
  const user_ID = auth.info.UserID;
  const token = auth.token;

<<<<<<< Updated upstream
  let navigate = useNavigate();
  const auth = useAuth();
=======
  async function getUserDetails() {
    try {
      const response = await axios.get(hosturl + "	/user/userId");
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  }
  getUserDetails();
>>>>>>> Stashed changes
  return (
    <div className="container-test">
      <ViewUserDetails></ViewUserDetails>

      <ViewPersonalDetails></ViewPersonalDetails>
    </div>
  );
}

export default TestHome;
