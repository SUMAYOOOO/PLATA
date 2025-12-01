#!/bin/bash
set -e

echo "🔍 Validación pre-despliegue Railway"

# 1. Verificar estructura de archivos
required_files=("Dockerfile.prod" "package.json" "tsconfig.json" "prisma/schema.prisma")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ ERROR: $file no encontrado"
        exit 1
    fi
done

# 2. Verificar variables de entorno requeridas
echo "📋 Variables de entorno requeridas:"
echo "   - DATABASE_URL (Railway lo proporciona automáticamente para servicios PostgreSQL)"
echo "   - JWT_SECRET (Debes configurarla en Railway Dashboard)"
echo "   - STRIPE_SECRET_KEY (Opcional para pagos)"

# 3. Validar TypeScript
echo "⚡ Validando TypeScript..."
npx tsc --noEmit --project tsconfig.json

# 4. Validar estructura de Prisma
echo "🗄️  Validando esquema Prisma..."
npx prisma validate

# 5. Ejecutar tests si existen
if [ -f "jest.config.js" ] || [ -f "jest.config.ts" ]; then
    echo "🧪 Ejecutando tests..."
    npm test -- --passWithNoTests
fi

# 6. Build de prueba
echo "🏗️  Construyendo aplicación..."
npm run build

# 7. Verificar salida del build
if [ ! -f "dist/main.js" ]; then
    echo "❌ ERROR: dist/main.js no generado"
    exit 1
fi

echo "✅ Validación completada exitosamente"
echo ""
echo "🚀 Para desplegar:"
echo "   1. Sube cambios a GitHub"
echo "   2. Railway detectará cambios automáticamente"
echo "   3. O ejecuta: railway up"
