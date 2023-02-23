import React, { useState } from 'react';
import './App.css';
import { TodoType } from './helpers/todoType';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { useLocalStorage } from 'usehooks-ts';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useLocalStorage<TodoType[]>('todos', []);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), content: todo, completed: false },
    ]);
    setTodo('');
  };

  console.log(todo);
  console.log(todos);

  return (
    <div className='App'>
      <span className='uppercase text-[40px] md:my-[30px] my-[15px] text-white text-center z-10'>
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
