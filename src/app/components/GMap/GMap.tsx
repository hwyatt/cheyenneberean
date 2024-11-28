"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import MapComponent from "./MapComponent";

const API_KEY: string = process.env.GOOGLE_MAPS_API_KEY || "";

export const GMap = ({
  center,
  zoom,
  mapStyle,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  mapStyle: any;
}) => (
  <APIProvider apiKey={API_KEY}>
    <Map
      style={mapStyle}
      defaultCenter={center}
      defaultZoom={zoom}
      gestureHandling="none"
      disableDefaultUI={true}
      zoomControl={false}
    >
      <MapComponent center={center} zoom={zoom} />
    </Map>
  </APIProvider>
);
