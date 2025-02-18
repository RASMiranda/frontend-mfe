import React from 'react';
import { Typography } from 'antd';
import Basket from './components/Basket';

const { Title } = Typography;

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Basket Remote Standalone</Title>
      <Basket />
    </div>
  );
}
