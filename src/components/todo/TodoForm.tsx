import React, { useState, useEffect } from 'react';
import { type Todo } from '../../types';
import { createTodo, updateTodo } from '../../services/todo';
import { useAuth } from '../../context/AuthContext';

interface TodoFormProps {
  todo?: Todo;
  onSubmit: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ todo, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    setTitle(todo?.title || '');
    setDescription(todo?.description || '');
  }, [todo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isAdmin = user?.role === 'admin';
    const isEditor = user?.role === 'editor';

    if (isAdmin || (isEditor && todo)) {
      if (todo) {
        await updateTodo(todo.id, { title, description });
      } else {
        await createTodo({ title, description, status: 'not done' });
        setTitle('');
        setDescription('');
      }
      onSubmit();
    }
  };

  const canShowButton =
    user?.role === 'admin' || (user?.role === 'editor' && !!todo);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow"
    >
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
          disabled={user?.role === 'viewer'}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
          disabled={user?.role === 'viewer'}
        />
      </div>
      {canShowButton && (
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          {todo ? 'Update' : 'Create'} Todo
        </button>
      )}
    </form>
  );
};

export default TodoForm;
