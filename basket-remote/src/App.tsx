import React, { FC } from 'react';
import { Typography } from 'antd';
import Basket from './components/Basket';

const { Title } = Typography;

// Example: inline-style extracted into a constant
const containerStyle: React.CSSProperties = {
  padding: '20px'
};

/**
 * Renders the standalone basket remote application.
 */
const BasketApp: FC = () => {
  return (
    <div style={containerStyle}>
      <Title level={2}>Basket Remote Standalone</Title>
      <Basket />
    </div>
  );
};

export default BasketApp;
