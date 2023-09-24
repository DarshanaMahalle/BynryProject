// src/FilterPanel.js
import React from "react";

const FilterPanel = ({ filterProfiles }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    filterProfiles({ [name]: value });
  };

  return (
    <div className="filter-panel">
      <h2>Filter Profiles</h2>
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        onChange={handleFilterChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Search by location"
        onChange={handleFilterChange}
      />
      {/* Add other filter criteria inputs as needed */}
    </div>
  );
};

export default FilterPanel;
