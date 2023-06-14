import "mapbox-gl/dist/mapbox-gl.css";
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import React, { useState } from 'react';

function Conta() {
  const [lng, setLng] = useState(10.340788); // Longitude for the desired address
  const [lat, setLat] = useState(36.867596); // Latitude for the desired address

  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoic2l3YXI0NCIsImEiOiJjbGhrc2dleHAwajBwM2RzMXFmMHN3Z3dyIn0.DwGm2V9r12GMMozAntZXKQ"
      style={{
        width: "600px",
        height: "400px",
        borderRadius: "8px",
        border: "2px solid transparent"
      }}
      projection="globe"
      zoom={6} // Adjust the zoom level as needed
      longitude={lng}
      latitude={lat}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onViewportChange={(viewport) => {
        setLng(viewport.longitude);
        setLat(viewport.latitude);
      }}
    >
      <Marker
        longitude={lng}
        latitude={lat}
        anchor="bottom"
        draggable
      />

      <button className="btn-marker">
        <img src="/redloc.jpg" alt="" />
      </button>

      <NavigationControl position="bottom-right" />
      <FullscreenControl />
      <GeolocateControl />
    </Map>
  );
}

export default Conta;
