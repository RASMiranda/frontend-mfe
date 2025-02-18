import React from 'react';

/**
 * Example Higher-Order Component (HOC) to log props, fulfilling the request for usage of HOCs.
 */
function withLogger<P>(WrappedComponent: React.ComponentType<P>) {
  return function LoggerComponent(props: P) {
    console.log('[withLogger] props:', props);
    return <WrappedComponent {...props} />;
  };
}

export default withLogger;
