import Layout from '../components/Layout';
import { airports } from '../lib/mockData';

export default function AirportsPage() {
  return (
    <Layout>
      <h2 className="mb-6 text-3xl font-semibold">Airports & Hubs</h2>
      <div className="space-y-3">
        {airports.map((airport) => (
          <div key={airport.code} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-lg">{airport.code} · {airport.name}</p>
            <p className="text-sm text-steel">{airport.role}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
