import React from 'react';
import { type Todo } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { updateTodo, deleteTodo } from '../../services/todo';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  onEdit: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, onEdit }) => {
  const { user } = useAuth();

  const handleStatusChange = async (todo: Todo) => {
    if (user?.role === 'admin' || user?.role === 'editor') {
      const updatedStatus = todo.status === 'done' ? 'not done' : 'done';
      await updateTodo(todo.id, { status: updatedStatus });

      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? { ...t, status: updatedStatus } : t))
      );
    }
  };

  const handleDelete = async (id: string) => {
    if (user?.role === 'admin' || user?.role === 'editor') {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Status</th>
            {(user?.role === 'admin' || user?.role === 'editor') && <th className="p-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="border-b">
              <td className="p-2">{todo.title}</td>
              <td className="p-2">{todo.description}</td>
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={todo.status === 'done'}
                  onChange={() => handleStatusChange(todo)}
                  disabled={user?.role === 'viewer'}
                />
              </td>
              {(user?.role === 'admin' || user?.role === 'editor') && (
                <td className="p-2">
                  <button
                    onClick={() => onEdit(todo)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
