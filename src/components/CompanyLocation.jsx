// const apiKey = 'AIzaSyCXfuzxjPx8Wh_U7cbE7l7V_6FabcYXoYY';
// const center = {
//     lat: 25.85022243826492,
//     lng: 93.80657489298987,
//   };
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100px'
};

const position = {
  lat: 25.85006741340352,
  lng: 93.80608880490364,
};

function CompanyLocation() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCXfuzxjPx8Wh_U7cbE7l7V_6FabcYXoYY"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // Calculate the appropriate zoom level based on the container size
    const bounds = new window.google.maps.LatLngBounds(position);
    const center = bounds.getCenter();
    const maxZoom = 18;
    const minZoom = 1;
    const zoom = Math.min(
      maxZoom,
    );

    map.setCenter(center);
    map.setZoom(zoom);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={10} // Initial zoom level (this will be overridden by onLoad)
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        streetViewControl: false,
        // mapTypeControl: false,
        // mapTypeId: 'satellite'
      }}
    >
      {/* Marker or other map components can be added here */}
    </GoogleMap>
  ) : <></>;
}

export default React.memo(CompanyLocation);
