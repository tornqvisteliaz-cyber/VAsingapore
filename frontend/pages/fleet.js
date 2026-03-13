import Layout from '../components/Layout';
import { fleet } from '../lib/mockData';

export default function FleetPage() {
  return (
    <Layout>
      <h2 className="mb-6 text-3xl font-semibold">Fleet</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {fleet.map((plane) => (
          <article key={plane.type} className="rounded-xl border border-white/10 bg-black/20 p-5">
            <h3 className="text-lg font-semibold">{plane.type}</h3>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              <li>Range: {plane.range}</li>
              <li>Cruise speed: {plane.cruiseSpeed}</li>
              <li>Passengers: {plane.passengers}</li>
            </ul>
          </article>
        ))}
      </div>
    </Layout>
  );
}
