import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { Button, Typography } from 'antd';

// Dynamically import the remote's ProductsList component with SSR disabled.
// A fallback loading indicator is displayed during asynchronous import.
const RemoteProductsList = dynamic(() => import('products/ProductsList'), {
  ssr: false,
  loading: () => <p>Loading products...</p>,
});

const { Title } = Typography;

// Extracted inline styles for clarity
const containerStyle: React.CSSProperties = {
  padding: '20px',
};

const buttonStyle: React.CSSProperties = {
  marginTop: 16,
};

/**
 * The HomePage component displays a dynamically loaded product list
 * and a navigation button to the basket page.
 */
export default function HomePage() {
  useEffect(() => {
    // Any side effects can be handled here
  }, []);

  return (
    <div style={containerStyle}>
      <Title level={2}>Product Listing</Title>
      <RemoteProductsList />
      <Button type="primary" href="/basket" style={buttonStyle}>
        Go to Basket
      </Button>
    </div>
  );
}
