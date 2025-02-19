import React from 'react';

// Inline style for consistency and clarity
const containerStyle: React.CSSProperties = {
  padding: '20px',
};

/**
 * Placeholder page shown when visiting http://localhost:3001 directly.
 * The real "ProductsList" is exposed via Module Federation in /components/ProductsList.
 */
export default function ProductsRemotePlaceholder() {
  return (
    <div style={containerStyle}>
      <h2>Products Remote</h2>
      <p>This remote exposes the ProductsList component for module federation.</p>
    </div>
  );
}
