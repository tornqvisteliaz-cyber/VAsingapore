import { motion } from 'framer-motion';

export default function StatCard({ label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-xl border border-white/10 bg-royal/30 p-5"
    >
      <p className="text-sm text-steel">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </motion.div>
  );
}
