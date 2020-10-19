import React from 'react';

export default function Loader() {
  const loadingComponent = (
    <div className="spinner-grow text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  return <div className="loader_container">{loadingComponent}</div>;
}
