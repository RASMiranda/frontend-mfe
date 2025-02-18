import dynamic from 'next/dynamic';
import { Typography } from 'antd';

/**
 * Dynamically import the remote's Basket component. 
 * The remote is React-based, so SSR might be disabled.
 */
const RemoteBasket = dynamic(() => import('basket/Basket'), {
  ssr: false,
});

export default function BasketPage() {
  const { Title } = Typography;

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Your Basket</Title>
      <RemoteBasket />
    </div>
  );
}
