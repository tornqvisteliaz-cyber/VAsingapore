import Layout from '../../components/Layout';

const ranks = ['Cadet', 'Second Officer', 'First Officer', 'Senior First Officer', 'Captain', 'Senior Captain'];

export default function CrewCenterPage() {
  return (
    <Layout>
      <h2 className="text-3xl font-semibold">Crew Center</h2>
      <p className="mt-2 text-steel">Track your profile, hours, and rank progression across VATSIM and PTFS.</p>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-black/20 p-5">
          <h3 className="text-xl font-semibold">Pilot Profile</h3>
          <ul className="mt-3 space-y-2 text-sm text-steel">
            <li>Name: Jordan Wells</li>
            <li>VATSIM ID: 1829920</li>
            <li>Rank: Captain</li>
            <li>Total Hours: 1234</li>
            <li>Recent Flights: WSSS-OMDB, OMDB-EGLL</li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-5">
          <h3 className="text-xl font-semibold">Logbook Entry</h3>
          <form className="mt-3 grid gap-3 text-sm">
            <input className="rounded bg-white/5 p-2" placeholder="Aircraft" />
            <input className="rounded bg-white/5 p-2" placeholder="Route" />
            <input className="rounded bg-white/5 p-2" placeholder="Flight time" />
            <select className="rounded bg-white/5 p-2">
              <option>VATSIM</option>
              <option>Pilot Training Flight Simulator</option>
            </select>
            <button type="button" className="rounded bg-royal p-2 font-medium">
              Save Flight
            </button>
          </form>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5">
        <h3 className="text-xl font-semibold">Rank Ladder</h3>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-steel">
          {ranks.map((rank) => (
            <span key={rank} className="rounded-full border border-white/15 px-3 py-1">
              {rank}
            </span>
          ))}
        </div>
      </section>
    </Layout>
  );
}
