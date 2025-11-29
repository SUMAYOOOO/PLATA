FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY backend/package*.json ./backend/

# Instalar todas las dependencias
RUN npm install

# Copiar código fuente
COPY . .

WORKDIR /app/backend

# Generar Prisma Client
RUN npx prisma generate

# Compilar TypeScript
RUN npm run build

# Stage de producción
FROM node:18-alpine AS production

WORKDIR /app

# Copiar solo lo necesario desde el stage builder
COPY --from=builder /app/backend/package*.json ./
COPY --from=builder /app/backend/node_modules ./node_modules
COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/prisma ./prisma

# Instalar solo producción en caso necesario
# RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/main"]
