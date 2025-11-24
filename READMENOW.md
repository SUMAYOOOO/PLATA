```md
<p align="center">
  <img src="/assets/logo.svg" alt="SUMAYÕ Logo" width="280">
</p>
<p align="center">
  <img src="/mnt/data/LOGO-LA-BRUJA-DE-LAS-MATES®.svg" alt="SUMAYÕ Logo" width="280">
</p>

# 🧙‍♀️ SUMAYÕ — Plataforma Educativa Interactiva (MVP)

![Build Status](https://img.shields.io/github/actions/workflow/status/SUMAYOOOO/sumayo-mvp/ci.yml?label=Build&color=blue)
![Lint Status](https://img.shields.io/github/actions/workflow/status/SUMAYOOOO/sumayo-mvp/lint.yml?label=Lint&color=yellow)
![Tests](https://img.shields.io/github/actions/workflow/status/SUMAYOOOO/sumayo-mvp/tests.yml?label=Tests&color=green)

```md
<p align="center">
  <img src="/assets/logo.svg" alt="SUMAYÕ Logo" width="280">
</p>

# 🧙‍♀️ SUMAYÕ — Plataforma Educativa Interactiva (MVP)

![Build Status](https://img.shields.io/github/actions/workflow/status/SUMAYOOOO/sumayo-mvp/ci.yml?label=Build&color=blue)
![Lint Status](https://img.shields.io/github/actions/workflow/status/SUMAYOOOO/sumayo-mvp/lint.yml?label=Lint&color=yellow)
![Tests](https://img.shields.io/github/actions/workflow/status/SUMAYOOOO/sumayo-mvp/tests.yml?label=Tests&color=green)



SUMAYÕ es una plataforma de aprendizaje diseñada para enseñar matemáticas, programación y lógica a través de cursos interactivos y micro-temas con sandbox HTML, videos y ejemplos en tiempo real.

---

# 📸 Screenshots

> Reemplaza estas imágenes por tus capturas reales cuando publiques el MVP.

### Login
![Login Screenshot](https://via.placeholder.com/1000x600?text=Login+Screen)

### Dashboard
![Dashboard Screenshot](https://via.placeholder.com/1000x600?text=Dashboard)

### Vista de Curso
![Course Page](https://via.placeholder.com/1000x600?text=Course+Page)

### Tema (con Sandbox HTML5)
![Topic Sandbox](https://via.placeholder.com/1000x600?text=Topic+Sandbox)

---

# 🧩 Arquitectura

## Diagrama ASCII

```

```
                     ┌───────────────────────┐
                     │       Frontend         │
                     │     Next.js 14         │
                     └──────────┬────────────┘
                                │
                                ▼
                     ┌───────────────────────┐
                     │       Backend          │
                     │       NestJS           │
                     │  Auth / Courses /      │
                     │  Topics / Payments     │
                     └──────────┬────────────┘
                                │
            ┌───────────────────┼──────────────────┐
            │                   │                  │
            ▼                   ▼                  ▼
 ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
 │ PostgreSQL DB    │    │ Stripe API       │    │ Storage (Futuro)│
 │  Prisma ORM      │    │ Productos/Precios│    │ S3/DO Spaces    │
 └─────────────────┘    └─────────────────┘    └─────────────────┘
```

````

---

## Diagrama Mermaid

```mermaid
flowchart TD
    A[Next.js Frontend] --> B[NestJS Backend]
    B --> C[(PostgreSQL - Prisma)]
    B --> D[Stripe API]
    B --> E[Future Storage - S3/DO Spaces]

    subgraph Frontend
        A1[Login Page]
        A2[Dashboard]
        A3[Course View]
        A4[Topic Sandbox]
        A --> A1
        A --> A2
        A --> A3
        A --> A4
    end

    subgraph Backend
        B1[Auth Module]
        B2[Courses Module]
        B3[Topics Module]
        B4[Payments Module]
        B --> B1
        B --> B2
        B --> B3
        B --> B4
    end

    B4 --> D
````

---

# 🧪 Tecnologías

## Frontend

* Next.js 14 (App Router)
* React
* TailwindCSS
* SWR / React Query (data fetching)
* Sandbox HTML5 para contenido interactivo

## Backend

* NestJS
* Prisma ORM
* PostgreSQL
* Stripe (precios creados automáticamente por tema)
* JWT Authentication

## Infraestructura

* Docker Compose
* GitHub Actions (CI, Lint, Tests)

---

# ⚙️ Instalación Local

### 1. Clonar repo

```bash
git clone https://github.com/SUMAYOOOO/sumayo-mvp.git
cd sumayo-mvp
```

---

# 🐳 Ejecutar con Docker (recomendado)

```bash
docker compose up --build
```

Esto levanta:

* PostgreSQL
* Backend NestJS
* Frontend Next.js

---

# 🗄️ Variables de entorno

## Backend (`backend/.env`)

```
DATABASE_URL=postgresql://sumayo:sumayo123@db:5432/sumayo_db
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
JWT_SECRET=supersecret
```

## Frontend (`frontend/.env`)

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

# 💳 Stripe: precios automáticos por tema

Al crear un tema:

* Se consulta si ya tiene `stripePriceId`
* Si NO:

  * Se crea un **Producto** en Stripe
  * Se crea un **Precio** asociado
  * Se guarda en `metadata` del tema
* Devuelve el priceId para Checkout

No necesitas crear nada manualmente en Stripe.

---

# 🚀 Deploy

## 🚀 Opción 1 — Railway (más fácil)

* Crea proyecto backend
* Añade variables de entorno
* Railway detecta NestJS automáticamente

## 🚀 Opción 2 — Render

* Crear servicio web (backend)
* Crear servicio web (frontend)
* Añadir Postgres Cloud

## 🚀 Opción 3 — Docker VPS

* Ejecutar Docker Compose
* Añadir Nginx como reverse proxy

---

# 🧪 Tests

Backend:

```bash
cd backend
npm test
```

---

# 🧹 Lint

```bash
npm run lint
```

---

# 📂 Estructura del proyecto

```
sumayo-mvp/
├── backend/
│   ├── src/
│   ├── prisma/
│   └── ...
├── frontend/
│   ├── app/
│   ├── components/
│   └── ...
├── assets/
│   └── logo.svg
├── docker-compose.yml
└── README.md
```

---

# 📌 Roadmap

* [ ] Sistema de medallas y gamificación
* [ ] Notificaciones push
* [ ] Dashboard de progreso
* [ ] Sandbox mejorado (Python/JS interactivo)
* [ ] App móvil (React Native)

---

# 📝 Licencia

MIT License — Libre para usar y modificar.

---

```




```

---


```
