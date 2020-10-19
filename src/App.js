import React from 'react';
import ShowAllTodos from './modules/ShowAllTodos';
import CreateTodo from './modules/CreateTodo';
import './styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <div id="appContainer" className="container-fluid p-0">
        <div className="row no-gutters">
          <div id="topColumn" className="col-12 col-xl-4 bg-light">
            <div id="createTodoContainer" className="container-fluid p-0">
              <div className="container px-lg-5 px-xl-3 py-xl-4 my-5">
                <h5 className="display-4 mb-4 text-center">Create Todo</h5>
                <CreateTodo />
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <div className="p-4">
              <ShowAllTodos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
