import React from 'react';

export default function FormText({ id, children, color }) {
  const fText = (
    <small id={id} className={`form-text text-${color}`}>
      {children}
    </small>
  );

  return <>{fText}</>;
}
