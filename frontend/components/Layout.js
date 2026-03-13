import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Live Map', '/live-map'],
  ['Fleet', '/fleet'],
  ['Airports', '/airports'],
  ['Crew Center', '/crew']
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <header className="border-b border-white/10 bg-black/20 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold tracking-[0.2em] text-steel">VAsingapore</h1>
          <div className="flex gap-4 text-sm text-white/80">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
      <footer className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-steel">
        <span>Luxury Virtual Airline Experience</span>
        <Link href="/admin" className="underline decoration-white/30 hover:decoration-white">
          Admin
        </Link>
      </footer>
    </div>
  );
}
