import React from "react";
// import ExchangeRateService from "../services/exchangeRate.service";
import axios from "axios";
import hosturl from "../hosturl.js";
import { useAuth } from "../contexts/authContext.js";
import TestHome from "./TestHome.js";
const Home = () => {
  const auth = useAuth();
  // get request
  async function getExchangeRate() {
    try {
      const response = await axios.get(hosturl + "/exchange_rate");
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  }
  // post request
  async function createNewUser() {
    try {
      await axios
        .post(hosturl + "/user/create", {
          username: "user106",
          password: "123456",
          name: "John",
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  // delete
  async function deleteUser() {
    try {
      await axios
        .delete(hosturl + "/user/delete/user106", {})
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  // if user is logged in, get token and set authorization headers with token.
  // This is to call protected API endpoint that requires user authentication
  var config = {};
  if (auth.user !== null) {
    const bearer_token = `Bearer ${auth.user.token}`;
    config = {
      headers: {
        Authorization: bearer_token,
      },
    };
  }

  // simple get request that manually add config. Since some API endpoint can be access without user authentication
  async function getProtectedRoute() {
    try {
      const response = await axios.get(hosturl + "/user/protected", config);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <>
      <div>
        <TestHome />
      </div>
    </>
  );
};

export default Home;
