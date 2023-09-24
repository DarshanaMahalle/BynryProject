// src/App.js
import React, { useState } from "react";
import { profiles as initialProfiles } from "./components/data";
import ProfileCollection from "./components/profileCollection";
import AdminPanel from "./components/adminPanel";
import FilterPanel from "./components/filterPanel";

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  // Function to update the filtered profiles based on filter criteria
  const filterProfiles = (criteria) => {
    const filtered = profiles.filter((profile) => {
      // Implement your filter logic here, e.g., name or location matching
      return (
        (!criteria.name || profile.name.toLowerCase().includes(criteria.name.toLowerCase())) &&
        (!criteria.location || profile.address.toLowerCase().includes(criteria.location.toLowerCase()))
        // Add other criteria as needed
      );
    });
    setFilteredProfiles(filtered);
  };

  // Rest of the code remains the same
  // ...
  return (
    <div className="App">
      <h1>Profile Collection</h1>
      <AdminPanel addProfile={profiles} editProfile={setProfiles} deleteProfile={profiles} />
      <FilterPanel filterProfiles={filterProfiles} />
      <ProfileCollection profiles={filteredProfiles} />
    </div>
  );
};

export default App;

