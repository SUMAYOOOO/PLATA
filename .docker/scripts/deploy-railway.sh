#!/bin/bash

echo "🚀 Ejecutando validación pre-despliegue..."
bash .docker/scripts/pre-deploy-validate.sh

echo "🚀 Desplegando en Railway..."
railway up
