import React from 'react';
import Button from './Button';

export default function DeleteTodo(props) {
  const { todo, deleteTodoItem } = props;

  const modal = (
    <div
      id={`todo${todo._id}`}
      className="modal fade"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body">
            <p className="del-todo-text">confirm deleting the item</p>
            <div className="del-todo-btn-container">
              <Button
                context="secondary"
                type="button"
                children="CANCEL"
                dataDismiss="modal"
              />
              <Button
                context="danger"
                type="button"
                children="CONFIRM"
                dataDismiss="modal"
                handleClick={deleteTodoItem}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{modal}</>;
}
