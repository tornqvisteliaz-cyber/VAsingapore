import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { liveTraffic } from '../lib/mockData';

export default function LiveMap() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <MapContainer center={[10, 90]} zoom={3} style={{ height: 420, width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {liveTraffic.map((flight) => (
          <Marker key={flight.callsign} position={[flight.lat, flight.lng]}>
            <Popup>
              <strong>{flight.callsign}</strong>
              <div>{flight.route}</div>
              <div>{flight.altitude} · {flight.speed}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
