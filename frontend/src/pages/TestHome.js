import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import axios from "axios";
import hosturl from "../hosturl";

import ViewUserDetails from "./ViewUserDetails";
import ViewPersonalDetails from "./ViewPersonalDetails";

const defaultdetails = {
  UserID: "1",
  Username: "qwer",
  Password: "monkeyisthebest",
  Firstname: "first",
  Lastname: "last",
  Email: "asd@a.com",
  Address: "123 street",
};

function TestHome() {
  // const auth = useAuth();
  // var config = {};
  // if (auth.user !== null) {
  //   const bearer_token = `Bearer ${auth.user.token}`;
  //   config = {
  //     headers: {
  //       Authorization: bearer_token,
  //     },
  //   };
  // }

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
      <ViewUserDetails
        userid={defaultdetails.UserID}
        username={defaultdetails.Username}
        password={defaultdetails.Password}
      ></ViewUserDetails>

      <ViewPersonalDetails
        Firstname={defaultdetails.Firstname}
        Lastname={defaultdetails.Lastname}
        Email={defaultdetails.Email}
        Address={defaultdetails.Address}
      ></ViewPersonalDetails>
    </div>
  );
}

export default TestHome;
