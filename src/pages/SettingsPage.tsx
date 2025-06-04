import React, { useState, useEffect } from 'react';
import SettingsForm from '../components/settings/SettingsForm';
import { type Settings } from '../types'; 
import { getSettings } from '../services/settings'; 
import { useAuth } from '../context/AuthContext';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    id: 'main',
    title: '',
    footerText: '',
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const settingsData = await getSettings();
      setSettings(settingsData);
    };
    fetchSettings();
  }, []);

  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto mt-8 p-6">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <header className="mt-8 text-gray-600">{settings.title}</header>
      {user && user.role !== 'viewer' ? (
        <SettingsForm settings={settings} setSettings={setSettings} />
      ) : (
        <p className="text-gray-600">You do not have permission to edit settings.</p>
      )}
      <footer className="mt-8 text-gray-600">{settings.footerText}</footer>
    </div>
  );
};

export default SettingsPage;

