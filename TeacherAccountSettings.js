import React, { useState } from 'react';
import './TeacherAccountSettings.css';
import { motion } from 'framer-motion';

const TeacherAccountSettings = () => {
  const [teacher, setTeacher] = useState({
    name: 'John Doe',
    email: 'john.doe@eduguard.bt',
    phone: '+975-17-123456',
    school: 'Ugyen Academy',
    subject: 'English',
    experience: '5 years',
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(teacher);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setTeacher(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData(teacher);
    setEditMode(false);
  };

  return (
    <motion.div
      className="teacher-account-settings"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="settings-header">
        <h1>Account Settings</h1>
      </div>

      <div className="settings-content">
        {!editMode ? (
          <div className="view-mode">
            <div className="setting-item">
              <label>Name:</label>
              <span>{teacher.name}</span>
            </div>
            <div className="setting-item">
              <label>Email:</label>
              <span>{teacher.email}</span>
            </div>
            <div className="setting-item">
              <label>Phone:</label>
              <span>{teacher.phone}</span>
            </div>
            <div className="setting-item">
              <label>School:</label>
              <span>{teacher.school}</span>
            </div>
            <div className="setting-item">
              <label>Subject:</label>
              <span>{teacher.subject}</span>
            </div>
            <div className="setting-item">
              <label>Experience:</label>
              <span>{teacher.experience}</span>
            </div>
            <button className="edit-btn" onClick={() => setEditMode(true)}>
              Edit Settings
            </button>
          </div>
        ) : (
          <div className="edit-mode">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="school">School:</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="experience">Experience:</label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                />
              </div>
              <div className="button-group">
                <button type="button" className="save-btn" onClick={handleSave}>
                  Save
                </button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeacherAccountSettings;
