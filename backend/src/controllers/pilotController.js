let pilots = [
  { id: 1, name: 'Alex Mercer', vatsimId: '188201', rank: 'Captain', hours: 1240 },
  { id: 2, name: 'Yuki Hayashi', vatsimId: '190119', rank: 'Senior First Officer', hours: 955 }
];

export function listPilots(_, res) {
  return res.json(pilots);
}

export function addPilot(req, res) {
  const newPilot = { id: Date.now(), ...req.body };
  pilots.push(newPilot);
  return res.status(201).json(newPilot);
}

export function updatePilot(req, res) {
  const id = Number(req.params.id);
  pilots = pilots.map((pilot) => (pilot.id === id ? { ...pilot, ...req.body } : pilot));
  const pilot = pilots.find((item) => item.id === id);
  return res.json(pilot || null);
}

export function deletePilot(req, res) {
  const id = Number(req.params.id);
  pilots = pilots.filter((pilot) => pilot.id !== id);
  return res.status(204).send();
}
