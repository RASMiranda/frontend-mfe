import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { Button, Typography } from 'antd';

/**
 * Dynamically import the remote's ProductsList component.
 * This uses module federation. 
 */
const RemoteProductsList = dynamic(() => import('products/ProductsList'), {
  ssr: false,
});

export default function HomePage() {
  const { Title } = Typography;

  useEffect(() => {
    // Any side-effects
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Product Listing</Title>
      <RemoteProductsList />
      <Button type="primary" href="/basket" style={{ marginTop: 16 }}>
        Go to Basket
      </Button>
    </div>
  );
}
