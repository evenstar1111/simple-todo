import React from 'react';

export default function Button(props) {
  const {
    context,
    size,
    children,
    type,
    handleClick,
    disabled,
    dataTarget,
    dataToggle,
    dataDismiss,
  } = props;

  const Btn = (
    <button
      className={`btn cbtn-${context} btn-${size}`}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      data-target={dataTarget}
      data-toggle={dataToggle}
      data-dismiss={dataDismiss}
    >
      {children}
    </button>
  );

  return <>{Btn}</>;
}
