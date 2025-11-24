# SUMAYÕ - MVP scaffold

This repository is a starter scaffold for the **SUMAYÕ** MVP.

## Included
- Backend (Nest-style scaffold) with Prisma schema and seed
- Frontend (Next.js app router) with basic pages and components
- Postgres database config (Docker Compose)
- Dockerfiles + docker-compose.yml to run the stack
- GitHub Actions workflow (CI)
- Sample seed data

## Quick start (using Docker)
```bash
# From the directory containing docker-compose.yml
docker compose up --build
```

Environment variables are set inside `docker-compose.yml` for local dev.

## What to expect
- Backend listens on :3001 (Nest dev)
- Frontend listens on :3000 (Next dev)

Happy hacking! 🚀
