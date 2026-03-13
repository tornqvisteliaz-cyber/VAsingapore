import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import { leaderboard, stats } from '../lib/mockData';

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden rounded-2xl border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
          alt="Airliner above clouds"
          className="h-[420px] w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 p-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-4xl font-semibold"
          >
            Precision in every route. Luxury in every flight.
          </motion.h2>
          <p className="mt-6 max-w-xl text-white/80">
            A premium virtual airline built for realism, crew progression, and live network traffic.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {stats.map((item, idx) => (
          <StatCard key={item.label} index={idx} {...item} />
        ))}
      </section>

      <section className="mt-10 rounded-xl border border-white/10 bg-black/20 p-6">
        <h3 className="text-xl font-semibold">Pilot Leaderboard</h3>
        <ul className="mt-4 space-y-3 text-sm text-steel">
          {leaderboard.map((pilot) => (
            <li key={pilot.name} className="flex items-center justify-between rounded-lg border border-white/10 p-3">
              <span>{pilot.name} · {pilot.rank}</span>
              <span>{pilot.hours} hrs</span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
