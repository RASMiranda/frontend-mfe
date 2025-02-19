import dynamic from 'next/dynamic';
import { Typography } from 'antd';
import React from 'react';

// Dynamically import the remote's Basket component.
// The remote is React-based, so SSR is disabled.
const RemoteBasket = dynamic(() => import('basket/Basket'), {
  ssr: false,
  // Fallback displayed while the remote is loading
  loading: () => <p>Loading basket...</p>,
});

const { Title } = Typography;

// Inline style extracted for clarity
const containerStyle: React.CSSProperties = {
  padding: '20px',
};

/**
 * Page displaying the Basket remote component.
 */
export default function BasketPage() {
  return (
    <div style={containerStyle}>
      <Title level={2}>Your Basket</Title>
      <RemoteBasket />
    </div>
  );
}
