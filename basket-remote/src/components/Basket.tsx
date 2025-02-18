import React, { useState } from 'react';
import { List, Button } from 'antd';

/**
 * Minimal basket example. In a real app, you'd share state or
 * pass selected products via props from the host. You could 
 * also implement a micro-frontend-based global store.
 */
export default function Basket() {
  // For demonstration, a static basket:
  const [items, setItems] = useState([
    { id: 1, title: 'Example Item 1', price: 9.99 },
    { id: 2, title: 'Example Item 2', price: 19.99 }
  ]);

  return (
    <div>
      <List
        header={<div>Your Basket</div>}
        footer={
          <Button type="primary">Checkout</Button>
        }
        bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
