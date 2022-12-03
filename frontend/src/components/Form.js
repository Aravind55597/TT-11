import React, { useEffect, useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useAuth } from "../contexts/authContext.js";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const App = () => {
  const auth = useAuth();
  const [formData, setFormData] = useState({
    receivingAmt: 0,
    date: "", //today's date
    amount: 0,
    comment: "",
  });
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const change = (e) => {
    console.log(e.target);
  };

  return (
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
    >
      <Form.Item label="Receiving Account">
        <Input
          id="receivingAmt"
          onChange={onChange}
          value={formData.receivingAmt}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker id="date" onChange={onChange} value={formData.date} />
      </Form.Item>
      <Form.Item label="Amount">
        <InputNumber id="amount" onChange={onChange} value={formData.amount} />
      </Form.Item>
      <Form.Item label="Comment">
        <TextArea
          rows={4}
          id="comment"
          onChange={onChange}
          value={formData.comment}
        />
      </Form.Item>
    </Form>
  );
};
export default App;
