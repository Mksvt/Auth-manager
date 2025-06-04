import React, { useState, useEffect } from 'react';
import { type Settings } from '../../types'; 
import { updateSettings } from '../../services/settings';
import { useAuth } from '../../context/AuthContext';

interface SettingsFormProps {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ settings, setSettings }) => {
  const { user } = useAuth();

  const [title, setTitle] = useState(settings.title);
  const [footerText, setFooterText] = useState(settings.footerText);

  useEffect(() => {
    setTitle(settings.title);
    setFooterText(settings.footerText);
  }, [settings]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user?.role === 'admin' || user?.role === 'editor') {
      const updated = { ...settings, title, footerText };
      await updateSettings(updated);
      setSettings(updated); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow">
      <div className="mb-4">
        <label className="block text-gray-700">Panel Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          disabled={user?.role === 'viewer'}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Footer Text</label>
        <input
          type="text"
          value={footerText}
          onChange={(e) => setFooterText(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          disabled={user?.role === 'viewer'}
          required
        />
      </div>
      {(user?.role === 'admin' || user?.role === 'editor') && (
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Save Settings
        </button>
      )}
    </form>
  );
};

export default SettingsForm;
