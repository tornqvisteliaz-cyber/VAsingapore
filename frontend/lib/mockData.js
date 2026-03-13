export const stats = [
  { label: 'Active pilots', value: 128 },
  { label: 'Flights today', value: 42 },
  { label: 'Fleet aircraft', value: 19 }
];

export const fleet = [
  { type: 'Airbus A330', range: '7,250 nm', cruiseSpeed: '470 kt', passengers: 287 },
  { type: 'Airbus A350', range: '8,100 nm', cruiseSpeed: '488 kt', passengers: 325 },
  { type: 'Boeing 747-8', range: '7,730 nm', cruiseSpeed: '493 kt', passengers: 410 }
];

export const airports = [
  { code: 'WSSS', name: 'Singapore Changi', role: 'Main hub' },
  { code: 'EGLL', name: 'London Heathrow', role: 'Long-haul base' },
  { code: 'KLAX', name: 'Los Angeles Intl', role: 'Pacific base' }
];

export const leaderboard = [
  { name: 'Alex Mercer', rank: 'Captain', hours: 1240 },
  { name: 'Yuki Hayashi', rank: 'Senior First Officer', hours: 955 },
  { name: 'Noah Jensen', rank: 'First Officer', hours: 768 }
];

export const liveTraffic = [
  {
    callsign: 'PWA101',
    altitude: '36000 ft',
    speed: '478 kt',
    route: 'WSSS → OMDB',
    lat: 1.25,
    lng: 103.8
  },
  {
    callsign: 'PWA222',
    altitude: '34000 ft',
    speed: '465 kt',
    route: 'EGLL → WSSS',
    lat: 18.2,
    lng: 72.9
  }
];
