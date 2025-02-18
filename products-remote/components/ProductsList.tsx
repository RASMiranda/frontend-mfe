import React from 'react';
import { Provider } from 'react-redux';
import { store, useGetAllProductsQuery } from '../store/apiSlice';
import { Card, Row, Col, Spin } from 'antd';

function ProductsList() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <Spin tip="Loading products..." />;
  if (error) return <div>Error loading products.</div>;

  return (
    <Row gutter={[16, 16]}>
      {data?.map((product: any) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <Card
            hoverable
            title={product.title}
            cover={
              <img
                src={product.image}
                alt={product.title}
                style={{ height: 200, objectFit: 'contain' }}
              />
            }
          >
            <p>{product.category}</p>
            <p>${product.price}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

/**
 * We wrap it in a Provider here so it has its own store context
 * if used independently.
 */
export default function ProductsListWrapper() {
  return (
    <Provider store={store}>
      <ProductsList />
    </Provider>
  );
}
