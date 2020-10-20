import React, { useState } from 'react';
import { Button, Badge } from '.';
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';
import fetch from 'isomorphic-fetch';

export default function TodoCard({ todo, deleteEvent }) {
  const [values, setValues] = useState({
    error: '',
    success: '',
    loading: false,
  });

  const { error, success, loading } = values;
  const { title, status, description } = todo;

  const handleEditFormSubmit = async (e, st, des) => {
    setValues({ loading: true, error: '', success: '' });
    e.preventDefault();
    const body = { title: title, status: st, description: des };
    const res = await fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return setValues({ loading: false, error: res.statusText });
    }

    const jsonData = await res.json();

    if (jsonData.error) {
      return setValues({ loading: false, error: jsonData.error });
    }

    setValues({
      loading: false,
      success: jsonData.message,
    });
    window.location = '/';
  };

  const checkIfNew = /new/i.test(status);
  const checkIfPending = /working|pending/i.test(status);
  const checkIfDone = /done|complete|completed|finished|finised/i.test(
    status
  );

  const context = checkIfNew
    ? 'danger'
    : checkIfPending
    ? 'secondary'
    : checkIfDone
    ? 'success'
    : 'secondary';

  const card = (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <Badge context={context} children={status} />
        <div className="pb-4">
          <p className="card-text">{description}</p>
        </div>
        <Button
          context="info"
          size="sm"
          type="button"
          children="EDIT"
          dataToggle="modal"
          dataTarget={`#todo_edit${todo._id}`}
        />
        <EditTodo
          status={status}
          description={description}
          todo={todo}
          handleSubmit={handleEditFormSubmit}
          error={error}
          success={success}
          loading={loading}
        />
        <Button
          context="danger"
          size="sm"
          type="button"
          children="DELETE"
          dataToggle="modal"
          dataTarget={`#todo${todo._id}`}
        />
        <DeleteTodo todo={todo} deleteTodoItem={deleteEvent} />
      </div>
    </div>
  );

  return <>{card}</>;
}
