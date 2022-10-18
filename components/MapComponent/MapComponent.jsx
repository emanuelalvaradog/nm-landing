import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const nm = { lat: 19.439606, lng: -99.381377 };

export const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={nm}>
      <Marker position={nm} />
    </GoogleMap>
  ))
);
