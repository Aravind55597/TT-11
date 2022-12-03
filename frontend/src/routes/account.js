import axios from "axios";
import hosturl from "../hosturl.js";
// get request
export async function getExchangeRate() {
  try {
    const response = await axios.get(hosturl + "/exchange_rate");
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

export async function getAccountDetails() {
  try {
    const userID = 1;
    const response = await axios.get(hosturl + `/account?userID=` + userID);
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}
