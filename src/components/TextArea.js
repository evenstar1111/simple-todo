import React from 'react';

export default function TextArea(props) {
  const { id, taph, value, handleChange } = props;

  const Text = (
    <textarea
      className="form-control"
      id={id}
      placeholder={taph}
      value={value}
      onChange={handleChange}
      required
    ></textarea>
  );

  return <>{Text}</>;
}
