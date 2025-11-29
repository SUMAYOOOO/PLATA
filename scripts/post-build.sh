#!/bin/sh
echo "🚀 Running post-build steps..."
echo "📦 Running database migrations..."
npx prisma migrate deploy
echo "🔍 Testing application startup..."
timeout 30s node dist/main || exit 1
echo "✅ Post-build steps completed successfully"
