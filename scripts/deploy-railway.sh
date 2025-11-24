#!/bin/bash

echo "🚀 Iniciando deploy de SUMAYÕ a Railway..."

# Backend
cd backend
railway up --service sumayo-backend

# Frontend
cd ../frontend
railway up --service sumayo-frontend

echo "✨ Deploy completado con éxito"
