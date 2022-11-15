import { Map as RMap } from "react-map-gl";
import { Marker, Popup } from "react-map-gl";
import React from "react";
import { useState } from "react";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  return (
    <RMap
     style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/joemoults/clailld76003a14p6k1dydqid"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p className="cursor-pointer text-2xl animate-bounce">📌</p>
          </Marker>
        </div>
      ))}
    </RMap>
  );
}

export default Map;
