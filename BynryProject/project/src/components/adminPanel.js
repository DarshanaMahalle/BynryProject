// src/AdminPanel.js
import React, { useState } from "react";

const AdminPanel = ({ addProfile, editProfile, deleteProfile }) => {
  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "",
    description: "",
    latitude: "",
    longitude: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Depending on your implementation, you can add or edit a profile here
    if (formData.id) {
      editProfile(formData);
    } else {
      addProfile(formData);
    }
    // Clear the form
    setFormData({
      name: "",
      photoUrl: "",
      description: "",
      latitude: "",
      longitude: "",
      address: "",
    });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for adding/editing profiles */}
        {/* Use handleChange to update formData */}
        {/* Add a submit button for adding/editing profiles */}
      </form>
      {/* Display a list of profiles with options to edit or delete */}
      {/* Implement editProfile and deleteProfile functions */}
    </div>
  );
};

export default AdminPanel;
