# ==================== BUILD STAGE ====================
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

# Instalar dependencias y construir
RUN npm ci --only=production && npm cache clean --force

# Copiar código fuente
COPY src ./src

# Generar Prisma Client y compilar
RUN npx prisma generate
RUN npm run build

# ==================== PRODUCTION STAGE ====================
FROM node:18-alpine AS production

# Instalar herramientas de sistema necesarias
RUN apk add --no-cache curl

WORKDIR /usr/src/app

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Copiar desde builder
COPY --from=builder --chown=nestjs:nodejs /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /usr/src/app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /usr/src/app/package.json ./
COPY --from=builder --chown=nestjs:nodejs /usr/src/app/prisma ./prisma

# Cambiar a usuario no-root
USER nestjs

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:3001/api/health || exit 1

# Exponer puerto
EXPOSE 3001

# Usar script estandarizado
CMD ["npm", "run", "start:docker"]
