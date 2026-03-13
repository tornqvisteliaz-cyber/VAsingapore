import { useMemo, useState } from 'react';
import Layout from '../../components/Layout';

const sections = ['Pilots', 'Flights', 'Fleet', 'Routes', 'Website Content', 'Crew Management', 'Network Settings', 'Statistics'];

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const unlocked = useMemo(() => password === 'Popwings', [password]);

  return (
    <Layout>
      <h2 className="text-3xl font-semibold">Admin Control</h2>
      <p className="mt-2 text-steel">Use admin passcode to unlock management sections.</p>
      <div className="mt-6 max-w-md rounded-xl border border-white/10 bg-black/20 p-5">
        <label className="block text-sm text-steel">Admin passcode</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 w-full rounded bg-white/5 p-2"
          placeholder="Enter passcode"
        />
        <p className="mt-3 text-xs text-steel">Hint configured for development: Popwings</p>
      </div>

      {unlocked && (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section} className="rounded-xl border border-white/10 bg-royal/20 p-4">
              <h3 className="font-semibold">{section}</h3>
              <p className="mt-2 text-sm text-steel">Create, edit, delete, and monitor {section.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
