import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import adminRoutes from './routes/adminRoutes.js';
import flightRoutes from './routes/flightRoutes.js';
import pilotRoutes from './routes/pilotRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 60 * 1000, max: 120 }));

app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/admin', adminRoutes);
app.use('/api/pilots', pilotRoutes);
app.use('/api/flights', flightRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening on ${port}`);
});
