import { Router } from 'express';

const router = Router();

const flights = [
  { id: 1, callsign: 'PWA101', route: 'WSSS-OMDB', network: 'VATSIM', time: '07:10' },
  { id: 2, callsign: 'PWA222', route: 'EGLL-WSSS', network: 'PTFS', time: '12:05' }
];

router.get('/', (_, res) => res.json(flights));

export default router;
