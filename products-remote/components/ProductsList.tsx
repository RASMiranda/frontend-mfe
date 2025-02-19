import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store, useGetAllProductsQuery } from '../store/apiSlice';
import { Card, Row, Col, Spin } from 'antd';
import type { Product } from '../store/apiSlice';

/**
 * Displays the details of a single product in a Card.
 */
const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
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
  );
};

/**
 * Fetches and displays a list of products using RTK Query.
 */
const ProductsList: FC = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <Spin tip="Loading products..." />;
  }

  if (error) {
    return <div>Error loading products.</div>;
  }

  // If the data is empty or undefined, display a friendly message
  if (!data?.length) {
    return <div>No products found.</div>;
  }

  return (
    <Row gutter={[16, 16]}>
      {data.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

/**
 * Wraps ProductsList in a Provider so it can have its own store context,
 * making it reusable or embeddable in other contexts if needed.
 */
const ProductsListWrapper: FC = () => {
  return (
    <Provider store={store}>
      <ProductsList />
    </Provider>
  );
};

export default ProductsListWrapper;
