/**
 * This is just a placeholder page if you directly visit 
 * http://localhost:3001. The real "ProductsList" is exposed
 * via Module Federation in /components/ProductsList.
 */
export default function ProductsRemoteHome() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Products Remote</h2>
      <p>This remote exposes the ProductsList component.</p>
    </div>
  );
}
