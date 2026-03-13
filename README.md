# VAsingapore Platform Blueprint

Luxury-first virtual airline platform inspired by Rolls-Royce design language.

## Stack

- **Frontend:** Next.js + Tailwind + Framer Motion + Leaflet
- **Backend:** Node.js + Express
- **Database:** PostgreSQL (`database/schema.sql`)
- **Deployment:** Vercel (frontend) + Railway/VPS (backend)

## Key Product Areas

1. Public website with hero media, statistics, fleet, and airport hubs.
2. Live map for VATSIM / PTFS traffic visualization.
3. Crew center with profile, logbook workflow, rank progression.
4. Admin control zone (passcode: `Popwings`) to manage pilots/flights/fleet/routes/content.

## Project Structure

```text
frontend/
  pages/
  components/
  styles/
  crew/
  admin/
backend/
  src/routes/
  src/controllers/
  src/middleware/
  database/
database/
  schema.sql
```

## Getting Started

```bash
npm install
npm run dev:frontend
npm run dev:backend
```

Backend default port: `4000`


## Deploy on Vercel (fix for 404 / NOT_FOUND)

This repository is a monorepo. `vercel.json` now uses Next.js framework mode with root install/build/dev commands, and those root scripts forward to the `frontend` workspace.

If your existing Vercel project still returns 404, re-deploy after pulling these changes and ensure:

1. Build Command is `npm run build` (from repository root).
2. Install Command is `npm install` (from repository root).
3. Root Directory is `/` and no custom rewrites override `/`.

## Security Foundations

- JWT-based admin authorization.
- Rate limiting via `express-rate-limit`.
- Environment variable driven secrets (`JWT_SECRET`, `ADMIN_PASSCODE`).

## Next Build Targets

- ACARS ingestion service.
- Automated VATSIM polling jobs.
- Flight replay and dispatch tooling.
- Event and training center modules.
