import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "../../../node_modules/leaflet/dist/images/marker-icon.png";
import markerShadow from "../../../node_modules/leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

const Map = () => {
    const position: [number, number] = [49.1951, 16.6068]; // Brno, Czech Republic

  return (
    <MapContainer center={position} zoom={14} style={{ height: "58vh", width: "28vw" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>We are here! 🍵</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map