import React from 'react';

/**
 * Higher-Order Component (HOC) that logs props before rendering the wrapped component.
 */
function withLogger<P>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
  const LoggerComponent: React.FC<P> = (props) => {
    console.log('[withLogger] props:', props);
    return <WrappedComponent {...props} />;
  };

  LoggerComponent.displayName = `withLogger(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return LoggerComponent;
}

export default withLogger;
