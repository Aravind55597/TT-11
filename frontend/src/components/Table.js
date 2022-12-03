import React from "react";
import { Space, Table, Button } from "antd";
import hardData from "../data/ScheduledTransactions.json";

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
        <Button danger type="text">
          Delete
        </Button>
      </Space>
    ),
  },
];

function App(data) {
  // convert timestamp to date
  const transactionData = data?.data.map((each) => {
    return {
      ...each,
      Date: new Date(each.Date).toString().split("GMT")[0],
    };
  });
  return (
    <Table
      columns={columns}
      dataSource={transactionData}
      scroll={{ x: 1300 }}
    />
  );
}

export default App;
