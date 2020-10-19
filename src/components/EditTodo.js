import React, { useState } from 'react';
import { Label, TextArea, TextInput, FormText } from '.';
import Button from './Button';

export default function EditTodo(props) {
  const { todo, handleSubmit, error, success, loading } = props;
  const [desc, setDesc] = useState(props.description);
  const [status, setStatus] = useState(props.status);

  const toggleValuesOnClose = () => {
    setDesc(todo.description);
    setStatus(todo.status);
  };

  const errorMsg = error && <FormText color="danger" children={error} />;
  const successMsg = success && (
    <FormText color="success" children={success} />
  );
  const loadingMsg = loading && (
    <FormText color="secondary" children="processing request..." />
  );

  const modal = (
    <div id={`todo_edit${todo._id}`} className="modal fade">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{todo.title}</h5>
          </div>
          <div className="modal-body">
            <form
              id="toodEditForm"
              onSubmit={(e) => handleSubmit(e, status, desc)}
            >
              <div className="form-group">
                <Label hfor="editDescription" label="Description" />
                <TextArea
                  id="editDescription"
                  value={desc}
                  taph="edit todo"
                  handleChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="form-group">
                <Label hfor="editStatus" label="Status" />
                <TextInput
                  id="editStatus"
                  value={status}
                  handleChange={(e) => setStatus(e.target.value)}
                />
                {errorMsg}
                {successMsg}
                {loadingMsg}
              </div>
              <Button
                context="secondary"
                type="button"
                children="CLOSE"
                dataDismiss="modal"
                size="sm"
                handleClick={toggleValuesOnClose}
              />
              <Button
                context="info"
                size="sm"
                type="submit"
                children="SAVE"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{modal}</>;
}
