import React from 'react';

export default function TextInput(props) {
  const { id, ph, value, handleChange } = props;

  const Input = (
    <input
      className="form-control"
      id={id}
      placeholder={ph}
      value={value}
      onChange={handleChange}
      required
      autoFocus
    />
  );

  return <>{Input}</>;
}
