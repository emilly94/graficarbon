import React from 'react';

import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "API_KEY"
  })
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '1200px', height: '400px',marginLeft: '50px'}}
        center={{lat: -23.69849844051746, lng: -46.692545435748094}}
        zoom={20}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={{
        lat: -23.69849844051746, 
        lng: -46.692545435748094
      }}
      />
      </GoogleMap>
  ) : <div></div>
}

export default Maps;