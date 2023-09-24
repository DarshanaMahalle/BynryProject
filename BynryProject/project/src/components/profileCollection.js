// src/ProfileCollection.js
import React from "react";

const ProfileCollection = ({ profiles }) => {
  return (
    <div className="profile-collection">
      {profiles.map((profile) => (
        <profile
          key={profile.id}
          name={profile.name}
          photoUrl={profile.photoUrl}
          description={profile.description}
          latitude={profile.latitude}
          longitude={profile.longitude}
          address={profile.address}
        />
      ))}
    </div>
  );
};

export default ProfileCollection;
