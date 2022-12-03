import React from 'react';
import { Space, Table, Tag } from 'antd';
import data from "../data/ScheduledTransactions.json";

const columns = [
  {
    title: 'Transaction ID',
    dataIndex: 'TransactionID',
    key: 'TransactionID',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'ReceivingAccountID',
    dataIndex: 'ReceivingAccountID',
    key: 'ReceivingAccountID',
  },
  {
    title: 'ReceivingAccountID',
    dataIndex: 'ReceivingAccountID',
    key: 'ReceivingAccountID',
  },
  {
    title:'Date',
    dataIndex:'Date',
    key:'Date',
  },
  { 
    title:'Transaction Amount',
    dataIndex: 'TransactionAmount',
    key:'TransactionAmount',
  },
  {
    title:'Comment',
    dataIndex:'Comment',
    key:'Comment',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a>Delete</a>
      </Space>
    ),
  },
];

const App = () => <Table columns={columns} dataSource={data} />;
export default App;