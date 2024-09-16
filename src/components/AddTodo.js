import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import { TextField, Button,Box} from '@mui/material';

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() === '') {
      return; 
    }

    const todo = {
      id: Math.floor(Math.random() * 1000),
      todo: todoText,
      completed: false,
      userId: 1, // Assuming userId is 1 for simplicity
    };

    dispatch(addTodo(todo));
    setTodoText(''); // Clear the input field after adding the todo
  };


  
  return (
    <div>
       <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        margin: '20px auto',
        maxWidth: '500px',
      }}
    >
      <TextField
        label="New Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        sx={{
          flexGrow:1
        }}
      />
      <Button style={{height:'50px'}} onClick={handleAddTodo}>Add Todo</Button>
      </Box>
    </div>
  );
};

export default AddTodo;
