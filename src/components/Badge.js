import React from 'react';

export default function Badge(props) {
  const { context, children } = props;

  const bdg = (
    <h6 className="small">
      <span className={`badge badge-pill badge-${context}`}>
        {children}
      </span>
    </h6>
  );

  return <>{bdg}</>;
}
