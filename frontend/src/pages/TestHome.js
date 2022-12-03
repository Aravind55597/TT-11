import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import axios from "axios";
import hosturl from "../hosturl";

import ViewUserDetails from "./ViewUserDetails";
import ViewPersonalDetails from "./ViewPersonalDetails";

function TestHome() {
  const auth = useAuth();
  console.log(auth)
  // simple get request that manually add config. Since some API endpoint can be access without user authentication
  async function getProtectedRoute() {
    try {
      const response = await axios.get(hosturl + "/user/protected", config);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  }


  var config = {};

  if (auth !== null) {
    const bearer_token = `Bearer ${auth.user.token}`;
    config = {
      headers: {
        Authorization: bearer_token,
      },
    };
  }

  // const user_ID = auth.user.info.UserID;
  // const token = auth.token;

  // async function getUserDetails() {
  //   try {
  //     const response = await axios.get(
  //       hosturl + "	/user/" + String(user_ID),
  //       config
  //     );
  //     console.log(response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error.response.data);
  //   }
  // }
  // getUserDetails();

  return (
    <div className="container-test">
      <ViewUserDetails></ViewUserDetails>

      <ViewPersonalDetails></ViewPersonalDetails>
    </div>
  );
}

export default TestHome;
