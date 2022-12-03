import React, { useEffect, useState } from "react";
import { Button, DatePicker, Divider, Form, Input } from "antd";
import { useAuth } from "../contexts/authContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import hosturl from "../hosturl.js";

const { TextArea } = Input;
const App = ({ accountID }) => {
  const auth = useAuth();
  const [formData, setFormData] = useState({
    receivingID: 0,
    date: "", //today's date
    amount: 0,
    comment: "",
  });
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onChangeDate = (date, dateString) => {
    setFormData({
      ...formData,
      date: new Date(dateString),
    });
  };

  const onSubmit = (e) => {
    var config = {};
    const bearer_token = `Bearer ${auth.user.token}`;
    config = {
      headers: {
        Authorization: bearer_token,
      },
    };
    scheduleTransaction(formData);
    async function scheduleTransaction(userData) {
      try {
        const data = {
          AccountID: accountID,
          ReceivingAccountID: userData.receivingID,
          Date: userData.date,
          TransactionAmount: userData.amount,
          Comment: userData.comment,
        };
        console.log(data);
        const res = await axios
          .post(hosturl + "/transaction", data, config)
          .then((response) => {
            console.log(response.data);
          });
        console.log(res);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onSubmit={onSubmit}
      >
        <Form.Item label="Receiving Account">
          <Input
            id="receivingID"
            onChange={onChange}
            value={formData.receivingID}
          />
        </Form.Item>
        <Form.Item label="Amount" id="amount">
          <Input id="amount" onChange={onChange} value={formData.amount} />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker id="date" onChange={onChangeDate} />
        </Form.Item>
        <Form.Item label="Comment">
          <TextArea
            rows={4}
            id="comment"
            onChange={onChange}
            value={formData.comment}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
