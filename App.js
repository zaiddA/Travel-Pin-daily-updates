import * as React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { Room } from "@material-ui/icons";
import { useEffect } from "react";

function App() {
  const [viewState, setViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14,
  });

  useEffect(() => {
    console.log(viewState);
  }, [viewState]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          latitude={48.858093}
          longitude={2.294694}
          offsetTop={-10}
          offsetLeft={-20}
        >
          <Room style={{ fontSize: viewState.zoom * 7, color: "red" }} />
        </Marker>
      </Map>
    </div>
  );
}

export default App;
