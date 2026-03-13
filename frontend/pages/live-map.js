import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { liveTraffic } from '../lib/mockData';

const LiveMap = dynamic(() => import('../components/LiveMap'), { ssr: false });

export default function LiveMapPage() {
  return (
    <Layout>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-3xl font-semibold"
      >
        Live Traffic Map
      </motion.h2>
      <LiveMap />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {liveTraffic.map((flight) => (
          <motion.div
            key={flight.callsign}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl border border-white/10 bg-royal/20 p-4"
          >
            <p className="text-lg font-semibold">{flight.callsign}</p>
            <p className="text-sm text-steel">{flight.route}</p>
            <p className="text-sm text-steel">{flight.altitude} · {flight.speed}</p>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
