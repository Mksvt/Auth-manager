import { db } from '../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { type Settings } from '../types'; 

export const updateSettings = async (settings: Settings) => {
  await setDoc(doc(db, 'settings', 'main'), settings);
};

export const getSettings = async () => {
  const docSnap = await getDoc(doc(db, 'settings', 'main'));
  return docSnap.exists() ? (docSnap.data() as Settings) : { id: 'main', title: '', footerText: '' };
};