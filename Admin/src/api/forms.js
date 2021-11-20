import axios from "axios";

// const url = "http://localhost:5050/api";
const url = "https://freedomhealth.herokuapp.com/api";

export default class FormsApi {
  async post(i, data) {
    try {
      const res = await axios.post(`${url}${i}`, data);
      return res.data;
    } catch (error) {
      console.log(error);
      return "Error";
    }
  }
}
