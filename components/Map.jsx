import { getCenter } from "geolib";
import { Result } from "postcss";
import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((res) => ({
    longitude: res.long,
    latitude: res.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = React.useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      style={{ width: "100%", height: "100%" }}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-xl animate-bounce"
            >
              🚩
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              latitude={result.lat}
              longitude={result.long}
              anchor="bottom"
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

// process.env.mapbox_key
