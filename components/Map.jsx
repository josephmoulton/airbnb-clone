import { getCenter } from "geolib";
import { Result } from "postcss";
import React from "react";
import { useState } from "react";
import ReactMapGL, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
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
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedLocation(result);
            }}
          >
            <p className="cursor-pointer text-xl animate-bounce">🚩</p>
          </Marker>
          {selectedLocation.long === result.long && (
            <Popup
              latitude={Number(result.lat)}
              longitude={Number(result.long)}
              anchor="bottom"
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;

// process.env.mapbox_key
