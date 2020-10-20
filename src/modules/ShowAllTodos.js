import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { TodoCard, Button, Loader } from '../components';
import { saveInSession, getFromSession } from '../localStorageHelpers';

function ShowAllTodos() {
  const [todos, setTodos] = useState([]);
  const [values, setValues] = useState({
    loading: false,
    error: '',
  });

  const { loading, error } = values;

  const loadTodos = async () => {
    setValues({ ...values, loading: true });
    const res = await fetch('/api/todos');
    if (!res.ok) {
      return setValues({
        ...values,
        error: res.statusText,
        loading: false,
      });
    }
    const jsonData = await res.json();
    if (jsonData.error) {
      return setValues({ ...values, error: jsonData.error });
    }
    console.table(jsonData);
    setTodos(jsonData);
    setValues({ ...values, loading: false });
  };

  const deleteTodo = async (index, title) => {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    const filteredTodos = Object.assign([], todos);
    filteredTodos.splice(index, 1);
    setTodos(filteredTodos);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const errorMsg = error && (
    <div className="alert alert-danger">{error}</div>
  );

  const loadingMsg = loading && <Loader />;

  return (
    <>
      <div className="pb-4">
        <Button
          context="secondary"
          type="button"
          handleClick={() => loadTodos()}
          children="REFRESH"
          size="sm"
          disabled={loading ? true : false}
        />
      </div>
      {errorMsg}
      <div id="cards-container" className="card-columns">
        {loadingMsg}
        {!loading &&
          todos.map((todo, index) => (
            <TodoCard
              todo={todo}
              key={index}
              deleteEvent={() => {
                deleteTodo(index, todo.title);
              }}
            />
          ))}
      </div>
    </>
  );
}

export default ShowAllTodos;
