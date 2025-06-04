
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { type Todo } from '../types';

export const createTodo = async (todo: Omit<Todo, 'id'>) => {
  const docRef = await addDoc(collection(db, 'todos'), todo);
  return { id: docRef.id, ...todo };
};

export const getTodos = async () => {
  const snapshot = await getDocs(collection(db, 'todos'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Todo));
};

export const updateTodo = async (id: string, todo: Partial<Todo>) => {
  await updateDoc(doc(db, 'todos', id), todo);
};

export const deleteTodo = async (id: string) => {
  await deleteDoc(doc(db, 'todos', id));
};