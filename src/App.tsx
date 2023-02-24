import React, { useReducer, useState } from 'react';
import './App.css';
import { TodoType, Action } from './helpers/todoType';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { useLocalStorage } from 'usehooks-ts';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useLocalStorage<TodoType[]>('todos', []);

  const todoReducer = (state: TodoType[], action: Action): TodoType[] => {
    switch (action.type) {
      case 'ADD_TODO':
        console.log(state);
        setTodos(() => [...state, action.payload]);
        return [...todos, action.payload];
      case 'REMOVE_TODO':
        state = todos.filter((todo) => todo.id !== action.payload);
        setTodos(() => [...state]);
        return [...state];
      case 'TOGGLE_TODO':
        return state.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
      case 'EDIT_TODO':
        const updatedtodos = state.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              content: action.payload.content,
            };
          }
          return todo;
        });
        setTodos(() => [...updatedtodos]);
        return [...updatedtodos];
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(todoReducer, todos);

  return (
    <div className='App'>
      <span className='uppercase text-[40px] md:my-[30px] my-[15px] text-white text-center z-10'>
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
