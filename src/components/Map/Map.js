import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.scss";

export const Map = () => {
  return (
    <MapContainer
      center={[51.062572, 16.14573]}
      zoom={13}
      scrollWheelZoom={false}
      className={styles.MapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.062572, 16.14573]}>
        <Popup>
          FIRMA ANKUS <br /> Piotrwocie 68A 59-424 Męcinka
        </Popup>
      </Marker>
    </MapContainer>
  );
};
