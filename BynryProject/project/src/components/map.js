// src/Map.js
import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ profiles }) => {
  const [viewport, setViewport] = React.useState({
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

  const [selectedProfile, setSelectedProfile] = React.useState(null);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="300px"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      {profiles.map((profile) => (
        <Marker
          key={profile.id}
          latitude={profile.latitude}
          longitude={profile.longitude}
        >
          <button
            className="marker-btn"
            onClick={(e) => {
              e.preventDefault();
              setSelectedProfile(profile);
            }}
          >
            <img src="/marker.png" alt="Marker Icon" />
          </button>
        </Marker>
      ))}

      {selectedProfile && (
        <Popup
          latitude={selectedProfile.latitude}
          longitude={selectedProfile.longitude}
          onClose={() => {
            setSelectedProfile(null);
          }}
        >
          <div>
            <h2>{selectedProfile.name}</h2>
            <p>{selectedProfile.address}</p>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default Map;
