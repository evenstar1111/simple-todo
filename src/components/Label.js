import React from 'react';

export default function Label(props) {
  const { hfor, label, srOnly } = props;

  const lbl = (
    <label htmlFor={hfor} className={srOnly}>
      {label}
    </label>
  );

  return <>{lbl}</>;
}
