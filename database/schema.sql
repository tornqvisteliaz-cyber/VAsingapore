CREATE TABLE pilots (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  vatsim_id TEXT,
  rank TEXT NOT NULL,
  total_hours NUMERIC(8, 1) DEFAULT 0
);

CREATE TABLE aircraft (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  range_nm INTEGER,
  cruise_speed_kt INTEGER,
  passengers INTEGER
);

CREATE TABLE airports (
  id SERIAL PRIMARY KEY,
  icao TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT
);

CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  pilot_id INTEGER REFERENCES pilots(id) ON DELETE SET NULL,
  aircraft_id INTEGER REFERENCES aircraft(id) ON DELETE SET NULL,
  callsign TEXT,
  route TEXT,
  network TEXT CHECK (network IN ('VATSIM', 'PTFS')),
  flight_time INTERVAL,
  landing_rate INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE ranks (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  minimum_hours INTEGER NOT NULL
);
