#!/bin/bash

echo "🚀 Iniciando deploy de SUMAYÕ a Railway..."

# Backend
cd backend
railway up --service sumayo-backend

# Frontend
cd ../frontend
railway up --service sumayo-frontend

echo "✨ Deploy completado con éxito"
chmod +x scripts/deploy-railway.sh
name: Deploy to Railway

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Railway
        run: npm i -g railway

      - name: Run script
        run: bash scripts/deploy-railway.sh


