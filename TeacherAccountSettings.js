import React, { useState } from 'react';
import './TeacherAccountSettings.css'; // Assuming we have a CSS file for styling

const TeacherAccountSettings = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [settings, setSettings] = useState({
    profile: '',
    notifications: false,
  });

  const handleSave = () => {
    // Logic to save settings
    setModalOpen(false);
  };

  return (
    <div className="teacher-account-settings">
      <h2>Account Settings</h2>
      <div className="settings-section">
        <h3>Profile</h3>
        <input 
          type="text"
          value={settings.profile}
          onChange={(e) => setSettings({...settings, profile: e.target.value})}
          placeholder="Enter your profile name"
        />
      </div>
      <div className="settings-section">
        <h3>Notifications</h3>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
          />
          Enable Notifications
        </label>
      </div>
      <button onClick={() => setModalOpen(true)}>Save Settings</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Changes</h2>
            <p>Are you sure you want to save these changes?</p>
            <button onClick={handleSave}>Confirm</button>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherAccountSettings;