<<<<<<< HEAD
import React from 'react';
import { Space, Table, Tag } from 'antd';
import data from "../data/ScheduledTransactions.json";
=======
import React from "react";
import { Space, Table, Tag } from "antd";
>>>>>>> 3189ce8663974103a17fbe6934df22904bec6fbd

const columns = [
  {
    title: "Transaction ID",
    dataIndex: "TransactionID",
    key: "TransactionID",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "ReceivingAccountID",
    dataIndex: "ReceivingAccountID",
    key: "ReceivingAccountID",
  },
  {
    title: "ReceivingAccountID",
    dataIndex: "ReceivingAccountID",
    key: "ReceivingAccountID",
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
  },
  {
    title: "Transaction Amount",
    dataIndex: "TransactionAmount",
    key: "TransactionAmount",
  },
  {
    title: "Comment",
    dataIndex: "Comment",
    key: "Comment",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a>Delete</a>
      </Space>
    ),
  },
];

<<<<<<< HEAD
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
=======
const data = [
  {
    TransactionID: 1,
    AccountID: 621156213,
    ReceivingAccountID: 339657462,
    Date: "2022-11-08T04:00:00.000Z",
    TransactionAmount: 500.0,
    Comment: "Monthly Pocket Money",
  },
  {
    TransactionID: 2,
    AccountID: 958945214,
    ReceivingAccountID: 621156213,
    Date: "2022-11-08T04:00:00.000Z",
    TransactionAmount: 8996.0,
    Comment: "School Fees",
  },
  {
    TransactionID: 3,
    AccountID: 828120424,
    ReceivingAccountID: 322798030,
    Date: "2022-11-25T04:00:00.000Z",
    TransactionAmount: 3000.0,
    Comment: "Driving Centre Top-up",
  },
  {
    TransactionID: 4,
    AccountID: 353677039,
    ReceivingAccountID: 785703027,
    Date: "2022-11-17T06:21:00.000Z",
    TransactionAmount: 255.0,
    Comment: "Tuition Fee Payment",
  },
  {
    TransactionID: 5,
    AccountID: 259555772,
    ReceivingAccountID: 828120424,
    Date: "2022-11-08T04:00:00.000Z",
    TransactionAmount: 32.0,
    Comment: "Books Payment",
  },
];
const App = () => (
  <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
);
export default App;
>>>>>>> 3189ce8663974103a17fbe6934df22904bec6fbd
