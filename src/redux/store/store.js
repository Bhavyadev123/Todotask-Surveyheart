import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import todoReducer from '../reducers/todoReducer';

// Combine reducers (if you have multiple reducers, add them here)
const rootReducer = combineReducers({
  todoList: todoReducer,
  // Add more reducers here if needed
});

// Create the store with middleware (thunk) and Redux DevTools support
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
