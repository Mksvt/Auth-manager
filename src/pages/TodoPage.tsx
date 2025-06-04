import React, { useState, useEffect } from 'react';
import TodoList from '../components/todo/Todolist';
import TodoForm from '../components/todo/TodoForm';
import { getTodos } from '../services/todo';
import { type Todo } from '../types';
import { useAuth } from '../context/AuthContext';

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>();
  const { user } = useAuth();

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getTodos();
      setTodos(todosData);
    };
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    setEditingTodo(undefined);
    const todosData = await getTodos();
    setTodos(todosData);
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 p-6">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      {(user?.role === 'admin' || user?.role === 'editor') && (
        <TodoForm todo={editingTodo} onSubmit={handleSubmit} />
      )}
      <TodoList todos={todos} setTodos={setTodos} onEdit={setEditingTodo} />
    </div>
  );
};

export default TodoPage;
