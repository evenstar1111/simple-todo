import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';
import {
  Button,
  TextInput,
  TextArea,
  Label,
  FormText,
} from '../components';

export default function CreateTodo() {
  const [values, setValues] = useState({
    status: 'New',
    title: '',
    description: '',
    loading: false,
    error: '',
    success: '',
  });

  const { title, description, loading, error, success } = values;

  const controlInput = (name, e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const createTodoFn = async (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: '', success: '' });
    const { title, description, status } = values;
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, status }),
    });

    if (!res.ok) {
      return setValues({
        ...values,
        error: res.statusText,
        loading: false,
      });
    }

    const data = await res.json();

    if (data.error) {
      return setValues({
        ...values,
        error: data.error,
        success: '',
        loading: false,
      });
    }

    setValues({
      ...values,
      success: data.message,
      error: '',
      loading: false,
    });
  };

  const errorMsg = error && <FormText color="danger" children={error} />;
  const successMsg = success && (
    <FormText color="success" children={success} />
  );
  const loadingMsg = loading && (
    <FormText color="secondary" children={'processing, please wait...'} />
  );

  const Form = (
    <form id="createTodoForm" onSubmit={(e) => createTodoFn(e)}>
      <div className="form-group">
        <Label hfor="title" label="Todo Title" srOnly="sr-only" />
        <TextInput
          value={title}
          handleChange={(e) => controlInput('title', e)}
          ph={'todo title'}
        />
      </div>
      <div className="form-group">
        <Label hfor="description" label="Todo Body" srOnly="sr-only" />
        <TextArea
          id="description"
          value={description}
          handleChange={(e) => controlInput('description', e)}
          taph="todo description"
        />
        {loadingMsg}
        {errorMsg}
        {successMsg}
      </div>
      <Button
        context="primary"
        size="md"
        children="CREATE"
        type="submit"
      />
    </form>
  );

  return <>{Form}</>;
}
