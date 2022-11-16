import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: -40,
    zoom: 3.5,
  });
  return (
    <ReactMapGL
      style={{ width: "100%", height: "100%" }}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/light-v9"
      mapboxAccessToken={process.env.mapbox_key}
    ></ReactMapGL>
  );
}

export default Map;

// process.env.mapbox_key
