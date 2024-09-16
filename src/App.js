import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <h1 style={{textAlign:"center"}}>TODO APP</h1>
        <AddTodo />
        <TodoList />
      </Container>
    </Provider>
  );
};

export default App;
