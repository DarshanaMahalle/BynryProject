// src/Profile.js
import React, { useState } from "react";
import Map from "react-map-gl/dist/esm/components/map";

const Profile = ({ name, photoUrl, description, latitude, longitude, address }) => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="profile">
      <img src={photoUrl} alt={`${name}'s photo`} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={toggleMap}>Summary</button>
      {showMap && (
        <Map
          profiles={[
            {
              id: 1,
              name,
              latitude,
              longitude,
              address,
            },
          ]}
        />
      )}
    </div>
  );
};

export default Profile;
