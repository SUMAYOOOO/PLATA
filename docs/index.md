---
title: SUMAYÕ – Plataforma Educativa Interactiva
---

<p align="center">
  <img src="../assets/logo.svg" width="260"/>
</p>

# 🧙‍♀️ SUMAYÕ – Aprende Matemáticas y Programación Jugando

Bienvenido a la plataforma educativa que combina matemáticas, programación y lógica con contenido interactivo y temas cortos que se entienden de forma clara y rápida.

---

## 🚀 ¿Qué ofrece SUMAYÕ?

- Cursos interactivos con micro-temas  
- Sandbox HTML5 con ejemplos ejecutables  
- Sistema de gamificación  
- Progreso por usuario  
- Pagos con Stripe (por tema o suscripción)  
- Dashboard personalizado  

---

## 🧩 Arquitectura

```mermaid
flowchart TD
  A[Next.js Frontend] --> B[NestJS Backend]
  B --> C[(PostgreSQL)]
  B --> D[Stripe]
